"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1];

function HeroPill() {
  return (
    <motion.div
      className="inline-flex items-center space-x-2 border border-accent rounded-full bg-primary/10 px-2 py-1 ring-1 ring-accent/50 whitespace-pre w-fit"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <div className="w-fit rounded-full bg-accent/20 px-2 py-0.5 text-center text-xs font-medium text-primary sm:text-sm">
        ✨ Neu
      </div>
      <p className="text-xs font-medium text-primary/80   sm:text-sm">
        Hot-Stone-Massage
      </p>
      <svg
        width="12"
        height="12"
        className="ml-1 opacity-70"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
          fill="hsl(var(--primary))"
        />
      </svg>
    </motion.div>
  );
}

function HeroContent() {
  return (
    <div className="flex w-full flex-col space-y-6">
      <div className="space-y-6">
        <HeroPill />
        <motion.h1
          className="text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl "
          initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease,
          }}
        >
          <span className="inline-block text-balance">
            Herzlich willkommen!
          </span>
        </motion.h1>
      </div>
      <motion.p
        className="max-w-xl text-lg leading-relaxed text-muted-foreground/90 sm:text-xl sm:leading-relaxed text-balance font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease,
        }}
      >
        Unser Team aus erfahrenen und hochqualifizierten Therapeuten kümmert
        sich seit 1996 im Herzen von Hildesheim um Ihre Gesundheit und um Ihr
        Wohlbefinden.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <Link
          href="tel:05121157385"
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full sm:w-auto text-background flex gap-2 rounded-full transition-transform hover:scale-105"
          )}
        >
          <FaPhone className="h-5 w-5" />
          05121 157385
        </Link>
        <Link
          href="/kontakt"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full sm:w-auto flex gap-2 rounded-full transition-transform hover:scale-105"
          )}
        >
          <FaEnvelope className="h-5 w-5" />
          Kontaktformular
        </Link>
      </motion.div>
    </div>
  );
}

function HeroImage() {
  return (
    <motion.div
      className="relative w-full max-w-xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 1, ease }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
        <Image
          src="/massage.png"
          alt="Massage Therapy"
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
          priority
        />
      </div>
    </motion.div>
  );
}

export default function Hero2() {
  return (
    <section id="hero" className="py-16 md:py-24">
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-6xl gap-12 lg:grid-cols-2 mx-auto">
          <div className="flex flex-col justify-center">
            <HeroContent />
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
