import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function DatenschutzPage() {
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
            <h1 className="text-4xl font-bold">Datenschutzerklärung</h1>

            <div className="prose prose-lg max-w-none">
              <h2>1. Datenschutz auf einen Blick</h2>
              <h3>Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>

              <h3>Datenerfassung auf dieser Website</h3>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
                dieser Website entnehmen.
              </p>

              <h2>2. Hosting</h2>
              <p>
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <p>
                Vercel Inc.
                <br />
                340 S Lemon Ave #4133
                <br />
                Walnut, CA 91789
                <br />
                USA
              </p>

              <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3>Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend der gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3>Hinweis zur verantwortlichen Stelle</h3>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </p>
              <p>
                Qui si sana UG
                <br />
                (haftungsbeschränkt)
                <br />
                Schuhstraße 33
                <br />
                31134 Hildesheim
                <br />
              </p>

              <h2>4. Datenerfassung auf dieser Website</h2>
              <h3>Cookies</h3>
              <p>
                Unsere Internetseiten verwenden so genannte &quot;Cookies&quot;.
                Cookies sind kleine Textdateien und richten auf Ihrem Endgerät
                keinen Schaden an. Sie werden entweder vorübergehend für die
                Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente
                Cookies) auf Ihrem Endgerät gespeichert.
              </p>

              <h3>Server-Log-Dateien</h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch
                Informationen in so genannten Server-Log-Dateien, die Ihr
                Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul>
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
