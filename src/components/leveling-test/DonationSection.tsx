import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const STRIPE_LINK = "https://buy.stripe.com/dRm4gBckBcWKfTPh2R7ss04";

export const DonationSection = () => {
  const handleDonation = () => {
    window.open(STRIPE_LINK, '_blank');
  };

  return (
    <Card className="border-2 border-pink-500/50 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-2">
          <Heart className="w-12 h-12 text-pink-500 fill-pink-500" />
        </div>
        <CardTitle className="text-2xl">
          Ajude uma criança a estudar inglês 🎓
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          Help a child study English
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-white/80 dark:bg-black/20 p-4 rounded-lg text-center space-y-2">
          <p className="text-base leading-relaxed">
            <strong>Doe apenas R$1, R$2 ou R$5</strong> e ajude uma mãe solo a pagar aulas de inglês para uma criança que sonha em aprender.
          </p>
          <p className="text-sm text-muted-foreground">
            Cada contribuição faz a diferença! 💝
          </p>
          <p className="text-sm italic">
            Donate just R$1, R$2, or R$5 and help a single mother pay for English classes for a child who dreams of learning.
          </p>
        </div>

        <div className="flex justify-center items-center gap-2">
          <span className="text-4xl">👧</span>
          <span className="text-4xl">📚</span>
          <span className="text-4xl">❤️</span>
        </div>

        <Button 
          onClick={handleDonation}
          size="lg" 
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold"
        >
          <Heart className="w-5 h-5 mr-2" />
          Doar Agora / Donate Now
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Clique e contribua — você transforma a vida de uma criança! ✨
          <br />
          Click and contribute — you transform a child's life!
        </p>
      </CardContent>
    </Card>
  );
};
