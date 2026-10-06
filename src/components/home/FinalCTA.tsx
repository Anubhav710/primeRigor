"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function FinalCTA() {
  const [email, setEmail] = useState("");

  const handleAuditRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Audit request received! Our revenue intelligence team will reach out shortly.");
    setEmail("");
  };

  return (
    <section id="final-cta" className="bg-[#FAFAFC] py-20 md:py-28 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-900 text-white p-8 md:p-14 overflow-hidden shadow-2xl">
          {/* Subtle Glow & Ambient Light */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-600/30 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold tracking-wider text-blue-400 uppercase">
              <span>GET STARTED WITH PRIMERIGOR</span>
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to See Where Your Revenue Signal Breaks?
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Connect your revenue signals, discover discrepancies between tools, and empower your team with actionable, evidence-first guidance.
            </p>

            {/* Email Audit Form */}
            <form onSubmit={handleAuditRequest} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-slate-900 border-none h-12 text-sm shadow-sm"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold h-12 px-6 rounded-lg shrink-0 flex items-center justify-center gap-2 text-sm shadow-lg shadow-blue-600/30">
                <span>Request Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free initial signal review
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> SOC2 compliant & encrypted
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Setup in under 24 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
