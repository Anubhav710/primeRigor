"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X, User, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto flex h-[72px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="grid h-8 w-8 grid-cols-3 items-end gap-1 rounded-lg bg-blue-600/10 p-1.5 transition-transform group-hover:scale-105">
            <span className="h-2.5 rounded-sm bg-blue-600" />
            <span className="h-4 rounded-sm bg-blue-600" />
            <span className="h-5.5 rounded-sm bg-blue-600" />
          </span>
          <span className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
            PrimeRigor
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
          <div className="relative group cursor-pointer">
            <button className="flex items-center gap-1 hover:text-blue-600 transition-colors py-2">
              Solutions <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
            </button>
            {/* Solutions Dropdown Menu */}
            <div className="absolute top-full left-0 hidden group-hover:block w-56 pt-2">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 text-xs space-y-1">
                <a href="#revenue-intelligence" className="block p-2 rounded-lg hover:bg-slate-50 font-semibold text-slate-900">
                  Revenue Intelligence Audit
                </a>
                <a href="#how-it-works" className="block p-2 rounded-lg hover:bg-slate-50 font-semibold text-slate-900">
                  Signal Quality Monitoring
                </a>
                <a href="#in-action" className="block p-2 rounded-lg hover:bg-slate-50 font-semibold text-slate-900">
                  Commercial Anomaly Detection
                </a>
              </div>
            </div>
          </div>
          <a href="#problem" className="hover:text-blue-600 transition-colors">
            Problem
          </a>
          <a href="#how-it-works" className="hover:text-blue-600 transition-colors">
            How It Works
          </a>
          <a href="#solutions" className="hover:text-blue-600 transition-colors">
            Solutions
          </a>
          <Link href="/admin/users" className="hover:text-blue-600 transition-colors flex items-center gap-1 text-blue-600 font-semibold">
            <ShieldAlert className="w-4 h-4 text-blue-600" />
            <span>Admin Panel</span>
          </Link>
        </nav>

        {/* Auth & CTA Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" className="text-sm font-semibold text-slate-700 hover:text-blue-600">
              <User className="w-4 h-4 mr-1.5" />
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold h-10 px-4 rounded-lg flex items-center gap-2 shadow-sm shadow-blue-600/20">
              <span>Work With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <a
            href="#problem"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-blue-600 py-1"
          >
            Problem
          </a>
          <a
            href="#how-it-works"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-blue-600 py-1"
          >
            How It Works
          </a>
          <a
            href="#solutions"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-blue-600 py-1"
          >
            Solutions
          </a>
          <Link
            href="/admin/users"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-bold text-blue-600 py-1"
          >
            Admin Panel
          </Link>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full justify-center">
                Log In
              </Button>
            </Link>
            <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-blue-600 text-white justify-center">
                Work With Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
