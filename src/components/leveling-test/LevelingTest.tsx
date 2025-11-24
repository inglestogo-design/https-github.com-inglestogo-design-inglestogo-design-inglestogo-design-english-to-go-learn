import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ReadingSection } from "./sections/ReadingSection";
import { ListeningSection } from "./sections/ListeningSection";
import { VocabularySection } from "./sections/VocabularySection";
import { SpeakingSection } from "./sections/SpeakingSection";
import { WritingSection } from "./sections/WritingSection";
import { TestResults } from "./TestResults";
import { Zap } from "lucide-react";

export type TestSection = "intro" | "reading" | "listening" | "vocabulary" | "speaking" | "writing" | "results";

export interface TestScores {
  reading: number;
  listening: number;
  vocabulary: number;
  speaking: number;
  writing: number;
}

export const LevelingTest = () => {
  const [currentSection, setCurrentSection] = useState<TestSection>("intro");
  const [scores, setScores] = useState<TestScores>({
    reading: 0,
    listening: 0,
    vocabulary: 0,
    speaking: 0,
    writing: 0,
  });

  const sections: TestSection[] = ["reading", "listening", "vocabulary", "speaking", "writing"];
  const currentIndex = sections.indexOf(currentSection);
  const progress = currentSection === "intro" ? 0 : currentSection === "results" ? 100 : ((currentIndex + 1) / sections.length) * 100;

  const handleSectionComplete = (section: keyof TestScores, score: number) => {
    setScores(prev => ({ ...prev, [section]: score }));
    const nextIndex = currentIndex + 1;
    if (nextIndex < sections.length) {
      setCurrentSection(sections[nextIndex]);
    } else {
      setCurrentSection("results");
    }
  };

  const startTest = () => {
    setCurrentSection("reading");
  };

  if (currentSection === "intro") {
    return (
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Zap className="w-16 h-16 text-primary" />
          </div>
          <CardTitle className="text-3xl mb-2">
            Teste de Nivelamento / Leveling Test
          </CardTitle>
          <p className="text-muted-foreground">
            Descubra seu nível de energia no inglês! / Discover your English energy level!
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">O que você vai fazer / What you'll do:</h3>
            <ul className="space-y-2 text-sm">
              <li>📖 <strong>Leitura / Reading</strong> - Compreensão de textos</li>
              <li>🎧 <strong>Escuta / Listening</strong> - Compreensão auditiva</li>
              <li>📚 <strong>Vocabulário / Vocabulary</strong> - Gramática e palavras</li>
              <li>🎤 <strong>Fala / Speaking</strong> - Produção oral</li>
              <li>✍️ <strong>Escrita / Writing</strong> - Produção escrita</li>
            </ul>
          </div>

          <div className="bg-accent/50 p-4 rounded-lg space-y-2">
            <h3 className="font-semibold">Níveis de Energia / Energy Levels:</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>🛌 <strong>Chill</strong> - Começando devagar</div>
              <div>😴 <strong>Awake</strong> - Despertando</div>
              <div>🚶 <strong>Active</strong> - Em movimento</div>
              <div>⚡ <strong>Charged</strong> - Energia alta</div>
              <div>💪 <strong>Powerful</strong> - Cheio de domínio</div>
              <div>🔥 <strong>Epic</strong> - Mestre</div>
              <div>👑 <strong>Legendary</strong> - Nível lendário</div>
            </div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              ⏱️ Tempo estimado: 15-20 minutos / Estimated time: 15-20 minutes
            </p>
            <Button size="lg" onClick={startTest} className="w-full">
              Começar Teste / Start Test
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (currentSection === "results") {
    return <TestResults scores={scores} />;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Seção {currentIndex + 1} de {sections.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} />
          </div>
        </CardHeader>
      </Card>

      {currentSection === "reading" && (
        <ReadingSection onComplete={(score) => handleSectionComplete("reading", score)} />
      )}
      {currentSection === "listening" && (
        <ListeningSection onComplete={(score) => handleSectionComplete("listening", score)} />
      )}
      {currentSection === "vocabulary" && (
        <VocabularySection onComplete={(score) => handleSectionComplete("vocabulary", score)} />
      )}
      {currentSection === "speaking" && (
        <SpeakingSection onComplete={(score) => handleSectionComplete("speaking", score)} />
      )}
      {currentSection === "writing" && (
        <WritingSection onComplete={(score) => handleSectionComplete("writing", score)} />
      )}
    </div>
  );
};
