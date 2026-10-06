"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 lg:py-16 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 grid-cols-3 items-end gap-1 rounded-lg bg-blue-600/10 p-1.5">
                <span className="h-2.5 rounded-sm bg-blue-600" />
                <span className="h-4 rounded-sm bg-blue-600" />
                <span className="h-5.5 rounded-sm bg-blue-600" />
              </span>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                PrimeRigor
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
              PrimeRigor helps digital-first businesses connect acquisition, customer and revenue signals to understand what drives revenue and where performance may be breaking.
            </p>
          </div>

          {/* Solutions Column */}
          <div>
            <div className="text-xs font-bold tracking-wider text-slate-900 uppercase">Solutions</div>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              <li><a href="#revenue-intelligence" className="hover:text-blue-600 transition-colors">Signal Audit</a></li>
              <li><a href="#how-it-works" className="hover:text-blue-600 transition-colors">Measurement Setup</a></li>
              <li><a href="#in-action" className="hover:text-blue-600 transition-colors">Performance Analysis</a></li>
              <li><a href="#solutions" className="hover:text-blue-600 transition-colors">Health Monitoring</a></li>
            </ul>
          </div>

          {/* Platform Column */}
          <div>
            <div className="text-xs font-bold tracking-wider text-slate-900 uppercase">Platform</div>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              <li><a href="#problem" className="hover:text-blue-600 transition-colors">The Problem</a></li>
              <li><a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a></li>
              <li><a href="#in-action" className="hover:text-blue-600 transition-colors">In Action Alert</a></li>
              <li><Link href="/login" className="hover:text-blue-600 transition-colors">User Auth Portal</Link></li>
            </ul>
          </div>

          {/* Legal / Account Column */}
          <div>
            <div className="text-xs font-bold tracking-wider text-slate-900 uppercase">Account & Legal</div>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              <li><Link href="/login" className="hover:text-blue-600 transition-colors">Log In</Link></li>
              <li><Link href="/signup" className="hover:text-blue-600 transition-colors">Sign Up</Link></li>
              <li><a href="#privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>© {new Date().getFullYear()} PrimeRigor Inc. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#top" className="hover:text-slate-600 transition-colors">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
