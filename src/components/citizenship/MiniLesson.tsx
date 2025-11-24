import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Volume2, CheckCircle2, XCircle, ArrowRight, Award } from "lucide-react";
import { CitizenshipLesson } from "@/data/citizenshipLessonsData";
import { toast } from "sonner";

interface MiniLessonProps {
  lesson: CitizenshipLesson;
  onComplete: () => void;
  onBack: () => void;
}

export const MiniLesson = ({ lesson, onComplete, onBack }: MiniLessonProps) => {
  const [step, setStep] = useState<"intro" | "content" | "quiz" | "summary">("intro");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizAnswered, setQuizAnswered] = useState(false);

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleOptionSelect = (index: number) => {
    if (quizAnswered) return;
    setSelectedOption(index);
    setShowFeedback(true);
    
    const isCorrect = lesson.quiz.options[index].correct;
    
    if (isCorrect) {
      toast.success("Correto! / Correct!");
    } else {
      toast.error("Incorreto. Tente novamente! / Incorrect. Try again!");
    }
    
    setTimeout(() => {
      if (isCorrect) {
        setQuizAnswered(true);
      } else {
        setShowFeedback(false);
        setSelectedOption(null);
      }
    }, 2000);
  };

  const renderIntro = () => (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-primary">{lesson.title}</h2>
        <div className="flex items-center justify-center gap-2">
          <p className="text-muted-foreground">{lesson.titlePronunciation}</p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => playAudio(lesson.title.split('/')[1].trim())}
          >
            <Volume2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Card className="p-6 bg-primary/5">
        <h3 className="font-semibold mb-2">Objetivo / Goal:</h3>
        <p className="text-foreground">{lesson.objective}</p>
      </Card>

      <Button onClick={() => setStep("content")} className="w-full" size="lg">
        Começar / Start
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );

  const renderContent = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-center">Conteúdo Principal / Main Content</h3>
      
      <div className="space-y-4">
        {lesson.content.map((item, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-lg font-medium">{item.portuguese}</p>
                  <p className="text-primary">{item.english}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => playAudio(item.english)}
                >
                  <Volume2 className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Pronúncia: {item.pronunciation}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <Button onClick={() => setStep("quiz")} className="w-full" size="lg">
        Próximo: Quiz / Next: Quiz
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );

  const renderQuiz = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold">Quiz Rápido / Quick Quiz</h3>
        <div className="space-y-2">
          <p className="text-lg">{lesson.quiz.question}</p>
          <div className="flex items-center justify-center gap-2">
            <p className="text-sm text-muted-foreground italic">{lesson.quiz.questionPronunciation}</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => playAudio(lesson.quiz.question.split('/')[1].trim())}
            >
              <Volume2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {lesson.quiz.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrect = option.correct;
          const showResult = showFeedback && isSelected;

          return (
            <Card
              key={index}
              className={`p-4 cursor-pointer transition-all ${
                showResult
                  ? isCorrect
                    ? "bg-green-500/20 border-green-500"
                    : "bg-red-500/20 border-red-500"
                  : "hover:bg-accent"
              } ${quizAnswered && !isCorrect ? "opacity-50" : ""}`}
              onClick={() => handleOptionSelect(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium">{option.portuguese} / {option.english}</p>
                  <p className="text-sm text-muted-foreground italic">{option.pronunciation}</p>
                </div>
                {showResult && (
                  isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-600" />
                  )
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {quizAnswered && (
        <Button onClick={() => setStep("summary")} className="w-full" size="lg">
          Ver Resumo / See Summary
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      )}
    </div>
  );

  const renderSummary = () => (
    <div className="space-y-6 text-center">
      <Award className="w-16 h-16 mx-auto text-primary" />
      <h3 className="text-2xl font-bold">Parabéns! / Congratulations!</h3>
      
      <Card className="p-6 bg-primary/5">
        <h4 className="font-semibold mb-3">Resumo / Summary:</h4>
        <p className="text-lg">{lesson.summary}</p>
        {lesson.summaryPronunciation && (
          <p className="text-sm text-muted-foreground italic mt-2">
            {lesson.summaryPronunciation}
          </p>
        )}
      </Card>

      <div className="flex gap-3">
        <Button onClick={onBack} variant="outline" className="flex-1">
          Voltar / Back
        </Button>
        <Button onClick={onComplete} className="flex-1">
          Concluir / Complete
        </Button>
      </div>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      {step === "intro" && renderIntro()}
      {step === "content" && renderContent()}
      {step === "quiz" && renderQuiz()}
      {step === "summary" && renderSummary()}
    </div>
  );
};
