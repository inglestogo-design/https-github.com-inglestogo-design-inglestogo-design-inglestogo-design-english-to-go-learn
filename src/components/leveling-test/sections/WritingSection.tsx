import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PenTool } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WritingSectionProps {
  onComplete: (score: number) => void;
}

const prompts = [
  {
    text: "Write 3 sentences about your favorite hobby.",
    minWords: 15,
    level: "basic"
  },
  {
    text: "Write a short paragraph (5-7 sentences) describing your last vacation or a place you would like to visit.",
    minWords: 40,
    level: "intermediate"
  },
  {
    text: "Write a short essay (8-10 sentences) discussing the advantages and disadvantages of social media in modern society.",
    minWords: 80,
    level: "advanced"
  }
];

export const WritingSection = ({ onComplete }: WritingSectionProps) => {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [writings, setWritings] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");
  const { toast } = useToast();

  const wordCount = currentText.trim().split(/\s+/).filter(word => word.length > 0).length;
  const prompt = prompts[currentPrompt];

  const handleNext = () => {
    if (wordCount < prompt.minWords) {
      toast({
        title: "Texto muito curto / Text too short",
        description: `Por favor, escreva pelo menos ${prompt.minWords} palavras. / Please write at least ${prompt.minWords} words.`,
        variant: "destructive"
      });
      return;
    }

    const newWritings = [...writings, currentText];
    setWritings(newWritings);

    if (currentPrompt < prompts.length - 1) {
      setCurrentPrompt(currentPrompt + 1);
      setCurrentText("");
    } else {
      // Score based on word count and completion
      const scores = newWritings.map((text, idx) => {
        const words = text.trim().split(/\s+/).length;
        const required = prompts[idx].minWords;
        return Math.min(100, (words / required) * 100);
      });
      const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;
      onComplete(avgScore);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PenTool className="w-6 h-6" />
          Escrita / Writing
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Questão {currentPrompt + 1} de {prompts.length}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-accent/30 p-4 rounded-lg">
          <p className="font-medium">{prompt.text}</p>
          <p className="text-sm text-muted-foreground mt-2">
            Mínimo de palavras / Minimum words: {prompt.minWords}
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="writing">Sua resposta / Your answer:</Label>
          <Textarea
            id="writing"
            value={currentText}
            onChange={(e) => setCurrentText(e.target.value)}
            placeholder="Escreva sua resposta aqui... / Write your answer here..."
            className="min-h-[200px]"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Palavras / Words: {wordCount}</span>
            <span className={wordCount >= prompt.minWords ? "text-green-600" : "text-orange-600"}>
              {wordCount >= prompt.minWords ? "✓ Completo / Complete" : `Faltam ${prompt.minWords - wordCount} palavras`}
            </span>
          </div>
        </div>

        <Button 
          onClick={handleNext} 
          disabled={wordCount < prompt.minWords}
          className="w-full"
        >
          {currentPrompt < prompts.length - 1 ? "Próxima / Next" : "Finalizar Teste / Finish Test"}
        </Button>
      </CardContent>
    </Card>
  );
};
