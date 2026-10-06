"use client";

import React from "react";
import { BarChart3, Boxes, Users, Database, AlertTriangle } from "lucide-react";

export function ProblemSection() {
  return (
    <section id="problem" className="bg-white py-20 md:py-28 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-50/80 px-3.5 py-1.5 text-xs font-bold tracking-wider text-blue-600 uppercase">
            <span>THE PROBLEM</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Your Revenue Doesn't Live in One Dashboard.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Marketing understands acquisition. Product understands behaviour. Sales understands pipeline. Finance understands revenue. Important problems often appear between those systems.
          </p>
        </div>

        {/* System Silo Flow Diagram */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-[#FAFAFC] p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="relative">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <BarChart3 className="w-6 h-6 text-blue-600" />
                <div className="mt-4 text-xs font-bold tracking-wider text-slate-900">MARKETING</div>
                <div className="mt-1 text-xs text-slate-500">Acquisition</div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border-[3px] border-blue-600 bg-white" />
                <span className="text-xs font-semibold text-slate-800">Acquire</span>
                <div className="hidden h-px flex-1 bg-blue-600/30 md:block" />
              </div>
            </div>

            <div className="relative">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <Boxes className="w-6 h-6 text-blue-600" />
                <div className="mt-4 text-xs font-bold tracking-wider text-slate-900">PRODUCT</div>
                <div className="mt-1 text-xs text-slate-500">Activation & Conversion</div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border-[3px] border-blue-600 bg-white" />
                <span className="text-xs font-semibold text-slate-800">Convert</span>
                <div className="hidden h-px flex-1 bg-blue-600/30 md:block" />
              </div>
            </div>

            <div className="relative">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <Users className="w-6 h-6 text-blue-600" />
                <div className="mt-4 text-xs font-bold tracking-wider text-slate-900">SALES</div>
                <div className="mt-1 text-xs text-slate-500">Pipeline</div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border-[3px] border-blue-600 bg-white" />
                <span className="text-xs font-semibold text-slate-800">Customer</span>
                <div className="hidden h-px flex-1 bg-blue-600/30 md:block" />
              </div>
            </div>

            <div className="relative">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <Database className="w-6 h-6 text-blue-600" />
                <div className="mt-4 text-xs font-bold tracking-wider text-slate-900">FINANCE</div>
                <div className="mt-1 text-xs text-slate-500">Revenue</div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border-[3px] border-blue-600 bg-white" />
                <span className="text-xs font-semibold text-slate-800">Revenue</span>
              </div>
            </div>
          </div>

          {/* Silo Callout */}
          <div className="mx-auto mt-8 max-w-xl rounded-xl border border-blue-600/20 bg-blue-50/70 px-5 py-4 text-center">
            <div className="text-sm font-semibold text-blue-700 flex items-center justify-center gap-2">
              <AlertTriangle className="w-4 h-4 text-blue-600" />
              <span>Visibility becomes harder between systems</span>
            </div>
            <p className="mt-1 text-xs text-slate-600">
              Each system explains part of the journey. None explains the entire commercial picture alone.
            </p>
          </div>
        </div>

        {/* 3 Core Questions */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="border-t border-slate-200 pt-5">
            <div className="font-mono text-3xl font-bold text-blue-600/80">01</div>
            <div className="mt-3 text-lg font-semibold text-slate-900">What changed?</div>
            <div className="mt-1.5 text-sm text-slate-500 leading-relaxed">Identify the measurable shift across marketing and financial channels.</div>
          </div>

          <div className="border-t border-slate-200 pt-5">
            <div className="font-mono text-3xl font-bold text-blue-600/80">02</div>
            <div className="mt-3 text-lg font-semibold text-slate-900">Where did it change?</div>
            <div className="mt-1.5 text-sm text-slate-500 leading-relaxed">Locate the affected part of the revenue journey between tools.</div>
          </div>

          <div className="border-t border-slate-200 pt-5">
            <div className="font-mono text-3xl font-bold text-blue-600/80">03</div>
            <div className="mt-3 text-lg font-semibold text-slate-900">How much could it matter?</div>
            <div className="mt-1.5 text-sm text-slate-500 leading-relaxed">Understand the possible commercial impact before making costly assumptions.</div>
          </div>
        </div>

        {/* WHY THIS MATTERS */}
        <div className="mt-12 rounded-2xl bg-blue-50/60 p-6 md:p-8 border border-blue-100">
          <div className="text-xs font-bold tracking-widest text-blue-600 uppercase">WHY THIS MATTERS</div>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            <div>
              <div className="font-semibold text-slate-900 leading-snug">Cheap leads can still become expensive customers.</div>
              <div className="mt-1.5 text-xs text-slate-500">Acquisition ≠ customer economics</div>
            </div>

            <div>
              <div className="font-semibold text-slate-900 leading-snug">Platform conversions can rise while revenue disagrees.</div>
              <div className="mt-1.5 text-xs text-slate-500">Reported conversion ≠ commercial outcome</div>
            </div>

            <div>
              <div className="font-semibold text-slate-900 leading-snug">Revenue can fall before anyone knows where the problem started.</div>
              <div className="mt-1.5 text-xs text-slate-500">Outcome changes can originate upstream</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
