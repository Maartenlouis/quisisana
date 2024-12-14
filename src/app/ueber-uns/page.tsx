import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function UeberUnsPage() {
  return (
    <>
      <Header />
      <main className="container max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Über uns</h1>
            <div className="prose prose-lg max-w-none">
              <p>
                Seit 1996 ist der Name im Rehazentrum Qui Si Sana Programm:
                &ldquo;Hier gesundet man&rdquo;, die italienische Übersetzung
                des Praxisnamens, ist gleichzeitig das Leitbild bei allen
                therapeutischen Anwendungen.
              </p>
              {/* Rest of the content */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
