"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Waves, Activity, Heart, Hand, Flame, Sparkles } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    title: "Klassische Massage",
    description:
      "Professionelle Massagetherapie zur Entspannung und Regeneration der Muskulatur.",
    icon: Hand,
  },
  {
    title: "Sportmassage",
    description:
      "Spezielle Massagetechniken für Sportler zur Leistungssteigerung und Regeneration.",
    icon: Activity,
  },
  {
    title: "Krankengymnastik",
    description:
      "Individuelle physiotherapeutische Behandlung zur Wiederherstellung, Erhaltung und Förderung der Gesundheit.",
    icon: Sparkles,
  },
  {
    title: "Wellnessmassage",
    description:
      "Entspannende Massagen für Körper und Seele mit hochwertigen Ölen.",
    icon: Waves,
  },
  {
    title: "Wärmetherapie",
    description:
      "Fango, Heiße Rolle und Wärmepackungen zur Lockerung der Muskulatur.",
    icon: Flame,
  },
  {
    title: "Manuelle Therapie",
    description:
      "Gezielte Behandlung von Funktionsstörungen des Bewegungsapparates.",
    icon: Heart,
  },
];

export default function Services() {
  return (
    <Section
      title="Unsere Leistungen"
      subtitle="Professionelle Behandlungen für Ihre Gesundheit"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <BlurFade key={index} delay={0.2 + index * 0.1} inView>
              <Card className="bg-secondary/50 border-accent/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary/70" />
                  </div>
                  <h3 className="text-xl font-medium">{service.title}</h3>
                  <p className="text-muted-foreground/80 font-light leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </Section>
  );
}
