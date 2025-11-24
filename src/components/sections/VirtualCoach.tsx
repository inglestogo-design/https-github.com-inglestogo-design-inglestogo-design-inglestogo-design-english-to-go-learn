import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Send, Bot, User, Sparkles, Lock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const VirtualCoach = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [freeMessagesLeft, setFreeMessagesLeft] = useState(3);
  const [isPremium, setIsPremium] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { isPremium: userIsPremium } = useAuth();

  useEffect(() => {
    // Sync premium status
    setIsPremium(userIsPremium);
    
    // Load free messages count from localStorage
    const stored = localStorage.getItem("coachFreeMessages");
    if (stored) {
      setFreeMessagesLeft(parseInt(stored));
    } else {
      setFreeMessagesLeft(3); // Default to 3
      localStorage.setItem("coachFreeMessages", "3");
    }

    // Add welcome message
    if (messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content: `👋 **Olá! Welcome!**

Sou seu **Coach Virtual** de inglês! 🎯

**Como funciona:**
1. Escreva qualquer frase em inglês ✍️
2. Eu corrijo automaticamente com cores e explicações 🎨
3. Você aprende praticando! 💪

**Você tem 3 mensagens grátis** para testar! 🎁

Pode começar! Try writing something in English... 🚀`,
        },
      ]);
    }
  }, [userIsPremium]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) {
      toast({
        title: "Digite algo / Type something",
        description: "Por favor, escreva uma frase em inglês / Please write something in English",
        variant: "destructive",
      });
      return;
    }

    if (!isPremium && freeMessagesLeft <= 0) {
      toast({
        title: "🔒 Mensagens grátis esgotadas / Free messages used",
        description: "Assine premium para continuar praticando! / Subscribe to premium to continue!",
        variant: "destructive",
      });
      return;
    }

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("virtual-coach-chat", {
        body: {
          message: input,
          conversationHistory: messages,
        },
      });

      if (error) {
        console.error("Error calling edge function:", error);
        throw error;
      }

      if (!data || !data.response) {
        throw new Error("No response from AI");
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // Decrease free messages if not premium
      if (!isPremium) {
        const newCount = freeMessagesLeft - 1;
        setFreeMessagesLeft(newCount);
        localStorage.setItem("coachFreeMessages", newCount.toString());

        if (newCount === 3) {
          toast({
            title: "⚠️ Só restam 3 mensagens grátis! / Only 3 free messages left!",
            description: "Consider upgrading to premium! 🚀",
          });
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Erro / Error",
        description: "Não foi possível enviar a mensagem. Tente novamente. / Could not send message. Try again.",
        variant: "destructive",
      });
      // Remove user message on error
      setMessages((prev) => prev.filter((msg) => msg !== userMessage));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Coach Virtual
            </h1>
            <Sparkles className="h-8 w-8 text-primary animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground">
            Seu treinador de inglês com IA / Your AI English Coach 🎯
          </p>
        </div>

        {/* Free Messages Counter */}
        {!isPremium && (
          <Card className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">
                  Mensagens grátis restantes / Free messages left:
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">{freeMessagesLeft}</span>
                <span className="text-muted-foreground">/ 3</span>
              </div>
            </div>
            {freeMessagesLeft <= 3 && (
              <p className="mt-2 text-sm text-muted-foreground text-center">
                ⚠️ Assine premium para mensagens ilimitadas! / Subscribe for unlimited messages!
              </p>
            )}
          </Card>
        )}

        {/* Chat Area */}
        <Card className="h-[500px] flex flex-col bg-card/50 backdrop-blur-sm border-2">
          <ScrollArea className="flex-1 p-6" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 ${
                    msg.role === "assistant" ? "justify-start" : "justify-end"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                  )}
                  <div
                    className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                      msg.role === "assistant"
                        ? "bg-primary/10 text-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <div
                      className="text-sm md:text-base whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{ __html: msg.content }}
                    />
                  </div>
                  {msg.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <User className="h-5 w-5 text-secondary" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-primary animate-pulse" />
                  </div>
                  <div className="rounded-2xl px-4 py-3 bg-primary/10">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-100" />
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 border-t bg-background/50 backdrop-blur-sm">
            <div className="flex gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Escreva em inglês... / Write in English... ✍️"
                className="min-h-[60px] resize-none"
                disabled={isLoading || (!isPremium && freeMessagesLeft <= 0)}
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading || !input.trim() || (!isPremium && freeMessagesLeft <= 0)}
                size="lg"
                className="px-6"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Pressione Enter para enviar / Press Enter to send ⏎
            </p>
          </div>
        </Card>

        {/* Tips Card */}
        <Card className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10">
          <h3 className="font-bold text-lg mb-3 text-foreground">💡 Dicas / Tips:</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>✓ Escreva frases simples no início / Start with simple sentences</li>
            <li>✓ Pratique diariamente / Practice daily</li>
            <li>✓ Preste atenção nas explicações / Pay attention to explanations</li>
            <li>✓ Tente corrigir os mesmos erros / Try to fix the same mistakes</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};
