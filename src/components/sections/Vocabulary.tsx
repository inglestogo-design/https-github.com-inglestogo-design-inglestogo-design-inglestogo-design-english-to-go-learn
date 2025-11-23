import { 
  Volume2, 
  Home, 
  School, 
  UtensilsCrossed, 
  Car, 
  HeartPulse, 
  Palette, 
  Trees, 
  ShirtIcon,
  PawPrint,
  Briefcase,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface VocabularyWord {
  word: string;
  pronunciation: string;
  translation: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface VocabularyTheme {
  id: string;
  title: string;
  titleEn: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
  words: VocabularyWord[];
}

export const Vocabulary = () => {
  const [openSections, setOpenSections] = useState<string[]>(["home"]);

  const toggleSection = (id: string) => {
    setOpenSections(prev => 
      prev.includes(id) 
        ? prev.filter(sectionId => sectionId !== id)
        : [...prev, id]
    );
  };

  const themes: VocabularyTheme[] = [
    {
      id: "home",
      title: "Casa",
      titleEn: "Home",
      icon: Home,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      words: [
        { word: "House", pronunciation: "ráus", translation: "casa", icon: Home },
        { word: "Door", pronunciation: "dór", translation: "porta", icon: Home },
        { word: "Window", pronunciation: "uíndou", translation: "janela", icon: Home },
        { word: "Kitchen", pronunciation: "kítchen", translation: "cozinha", icon: UtensilsCrossed },
        { word: "Bedroom", pronunciation: "bédruum", translation: "quarto", icon: Home },
        { word: "Bathroom", pronunciation: "bázruum", translation: "banheiro", icon: Home },
        { word: "Living room", pronunciation: "líving ruum", translation: "sala de estar", icon: Home },
        { word: "Garden", pronunciation: "gárden", translation: "jardim", icon: Trees },
      ]
    },
    {
      id: "school",
      title: "Escola",
      titleEn: "School",
      icon: School,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      words: [
        { word: "School", pronunciation: "skuul", translation: "escola", icon: School },
        { word: "Teacher", pronunciation: "títcher", translation: "professor(a)", icon: School },
        { word: "Student", pronunciation: "stiúdent", translation: "estudante", icon: School },
        { word: "Book", pronunciation: "búk", translation: "livro", icon: School },
        { word: "Pen", pronunciation: "pén", translation: "caneta", icon: School },
        { word: "Pencil", pronunciation: "pénsil", translation: "lápis", icon: School },
        { word: "Notebook", pronunciation: "nôutbuk", translation: "caderno", icon: School },
        { word: "Classroom", pronunciation: "klássruum", translation: "sala de aula", icon: School },
      ]
    },
    {
      id: "food",
      title: "Comida",
      titleEn: "Food",
      icon: UtensilsCrossed,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      words: [
        { word: "Food", pronunciation: "fúud", translation: "comida", icon: UtensilsCrossed },
        { word: "Water", pronunciation: "uóter", translation: "água", icon: UtensilsCrossed },
        { word: "Bread", pronunciation: "bréd", translation: "pão", icon: UtensilsCrossed },
        { word: "Milk", pronunciation: "mílk", translation: "leite", icon: UtensilsCrossed },
        { word: "Rice", pronunciation: "ráis", translation: "arroz", icon: UtensilsCrossed },
        { word: "Chicken", pronunciation: "tchíken", translation: "frango", icon: UtensilsCrossed },
        { word: "Apple", pronunciation: "épol", translation: "maçã", icon: UtensilsCrossed },
        { word: "Banana", pronunciation: "benéna", translation: "banana", icon: UtensilsCrossed },
      ]
    },
    {
      id: "transportation",
      title: "Transporte",
      titleEn: "Transportation",
      icon: Car,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      words: [
        { word: "Car", pronunciation: "kár", translation: "carro", icon: Car },
        { word: "Bus", pronunciation: "bâs", translation: "ônibus", icon: Car },
        { word: "Train", pronunciation: "trêin", translation: "trem", icon: Car },
        { word: "Airplane", pronunciation: "érplêin", translation: "avião", icon: Car },
        { word: "Bicycle", pronunciation: "báisicol", translation: "bicicleta", icon: Car },
        { word: "Motorcycle", pronunciation: "môtorsáicol", translation: "motocicleta", icon: Car },
        { word: "Boat", pronunciation: "bôut", translation: "barco", icon: Car },
        { word: "Subway", pronunciation: "sâbuêi", translation: "metrô", icon: Car },
      ]
    },
    {
      id: "body",
      title: "Corpo",
      titleEn: "Body",
      icon: HeartPulse,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      words: [
        { word: "Head", pronunciation: "réd", translation: "cabeça", icon: HeartPulse },
        { word: "Eye", pronunciation: "ái", translation: "olho", icon: HeartPulse },
        { word: "Nose", pronunciation: "nôuz", translation: "nariz", icon: HeartPulse },
        { word: "Mouth", pronunciation: "máuz", translation: "boca", icon: HeartPulse },
        { word: "Ear", pronunciation: "íer", translation: "orelha", icon: HeartPulse },
        { word: "Hand", pronunciation: "rénd", translation: "mão", icon: HeartPulse },
        { word: "Foot", pronunciation: "fút", translation: "pé", icon: HeartPulse },
        { word: "Arm", pronunciation: "árm", translation: "braço", icon: HeartPulse },
      ]
    },
    {
      id: "colors",
      title: "Cores",
      titleEn: "Colors",
      icon: Palette,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      words: [
        { word: "Red", pronunciation: "réd", translation: "vermelho", icon: Palette },
        { word: "Blue", pronunciation: "blu", translation: "azul", icon: Palette },
        { word: "Green", pronunciation: "gríin", translation: "verde", icon: Palette },
        { word: "Yellow", pronunciation: "iélou", translation: "amarelo", icon: Palette },
        { word: "Black", pronunciation: "blék", translation: "preto", icon: Palette },
        { word: "White", pronunciation: "uáit", translation: "branco", icon: Palette },
        { word: "Orange", pronunciation: "órendj", translation: "laranja", icon: Palette },
        { word: "Purple", pronunciation: "pârpol", translation: "roxo", icon: Palette },
      ]
    },
    {
      id: "nature",
      title: "Natureza",
      titleEn: "Nature",
      icon: Trees,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      words: [
        { word: "Tree", pronunciation: "tríi", translation: "árvore", icon: Trees },
        { word: "Flower", pronunciation: "fláuer", translation: "flor", icon: Trees },
        { word: "Sun", pronunciation: "sân", translation: "sol", icon: Trees },
        { word: "Moon", pronunciation: "múun", translation: "lua", icon: Trees },
        { word: "Star", pronunciation: "stár", translation: "estrela", icon: Trees },
        { word: "Mountain", pronunciation: "máunten", translation: "montanha", icon: Trees },
        { word: "River", pronunciation: "ríver", translation: "rio", icon: Trees },
        { word: "Ocean", pronunciation: "ôuchen", translation: "oceano", icon: Trees },
      ]
    },
    {
      id: "clothes",
      title: "Roupas",
      titleEn: "Clothes",
      icon: ShirtIcon,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      words: [
        { word: "Shirt", pronunciation: "chért", translation: "camisa", icon: ShirtIcon },
        { word: "Pants", pronunciation: "pénts", translation: "calças", icon: ShirtIcon },
        { word: "Dress", pronunciation: "drés", translation: "vestido", icon: ShirtIcon },
        { word: "Shoes", pronunciation: "chúuz", translation: "sapatos", icon: ShirtIcon },
        { word: "Socks", pronunciation: "sóks", translation: "meias", icon: ShirtIcon },
        { word: "Hat", pronunciation: "rét", translation: "chapéu", icon: ShirtIcon },
        { word: "Jacket", pronunciation: "djéket", translation: "jaqueta", icon: ShirtIcon },
        { word: "Skirt", pronunciation: "skért", translation: "saia", icon: ShirtIcon },
      ]
    },
    {
      id: "animals",
      title: "Animais",
      titleEn: "Animals",
      icon: PawPrint,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      words: [
        { word: "Dog", pronunciation: "dóg", translation: "cachorro", icon: PawPrint },
        { word: "Cat", pronunciation: "két", translation: "gato", icon: PawPrint },
        { word: "Bird", pronunciation: "bêrd", translation: "pássaro", icon: PawPrint },
        { word: "Fish", pronunciation: "fích", translation: "peixe", icon: PawPrint },
        { word: "Horse", pronunciation: "rórss", translation: "cavalo", icon: PawPrint },
        { word: "Cow", pronunciation: "káu", translation: "vaca", icon: PawPrint },
        { word: "Lion", pronunciation: "láion", translation: "leão", icon: PawPrint },
        { word: "Elephant", pronunciation: "élefent", translation: "elefante", icon: PawPrint },
      ]
    },
    {
      id: "jobs",
      title: "Profissões",
      titleEn: "Jobs",
      icon: Briefcase,
      color: "text-slate-600",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
      words: [
        { word: "Doctor", pronunciation: "dóktor", translation: "médico(a)", icon: Briefcase },
        { word: "Teacher", pronunciation: "títcher", translation: "professor(a)", icon: Briefcase },
        { word: "Engineer", pronunciation: "endjiníer", translation: "engenheiro(a)", icon: Briefcase },
        { word: "Nurse", pronunciation: "nârss", translation: "enfermeiro(a)", icon: Briefcase },
        { word: "Police officer", pronunciation: "políss óficer", translation: "policial", icon: Briefcase },
        { word: "Chef", pronunciation: "chéf", translation: "chef", icon: Briefcase },
        { word: "Artist", pronunciation: "ártist", translation: "artista", icon: Briefcase },
        { word: "Lawyer", pronunciation: "lóier", translation: "advogado(a)", icon: Briefcase },
      ]
    },
  ];

  const totalWords = themes.reduce((acc, theme) => acc + theme.words.length, 0);
  const learnedWords = Math.floor(totalWords * 0.65);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-secondary">Vocabulário por Temas</h2>
        <p className="text-muted-foreground mt-1">Aprenda palavras organizadas por categorias</p>
      </div>

      <Card className="border-2 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold">Progresso Total</h3>
              <p className="text-sm text-muted-foreground">{totalWords} palavras disponíveis</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{learnedWords}</div>
              <p className="text-sm text-muted-foreground">palavras aprendidas</p>
            </div>
          </div>
          <Progress value={(learnedWords / totalWords) * 100} className="h-2" indicatorClassName="bg-primary" />
        </CardContent>
      </Card>

      <div className="space-y-4">
        {themes.map((theme) => {
          const ThemeIcon = theme.icon;
          const isOpen = openSections.includes(theme.id);
          
          return (
            <Collapsible key={theme.id} open={isOpen} onOpenChange={() => toggleSection(theme.id)}>
              <Card className={`transition-smooth hover:shadow-md border-2 ${theme.borderColor}`}>
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${theme.bgColor}`}>
                          <ThemeIcon className={`h-6 w-6 ${theme.color}`} />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-xl">
                            {theme.title} / {theme.titleEn}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">
                            {theme.words.length} palavras
                          </p>
                        </div>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                      {theme.words.map((word, index) => {
                        const WordIcon = word.icon;
                        return (
                          <div
                            key={index}
                            className={`rounded-lg border-2 ${theme.borderColor} ${theme.bgColor} p-4 transition-smooth hover:shadow-md hover:scale-105 cursor-pointer`}
                          >
                            <div className="flex flex-col items-center text-center space-y-2">
                              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${theme.bgColor}`}>
                                <WordIcon className={`h-5 w-5 ${theme.color}`} />
                              </div>
                              <div className="space-y-1 w-full">
                                <div className="flex items-center justify-center gap-2">
                                  <p className="font-bold text-lg">{word.word}</p>
                                  <Button variant="ghost" size="icon" className="h-6 w-6">
                                    <Volume2 className="h-3 w-3" />
                                  </Button>
                                </div>
                                <p className={`text-sm font-mono ${theme.color} font-semibold`}>
                                  {word.pronunciation}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {word.translation}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Estatísticas por Tema</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {themes.slice(0, 5).map((theme) => {
              const ThemeIcon = theme.icon;
              const learned = Math.floor(theme.words.length * (Math.random() * 0.4 + 0.5));
              return (
                <div key={theme.id} className={`text-center p-4 rounded-lg ${theme.bgColor} border ${theme.borderColor}`}>
                  <ThemeIcon className={`h-6 w-6 ${theme.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold">{learned}/{theme.words.length}</div>
                  <p className="text-xs text-muted-foreground mt-1">{theme.title}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
