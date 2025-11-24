import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { BookText } from "lucide-react";

interface VocabularySectionProps {
  onComplete: (score: number) => void;
}

const questions = [
  {
    type: "multiple-choice",
    question: "I _____ to school every day.",
    options: ["go", "goes", "going", "gone"],
    correct: 0,
    level: "basic"
  },
  {
    type: "fill-blank",
    question: "She _____ been working here for five years. (have/has)",
    answer: "has",
    level: "intermediate"
  },
  {
    type: "multiple-choice",
    question: "The committee _____ its decision yesterday.",
    options: ["has announced", "have announced", "announced", "announcing"],
    correct: 2,
    level: "intermediate"
  },
  {
    type: "multiple-choice",
    question: "Which word is a synonym for 'ubiquitous'?",
    options: ["Rare", "Omnipresent", "Ancient", "Temporary"],
    correct: 1,
    level: "advanced"
  },
  {
    type: "fill-blank",
    question: "If I _____ known, I would have told you. (had/have)",
    answer: "had",
    level: "advanced"
  }
];

export const VocabularySection = ({ onComplete }: VocabularySectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | string)[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [textAnswer, setTextAnswer] = useState<string>("");

  const handleNext = () => {
    const question = questions[currentQuestion];
    let answer: number | string;
    let isCorrect = false;

    if (question.type === "multiple-choice") {
      answer = parseInt(selectedAnswer);
      isCorrect = answer === question.correct;
    } else {
      answer = textAnswer.toLowerCase().trim();
      isCorrect = answer === question.answer;
    }

    const newAnswers = [...answers, isCorrect ? 1 : 0];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setTextAnswer("");
    } else {
      const correctAnswers = newAnswers.filter(ans => ans === 1).length;
      const score = (correctAnswers / questions.length) * 100;
      onComplete(score);
    }
  };

  const question = questions[currentQuestion];
  const canProceed = question.type === "multiple-choice" ? selectedAnswer !== "" : textAnswer.trim() !== "";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookText className="w-6 h-6" />
          Vocabulário & Gramática / Vocabulary & Grammar
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Questão {currentQuestion + 1} de {questions.length}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <p className="font-medium text-lg">{question.question}</p>

          {question.type === "multiple-choice" ? (
            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
              <div className="space-y-3">
                {question.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="answer">Sua resposta / Your answer:</Label>
              <Input
                id="answer"
                value={textAnswer}
                onChange={(e) => setTextAnswer(e.target.value)}
                placeholder="Digite sua resposta..."
                className="text-lg"
              />
            </div>
          )}
        </div>

        <Button 
          onClick={handleNext} 
          disabled={!canProceed}
          className="w-full"
        >
          {currentQuestion < questions.length - 1 ? "Próxima / Next" : "Finalizar Seção / Finish Section"}
        </Button>
      </CardContent>
    </Card>
  );
};
