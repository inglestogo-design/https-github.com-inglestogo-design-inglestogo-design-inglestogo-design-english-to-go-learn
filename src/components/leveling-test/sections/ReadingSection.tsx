import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { BookOpen } from "lucide-react";

interface ReadingSectionProps {
  onComplete: (score: number) => void;
}

const questions = [
  {
    text: `Read the text:\n\n"Sarah loves to read books. Every day after school, she goes to the library. She reads about animals, science, and history. Reading makes her happy."\n\nWhat does Sarah do after school?`,
    options: [
      "She plays video games",
      "She goes to the library",
      "She watches TV",
      "She sleeps"
    ],
    correct: 1,
    level: "basic"
  },
  {
    text: `Read the text:\n\n"Climate change is affecting our planet in many ways. Scientists have observed rising temperatures, melting ice caps, and more extreme weather events. Many countries are working together to reduce carbon emissions and find sustainable solutions."\n\nWhat is the main idea of this paragraph?`,
    options: [
      "Scientists like cold weather",
      "Climate change is causing problems worldwide",
      "Ice caps are getting bigger",
      "Countries don't work together"
    ],
    correct: 1,
    level: "intermediate"
  },
  {
    text: `Read the text:\n\n"Despite the ubiquitous nature of social media in contemporary society, its ramifications on interpersonal communication remain ambiguous. While proponents argue that it fosters connectivity, critics contend that it engenders superficial relationships and diminishes face-to-face interactions."\n\nWhat does "ubiquitous" most likely mean in this context?`,
    options: [
      "Rare and uncommon",
      "Present everywhere",
      "Expensive and exclusive",
      "Temporary and fleeting"
    ],
    correct: 1,
    level: "advanced"
  },
  {
    text: `Read the text:\n\n"The conference will be held next Thursday. Participants should arrive by 9 AM. Lunch will be provided at noon."\n\nTrue or False: Participants need to bring their own lunch.`,
    options: [
      "True",
      "False"
    ],
    correct: 1,
    level: "basic"
  }
];

export const ReadingSection = ({ onComplete }: ReadingSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const handleNext = () => {
    const answerIndex = parseInt(selectedAnswer);
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      const correctAnswers = newAnswers.filter((ans, idx) => ans === questions[idx].correct).length;
      const score = (correctAnswers / questions.length) * 100;
      onComplete(score);
    }
  };

  const question = questions[currentQuestion];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-6 h-6" />
          Leitura / Reading
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Questão {currentQuestion + 1} de {questions.length}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-accent/30 p-4 rounded-lg">
          <p className="whitespace-pre-line text-sm leading-relaxed">{question.text}</p>
        </div>

        <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>

        <Button 
          onClick={handleNext} 
          disabled={selectedAnswer === ""}
          className="w-full"
        >
          {currentQuestion < questions.length - 1 ? "Próxima / Next" : "Finalizar Seção / Finish Section"}
        </Button>
      </CardContent>
    </Card>
  );
};
