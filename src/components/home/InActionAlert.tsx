"use client";

import React, { useState } from "react";
import { AlertCircle, ArrowDownRight, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";

export function InActionAlert() {
  const [activeTab, setActiveTab] = useState<"alert1" | "alert2">("alert1");

  return (
    <section id="in-action" className="relative bg-slate-950 py-20 md:py-28 text-white overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold tracking-wider text-blue-400 uppercase">
            <span>PRIMERIGOR IN ACTION</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            From Data to Something Your Team Can Investigate.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            A useful Revenue Intelligence system should not stop at showing metrics. It should help teams understand what changed, where to investigate and who should look at it next.
          </p>
        </div>

        {/* Interactive Alert Showcase Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          {/* Main Dark Alert Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
            {/* Header with High Alert Pill */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <div className="text-xs font-bold tracking-widest text-blue-400 uppercase">REVENUE SIGNAL ALERT</div>
                <div className="mt-1.5 text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <span>Signal inconsistency detected</span>
                </div>
              </div>
              <span className="rounded-full border border-red-500/40 bg-red-500/20 px-3 py-1 text-xs font-bold text-red-300">
                HIGH SEVERITY
              </span>
            </div>

            {/* 3 Metric Box Columns */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-[#0F172A] p-4">
                <div className="text-xs text-slate-400 font-medium">CRM Qualified Customers</div>
                <div className="mt-3 flex items-end justify-between gap-2">
                  <span className="font-mono text-2xl font-bold text-white">146</span>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Stable
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-red-500/30 bg-[#0F172A] p-4">
                <div className="text-xs text-slate-400 font-medium">Google Ads Imported Qualified</div>
                <div className="mt-3 flex items-end justify-between gap-2">
                  <span className="font-mono text-2xl font-bold text-white">89</span>
                  <span className="text-xs font-semibold text-red-400 flex items-center gap-0.5">
                    <ArrowDownRight className="w-3.5 h-3.5" /> ↓39%
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0F172A] p-4">
                <div className="text-xs text-slate-400 font-medium">Website Lead Volume</div>
                <div className="mt-3 flex items-end justify-between gap-2">
                  <span className="font-mono text-2xl font-bold text-white">521</span>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Stable
                  </span>
                </div>
              </div>
            </div>

            {/* Recommended Action Routing */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-white/[0.04] p-3.5 border border-white/5">
                <div className="text-[11px] text-slate-400">Likely investigation area</div>
                <div className="mt-1 text-xs font-semibold text-white">CRM → Google Ads offline flow</div>
              </div>

              <div className="rounded-xl bg-white/[0.04] p-3.5 border border-white/5">
                <div className="text-[11px] text-slate-400">Recommended owner</div>
                <div className="mt-1 text-xs font-semibold text-white">Growth / Analytics Team</div>
              </div>

              <div className="rounded-xl bg-white/[0.04] p-3.5 border border-white/5">
                <div className="text-[11px] text-slate-400">Commercial Priority</div>
                <div className="mt-1 text-xs font-semibold text-white">High ($42k MRR at risk)</div>
              </div>
            </div>

            <div className="mt-5 text-[11px] text-slate-500 italic">
              Illustrative real-time anomaly detection example.
            </div>
          </div>

          {/* Right Insights Cards */}
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <div className="text-xs font-bold tracking-wider text-blue-400 uppercase flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-blue-400" />
                <span>WHAT PRIMERIGOR NOTICED</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Website and CRM lead volumes remained completely stable, but qualified conversion events reaching the advertising platform fell sharply by 39%.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <div className="text-xs font-bold tracking-wider text-blue-400 uppercase flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>WHAT THIS SUGGESTS</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                The issue exists in the offline conversion API signal flow rather than actual customer acquisition performance. Fixing this prevents ad algorithms from mis-optimizing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
