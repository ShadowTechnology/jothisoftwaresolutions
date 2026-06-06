import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-heading font-bold text-foreground">404</h1>
        <p className="text-muted-foreground">This page could not be found.</p>
        <Link className="text-primary font-semibold hover:underline" href="/">
          Return to Jothi Software Solutions
        </Link>
      </div>
    </main>
  );
}
