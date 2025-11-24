import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Volume2, Mic, Loader2 } from 'lucide-react';
import { dictionaryWords, searchWords, type DictionaryWord } from '@/data/dictionaryData';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { speakText } from '@/utils/speechUtils';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const Dictionary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [practiceWord, setPracticeWord] = useState<DictionaryWord | null>(null);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const { isRecording, transcript, startRecording, stopRecording, isSupported } = useSpeechRecognition();
  const { toast } = useToast();

  const filteredWords = searchQuery
    ? searchWords(searchQuery)
    : dictionaryWords.filter(w => w.word.toUpperCase().startsWith(selectedLetter));

  const handlePlayPronunciation = async (word: string) => {
    try {
      await speakText(word, { rate: 0.85 });
    } catch (error) {
      console.error('Error playing pronunciation:', error);
    }
  };

  const handleStartPractice = (word: DictionaryWord) => {
    setPracticeWord(word);
    setAnalysisResult(null);
  };

  const handleRecord = async () => {
    if (!practiceWord) return;

    if (isRecording) {
      stopRecording();
      
      // Wait a bit for transcript to be processed
      setTimeout(async () => {
        if (transcript) {
          await analyzePronunciation(transcript);
        }
      }, 500);
    } else {
      startRecording();
    }
  };

  const analyzePronunciation = async (spokenText: string) => {
    if (!practiceWord) return;

    setIsAnalyzing(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('pronunciation-analysis', {
        body: {
          spokenText,
          expectedWord: practiceWord.word,
          expectedPronunciation: practiceWord.pronunciation,
        },
      });

      if (error) throw error;

      setAnalysisResult(data);
      
      toast({
        title: data.isCorrect ? "Ótimo! 🎉" : "Continue praticando! 💪",
        description: `${data.accuracyPercentage}% de acerto`,
        variant: data.isCorrect ? "default" : "destructive",
      });
    } catch (error: any) {
      console.error('Error analyzing pronunciation:', error);
      toast({
        title: "Erro na análise",
        description: error.message || "Não foi possível analisar a pronúncia",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-6 p-4">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-primary">
          📖 Dicionário Interativo / Interactive Dictionary
        </h2>
        <p className="text-muted-foreground">
          Pratique a pronúncia palavra por palavra com feedback inteligente / Practice pronunciation word by word with smart feedback
        </p>
      </div>

      {/* Search Bar */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Buscar palavra... / Search word..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </Card>

      <Tabs value={practiceWord ? 'practice' : 'browse'} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="browse" onClick={() => setPracticeWord(null)}>
            📚 Navegar / Browse
          </TabsTrigger>
          <TabsTrigger value="practice" disabled={!practiceWord}>
            🎯 Praticar / Practice
          </TabsTrigger>
        </TabsList>

        {/* Browse Tab */}
        <TabsContent value="browse" className="space-y-4">
          {/* Alphabet Filter */}
          {!searchQuery && (
            <div className="flex flex-wrap gap-2 justify-center">
              {alphabet.map((letter) => (
                <Button
                  key={letter}
                  variant={selectedLetter === letter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLetter(letter)}
                  className="w-10 h-10"
                >
                  {letter}
                </Button>
              ))}
            </div>
          )}

          {/* Word List */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredWords.map((word, index) => (
              <Card key={index} className="p-4 space-y-3 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary">{word.word}</h3>
                    <p className="text-sm text-muted-foreground">/{word.pronunciation}/</p>
                    <p className="text-sm font-medium mt-1">{word.translation}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handlePlayPronunciation(word.word)}
                  >
                    <Volume2 className="h-5 w-5" />
                  </Button>
                </div>

                {word.example && (
                  <div className="pt-3 border-t space-y-1">
                    <p className="text-sm italic text-foreground">{word.example}</p>
                    <p className="text-xs text-muted-foreground">{word.exampleTranslation}</p>
                  </div>
                )}

                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full"
                  onClick={() => handleStartPractice(word)}
                >
                  🎯 Praticar / Practice
                </Button>
              </Card>
            ))}
          </div>

          {filteredWords.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Nenhuma palavra encontrada / No words found
              </p>
            </div>
          )}
        </TabsContent>

        {/* Practice Tab */}
        <TabsContent value="practice" className="space-y-6">
          {practiceWord && (
            <>
              {/* Word Display */}
              <Card className="p-6 space-y-4">
                <div className="text-center space-y-2">
                  <Badge variant="secondary" className="mb-2">Praticando / Practicing</Badge>
                  <h3 className="text-4xl font-bold text-primary">{practiceWord.word}</h3>
                  <p className="text-xl text-muted-foreground">/{practiceWord.pronunciation}/</p>
                  <p className="text-lg font-medium">{practiceWord.translation}</p>
                </div>

                {practiceWord.example && (
                  <div className="pt-4 border-t space-y-2 text-center">
                    <p className="text-sm italic">{practiceWord.example}</p>
                    <p className="text-xs text-muted-foreground">{practiceWord.exampleTranslation}</p>
                  </div>
                )}

                <div className="flex gap-2 justify-center">
                  <Button
                    variant="outline"
                    onClick={() => handlePlayPronunciation(practiceWord.word)}
                  >
                    <Volume2 className="mr-2 h-5 w-5" />
                    Ouvir / Listen
                  </Button>
                </div>
              </Card>

              {/* Recording Controls */}
              <Card className="p-6 space-y-4">
                <div className="text-center space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Clique no microfone e pronuncie a palavra / Click the microphone and pronounce the word
                  </p>
                  
                  <Button
                    size="lg"
                    variant={isRecording ? "destructive" : "default"}
                    onClick={handleRecord}
                    disabled={!isSupported || isAnalyzing}
                    className="h-24 w-24 rounded-full"
                  >
                    {isAnalyzing ? (
                      <Loader2 className="h-12 w-12 animate-spin" />
                    ) : (
                      <Mic className={`h-12 w-12 ${isRecording ? 'animate-pulse' : ''}`} />
                    )}
                  </Button>

                  {isRecording && (
                    <p className="text-sm font-medium text-primary animate-pulse">
                      Gravando... / Recording...
                    </p>
                  )}

                  {transcript && !isRecording && (
                    <div className="p-3 bg-secondary rounded-lg">
                      <p className="text-sm text-muted-foreground">Você disse / You said:</p>
                      <p className="font-medium">{transcript}</p>
                    </div>
                  )}
                </div>
              </Card>

              {/* Analysis Results */}
              {analysisResult && (
                <Card className="p-6 space-y-4">
                  <div className="text-center space-y-3">
                    <div className={`text-6xl font-bold ${analysisResult.isCorrect ? 'text-green-500' : 'text-orange-500'}`}>
                      {analysisResult.accuracyPercentage}%
                    </div>
                    <p className="text-xl font-semibold">{analysisResult.feedback}</p>
                  </div>

                  <div className="space-y-4 pt-4 border-t">
                    <div>
                      <h4 className="font-semibold mb-2">📊 Análise Detalhada / Detailed Analysis:</h4>
                      <p className="text-sm">{analysisResult.detailedAnalysis}</p>
                    </div>

                    {analysisResult.correctSounds && analysisResult.correctSounds.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2 text-green-600">✅ Sons Corretos / Correct Sounds:</h4>
                        <div className="flex flex-wrap gap-2">
                          {analysisResult.correctSounds.map((sound: string, idx: number) => (
                            <Badge key={idx} variant="secondary" className="bg-green-100 text-green-700">
                              {sound}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {analysisResult.incorrectSounds && analysisResult.incorrectSounds.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2 text-orange-600">🔧 Precisa Melhorar / Needs Improvement:</h4>
                        <div className="flex flex-wrap gap-2">
                          {analysisResult.incorrectSounds.map((sound: string, idx: number) => (
                            <Badge key={idx} variant="secondary" className="bg-orange-100 text-orange-700">
                              {sound}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold mb-2">💡 Dicas / Tips:</h4>
                      <p className="text-sm whitespace-pre-line">{analysisResult.suggestions}</p>
                    </div>

                    {analysisResult.tips && analysisResult.tips.length > 0 && (
                      <div className="space-y-2">
                        {analysisResult.tips.map((tip: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-primary">•</span>
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        setAnalysisResult(null);
                        setPracticeWord(null);
                      }}
                    >
                      ← Voltar / Back
                    </Button>
                    <Button
                      variant="default"
                      className="flex-1"
                      onClick={() => setAnalysisResult(null)}
                    >
                      🔄 Tentar Novamente / Try Again
                    </Button>
                  </div>
                </Card>
              )}
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};
