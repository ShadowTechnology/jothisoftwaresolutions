"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center bg-background text-foreground">
      <AlertCircle className="mb-4 h-16 w-16 text-destructive" />
      <h2 className="mb-4 text-3xl font-heading font-bold">Something went wrong!</h2>
      <p className="mb-8 text-muted-foreground text-center max-w-md">
        An unexpected error occurred while processing your request. We have been notified and are looking into it.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="default">
          Try again
        </Button>
        <Button onClick={() => window.location.href = "/"} variant="outline">
          Go to Home
        </Button>
      </div>
    </div>
  );
}
