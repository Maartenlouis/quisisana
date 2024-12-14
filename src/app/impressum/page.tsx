import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="container max-w-4xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        <div className="prose prose-lg">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Qui si sana UG (haftungsbeschränkt)
            <br />
            Schuhstraße 33
            <br />
            31134 Hildesheim
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: 05121 157385
            <br />
            Fax: 05121 38456
          </p>

          {/* Add more content as needed */}
        </div>
      </main>
      <Footer />
    </>
  );
}
