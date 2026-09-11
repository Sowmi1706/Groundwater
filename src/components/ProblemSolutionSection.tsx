import React from 'react';
import {
  TrendingDown,
  Clock,
  Database,
  CloudRain,
  AlertTriangle,
  HelpCircle,
  Radio,
  Cpu,
  Brain,
  BellRing,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { KEY_PROBLEMS, SOLUTION_STEPS } from '../data/groundwatchData';

interface ProblemSolutionProps {
  language: 'en' | 'ta';
}

export const ProblemSolutionSection: React.FC<ProblemSolutionProps> = ({ language }) => {
  const isTa = language === 'ta';

  const iconMap = {
    TrendingDown: TrendingDown,
    Clock: Clock,
    DatabaseZap: Database,
    CloudRain: CloudRain,
    AlertTriangle: AlertTriangle,
    HelpCircle: HelpCircle,
    Radio: Radio,
    Cpu: Cpu,
    Brain: Brain,
    BellRing: BellRing,
    CheckCircle2: CheckCircle2
  };

  return (
    <section className="my-8 space-y-10">
      {/* ---------------- PROBLEM SECTION ---------------- */}
      <div className="rounded-3xl border border-rose-500/20 bg-gradient-to-b from-[#180f1b]/70 via-[#100b14]/90 to-[#09070c] p-6 lg:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rose-500/20 pb-4 mb-6">
          <div>
            <span className="font-mono text-xs font-bold text-rose-400 tracking-wider uppercase bg-rose-950/80 px-2.5 py-1 rounded border border-rose-500/30">
              NATIONAL CHALLENGE ANALYSIS
            </span>
            <h2 className="mt-2 text-2xl lg:text-3xl font-extrabold text-white font-display">
              {isTa ? 'நிலத்தடி நீர் சந்திக்கும் முதன்மை சவால்கள்' : 'Key Groundwater Problems We Are Solving'}
            </h2>
          </div>
          <span className="text-xs text-rose-300/80 font-mono">
            India is the world's largest extractor of groundwater (~25% of global total)
          </span>
        </div>

        {/* 6 Key Groundwater Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {KEY_PROBLEMS.map((prob) => {
            const IconComponent = iconMap[prob.icon as keyof typeof iconMap] || AlertTriangle;
            return (
              <div
                key={prob.id}
                className="group relative p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-rose-500/40 transition-all duration-300 hover:bg-slate-900/90"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-950/80 border border-rose-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                    <IconComponent className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-100 group-hover:text-rose-200 transition">
                      {prob.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                      {prob.description}
                    </p>
                    <div className="mt-2.5 inline-flex items-center text-[10px] font-mono font-semibold text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-500/20">
                      Impact: {prob.stat}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------------- SOLUTION SECTION ---------------- */}
      <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#0b1b33]/80 via-[#071324]/90 to-[#040a12] p-6 lg:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute -top-10 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="border-b border-cyan-500/20 pb-4 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="font-mono text-xs font-bold text-cyan-300 tracking-wider uppercase bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30">
                INNOVATION BLUEPRINT & PIPELINE
              </span>
              <h2 className="mt-2 text-2xl lg:text-3xl font-extrabold text-white font-display">
                The GroundWatch Solution Framework
              </h2>
            </div>
            <div className="text-right">
              <span className="text-xs text-emerald-400 font-mono font-semibold bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/30">
                Zero-Latency Hydrological Intelligence
              </span>
            </div>
          </div>

          {/* Visual: Monitor → Analyse → Predict → Alert → Act */}
          <div className="mt-4 p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/30">
            <div className="text-center mb-3">
              <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                End-to-End Operational Lifecycle:
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-display tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                “Monitor → Analyse → Predict → Alert → Act”
              </h3>
            </div>

            {/* 5-Step Visual Flowchart */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 relative">
              {SOLUTION_STEPS.map((s, idx) => {
                const IconComponent = iconMap[s.icon as keyof typeof iconMap] || Sparkles;
                return (
                  <div
                    key={s.step}
                    className="relative flex flex-col items-center text-center p-3 rounded-xl bg-slate-900/80 border border-cyan-500/20 hover:border-cyan-400/50 transition group"
                  >
                    {/* Step indicator badge */}
                    <span className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold flex items-center justify-center mb-2">
                      0{s.step}
                    </span>
                    <IconComponent className="w-5 h-5 text-cyan-400 mb-1.5 group-hover:scale-110 transition" />
                    <h4 className="text-sm font-extrabold text-white">
                      {isTa ? s.verbTa : s.verb}
                    </h4>
                    <p className="text-[11px] text-cyan-300 font-semibold mt-0.5">
                      {s.headline}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1 leading-snug">
                      {s.description}
                    </p>

                    {/* Step Connector Arrow on Desktop */}
                    {idx < 4 && (
                      <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-cyan-400/60 pointer-events-none">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Holistic Solution Value Proposition Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-emerald-950/40 p-4 rounded-2xl border border-cyan-500/20">
          <div className="lg:col-span-8 space-y-1">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Integrated Multi-Modal Groundwater Intelligence
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              GroundWatch combines <strong>real-time DWLR telemetry</strong>, <strong>IMD gridded rainfall</strong>, <strong>PostGIS geospatial heatmaps</strong>, <strong>cloud computing (AWS)</strong>, and <strong>PyTorch Bi-LSTM deep learning</strong> to provide 24/7 groundwater monitoring, recharge estimation, depletion detection, predictive forecasting, and automated administrative alerts.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-2 justify-start lg:justify-end">
            <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30">
              ✓ Automated DWLR Data
            </span>
            <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/30">
              ✓ Rainfall-to-Recharge
            </span>
            <span className="text-[11px] font-mono text-teal-300 bg-teal-950/80 px-2.5 py-1 rounded border border-teal-500/30">
              ✓ AI Early-Warning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
