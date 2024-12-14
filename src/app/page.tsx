import Blog from "@/components/sections/blog";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Location from "@/components/sections/location";
import Logos from "@/components/sections/logos";
import Services from "@/components/sections/services";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Logos />
      <Services />
      <TestimonialsCarousel />
      <FAQ />
      <Location />
      <Footer />
    </main>
  );
}
