"use client";

import React from "react";

interface MarqueeStripProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number; // duration in seconds
  pauseOnHover?: boolean;
  className?: string;
}

export function MarqueeStrip({
  children,
  direction = "left",
  speed = 35,
  pauseOnHover = true,
  className = "",
}: MarqueeStripProps) {
  const animClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div
      className={`relative w-full overflow-hidden flex select-none py-2 ${
        pauseOnHover ? "[&:hover_.marquee-inner]:[animation-play-state:paused]" : ""
      } ${className}`}
    >
      {/* Left/Right blur vignettes for smooth fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-navy-deep to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-navy-deep to-transparent" />

      {/* Marquee Tracks (2 copies for seamless loop) */}
      <div
        className={`marquee-inner flex min-w-full shrink-0 items-center gap-6 ${animClass}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={`marquee-inner flex min-w-full shrink-0 items-center gap-6 ${animClass}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  );
}
