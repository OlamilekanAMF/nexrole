"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useMagneticPull } from "@/lib/hooks/useMagneticPull";

export type ButtonVariant = "solid-blue" | "solid-gold" | "outlined-white" | "outlined-blue" | "ghost";

interface BaseButtonProps {
  variant?: ButtonVariant;
  pill?: boolean;
  fullWidth?: boolean;
  magnetic?: boolean;
  shimmer?: boolean;
  children: React.ReactNode;
  className?: string;
}

export type AnimatedButtonProps = BaseButtonProps &
  (
    | ({ href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps>)
    | ({ href?: undefined } & Omit<HTMLMotionProps<"button">, keyof BaseButtonProps>)
  );

export const AnimatedButton = forwardRef<HTMLElement, AnimatedButtonProps>(function AnimatedButton(
  {
    variant = "solid-blue",
    pill = false,
    fullWidth = false,
    magnetic = true,
    shimmer = true,
    children,
    className = "",
    ...props
  },
  forwardedRef
) {
  const { ref: magneticRef, onMouseMove, onMouseLeave } = useMagneticPull();

  const variantStyles: Record<ButtonVariant, string> = {
    "solid-blue":
      "bg-electric text-white shadow-lg shadow-blue-500/20 hover:bg-blue-600 hover:shadow-blue-500/30 border border-blue-400/30",
    "solid-gold":
      "bg-gold text-slate-950 font-bold shadow-lg shadow-amber-500/20 hover:bg-amber-400 hover:shadow-amber-500/30 border border-amber-400/40",
    "outlined-white":
      "bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm dark:bg-white/5 dark:text-white dark:border-white/10 dark:hover:bg-white/10 dark:hover:border-white/20",
    "outlined-blue":
      "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 hover:bg-blue-100 dark:hover:bg-blue-500/20 hover:border-blue-300 dark:hover:border-blue-500/40",
    ghost:
      "bg-transparent text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent",
  };

  const baseClasses = `relative inline-flex items-center justify-center gap-2 overflow-hidden px-6 py-3 text-sm font-medium transition-all duration-300 cursor-pointer select-none group ${
    pill ? "rounded-full" : "rounded-btn"
  } ${fullWidth ? "w-full" : ""} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {shimmer && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link
        href={href}
        ref={(el) => {
          if (typeof forwardedRef === "function") forwardedRef(el);
          else if (forwardedRef) forwardedRef.current = el;
          if (magnetic) (magneticRef as React.MutableRefObject<HTMLAnchorElement | null>).current = el;
        }}
        onMouseMove={magnetic ? onMouseMove : undefined}
        onMouseLeave={magnetic ? onMouseLeave : undefined}
        className={baseClasses}
        data-magnetic={magnetic ? "true" : undefined}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  const btnProps = props;
  return (
    <motion.button
      ref={(el) => {
        if (typeof forwardedRef === "function") forwardedRef(el);
        else if (forwardedRef) forwardedRef.current = el;
        if (magnetic) (magneticRef as React.MutableRefObject<HTMLButtonElement | null>).current = el;
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={magnetic ? onMouseMove : undefined}
      onMouseLeave={magnetic ? onMouseLeave : undefined}
      className={baseClasses}
      data-magnetic={magnetic ? "true" : undefined}
      {...(btnProps as HTMLMotionProps<"button">)}
    >
      {content}
    </motion.button>
  );
});
