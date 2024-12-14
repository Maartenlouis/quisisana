"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  delay?: number;
  inView?: boolean;
}

export default function BlurFade({
  children,
  delay = 0,
  inView = true,
}: BlurFadeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView && inView ? "none" : "translateY(20px)",
        opacity: isInView && inView ? 1 : 0,
        filter: isInView && inView ? "blur(0)" : "blur(4px)",
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
