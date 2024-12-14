import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function UeberUnsPage() {
  return (
    <>
      <Header />
      <main className="container max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 -right-4 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute bottom-1/4 -left-4 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Über uns</h1>

            <div className="prose prose-lg max-w-none">
              <p>
                Seit 1996 ist der Name im Rehazentrum Qui Si Sana Programm:
                „Hier gesundet man", die italienische Übersetzung des
                Praxisnamens, ist gleichzeitig das Leitbild bei allen
                therapeutischen Anwendungen in den Bereichen Krankengymnastik
                und Massage sowie physikalische Therapie und Wellness.
              </p>

              <p>
                Claudia Leyder (zertifizierte Sportphysiotherapeutin des
                Deutschen Sportbundes) hat in den vielen Jahren ein
                umfangreiches Programm für Patienten und Kunden aufgestellt:
              </p>

              {/* Team Image Placeholder - URL to be added later */}
              <div className="relative w-full h-[600px] my-8 bg-muted rounded-lg overflow-hidden">
                <Image
                  src="/team.jpg" // URL to be updated
                  alt="Qui Si Sana Team"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Unsere Leistungen
              </h2>
              <p>
                Zur Krankengymnastik werden die Manualtherapie, die
                physiotherapeutische Behandlungsmethode PNF, die
                Brügger-therapie, die Elektrotherapie, der Ultraschall, die
                manuelle Therapie, die Behandlung von Skoliose, die Fango- sowie
                Eis- und Heißluftbehandlung, der Schlingentisch, Massagen, die
                Lymphdrainage und das Kinesio-Taping angeboten.
              </p>

              <p>
                Für Sportler bietet das Qui-Si-Sana-Team eine
                Sportphysiotherapie an, außerdem eine Trainingstherapie, eine
                Akutversorgung von Sportverletzungen, eine komplette
                Mannschaftsbetreuung und ein Golfphysiocoaching.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
