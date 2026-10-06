"use client";

import React from "react";
import { Boxes, Database, Activity, Target, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Boxes,
      title: "Connect",
      description: "Bring relevant commercial signals together.",
    },
    {
      number: "02",
      icon: Database,
      title: "Reconcile",
      description: "Check whether important systems agree.",
    },
    {
      number: "03",
      icon: Activity,
      title: "Detect",
      description: "Find anomalies, gaps and performance changes.",
    },
    {
      number: "04",
      icon: Target,
      title: "Prioritize",
      description: "Rank issues by commercial importance.",
    },
    {
      number: "05",
      icon: ArrowRight,
      title: "Act",
      description: "Direct the relevant team with better context.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#FAFAFC] py-20 md:py-28 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-50/80 px-3.5 py-1.5 text-xs font-bold tracking-wider text-blue-600 uppercase">
            <span>HOW PRIMERIGOR WORKS</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            From Fragmented Signals to Clearer Decisions.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            PrimeRigor brings relevant commercial signals together, checks whether systems agree, detects meaningful changes, prioritizes what deserves attention and routes investigation toward the right team.
          </p>
        </div>

        {/* 5 Step Cards */}
        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-600/40 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-blue-600/60">
                    {step.number}
                  </span>
                  <Icon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>
                <div className="mt-8 text-xs font-bold uppercase tracking-wider text-slate-900">
                  {step.title}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {step.description}
                </p>

                {idx < 4 && (
                  <ArrowRight className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-4 h-4 text-blue-600/60 bg-white rounded-full p-0.5 border border-slate-200" />
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Motto */}
        <div className="mt-12 flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
          <span className="h-px w-10 bg-blue-600" />
          <span>Evidence first. Recommendations second.</span>
          <span className="h-px w-10 bg-blue-600" />
        </div>
      </div>
    </section>
  );
}
