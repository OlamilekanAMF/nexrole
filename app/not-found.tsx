import React from "react";
import { Sparkles, ArrowRight, Home } from "lucide-react";
import { AnimatedButton } from "@/components/AnimatedButton";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center text-center px-6 py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-md mx-auto relative z-10 space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto shadow-[0_0_25px_rgba(37,99,235,0.3)]">
          <Sparkles className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
            Error 404
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Role Not Found
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            The page or opportunity you are looking for has been relocated or is no longer active in
            our directory.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <AnimatedButton
            href="/"
            variant="solid-gold"
            className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-slate-950"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </AnimatedButton>

          <AnimatedButton
            href="/jobs"
            variant="outlined-white"
            className="w-full sm:w-auto px-6 py-3 text-xs"
          >
            <span>Browse Live Roles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
}
