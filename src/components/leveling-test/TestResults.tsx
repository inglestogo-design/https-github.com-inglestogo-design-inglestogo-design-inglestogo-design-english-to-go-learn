import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TestScores } from "./LevelingTest";
import { DonationSection } from "./DonationSection";
import { Zap, TrendingUp, AlertCircle, Lightbulb } from "lucide-react";

interface TestResultsProps {
  scores: TestScores;
}

const getLevelInfo = (avgScore: number) => {
  if (avgScore < 20) return {
    level: "0/Iniciante",
    vibe: "Chill",
    emoji: "🛌",
    description: "Começando devagar",
    message: "Você está no início da sua jornada! Não se preocupe, todo expert já foi iniciante.",
    nextSteps: "Foque em vocabulário básico, frases simples e pratique todos os dias por 10-15 minutos.",
    strengths: "Você deu o primeiro passo, e isso já é incrível!",
    weaknesses: "Precisa construir uma base sólida de vocabulário e gramática básica.",
    tips: ["Aprenda 5 palavras novas por dia", "Pratique frases simples", "Assista vídeos com legendas"]
  };
  
  if (avgScore < 35) return {
    level: "A1",
    vibe: "Awake",
    emoji: "😴",
    description: "Despertando",
    message: "Você está começando a entender o inglês! Continue assim.",
    nextSteps: "Pratique conversações básicas, aprenda mais verbos no presente e passado.",
    strengths: "Você já reconhece palavras e frases básicas do dia a dia.",
    weaknesses: "Ainda tem dificuldade com tempos verbais e construção de frases.",
    tips: ["Pratique Present Simple e Past Simple", "Converse com IA ou apps", "Leia textos curtos"]
  };

  if (avgScore < 50) return {
    level: "A2",
    vibe: "Active",
    emoji: "🚶",
    description: "Em movimento",
    message: "Você já consegue se comunicar em situações básicas! Está progredindo bem.",
    nextSteps: "Expanda seu vocabulário, pratique escrita e comece a pensar em inglês.",
    strengths: "Consegue manter conversas simples e entender textos básicos.",
    weaknesses: "Vocabulário ainda limitado e dificuldade com expressões idiomáticas.",
    tips: ["Escreva um diário em inglês", "Assista séries em inglês", "Pratique speaking 15min/dia"]
  };

  if (avgScore < 65) return {
    level: "B1",
    vibe: "Charged",
    emoji: "⚡",
    description: "Energia alta",
    message: "Parabéns! Você tem um inglês intermediário sólido.",
    nextSteps: "Foque em fluência, aprenda phrasal verbs e pratique conversações mais complexas.",
    strengths: "Consegue se expressar bem em várias situações do dia a dia.",
    weaknesses: "Ainda comete erros gramaticais e precisa expandir vocabulário avançado.",
    tips: ["Leia artigos e notícias", "Participe de conversation clubs", "Aprenda phrasal verbs"]
  };

  if (avgScore < 80) return {
    level: "B2",
    vibe: "Powerful",
    emoji: "💪",
    description: "Cheio de domínio",
    message: "Impressionante! Você domina o inglês intermediário-avançado.",
    nextSteps: "Refine sua gramática avançada, aprenda expressões nativas e pratique textos acadêmicos.",
    strengths: "Comunica-se com fluência e confiança na maioria das situações.",
    weaknesses: "Alguns detalhes de gramática avançada e expressões idiomáticas complexas.",
    tips: ["Leia livros em inglês", "Escreva ensaios", "Assista palestras TED"]
  };

  if (avgScore < 90) return {
    level: "C1",
    vibe: "Epic",
    emoji: "🔥",
    description: "Mestre",
    message: "Você é praticamente fluente! Seu inglês é avançado.",
    nextSteps: "Polir detalhes de pronúncia, aprender vocabulário técnico e se preparar para C2.",
    strengths: "Domina estruturas complexas e se expressa com naturalidade.",
    weaknesses: "Pequenas nuances de linguagem nativa e vocabulário muito especializado.",
    tips: ["Leia literatura clássica", "Escreva profissionalmente", "Pratique debates"]
  };

  return {
    level: "C2",
    vibe: "Legendary",
    emoji: "👑",
    description: "Nível lendário",
    message: "Incrível! Você atingiu o nível máximo de proficiência!",
    nextSteps: "Mantenha seu nível alto com leitura avançada e conversações naturais.",
    strengths: "Domínio completo do idioma em todos os contextos.",
    weaknesses: "Continue praticando para manter a fluência.",
    tips: ["Mentore outros estudantes", "Leia textos acadêmicos", "Mantenha contato com nativos"]
  };
};

export const TestResults = ({ scores }: TestResultsProps) => {
  const avgScore = (scores.reading + scores.listening + scores.vocabulary + scores.speaking + scores.writing) / 5;
  const levelInfo = getLevelInfo(avgScore);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="border-2 border-primary">
        <CardHeader className="text-center pb-4">
          <div className="text-6xl mb-4">{levelInfo.emoji}</div>
          <CardTitle className="text-4xl mb-2">
            {levelInfo.vibe}
          </CardTitle>
          <p className="text-xl text-muted-foreground">
            Nível {levelInfo.level} - {levelInfo.description}
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-accent/50 p-4 rounded-lg text-center">
            <p className="text-lg">{levelInfo.message}</p>
          </div>

          <div className="grid grid-cols-5 gap-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Leitura</p>
              <p className="text-2xl font-bold">{Math.round(scores.reading)}%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Escuta</p>
              <p className="text-2xl font-bold">{Math.round(scores.listening)}%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Vocabulário</p>
              <p className="text-2xl font-bold">{Math.round(scores.vocabulary)}%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Fala</p>
              <p className="text-2xl font-bold">{Math.round(scores.speaking)}%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Escrita</p>
              <p className="text-2xl font-bold">{Math.round(scores.writing)}%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Como Avançar / How to Advance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{levelInfo.nextSteps}</p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <Zap className="w-5 h-5" />
              Pontos Fortes / Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{levelInfo.strengths}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-600">
              <AlertCircle className="w-5 h-5" />
              A Melhorar / To Improve
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{levelInfo.weaknesses}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Dicas Personalizadas / Personalized Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {levelInfo.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <DonationSection />

      <div className="text-center">
        <Button size="lg" onClick={() => window.location.reload()}>
          Voltar ao Dashboard / Back to Dashboard
        </Button>
      </div>
    </div>
  );
};
