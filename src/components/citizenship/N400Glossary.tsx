import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { n400Glossary, categories } from "@/data/n400GlossaryData";
import { Search, Volume2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export const N400Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const filteredQuestions = n400Glossary.filter(q => {
    const matchesSearch = 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.questionPronunciation.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || q.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-4">
      {/* Search */}
      <Card>
        <CardContent className="p-4 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar pergunta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Categories */}
          <ScrollArea className="w-full">
            <div className="flex gap-2 pb-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer whitespace-nowrap flex-shrink-0"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </ScrollArea>

          <p className="text-xs text-muted-foreground">
            {filteredQuestions.length} perguntas encontradas
          </p>
        </CardContent>
      </Card>

      {/* Questions List */}
      <ScrollArea className="h-[500px]">
        <div className="space-y-3 pr-4">
          {filteredQuestions.map((question) => (
            <Card key={question.id} className="overflow-hidden">
              <CardContent className="p-4 space-y-3">
                {/* Header */}
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline" className="text-xs">#{question.id}</Badge>
                  {question.category && (
                    <Badge variant="secondary" className="text-xs">{question.category}</Badge>
                  )}
                </div>

                {/* Question */}
                <div className="space-y-1">
                  <div className="flex items-start gap-2">
                    <p className="flex-1 text-sm font-medium text-primary break-words leading-relaxed">
                      Q: {question.question}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => playAudio(question.question)}
                      className="flex-shrink-0 h-8 w-8 p-0"
                    >
                      <Volume2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground italic break-words">
                    {question.questionPronunciation}
                  </p>
                </div>

                {/* Answer */}
                <div className="bg-green-500/10 p-3 rounded-lg space-y-1">
                  <div className="flex items-start gap-2">
                    <p className="flex-1 text-sm font-medium text-green-700 dark:text-green-400 break-words leading-relaxed">
                      A: {question.answer}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => playAudio(question.answer)}
                      className="flex-shrink-0 h-8 w-8 p-0"
                    >
                      <Volume2 className="w-4 h-4 text-green-600" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground italic break-words">
                    {question.answerPronunciation}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>

      {filteredQuestions.length === 0 && (
        <Card className="p-8 text-center">
          <p className="text-sm text-muted-foreground">
            Nenhuma pergunta encontrada.
          </p>
        </Card>
      )}
    </div>
  );
};
