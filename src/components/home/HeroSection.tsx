"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Boxes, Search, Layers, BarChart3, Users, Database, Gauge, Activity, DollarSign, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { opacity: 0, y: 15, duration: 0.5 })
        .from(".hero-title", { opacity: 0, y: 25, duration: 0.7 }, "-=0.3")
        .from(".hero-desc", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(".hero-buttons", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(".hero-pillars", { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 }, "-=0.3")
        .from(".hero-card", { opacity: 0, scale: 0.95, duration: 0.8 }, "-=0.6");
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative border-b border-slate-200/80 bg-[#FAFAFC] py-14 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Background Subtle Mesh Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid gap-12 lg:grid-cols-[1.05fr_.95fr] items-center">
        {/* Left Column Content */}
        <div>
          {/* Eyebrow Badge */}
          <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-50/80 px-3.5 py-1.5 text-xs font-bold tracking-wider text-blue-600 uppercase">
            <span>AI REVENUE INTELLIGENCE FOR DIGITAL-FIRST BUSINESSES</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]">
            Know What Drives Revenue.
            <span className="block mt-2 text-blue-600">See Where It Breaks.</span>
          </h1>

          {/* Subheading */}
          <p className="hero-desc mt-6 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            PrimeRigor helps digital businesses connect acquisition, customer, product/sales and transaction data to understand what drives revenue, detect where performance is changing and determine what to investigate next.
          </p>

          {/* Action Buttons */}
          <div className="hero-buttons mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#revenue-intelligence">
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center gap-2 text-sm shadow-md shadow-blue-600/20 transition-all">
                <span>Explore Revenue Intelligence</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <Link href="/signup">
              <Button variant="outline" className="w-full sm:w-auto border-slate-300 bg-white hover:border-blue-600 text-slate-900 font-semibold h-12 px-6 rounded-lg flex items-center justify-center gap-2 text-sm shadow-none">
                <span>Request a Revenue Signal Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Growth Services link */}
          <a href="#growth-services" className="mt-5 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors">
            Need execution support too? <strong className="text-slate-900">Explore Growth Services</strong>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* 3 Key Pillars */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="hero-pillars flex items-start gap-3 p-2">
              <Boxes className="w-5 h-5 mt-0.5 text-blue-600 shrink-0" />
              <div>
                <div className="text-sm font-semibold text-slate-900">Connect the signals</div>
                <div className="mt-0.5 text-xs text-slate-500">Acquisition → customer → revenue</div>
              </div>
            </div>

            <div className="hero-pillars flex items-start gap-3 p-2">
              <Search className="w-5 h-5 mt-0.5 text-blue-600 shrink-0" />
              <div>
                <div className="text-sm font-semibold text-slate-900">Find the break</div>
                <div className="mt-0.5 text-xs text-slate-500">Detect changes & inconsistencies</div>
              </div>
            </div>

            <div className="hero-pillars flex items-start gap-3 p-2">
              <Layers className="w-5 h-5 mt-0.5 text-blue-600 shrink-0" />
              <div>
                <div className="text-sm font-semibold text-slate-900">Prioritize action</div>
                <div className="mt-0.5 text-xs text-slate-500">Guide attention to key areas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Interactive Visual Card */}
        <div className="hero-card relative rounded-3xl border border-blue-600/15 bg-white/90 p-5 md:p-7 shadow-xl shadow-slate-200/50 backdrop-blur-md">
          {/* Top 3 Connected Systems */}
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm hover:border-blue-600/50 transition-colors">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div className="text-[11px] font-bold tracking-wider text-slate-900 uppercase">ACQUISITION</div>
              <div className="mt-1 text-xs text-slate-500">Google Ads • Meta • SEO</div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm hover:border-blue-600/50 transition-colors">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Users className="w-4 h-4" />
              </div>
              <div className="text-[11px] font-bold tracking-wider text-slate-900 uppercase">CUSTOMER / PRODUCT</div>
              <div className="mt-1 text-xs text-slate-500">CRM • Commerce • Product</div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm hover:border-blue-600/50 transition-colors">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Database className="w-4 h-4" />
              </div>
              <div className="text-[11px] font-bold tracking-wider text-slate-900 uppercase">REVENUE</div>
              <div className="mt-1 text-xs text-slate-500">Payments • Subscriptions</div>
            </div>
          </div>

          {/* Connecting Line */}
          <div className="mx-auto my-3 h-6 w-px bg-blue-600/30" />

          {/* Main Central Signal Monitor Box */}
          <div className="rounded-2xl border border-blue-600/25 bg-gradient-to-b from-white to-blue-50/30 p-5 shadow-inner">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="grid h-6 w-6 grid-cols-3 items-end gap-0.5 rounded bg-blue-600/10 p-1">
                  <span className="h-1.5 rounded-sm bg-blue-600" />
                  <span className="h-3 rounded-sm bg-blue-600" />
                  <span className="h-4 rounded-sm bg-blue-600" />
                </span>
                <span className="text-base font-bold tracking-tight text-slate-900">PrimeRigor</span>
              </div>
              <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-blue-600 uppercase">
                REVENUE INTELLIGENCE
              </span>
            </div>

            {/* 4 Quadrant Capabilities */}
            <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-3 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <Gauge className="w-4 h-4 text-blue-600" />
                <div className="mt-1.5 text-xs font-semibold text-slate-900">Signal quality</div>
                <div className="mt-0.5 text-[11px] text-slate-500">Can this signal be trusted?</div>
              </div>

              <div className="rounded-xl bg-white p-3 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <Activity className="w-4 h-4 text-blue-600" />
                <div className="mt-1.5 text-xs font-semibold text-slate-900">Change detection</div>
                <div className="mt-0.5 text-[11px] text-slate-500">What changed?</div>
              </div>

              <div className="rounded-xl bg-white p-3 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <DollarSign className="w-4 h-4 text-blue-600" />
                <div className="mt-1.5 text-xs font-semibold text-slate-900">Commercial context</div>
                <div className="mt-0.5 text-[11px] text-slate-500">How much could it matter?</div>
              </div>

              <div className="rounded-xl bg-white p-3 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <Target className="w-4 h-4 text-blue-600" />
                <div className="mt-1.5 text-xs font-semibold text-slate-900">Investigation routing</div>
                <div className="mt-0.5 text-[11px] text-slate-500">Where should attention go?</div>
              </div>
            </div>
          </div>

          {/* Pipeline Stages */}
          <div className="mx-auto my-3 h-5 w-px bg-blue-600/30" />

          <div className="grid grid-cols-5 gap-1.5 text-center text-[10px] font-bold text-slate-700">
            <div className="rounded-lg border border-slate-200 bg-white py-2">ACQUISITION</div>
            <div className="rounded-lg border border-slate-200 bg-white py-2">CONVERSION</div>
            <div className="rounded-lg border border-slate-200 bg-white py-2">CUSTOMER</div>
            <div className="rounded-lg border border-slate-200 bg-white py-2">REVENUE</div>
            <div className="rounded-lg border border-blue-600/30 bg-blue-50 py-2 text-blue-600">VALUE</div>
          </div>

          <p className="mt-4 text-center text-xs text-slate-500 font-medium">
            From fragmented activity to trustworthy revenue signals.
          </p>
        </div>
      </div>
    </section>
  );
}
