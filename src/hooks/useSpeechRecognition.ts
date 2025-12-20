import { useState, useEffect, useCallback, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type RecognitionMode = "native" | "server";

const pickAudioMimeType = () => {
  if (typeof MediaRecorder === "undefined") return undefined;

  const candidates = [
    // iOS Safari typically supports mp4/aac
    "audio/mp4",
    // Chrome/Android
    "audio/webm;codecs=opus",
    "audio/webm",
  ];

  for (const t of candidates) {
    if (MediaRecorder.isTypeSupported?.(t)) return t;
  }

  return undefined;
};

const fileExtFromMime = (mime?: string) => {
  if (!mime) return "dat";
  if (mime.includes("mp4")) return "mp4";
  if (mime.includes("webm")) return "webm";
  if (mime.includes("ogg")) return "ogg";
  return "dat";
};

export const useSpeechRecognition = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [recognition, setRecognition] = useState<any>(null);
  const [mode, setMode] = useState<RecognitionMode>("native");
  const { toast } = useToast();

  const streamRef = useRef<MediaStream | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    const hasNative =
      typeof window !== "undefined" &&
      ("webkitSpeechRecognition" in window || "SpeechRecognition" in window);

    if (hasNative) {
      const SR = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognitionInstance = new SR();

      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = "en-US";
      recognitionInstance.maxAlternatives = 1;

      recognitionInstance.onresult = (event: any) => {
        const t = event.results?.[0]?.[0]?.transcript ?? "";
        setTranscript(t);
        setIsRecording(false);
      };

      recognitionInstance.onerror = (event: any) => {
        console.error("Speech recognition error:", event?.error ?? event);
        setIsRecording(false);
        toast({
          title: "Erro / Error",
          description:
            "Não foi possível gravar. Verifique as permissões do microfone. / Could not record. Check microphone permissions.",
          variant: "destructive",
        });
      };

      recognitionInstance.onend = () => {
        setIsRecording(false);
      };

      setRecognition(recognitionInstance);
      setMode("native");
      return;
    }

    // Fallback for iPad/iOS Safari: server STT using real mic recording.
    setRecognition(null);
    setMode("server");
  }, [toast]);

  const startRecording = useCallback(async () => {
    setTranscript("");

    // Native speech recognition path
    if (mode === "native") {
      if (!recognition) {
        toast({
          title: "Não suportado / Not supported",
          description: "Seu navegador não suporta reconhecimento de voz. / Your browser does not support speech recognition.",
          variant: "destructive",
        });
        return;
      }

      setIsRecording(true);
      recognition.start();
      return;
    }

    // Server STT fallback path
    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        toast({
          title: "Não suportado / Not supported",
          description: "Seu navegador não suporta microfone. / Your browser does not support microphone.",
          variant: "destructive",
        });
        return;
      }

      if (typeof MediaRecorder === "undefined") {
        toast({
          title: "Não suportado / Not supported",
          description: "Seu iPad não suporta gravação de áudio neste modo. / Audio recording is not supported on this iPad.",
          variant: "destructive",
        });
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });

      streamRef.current = stream;
      chunksRef.current = [];

      const mimeType = pickAudioMimeType();
      const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
      recorderRef.current = recorder;

      recorder.ondataavailable = (e) => {
        if (e.data?.size) chunksRef.current.push(e.data);
      };

      recorder.onstop = async () => {
        try {
          const finalMime = recorder.mimeType || mimeType;
          const blob = new Blob(chunksRef.current, { type: finalMime || undefined });

          const fd = new FormData();
          fd.append("audio", blob, `speech.${fileExtFromMime(finalMime)}`);

          const { data, error } = await supabase.functions.invoke("elevenlabs-transcribe", {
            body: fd as any,
          });

          if (error) throw error;
          setTranscript(data?.text ?? "");
        } catch (err) {
          console.error("STT fallback error:", err);
          toast({
            title: "Erro / Error",
            description: "Não foi possível transcrever sua fala no iPad. / Could not transcribe on iPad.",
            variant: "destructive",
          });
        } finally {
          streamRef.current?.getTracks().forEach((t) => t.stop());
          streamRef.current = null;
          recorderRef.current = null;
          chunksRef.current = [];
          setIsRecording(false);
        }
      };

      recorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
      toast({
        title: "Erro / Error",
        description: "Não foi possível acessar o microfone. / Could not access microphone.",
        variant: "destructive",
      });
      setIsRecording(false);
    }
  }, [mode, recognition, toast]);

  const stopRecording = useCallback(() => {
    if (mode === "native") {
      if (recognition && isRecording) recognition.stop();
      return;
    }

    if (recorderRef.current && isRecording) {
      try {
        recorderRef.current.stop();
      } catch (e) {
        console.error("Error stopping recorder:", e);
        setIsRecording(false);
      }
    }
  }, [mode, recognition, isRecording]);

  const isSupported =
    mode === "native" ? !!recognition : !!navigator.mediaDevices?.getUserMedia && typeof MediaRecorder !== "undefined";

  return {
    isRecording,
    transcript,
    startRecording,
    stopRecording,
    isSupported,
  };
};

