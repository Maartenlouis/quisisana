import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">404 - Seite nicht gefunden</h1>
        <p className="text-muted-foreground">
          Die gesuchte Seite konnte leider nicht gefunden werden.
        </p>
        <Link
          href="/"
          className="inline-block mt-4 text-secondary hover:text-secondary/80"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
