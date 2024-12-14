import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FaTrophy, FaGolfBall } from "react-icons/fa";

export default function SportphysiotherapiePage() {
  return (
    <>
      <Header />
      <main className="relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 -right-4 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
          <div className="absolute bottom-1/4 -left-4 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
        </div>

        {/* Hero Section */}
        <section className="container max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold">
              Sportphysiotherapie
            </h1>
            <p className="text-xl font-semibold text-secondary">
              Wir sind qualifizierte Sportphysiotherapeuten des DOSB.
            </p>
            <div className="space-y-4 text-lg text-muted-foreground/80">
              <p>
                Durch jahrzehnte lange Erfahrung im Bereich Sportmedizin sind
                wir der Ansprechpartner im Bereich Sportmedizin in Hildesheim.
              </p>
              <p>
                Durch internationale Erfahrungen und die Betreuung diverser
                Nationalmannschaften und die Teilnahme an den Olympischen
                Spielen 1996 in Atlanta als Therapeutin der
                Frauennationalmannschaft / Handball verfügen wir über ein
                einzigartiges Maß an Erfahrung und Kompetenz.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            {/* Invaders Section */}
            <Card className="border-secondary/10 overflow-hidden bg-background/60 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/invaders.png"
                      alt="Hildesheim Invaders in Action"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 text-secondary">
                      <FaTrophy className="w-6 h-6" />
                      <h2 className="text-2xl font-bold">
                        Hildesheim Invaders American Football
                      </h2>
                    </div>
                    <p className="text-xl font-medium text-secondary/80">
                      1. Bundesliga
                    </p>
                    <div className="space-y-4 text-muted-foreground/80">
                      <p>
                        Das gesamte Team der Hildesheim Invaders wird von uns
                        sportphysiotherapeutisch betreut.
                      </p>
                      <p>Die Cheerleader von Eintracht Hildesheim.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Golf Section */}
            <Card className="border-secondary/10 overflow-hidden bg-background/60 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 text-secondary">
                      <FaGolfBall className="w-6 h-6" />
                      <h2 className="text-2xl font-bold">
                        Golf-Physio-Coach des DGV
                      </h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground/80">
                      <p>
                        Mit der Zusatzausbildung zum Golf-Physio-Coach des DGV
                        sind wir seit Jahren mit der Betreuung und Behandlung
                        von Golfsportlern erfolgreich im Einsatz.
                      </p>
                      <p>
                        Wir Unterstützen Sie auf dem Weg Ihren Sport erfolgreich
                        und beschwerdefrei auszuüben.
                      </p>
                      <p>
                        Wollen Sie Ihr Handicap verbessern? In Zusammenarbeit
                        mit Ihrem Pro Unterstützen wir Sie dabei....
                      </p>
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/dgvLogo.png"
                      alt="Golf Training"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
