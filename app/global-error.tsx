"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-[100vh] flex-col items-center justify-center bg-background text-foreground p-8">
          <AlertCircle className="mb-4 h-16 w-16 text-destructive" />
          <h2 className="mb-4 text-4xl font-heading font-bold">Fatal Error</h2>
          <p className="mb-8 text-muted-foreground text-center max-w-md text-lg">
            A critical error occurred. Please refresh the page or try again later.
          </p>
          <Button onClick={() => reset()} size="lg">
            Refresh
          </Button>
        </div>
      </body>
    </html>
  );
}
