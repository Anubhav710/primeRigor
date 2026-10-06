"use client";

import React from "react";
import Link from "next/link";
import { FileSearch, Boxes, LineChart, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RevenueIntelligence() {
  const offerings = [
    {
      code: "01 — DIAGNOSE",
      title: "Revenue Signal Audit",
      description: "Find missing, inconsistent or disconnected signals between acquisition and commercial outcomes.",
      icon: FileSearch,
    },
    {
      code: "02 — BUILD",
      title: "Revenue Measurement Setup",
      description: "Connect acquisition activity with customer and revenue outcomes across your measurement stack.",
      icon: Boxes,
    },
    {
      code: "03 — UNDERSTAND",
      title: "Revenue Performance Analysis",
      description: "Analyze customer quality, funnel changes and revenue performance across channels and cohorts.",
      icon: LineChart,
    },
    {
      code: "04 — MONITOR",
      title: "Measurement Health Monitoring",
      description: "Continuously check whether important commercial signals continue behaving as expected.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="solutions" className="bg-white py-20 md:py-28 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-50/80 px-3.5 py-1.5 text-xs font-bold tracking-wider text-blue-600 uppercase">
            <span>REVENUE INTELLIGENCE</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Understand the Signals Behind Revenue.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            PrimeRigor can diagnose measurement problems, improve connections between systems, analyze commercial performance and monitor signal health over time.
          </p>
        </div>

        {/* 4 Offering Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {offerings.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article
                key={idx}
                className="group rounded-2xl border border-slate-200 bg-[#FAFAFC] p-6 sm:p-7 transition-all hover:border-blue-600/40 hover:shadow-md hover:bg-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-blue-600">
                    {item.code}
                  </span>
                </div>

                <h3 className="mt-6 text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>

                <Link
                  href="/signup"
                  className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-200 pt-7">
          <span className="text-xs sm:text-sm text-slate-600 font-medium">
            Not sure where to start? Begin with a Revenue Signal Audit.
          </span>
          <Link href="/signup">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold h-11 px-5 rounded-lg text-xs sm:text-sm flex items-center gap-2 shadow-sm">
              <span>Explore Revenue Intelligence</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
