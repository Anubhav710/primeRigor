"use client";

import React, { useState } from "react";
import { Check, ShieldCheck } from "lucide-react";

export function BusinessModels() {
  const [selectedTab, setSelectedTab] = useState<"saas" | "ecom" | "apps" | "marketplace">("saas");

  const tabData = {
    saas: {
      stages: ["Acquire", "Trial / Demo", "Subscription", "Renewal & Expansion"],
      metric: "Net Revenue Retention & LTV:CAC Alignment",
      quote: "Connect trial activations with subscription MRR and cohort expansion rates.",
    },
    ecom: {
      stages: ["Ad Click", "Storefront Cart", "Checkout Payment", "Repeat Purchase"],
      metric: "ROAS vs Contribution Margin Reconciled",
      quote: "Ensure ad network reported conversions align with actual settled bank revenue.",
    },
    apps: {
      stages: ["Install", "In-App Event", "Paywall Conversion", "LTV Curve"],
      metric: "ATT / SKAdNetwork Attribution Re-Verification",
      quote: "Bridge iOS privacy measurement gaps with actual back-end billing events.",
    },
    marketplace: {
      stages: ["Buyer / Seller Lead", "Listing Match", "GMV Transaction", "Take Rate Fee"],
      metric: "Dual-Sided Liquidity Signal Tracking",
      quote: "Verify supply & demand acquisition costs against realized transaction fees.",
    },
  };

  const active = tabData[selectedTab];

  return (
    <section className="bg-white py-20 md:py-28 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-50/80 px-3.5 py-1.5 text-xs font-bold tracking-wider text-blue-600 uppercase">
            <span>BUILT FOR DIGITAL-FIRST BUSINESSES</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Different Customer Journeys. The Same Revenue Question.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            PrimeRigor adapts to how your business acquires, converts and monetizes customers. The journey may differ, but the underlying challenge remains the same: understanding where value is created, lost or becoming harder to measure.
          </p>
        </div>

        {/* Business Model Interactive Selector Card */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-[#FAFAFC] p-5 sm:p-7">
          {/* Tab Selector */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <button
              onClick={() => setSelectedTab("saas")}
              className={`min-h-11 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-all ${
                selectedTab === "saas"
                  ? "border-blue-600/40 bg-blue-50 text-blue-600 shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:text-slate-900"
              }`}
            >
              SaaS
            </button>
            <button
              onClick={() => setSelectedTab("ecom")}
              className={`min-h-11 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-all ${
                selectedTab === "ecom"
                  ? "border-blue-600/40 bg-blue-50 text-blue-600 shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:text-slate-900"
              }`}
            >
              Ecommerce
            </button>
            <button
              onClick={() => setSelectedTab("apps")}
              className={`min-h-11 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-all ${
                selectedTab === "apps"
                  ? "border-blue-600/40 bg-blue-50 text-blue-600 shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:text-slate-900"
              }`}
            >
              Apps
            </button>
            <button
              onClick={() => setSelectedTab("marketplace")}
              className={`min-h-11 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-all ${
                selectedTab === "marketplace"
                  ? "border-blue-600/40 bg-blue-50 text-blue-600 shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:text-slate-900"
              }`}
            >
              Marketplace
            </button>
          </div>

          {/* Active Flow Pipeline Display */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {active.stages.map((stage, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-center text-xs font-bold text-slate-900 shadow-sm flex items-center justify-center gap-2"
              >
                <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px]">
                  {i + 1}
                </span>
                <span>{stage}</span>
              </div>
            ))}
          </div>

          {/* Metric Details */}
          <div className="mt-6 rounded-xl border border-blue-600/20 bg-blue-50/60 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold tracking-wider text-blue-600 uppercase">SIGNAL FOCUS</div>
              <div className="mt-1 text-sm font-bold text-slate-900">{active.metric}</div>
              <p className="mt-0.5 text-xs text-slate-600">{active.quote}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-600 border border-blue-200 shrink-0">
              <Check className="w-3.5 h-3.5" /> Ready Engine
            </span>
          </div>
        </div>

        {/* Security / Minimal Access Statement */}
        <div className="mt-6 rounded-2xl bg-blue-50/70 p-6 md:flex md:items-center md:justify-between md:gap-6 border border-blue-100">
          <div>
            <div className="text-sm font-bold text-slate-900">Analyze what matters. Not everything.</div>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              PrimeRigor requests only the data necessary for the specific use case. Privacy & security are enforced at every step.
            </p>
          </div>
          <ShieldCheck className="w-8 h-8 text-blue-600 shrink-0 mt-4 md:mt-0" />
        </div>
      </div>
    </section>
  );
}
