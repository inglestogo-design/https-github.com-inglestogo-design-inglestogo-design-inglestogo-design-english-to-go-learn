import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Download, Loader2 } from "lucide-react";
import { vocabularyThemes } from "@/data/vocabularyData";

export const VocabularyImageGenerator = () => {
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTheme, setCurrentTheme] = useState("");
  const [generatedImages, setGeneratedImages] = useState<any[]>([]);

  const generateImagesForTheme = async (themeId: string, startIndex: number = 8) => {
    const themeWords = vocabularyThemes[themeId as keyof typeof vocabularyThemes];
    const wordsToGenerate = themeWords.slice(startIndex).map(w => ({
      word: w.word,
      theme: themeId
    }));

    const { data, error } = await supabase.functions.invoke('generate-vocabulary-images', {
      body: { words: wordsToGenerate }
    });

    if (error) throw error;
    return data;
  };

  const handleGenerateThemes = async (themeIds: string[]) => {
    setGenerating(true);
    setProgress(0);
    setGeneratedImages([]);
    
    const totalThemes = themeIds.length;
    const allResults: any[] = [];
    
    try {
      for (let i = 0; i < themeIds.length; i++) {
        const themeId = themeIds[i];
        setCurrentTheme(themeId);
        
        toast.info(`Gerando imagens para ${themeId}...`);
        
        const result = await generateImagesForTheme(themeId);
        
        const successCount = result.results.filter((r: any) => r.success).length;
        const failCount = result.results.filter((r: any) => !r.success).length;
        
        allResults.push(...result.results);
        
        toast.success(`${themeId}: ${successCount} geradas, ${failCount} falharam`);
        
        setProgress(((i + 1) / totalThemes) * 100);
      }
      
      setGeneratedImages(allResults);
      toast.success("Imagens geradas! Veja os resultados abaixo.");
      
    } catch (error: any) {
      console.error('Error generating images:', error);
      if (error.message.includes('Rate limit')) {
        toast.error("Limite de requisições atingido. Aguarde alguns minutos.");
      } else if (error.message.includes('Payment required')) {
        toast.error("Créditos insuficientes. Adicione créditos ao Lovable AI.");
      } else {
        toast.error("Erro ao gerar imagens: " + error.message);
      }
    } finally {
      setGenerating(false);
      setCurrentTheme("");
    }
  };

  const handleGenerateAll = () => handleGenerateThemes(Object.keys(vocabularyThemes));
  const handleGenerateTest = () => handleGenerateThemes(['family', 'emotions']);

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader>
        <CardTitle>Gerador de Imagens AI - Vocabulário</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Gera ilustrações AI para as palavras 9-20 de cada tema usando Lovable AI.
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="p-2 bg-yellow-50 border border-yellow-200 rounded">
              <p className="font-semibold">🧪 Teste (24 imagens)</p>
              <p className="text-xs">Family + Emotions</p>
            </div>
            <div className="p-2 bg-blue-50 border border-blue-200 rounded">
              <p className="font-semibold">🎨 Completo (144 imagens)</p>
              <p className="text-xs">Todos os 12 temas</p>
            </div>
          </div>
        </div>

        {generating && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Gerando {currentTheme}...</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        <div className="grid grid-cols-2 gap-2">
          <Button 
            onClick={handleGenerateTest}
            disabled={generating}
            variant="outline"
            className="border-yellow-300 hover:bg-yellow-50"
          >
            {generating ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>🧪 Testar (24)</>
            )}
          </Button>
          
          <Button 
            onClick={handleGenerateAll}
            disabled={generating}
          >
            {generating ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>🎨 Todas (144)</>
            )}
          </Button>
        </div>

        {generatedImages.length > 0 && (
          <div className="p-4 bg-muted rounded-lg space-y-2">
            <p className="text-sm font-semibold">✅ Resultado da Geração:</p>
            <div className="text-xs space-y-1">
              <p>✅ Sucesso: {generatedImages.filter(r => r.success).length}</p>
              <p>❌ Falhas: {generatedImages.filter(r => !r.success).length}</p>
            </div>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => {
                const dataStr = JSON.stringify(generatedImages, null, 2);
                const blob = new Blob([dataStr], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'vocabulary-images.json';
                a.click();
              }}
            >
              <Download className="h-3 w-3 mr-1" />
              Baixar JSON
            </Button>
          </div>
        )}

        <div className="text-xs text-muted-foreground space-y-1">
          <p>⚠️ As imagens geradas virão em formato base64</p>
          <p>💡 Após geração, será necessário salvar manualmente</p>
          <p>⏱️ Tempo estimado: 1-2 min (teste) | 5-10 min (todas)</p>
        </div>
      </CardContent>
    </Card>
  );
};
