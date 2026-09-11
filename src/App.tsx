import React, { useState } from 'react';
import { HeaderBanner } from './components/HeaderBanner';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { ScreensGridSection } from './components/ScreensGridSection';
import { ExtraFeaturesSection } from './components/ExtraFeaturesSection';
import { ArchitectureAndTechSection } from './components/ArchitectureAndTechSection';
import { BottomSdgSection } from './components/BottomSdgSection';
import {
  Compass,
  Layers,
  Smartphone,
  Flame,
  Network,
  Globe2,
  Printer,
  ChevronUp,
  Award
} from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'ta'>('en');

  const handlePrintPoster = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060c18] text-slate-100 relative bg-grid-pattern selection:bg-cyan-500 selection:text-black">
      {/* Ambient background glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Presentation Quick Jump Bar (Screen only, hidden in print) */}
      <nav
        id="quick-nav"
        className="no-print sticky top-3 z-40 max-w-fit mx-auto px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-xl flex items-center gap-1.5 sm:gap-3 text-xs"
      >
        <div className="flex items-center gap-1.5 pr-2 border-r border-slate-700 font-mono text-cyan-400 font-bold text-[11px]">
          <Award className="w-3.5 h-3.5" /> SIH Poster
        </div>
        <button
          type="button"
          onClick={() => scrollToSection('header')}
          className="hover:text-cyan-300 transition px-2 py-1 rounded hover:bg-slate-800"
        >
          DWLR Sensor
        </button>
        <button
          type="button"
          onClick={() => scrollToSection('problem-solution')}
          className="hover:text-cyan-300 transition px-2 py-1 rounded hover:bg-slate-800"
        >
          Problems & Solution
        </button>
        <button
          type="button"
          onClick={() => scrollToSection('mobile-screens')}
          className="hover:text-cyan-300 transition px-2 py-1 rounded hover:bg-slate-800 font-semibold text-cyan-300"
        >
          📱 6 UI Screens
        </button>
        <button
          type="button"
          onClick={() => scrollToSection('winning-features')}
          className="hover:text-cyan-300 transition px-2 py-1 rounded hover:bg-slate-800 text-amber-300"
        >
          🔥 Extra Features
        </button>
        <button
          type="button"
          onClick={() => scrollToSection('architecture')}
          className="hover:text-cyan-300 transition px-2 py-1 rounded hover:bg-slate-800"
        >
          Architecture & Stack
        </button>
        <button
          type="button"
          onClick={() => scrollToSection('sdg-impact')}
          className="hover:text-cyan-300 transition px-2 py-1 rounded hover:bg-slate-800"
        >
          SDGs
        </button>

        <button
          type="button"
          onClick={handlePrintPoster}
          className="ml-1 px-2.5 py-1 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-[11px] flex items-center gap-1 transition shadow-sm"
          title="Print or Export to PDF"
        >
          <Printer className="w-3 h-3" /> Print
        </button>
      </nav>

      {/* Main Infographic Poster Container */}
      <main className="poster-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
        {/* Header with Title, Subtitle, Tagline, DWLR Visual Graphic */}
        <div id="header">
          <HeaderBanner
            language={language}
            setLanguage={setLanguage}
            onPrintPoster={handlePrintPoster}
          />
        </div>

        {/* Problem Section + Solution Section */}
        <div id="problem-solution">
          <ProblemSolutionSection language={language} />
        </div>

        {/* Main Section: 6 Mobile App Screens in 3x2 Grid */}
        <div id="mobile-screens">
          <ScreensGridSection language={language} />
        </div>

        {/* Extra Features Section: 12 Winning Features */}
        <div id="winning-features">
          <ExtraFeaturesSection language={language} />
        </div>

        {/* System Architecture Section + Tech Stack */}
        <div id="architecture">
          <ArchitectureAndTechSection />
        </div>

        {/* Bottom Section: Tagline & 4 SDGs */}
        <div id="sdg-impact">
          <BottomSdgSection language={language} />
        </div>
      </main>
    </div>
  );
}
