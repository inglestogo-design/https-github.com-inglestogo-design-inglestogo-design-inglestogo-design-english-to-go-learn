import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
      toast.error("Incorreto. Tente novamente!");
    }
    
    setTimeout(() => {
      if (isCorrect) {
        setQuizAnswered(true);
      } else {
        setShowFeedback(false);
        setSelectedOption(null);
      }
    }, 1500);
  };

  const renderIntro = () => (
    <div className="space-y-5">
      <div className="text-center space-y-3">
        <h2 className="text-xl md:text-2xl font-bold text-primary break-words">
          {lesson.title}
        </h2>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <p className="text-sm text-muted-foreground break-words">
            {lesson.titlePronunciation}
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => playAudio(lesson.title.split('/')[1]?.trim() || lesson.title)}
            className="h-8 w-8 p-0 flex-shrink-0"
          >
            <Volume2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold text-sm mb-2">Objetivo / Goal:</h3>
          <p className="text-sm text-foreground break-words">{lesson.objective}</p>
        </CardContent>
      </Card>

      <Button onClick={() => setStep("content")} className="w-full" size="lg">
        Começar / Start
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );

  const renderContent = () => {
    if (lesson.level === 1) {
      return (
        <div className="space-y-5">
          <h3 className="text-lg font-bold text-center">Conteúdo Principal</h3>
          
          <Tabs defaultValue="portuguese" className="w-full">
            <TabsList className="grid w-full grid-cols-2 h-auto">
              <TabsTrigger value="portuguese" className="text-xs sm:text-sm py-2">
                🇧🇷 Português
              </TabsTrigger>
              <TabsTrigger value="english" className="text-xs sm:text-sm py-2">
                🇺🇸 English
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="portuguese" className="space-y-3 mt-4">
              <div className="bg-primary/5 p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  📚 Primeiro entenda o conteúdo em português
                </p>
              </div>
              {lesson.content.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-primary text-sm break-words">
                          {item.portuguese}
                        </p>
                        <p className="text-xs text-muted-foreground break-words mt-1">
                          {item.english}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => playAudio(item.english)}
                        className="h-8 w-8 p-0 flex-shrink-0"
                      >
                        <Volume2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground italic break-words">
                      /{item.pronunciation}/
                    </p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="english" className="space-y-3 mt-4">
              <div className="bg-secondary/10 p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  🎯 Agora pratique lendo em inglês
                </p>
              </div>
              {lesson.content.map((item, index) => (
                <Card key={index} className="border-primary/20">
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-primary text-sm break-words">
                          {item.english}
                        </p>
                        <p className="text-xs text-muted-foreground italic break-words mt-1">
                          /{item.pronunciation}/
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => playAudio(item.english)}
                        className="h-8 w-8 p-0 flex-shrink-0"
                      >
                        <Volume2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          <Button onClick={() => setStep("quiz")} className="w-full" size="lg">
            Próximo: Quiz
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      );
    }

    return (
      <div className="space-y-5">
        <h3 className="text-lg font-bold text-center">Conteúdo Principal</h3>
        
        <div className="space-y-3">
          {lesson.content.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-4 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm break-words">{item.portuguese}</p>
                    <p className="text-sm text-primary break-words">{item.english}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => playAudio(item.english)}
                    className="h-8 w-8 p-0 flex-shrink-0"
                  >
                    <Volume2 className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground italic break-words">
                  /{item.pronunciation}/
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button onClick={() => setStep("quiz")} className="w-full" size="lg">
          Próximo: Quiz
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    );
  };

  const renderQuiz = () => (
    <div className="space-y-5">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-bold">Quiz Rápido</h3>
        <p className="text-sm break-words">{lesson.quiz.question}</p>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <p className="text-xs text-muted-foreground italic break-words">
            {lesson.quiz.questionPronunciation}
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => playAudio(lesson.quiz.question.split('/')[1]?.trim() || lesson.quiz.question)}
            className="h-7 w-7 p-0 flex-shrink-0"
          >
            <Volume2 className="w-3 h-3" />
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        {lesson.quiz.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrect = option.correct;
          const showResult = showFeedback && isSelected;

          return (
            <Card
              key={index}
              className={`cursor-pointer transition-all ${
                showResult
                  ? isCorrect
                    ? "bg-green-500/20 border-green-500"
                    : "bg-red-500/20 border-red-500"
                  : "hover:bg-accent"
              } ${quizAnswered && !isCorrect ? "opacity-50" : ""}`}
              onClick={() => handleOptionSelect(index)}
            >
              <CardContent className="p-3">
                <div className="flex items-center gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium break-words">
                      {option.portuguese} / {option.english}
                    </p>
                    <p className="text-xs text-muted-foreground italic break-words">
                      {option.pronunciation}
                    </p>
                  </div>
                  {showResult && (
                    isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {quizAnswered && (
        <Button onClick={() => setStep("summary")} className="w-full" size="lg">
          Ver Resumo
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      )}
    </div>
  );

  const renderSummary = () => (
    <div className="space-y-5 text-center">
      <Award className="w-14 h-14 mx-auto text-primary" />
      <h3 className="text-xl font-bold">Parabéns!</h3>
      
      <Card>
        <CardContent className="p-4">
          <h4 className="font-semibold text-sm mb-2">Resumo:</h4>
          <p className="text-sm break-words">{lesson.summary}</p>
          {lesson.summaryPronunciation && (
            <p className="text-xs text-muted-foreground italic mt-2 break-words">
              {lesson.summaryPronunciation}
            </p>
          )}
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button onClick={onBack} variant="outline" className="flex-1">
          Voltar
        </Button>
        <Button onClick={onComplete} className="flex-1">
          Concluir
        </Button>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-4">
      {step === "intro" && renderIntro()}
      {step === "content" && renderContent()}
      {step === "quiz" && renderQuiz()}
      {step === "summary" && renderSummary()}
    </div>
  );
};
