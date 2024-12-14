"use client";

import React from "react";

export interface BorderBeamProps {
  children: React.ReactNode;
  className?: string;
}

export function BorderBeam({ children, className = "" }: BorderBeamProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
