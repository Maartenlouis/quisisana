import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "qui si sana",
  description: "Physiotherapie in Hildesheim",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["Physiotherapie", "Hildesheim", "Sportphysiotherapie"],
  links: {
    email: "info-qui-si-sana@gmx.de",
    phone: "05121 157385",
    instagram: "https://instagram.com/qui_si_sana/",
    youtube: "https://www.youtube.com/@qui-si-sana",
    twitter: "https://twitter.com/qui_si_sana",
    discord: "https://discord.gg/87p2vpsat5",
  },
  header: [
    {
      trigger: "Leistungen",
      content: {
        items: [
          {
            title: "Klassische Massage",
            href: "#",
            description:
              "Professionelle Massagetherapie zur Entspannung und Regeneration der Muskulatur.",
          },
          {
            title: "Sportmassage",
            href: "#",
            description:
              "Spezielle Massagetechniken für Sportler zur Leistungssteigerung und Regeneration.",
          },
          {
            title: "Krankengymnastik",
            href: "#",
            description:
              "Individuelle physiotherapeutische Behandlung zur Wiederherstellung, Erhaltung und Förderung der Gesundheit.",
          },
          {
            title: "Wellnessmassage",
            href: "#",
            description:
              "Entspannende Massagen für Körper und Seele mit hochwertigen Ölen.",
          },
          {
            title: "Wärmetherapie",
            href: "#",
            description:
              "Fango, Heiße Rolle und Wärmepackungen zur Lockerung der Muskulatur.",
          },
          {
            title: "Manuelle Therapie",
            href: "#",
            description:
              "Gezielte Behandlung von Funktionsstörungen des Bewegungsapparates.",
          },
        ],
      },
    },
    {
      href: "/sportphysiotherapie",
      label: "Sportphysiotherapie",
    },
    {
      href: "/ueber-uns",
      label: "Über uns",
    },
  ],
  pricing: [
    {
      name: "BASIC",
      href: "#",
      price: "$19",
      period: "month",
      yearlyPrice: "$16",
      features: [
        "1 User",
        "5GB Storage",
        "Basic Support",
        "Limited API Access",
        "Standard Analytics",
      ],
      description: "Perfect for individuals and small projects",
      buttonText: "Subscribe",
      isPopular: false,
    },
    {
      name: "PRO",
      href: "#",
      price: "$49",
      period: "month",
      yearlyPrice: "$40",
      features: [
        "5 Users",
        "50GB Storage",
        "Priority Support",
        "Full API Access",
        "Advanced Analytics",
      ],
      description: "Ideal for growing businesses and teams",
      buttonText: "Subscribe",
      isPopular: true,
    },
    {
      name: "ENTERPRISE",
      href: "#",
      price: "$99",
      period: "month",
      yearlyPrice: "$82",
      features: [
        "Unlimited Users",
        "500GB Storage",
        "24/7 Premium Support",
        "Custom Integrations",
        "AI-Powered Insights",
      ],
      description: "For large-scale operations and high-volume users",
      buttonText: "Subscribe",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "Seit wann gibt es das Rehazentrum Qui Si Sana?",
      answer: (
        <span>
          Seit 1996 ist der Name im Rehazentrum Qui Si Sana Programm.
          &ldquo;Hier gesundet man&rdquo; - die italienische Übersetzung des
          Praxisnamens ist gleichzeitig das Leitbild bei allen therapeutischen
          Anwendungen in den Bereichen Krankengymnastik, Massage sowie
          physikalische Therapie und Wellness.
        </span>
      ),
    },
    {
      question: "Welche Qualifikationen hat das Team?",
      answer: (
        <span>
          Unser Team besteht aus erfahrenen und hochqualifizierten Therapeuten.
          Claudia Leyder ist zertifizierte Sportphysiotherapeutin des Deutschen
          Sportbundes und verfügt über internationale Erfahrung, unter anderem
          bei den Olympischen Spielen 1996 in Atlanta als Therapeutin der
          Frauennationalmannschaft im Handball.
        </span>
      ),
    },
    {
      question: "Welche Behandlungsmethoden bieten Sie an?",
      answer: (
        <span>
          Wir bieten ein umfangreiches Programm an: Manualtherapie, PNF,
          Brügger-therapie, Elektrotherapie, Ultraschall, Skoliosebehandlung,
          Fango-, Eis- und Heißluftbehandlung, Schlingentisch, verschiedene
          Massagearten, Lymphdrainage und Kinesio-Taping. Zusätzlich bieten wir
          spezielle Sportphysiotherapie und Golf-Physio-Coaching an.
        </span>
      ),
    },
    {
      question: "Betreuen Sie auch Sportler und Mannschaften?",
      answer: (
        <span>
          Ja, wir sind spezialisiert auf Sportphysiotherapie und betreuen unter
          anderem das gesamte Team der Hildesheim Invaders
          sportphysiotherapeutisch, die Cheerleader von Eintracht Hildesheim und
          bieten Golf-Physio-Coaching an. Wir bieten Akutversorgung von
          Sportverletzungen und komplette Mannschaftsbetreuung.
        </span>
      ),
    },
    {
      question: "Wie kann ich einen Termin vereinbaren?",
      answer: (
        <span>
          Sie können uns telefonisch unter 05121 157385 erreichen oder unser
          Kontaktformular auf der Website nutzen. Wir beraten Sie gerne
          persönlich und vereinbaren einen Termin, der Ihren Bedürfnissen
          entspricht.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Rechtliches",
      links: [
        { href: "/impressum", text: "Impressum", icon: null },
        { href: "/datenschutz", text: "Datenschutz", icon: null },
        { href: "/agb", text: "AGB", icon: null },
      ],
    },

    {
      title: "Social",
      links: [
        {
          href: "#",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "#",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "#",
          text: "Youtube",
          icon: <FaYoutube />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
