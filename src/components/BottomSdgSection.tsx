import React from 'react';
import { Globe, Droplets, Building2, CloudSun, Trees, Award, HeartHandshake } from 'lucide-react';
import { SDG_GOALS } from '../data/groundwatchData';

export const BottomSdgSection: React.FC<{ language: 'en' | 'ta' }> = ({ language }) => {
  const isTa = language === 'ta';

  const sdgIcons = {
    6: <Droplets className="w-6 h-6 text-white" />,
    11: <Building2 className="w-6 h-6 text-white" />,
    13: <CloudSun className="w-6 h-6 text-white" />,
    15: <Trees className="w-6 h-6 text-white" />
  };

  return (
    <footer className="mt-12 pt-8 pb-10 border-t border-cyan-500/20 bg-gradient-to-b from-transparent to-[#040913]">
      {/* Primary Keynote Tagline */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
          <Globe className="w-3.5 h-3.5 text-cyan-400" />
          <span>GOVERNANCE IMPACT & GLOBAL ALIGNMENT</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight leading-snug">
          “From real-time water-level data to intelligent groundwater decisions.”
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
          {isTa
            ? 'அடிமட்ட அளவில் பஞ்சாயத்துகள் மற்றும் மாவட்ட ஆட்சியர்கள் துல்லியமான நீர் சேமிப்பு முடிவுகளை எடுக்க உதவும் முழுமையான தளம்.'
            : 'Bridging the critical gap between subterranean hydrological sensors and timely district water governance policy.'}
        </p>
      </div>

      {/* 4 SDG Goals Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {SDG_GOALS.map((sdg) => (
          <div
            key={sdg.num}
            className="p-4 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md hover:border-cyan-500/40 transition group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white shadow-lg"
                  style={{ backgroundColor: sdg.color }}
                >
                  {sdgIcons[sdg.num as keyof typeof sdgIcons]}
                </div>
                <span className="font-mono text-xs font-bold text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                  SDG {sdg.num}
                </span>
              </div>
              <h4 className="font-bold text-sm text-white group-hover:text-cyan-300 transition">
                SDG {sdg.num} – {sdg.title}
              </h4>
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                {sdg.description}
              </p>
            </div>

            <div className="mt-4 pt-2.5 border-t border-slate-800/80">
              <span className="text-[10px] font-mono text-emerald-400 block font-semibold">
                Target Metric:
              </span>
              <span className="text-[11px] text-slate-300">
                {sdg.impactMetric}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Presentation Footer & Credentials Strip */}
      <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
            GW
          </div>
          <div>
            <p className="font-bold text-slate-200">Project GroundWatch • Smart India Hackathon Prototype</p>
            <p className="text-[11px] text-slate-400">
              CGWB Compliant DWLR Telemetry & Hydrological AI Forecaster
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-[11px] font-mono">
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> System Live: 15-Min Telemetry
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">Investor & Jury Demo Ready</span>
        </div>
      </div>
    </footer>
  );
};
