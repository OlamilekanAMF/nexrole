"use client";

import { useRef, useCallback, type MouseEvent } from "react";

interface MagneticOptions {
  strength?: number;
  radius?: number;
}

export function useMagneticPull({ strength = 0.3, radius = 150 }: MagneticOptions = {}) {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const element = ref.current;
      if (!element) return;

      if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance < radius) {
        const pullX = distX * strength;
        const pullY = distY * strength;
        element.style.transform = `translate(${pullX}px, ${pullY}px)`;
        element.style.transition = "transform 0.15s ease-out";
      }
    },
    [strength, radius]
  );

  const handleMouseLeave = useCallback(() => {
    const element = ref.current;
    if (!element) return;
    element.style.transform = "translate(0px, 0px)";
    element.style.transition = "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)";
  }, []);

  return { ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };
}
