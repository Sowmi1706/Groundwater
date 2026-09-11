import React, { useState } from 'react';
import { PhoneMockup } from './PhoneMockup';
import { Smartphone, Sparkles, Layers, Maximize2, X, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

interface ScreensGridProps {
  language: 'en' | 'ta';
}

export const ScreensGridSection: React.FC<ScreensGridProps> = ({ language }) => {
  const [activeModalScreen, setActiveModalScreen] = useState<number | null>(null);
  const isTa = language === 'ta';

  const screens = [1, 2, 3, 4, 5, 6] as const;

  return (
    <section className="my-10 relative">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cyan-500/20 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
              <Smartphone className="w-4 h-4" />
            </span>
            <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider uppercase">
              HIGH-FIDELITY FLUTTER PROTOTYPE SHOWCASE
            </span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display tracking-tight">
            📱 Main UI Screens – Hackathon Prototype
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
            Arranged in 3 × 2 Grid • Touch-Responsive Mockups
          </span>
          <span className="text-xs bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30 font-mono font-semibold">
            6 Core Screens
          </span>
        </div>
      </div>

      {/* 3 × 2 Grid of Realistic Smartphone Mockups */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
        {screens.map((screenNum) => (
          <div key={screenNum} className="w-full flex justify-center">
            <PhoneMockup
              screenIndex={screenNum}
              language={language}
              onExpand={(idx) => setActiveModalScreen(idx)}
            />
          </div>
        ))}
      </div>

      {/* Interactive Modal View for Detailed Screen Inspection */}
      {activeModalScreen !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-slate-900 border border-cyan-500/40 rounded-3xl p-6 shadow-2xl">
            {/* Modal Controls */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                  SCREEN 0{activeModalScreen} INSPECTOR
                </span>
                <span className="text-xs text-slate-400">Interactive Preview</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalScreen(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content - Centered Phone */}
            <div className="flex justify-center my-2">
              <div className="scale-105 transform origin-top">
                <PhoneMockup
                  screenIndex={activeModalScreen as 1 | 2 | 3 | 4 | 5 | 6}
                  language={language}
                />
              </div>
            </div>

            {/* Navigation between screens inside modal */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-300">
              <button
                type="button"
                onClick={() => setActiveModalScreen((prev) => (prev && prev > 1 ? prev - 1 : 6))}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
              >
                <ChevronLeft className="w-4 h-4" /> Prev Screen
              </button>
              <span className="font-mono text-cyan-400">{activeModalScreen} of 6</span>
              <button
                type="button"
                onClick={() => setActiveModalScreen((prev) => (prev && prev < 6 ? prev + 1 : 1))}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
              >
                Next Screen <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
