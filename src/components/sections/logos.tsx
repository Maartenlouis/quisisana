import Image from "next/image";
import Section from "@/components/section";

export default function Logos() {
  return (
    <Section title="Unsere Partner" subtitle="">
      <div className="relative ">
        {/* Decorative background elements */}
        <div className="absolute   inset-0 -z-10 overflow-hidden">
          <div className="absolute  -top-4 -right-4 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute -bottom-4 -left-4 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mt-8">
          <div className="relative w-48 h-24 transition-transform hover:scale-105">
            <Image
              src="/invaders.png"
              alt="Partner Logo 1"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="relative w-48 h-24 transition-transform hover:scale-105">
            <Image
              src="/OlympiaCamp.png"
              alt="Partner Logo 2"
              fill
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              priority
            />
          </div>
          <div className="relative w-48 h-24 transition-transform hover:scale-105">
            <Image
              src="/dgvLogo.png"
              alt="Partner Logo 3"
              fill
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
