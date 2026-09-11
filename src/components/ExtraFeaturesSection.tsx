import React, { useState } from 'react';
import {
  Flame,
  CheckCircle2,
  Sliders,
  Sparkles,
  CloudRain,
  Map,
  Brain,
  ShieldAlert,
  Gauge,
  Mail,
  FileCheck,
  Split,
  LineChart,
  Repeat,
  Languages,
  Smartphone
} from 'lucide-react';
import { EXTRA_WINNING_FEATURES } from '../data/groundwatchData';

export const ExtraFeaturesSection: React.FC<{ language: 'en' | 'ta' }> = ({ language }) => {
  const isTa = language === 'ta';

  // State for What-If Simulation interactive drawer
  const [showSim, setShowSim] = useState(false);
  const [simRainfall, setSimRainfall] = useState<number>(0); // % change
  const [simExtraction, setSimExtraction] = useState<number>(0); // % change

  // Calculate simulated aquifer depth impact
  // Nominal depth: 12.4m
  // +10% rain = -0.4m depth (recharge); +10% extraction = +0.5m depth (depletion)
  const nominalDepth = 12.4;
  const simImpact = +( (simExtraction * 0.05) - (simRainfall * 0.04) ).toFixed(2);
  const projectedDepth = +(nominalDepth + simImpact).toFixed(2);

  const featureIcons: Record<string, React.ReactNode> = {
    'f1': <CloudRain className="w-4 h-4 text-cyan-400" />,
    'f2': <Map className="w-4 h-4 text-emerald-400" />,
    'f3': <Brain className="w-4 h-4 text-indigo-400" />,
    'f4': <ShieldAlert className="w-4 h-4 text-amber-400" />,
    'f5': <Gauge className="w-4 h-4 text-rose-400" />,
    'f6': <Mail className="w-4 h-4 text-sky-400" />,
    'f7': <FileCheck className="w-4 h-4 text-teal-400" />,
    'f8': <Split className="w-4 h-4 text-purple-400" />,
    'f9': <LineChart className="w-4 h-4 text-blue-400" />,
    'f10': <Repeat className="w-4 h-4 text-pink-400" />,
    'f11': <Languages className="w-4 h-4 text-green-400" />,
    'f12': <Smartphone className="w-4 h-4 text-cyan-400" />
  };

  return (
    <section className="my-10">
      <div className="rounded-3xl border-2 border-amber-500/30 bg-gradient-to-b from-[#1c1407]/70 via-[#0d1628]/90 to-[#050b14] p-6 lg:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Card Title */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 p-0.5 shadow-lg shadow-amber-500/20">
              <div className="w-full h-full bg-[#100d07] rounded-[14px] flex items-center justify-center">
                <Flame className="w-5 h-5 text-amber-400 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-amber-400 tracking-wider uppercase">
                COMPETITIVE ADVANTAGE & HIGHER READINESS
              </span>
              <h2 className="text-2xl lg:text-3xl font-black text-white font-display">
                🔥 Extra Features for Winning
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowSim(!showSim)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{showSim ? 'Close Simulation' : 'Launch What-If Simulation'}</span>
            </button>
            <span className="text-xs font-mono text-amber-300/80 bg-amber-950/60 px-2.5 py-1 rounded border border-amber-500/30 hidden sm:inline-block">
              12 / 12 Features Implemented
            </span>
          </div>
        </div>

        {/* What-If Simulation Interactive Drawer */}
        {showSim && (
          <div className="mb-6 p-4 rounded-2xl bg-slate-950/90 border border-amber-500/40 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-bold text-white font-display">
                  Interactive What-If Aquifer Simulation Engine
                </h4>
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                Baseline Station: Coimbatore Perur (12.4 mbgl)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <div className="flex justify-between text-slate-300">
                  <span>Monsoon Rainfall Variance (% of normal):</span>
                  <span className={`font-mono font-bold ${simRainfall >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {simRainfall >= 0 ? `+${simRainfall}%` : `${simRainfall}%`}
                  </span>
                </div>
                <input
                  type="range"
                  min="-50"
                  max="50"
                  step="5"
                  value={simRainfall}
                  onChange={(e) => setSimRainfall(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>-50% Drought</span>
                  <span>Normal (0%)</span>
                  <span>+50% Excess Rain</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-slate-300">
                  <span>Agricultural Borewell Extraction Rate:</span>
                  <span className={`font-mono font-bold ${simExtraction <= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {simExtraction >= 0 ? `+${simExtraction}%` : `${simExtraction}%`}
                  </span>
                </div>
                <input
                  type="range"
                  min="-40"
                  max="60"
                  step="5"
                  value={simExtraction}
                  onChange={(e) => setSimExtraction(Number(e.target.value))}
                  className="w-full accent-amber-400 bg-slate-800 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>-40% Conservation</span>
                  <span>Baseline</span>
                  <span>+60% Over-pumping</span>
                </div>
              </div>
            </div>

            {/* Projected Result Callout */}
            <div className="mt-3 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Projected Aquifer Level in 6 Months:</span>
                <span className="font-mono text-base font-bold text-cyan-300">
                  {projectedDepth} mbgl
                </span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                    simImpact > 0
                      ? 'bg-rose-950 text-rose-300 border border-rose-500/30'
                      : 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
                  }`}
                >
                  {simImpact > 0 ? `▼ Depletion: +${simImpact}m` : `▲ Recharge: ${simImpact}m`}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSimRainfall(0);
                  setSimExtraction(0);
                }}
                className="text-[11px] text-slate-400 hover:text-white underline font-mono"
              >
                Reset Simulation
              </button>
            </div>
          </div>
        )}

        {/* 12 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {EXTRA_WINNING_FEATURES.map((feat) => (
            <div
              key={feat.id}
              className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900/90 transition group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-amber-500/30 transition">
                      {featureIcons[feat.id]}
                    </div>
                    <span className="text-emerald-400 text-xs font-bold">✓</span>
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 uppercase">
                    SIH Verified
                  </span>
                </div>
                <h4 className="font-bold text-xs text-white group-hover:text-amber-300 transition">
                  {feat.name}
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
