import { useState, useRef, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";

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

export const useAudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  const { toast } = useToast();

  const startRecording = useCallback(async () => {
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

      const mimeType = pickAudioMimeType();
      const mediaRecorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      setAudioBlob(null);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const finalMime = mediaRecorder.mimeType || mimeType;
        const blob = new Blob(audioChunksRef.current, { type: finalMime || undefined });
        setAudioBlob(blob);

        const url = URL.createObjectURL(blob);
        setAudioURL(url);

        // Stop all tracks to release microphone
        streamRef.current?.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
      toast({
        title: "Erro / Error",
        description: "Não foi possível acessar o microfone. / Could not access microphone.",
        variant: "destructive",
      });
    }
  }, [toast]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && isRecording) {
      try {
        mediaRecorderRef.current.stop();
      } finally {
        setIsRecording(false);
      }
    }
  }, [isRecording]);

  const playRecording = useCallback(() => {
    if (audioURL) {
      const audio = new Audio(audioURL);
      audio.play();
    }
  }, [audioURL]);

  const clearRecording = useCallback(() => {
    if (audioURL) {
      URL.revokeObjectURL(audioURL);
      setAudioURL(null);
    }
    setAudioBlob(null);
  }, [audioURL]);

  return {
    isRecording,
    audioURL,
    audioBlob,
    startRecording,
    stopRecording,
    playRecording,
    clearRecording,
  };
};

