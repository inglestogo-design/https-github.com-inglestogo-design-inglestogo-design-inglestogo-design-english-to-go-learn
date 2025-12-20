import { AlertTriangle, Mail, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AppLoading() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <section className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Carregando…</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Aguarde um momento. / Please wait.
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

export function AppCrashed({ error }: { error?: unknown }) {
  const message = error instanceof Error ? error.message : undefined;

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <section className="w-full max-w-lg">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Ocorreu um erro / Something went wrong
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Se esta tela apareceu no iPad, recarregue a página. Se continuar, fale com o suporte.
              <br />
              If you see this on iPad, please reload. If it persists, contact support.
            </p>

            {message ? (
              <details className="text-xs text-muted-foreground">
                <summary className="cursor-pointer">Detalhes técnicos</summary>
                <pre className="mt-2 whitespace-pre-wrap break-words">{message}</pre>
              </details>
            ) : null}

            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                type="button"
                onClick={() => window.location.reload()}
                className="w-full"
              >
                <RefreshCcw className="mr-2 h-4 w-4" />
                Recarregar / Reload
              </Button>

              <Button asChild type="button" variant="secondary" className="w-full">
                <a href="mailto:support@inglestogo.com">
                  <Mail className="mr-2 h-4 w-4" />
                  support@inglestogo.com
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
