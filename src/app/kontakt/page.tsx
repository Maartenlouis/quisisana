import { Card, CardContent } from "@/components/ui/card";
import { FaPhone, FaFax, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="container max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 -right-4 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute bottom-1/4 -left-4 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Hier finden Sie uns</h1>
              <p className="text-lg text-muted-foreground/80">
                Wir freuen uns auf Ihren Besuch und beraten Sie gerne persönlich
              </p>
            </div>

            <Card className="border-secondary/10 bg-background/60 backdrop-blur-sm">
              <CardContent className="p-8 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-medium text-secondary">
                    Rehazentrum
                  </h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="font-medium">Qui si sana UG</p>
                    <p className="text-sm">(haftungsbeschränkt)</p>
                    <div className="flex items-center gap-3 pt-2">
                      <div className="p-2 rounded-full bg-secondary/10">
                        <FaMapMarkerAlt className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p>Schuhstraße 33</p>
                        <p>31134 Hildesheim</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-secondary">
                    Kontakt
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-secondary/10">
                        <FaPhone className="w-5 h-5 text-secondary" />
                      </div>
                      <a
                        href="tel:05121157385"
                        className="hover:text-secondary transition-colors"
                      >
                        05121 157385
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-secondary/10">
                        <FaFax className="w-5 h-5 text-secondary" />
                      </div>
                      <p>05121 38456</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-secondary">
                Kontaktformular
              </h2>
              <p className="text-muted-foreground/80">
                Senden Sie uns eine Nachricht. Wir melden uns zeitnah bei Ihnen.
              </p>
            </div>

            <Card className="border-secondary/10 bg-background/60 backdrop-blur-sm">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium"
                      >
                        Vorname
                      </label>
                      <div className="relative">
                        <input
                          id="firstName"
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-background border border-secondary/30 hover:border-secondary/50 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Nachname
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-background border border-secondary/30 hover:border-secondary/50 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      E-Mail
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-background border border-secondary/30 hover:border-secondary/50 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all"
                      />
                      <FaEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/30" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Ihre Nachricht
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-secondary/30 hover:border-secondary/50 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 text-white bg-secondary hover:bg-secondary/90 rounded-lg transition-colors font-medium"
                  >
                    Nachricht senden
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
