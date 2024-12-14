import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { FaMapMarkerAlt, FaPhone, FaFax } from "react-icons/fa";

export default function Location() {
  return (
    <Section title="Hier finden Sie uns" subtitle="">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Address Card */}
          <Card className="border-0 overflow-hidden bg-background/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 md:p-10 space-y-8 h-full flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-medium text-secondary">
                    Rehazentrum
                  </h3>
                  <div className="h-px w-16 bg-gradient-to-r from-secondary/30 to-transparent" />
                </div>

                <div className="space-y-6 text-muted-foreground/90">
                  <div className="space-y-1">
                    <p className="font-medium">Qui si sana UG</p>
                    <p className="text-sm text-muted-foreground/70">
                      (haftungsbeschränkt)
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-secondary/10">
                      <FaMapMarkerAlt className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="space-y-0.5">
                      <p>Schuhstraße 33</p>
                      <p>31134 Hildesheim</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-secondary/10">
                        <FaPhone className="w-5 h-5 text-secondary" />
                      </div>
                      <a
                        href="tel:05121157385"
                        className="hover:text-secondary transition-colors"
                      >
                        05121 157385
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-secondary/10">
                        <FaFax className="w-5 h-5 text-secondary" />
                      </div>
                      <p>05121 38456</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden opacity-30">
                <div className="absolute top-0 right-0 w-6 h-6 transform translate-x-1/2 -translate-y-1/2 rotate-45 bg-secondary/20" />
              </div>
            </CardContent>
          </Card>

          {/* Google Maps Card */}
          <Card className="border-0 overflow-hidden bg-background/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0 aspect-square md:aspect-auto h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.3991833678387!2d9.945982776939681!3d52.15074667189755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47babc1ec6000001%3A0x1269a3e6be111b0!2sSchuhstra%C3%9Fe%2033%2C%2031134%20Hildesheim!5e0!3m2!1sde!2sde!4v1709321799675!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg hover:grayscale-0 transition-all duration-700"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
