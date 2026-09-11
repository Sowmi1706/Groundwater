import React, { useState } from 'react';
import {
  Layers,
  ArrowRight,
  Server,
  Database,
  Brain,
  Smartphone,
  MapPin,
  Cloud,
  Radio,
  Cpu,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';
import { ARCHITECTURE_STEPS } from '../data/groundwatchData';

export const ArchitectureAndTechSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const icons = [
    <Radio className="w-5 h-5 text-cyan-400" />,
    <Server className="w-5 h-5 text-blue-400" />,
    <Database className="w-5 h-5 text-indigo-400" />,
    <Brain className="w-5 h-5 text-emerald-400" />,
    <Smartphone className="w-5 h-5 text-teal-400" />,
    <MapPin className="w-5 h-5 text-sky-400" />,
    <Cloud className="w-5 h-5 text-cyan-400" />
  ];

  const techStackItems = [
    { label: 'DWLR Sensor', category: 'Hardware / Edge' },
    { label: 'IoT/GSM/LoRa', category: 'Telemetry Protocol' },
    { label: 'Flutter', category: 'Cross-Platform UI' },
    { label: 'Python', category: 'Core Language' },
    { label: 'FastAPI/Django', category: 'Backend Engine' },
    { label: 'PostgreSQL/PostGIS', category: 'Spatial Database' },
    { label: 'PyTorch/Scikit-learn', category: 'AI & ML Pipeline' },
    { label: 'GIS', category: 'Spatial Cartography' },
    { label: 'AWS', category: 'Cloud Infrastructure' }
  ];

  return (
    <section className="my-10 space-y-8">
      {/* ---------------- SYSTEM ARCHITECTURE SECTION ---------------- */}
      <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#091526]/80 via-[#07111e]/90 to-[#030810] p-6 lg:p-8 backdrop-blur-xl shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cyan-500/20 pb-4 mb-6">
          <div>
            <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider uppercase bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30">
              ENTERPRISE & CLOUD INFRASTRUCTURE
            </span>
            <h2 className="mt-2 text-2xl lg:text-3xl font-black text-white font-display">
              System Architecture Diagram
            </h2>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            High-Throughput Distributed Telemetry & Spatial Ingestion
          </span>
        </div>

        {/* Clean Interactive Architecture Flowchart */}
        <div className="relative">
          {/* Architecture Pipeline Stepper */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-2.5">
            {ARCHITECTURE_STEPS.map((step, idx) => {
              const isSelected = idx === activeStep;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer p-3 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-102 ring-1 ring-cyan-400/40'
                      : 'bg-slate-950/60 border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[11px] font-bold text-cyan-400">
                        {step.num}
                      </span>
                      <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                        {icons[idx]}
                      </div>
                    </div>
                    <h3 className="text-xs font-bold text-white leading-tight">
                      {step.name}
                    </h3>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-cyan-300/80 font-mono">
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Deep Detail Card */}
          <div className="mt-4 p-4 rounded-2xl bg-slate-950/90 border border-cyan-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                  STAGE {ARCHITECTURE_STEPS[activeStep].num}
                </span>
                <h4 className="text-sm font-bold text-white">
                  {ARCHITECTURE_STEPS[activeStep].name}
                </h4>
              </div>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                {ARCHITECTURE_STEPS[activeStep].detail}
              </p>
            </div>
            <div className="shrink-0 bg-slate-900 p-3 rounded-xl border border-slate-800 font-mono text-xs">
              <span className="text-[10px] text-slate-400 block mb-0.5">Stack Components:</span>
              <span className="text-cyan-300 font-semibold">
                {ARCHITECTURE_STEPS[activeStep].tech}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- TECH STACK SECTION ---------------- */}
      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 backdrop-blur-xl">
        <div className="flex items-center gap-2 mb-4">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
            TECH STACK
          </span>
        </div>

        {/* Display as requested:
            DWLR Sensor | IoT/GSM/LoRa | Flutter | Python | FastAPI/Django | PostgreSQL/PostGIS | PyTorch/Scikit-learn | GIS | AWS
         */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2">
          {techStackItems.map((item, idx) => (
            <React.Fragment key={item.label}>
              <div className="group relative px-3.5 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/20 hover:border-cyan-400/60 transition shadow-sm hover:shadow-cyan-500/10">
                <span className="text-xs font-bold text-slate-100 group-hover:text-cyan-300 transition">
                  {item.label}
                </span>
                <span className="block text-[9px] text-slate-400 font-mono">
                  {item.category}
                </span>
              </div>
              {idx < techStackItems.length - 1 && (
                <span className="text-slate-600 font-bold hidden sm:inline-block">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
