import React from "react";
import { Navbar } from "@/components/home/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { RevenueIntelligence } from "@/components/home/RevenueIntelligence";
import { InActionAlert } from "@/components/home/InActionAlert";
import { BusinessModels } from "@/components/home/BusinessModels";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Footer } from "@/components/home/Footer";

export const metadata = {
  title: "PrimeRigor | AI Revenue Intelligence for Digital-First Businesses",
  description:
    "PrimeRigor helps digital-first businesses connect acquisition, customer and revenue signals to understand what drives revenue and where performance may be breaking.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white antialiased">
      <Navbar />
      <main id="top">
        <HeroSection />
        <ProblemSection />
        <HowItWorks />
        <RevenueIntelligence />
        <InActionAlert />
        <BusinessModels />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
