import React, { useState } from 'react';
import { Radio, Wifi, Zap, ArrowDown, Activity } from 'lucide-react';

export const DwlrSensorGraphic: React.FC<{
  currentDepth?: number;
  interactive?: boolean;
}> = ({ currentDepth = 12.4, interactive = true }) => {
  const [depthOffset, setDepthOffset] = useState<number>(0);
  const effectiveDepth = +(currentDepth + depthOffset).toFixed(1);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-[#0b1b33] via-[#071324] to-[#040913] p-4 lg:p-6 shadow-2xl backdrop-blur-xl">
      {/* Decorative top title */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-cyan-500/20 pb-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500"></span>
          </span>
          <span className="font-mono-telemetry text-cyan-300 font-semibold tracking-wider uppercase">
            DWLR Telemetry Observatory & Borehole Cross-Section
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono-telemetry text-slate-400">
          <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
            <Wifi className="w-3 h-3" /> GSM/LoRa: 4G LTE
          </span>
          <span className="text-cyan-400 font-bold bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
            Water Depth: {effectiveDepth} mbgl
          </span>
        </div>
      </div>

      {/* Cross-section SVG Graphic */}
      <div className="relative mt-4 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        <div className="lg:col-span-8 flex justify-center">
          <svg
            viewBox="0 0 680 340"
            className="w-full h-auto max-h-[310px] select-none filter drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#081b33" />
                <stop offset="100%" stopColor="#0e2a4a" />
              </linearGradient>
              <linearGradient id="soilGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2c221a" />
                <stop offset="35%" stopColor="#1f1813" />
                <stop offset="70%" stopColor="#16222b" />
                <stop offset="100%" stopColor="#0b1722" />
              </linearGradient>
              <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#0284c7" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#03457a" stopOpacity="0.95" />
              </linearGradient>
              <pattern id="soilTexture" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="0.7" fill="#4a3728" opacity="0.6" />
                <circle cx="15" cy="12" r="1.1" fill="#3a2e22" opacity="0.4" />
                <circle cx="10" cy="18" r="0.8" fill="#524333" opacity="0.5" />
              </pattern>
              <linearGradient id="casingGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="50%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
            </defs>

            {/* Surface Line at y=95 */}
            {/* Sky / Air Area above ground */}
            <rect x="0" y="0" width="680" height="95" fill="url(#skyGrad)" opacity="0.4" />
            <line x1="0" y1="95" x2="680" y2="95" stroke="#10b981" strokeWidth="3" opacity="0.8" />
            <text x="15" y="88" fill="#34d399" fontSize="10" fontWeight="600" fontFamily="sans-serif">
              Ground Surface (0.0 m)
            </text>

            {/* Geological Layers */}
            <rect x="0" y="95" width="680" height="245" fill="url(#soilGrad)" />
            <rect x="0" y="95" width="680" height="245" fill="url(#soilTexture)" />

            {/* Layer 1: Topsoil / Weathered Zone (95 - 145) */}
            <line x1="0" y1="145" x2="680" y2="145" stroke="#64748b" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4" />
            <text x="15" y="135" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
              Layer 1: Vadose Zone / Clayey Silt (0 - 8m)
            </text>

            {/* Layer 2: Fractured Semi-Confined Rock (145 - 200) */}
            <line x1="0" y1="200" x2="680" y2="200" stroke="#64748b" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4" />
            <text x="15" y="190" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
              Layer 2: Fractured Fissured Gneiss (8 - 18m)
            </text>

            {/* Layer 3: Deep Aquifer Zone (200 - 340) */}
            <text x="15" y="270" fill="#38bdf8" fontSize="9" fontWeight="600" fontFamily="sans-serif">
              Layer 3: Saturated Regional Aquifer Zone
            </text>

            {/* Aquifer Water Table Line at y=175 (effective depth representation) */}
            <path
              d="M 0 175 Q 170 172, 340 175 T 680 175 L 680 340 L 0 340 Z"
              fill="url(#waterGrad)"
              opacity="0.38"
            />
            {/* Animated wave line for water table */}
            <path
              d="M 0 175 Q 85 171, 170 175 T 340 175 T 510 175 T 680 175"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="2.5"
            >
              <animate attributeName="d" dur="6s" repeatCount="indefinite"
                values="
                  M 0 175 Q 85 171, 170 175 T 340 175 T 510 175 T 680 175;
                  M 0 175 Q 85 178, 170 175 T 340 175 T 510 173 T 680 175;
                  M 0 175 Q 85 171, 170 175 T 340 175 T 510 175 T 680 175
                "
              />
            </path>
            <text x="515" y="168" fill="#22d3ee" fontSize="10" fontWeight="bold" fontFamily="monospace">
              ▾ Water Table: {effectiveDepth} mbgl
            </text>

            {/* WELL BOREHOLE CASING & STRUCTURE at X=340 */}
            {/* Concrete Pad at surface */}
            <rect x="310" y="86" width="60" height="9" fill="#64748b" rx="2" />
            <rect x="315" y="82" width="50" height="4" fill="#475569" rx="1" />

            {/* Steel Well Casing Tube from y=80 down to y=320 */}
            <rect x="328" y="82" width="24" height="240" fill="url(#casingGrad)" stroke="#1e293b" strokeWidth="1" />
            {/* Well interior hollow */}
            <rect x="331" y="82" width="18" height="238" fill="#030b17" />

            {/* Well Water Column inside casing from y=175 to 320 */}
            <rect x="331" y="175" width="18" height="145" fill="url(#waterGrad)" opacity="0.9" />

            {/* Well Screen / Slotted Filter at bottom */}
            <g opacity="0.6">
              <line x1="326" y1="260" x2="354" y2="260" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="326" y1="270" x2="354" y2="270" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="326" y1="280" x2="354" y2="280" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="326" y1="290" x2="354" y2="290" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="326" y1="300" x2="354" y2="300" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="326" y1="310" x2="354" y2="310" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
            </g>

            {/* DWLR SURFACE TELEMETRY UNIT (Above well casing) */}
            {/* Well Head Cap / Enclosure */}
            <rect x="322" y="60" width="36" height="22" rx="3" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
            <circle cx="330" cy="71" r="2.5" fill="#22c55e" />
            <circle cx="338" cy="71" r="2.5" fill="#38bdf8" />
            <rect x="345" y="67" width="8" height="8" rx="1" fill="#1e293b" />

            {/* Solar Panel Assembly */}
            <line x1="332" y1="60" x2="315" y2="38" stroke="#94a3b8" strokeWidth="2" />
            <polygon points="290,36 335,28 342,42 297,50" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1.5" />
            {/* Solar grid lines */}
            <line x1="305" y1="34" x2="312" y2="48" stroke="#93c5fd" strokeWidth="0.8" opacity="0.7" />
            <line x1="320" y1="31" x2="327" y2="45" stroke="#93c5fd" strokeWidth="0.8" opacity="0.7" />

            {/* GSM / LoRa High Gain Antenna */}
            <line x1="352" y1="60" x2="368" y2="18" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="368" cy="18" r="2.5" fill="#22d3ee" />

            {/* Antenna RF Telemetry Waves radiating */}
            <path d="M 372 15 A 8 8 0 0 1 378 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.8">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M 376 11 A 14 14 0 0 1 386 27" fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.5">
              <animate attributeName="opacity" values="0.1;0.9;0.1" dur="2s" begin="0.4s" repeatCount="indefinite" />
            </path>
            <path d="M 380 7 A 20 20 0 0 1 394 30" fill="none" stroke="#22d3ee" strokeWidth="1.2" opacity="0.3">
              <animate attributeName="opacity" values="0;0.7;0" dur="2s" begin="0.8s" repeatCount="indefinite" />
            </path>

            {/* SUSPENSION CABLE & VENTED TUBE (from head unit down to sensor) */}
            <line x1="340" y1="82" x2="340" y2="280" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6 2" />

            {/* DWLR SUBMERSIBLE SENSOR PROBE (Hydrostatic Pressure Transducer) */}
            <g transform="translate(333, 275)">
              {/* Probe Body */}
              <rect x="0" y="0" width="14" height="34" rx="3" fill="#cbd5e1" stroke="#0284c7" strokeWidth="1.5" />
              <rect x="2" y="4" width="10" height="20" fill="#475569" rx="1" />
              {/* Diaphragm bottom cap */}
              <polygon points="0,34 7,40 14,34" fill="#0284c7" />
              {/* Pulse rings around sensor */}
              <circle cx="7" cy="20" r="12" fill="none" stroke="#06b6d4" strokeWidth="1.2" opacity="0.8">
                <animate attributeName="r" values="8;24;32" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.9;0.3;0" dur="2.5s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* CALLOUT LABELS & ANNOTATION ARROWS */}
            {/* Callout 1: Telemetry Unit */}
            <line x1="358" y1="70" x2="440" y2="60" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="440" cy="60" r="2" fill="#06b6d4" />
            <text x="445" y="58" fill="#e2e8f0" fontSize="10" fontWeight="bold">DWLR Telemetry Head Unit</text>
            <text x="445" y="70" fill="#94a3b8" fontSize="8.5">Solar PV + 4G/GSM/LoRa + Battery + Datalogger</text>

            {/* Callout 2: Borehole Casing */}
            <line x1="352" y1="120" x2="430" y2="120" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="430" cy="120" r="2" fill="#64748b" />
            <text x="435" y="118" fill="#cbd5e1" fontSize="9.5" fontWeight="600">Steel / PVC Well Casing</text>
            <text x="435" y="129" fill="#94a3b8" fontSize="8.5">Protects borehole from collapse & surface runoff</text>

            {/* Callout 3: Water Table Depth Measurement */}
            <line x1="350" y1="175" x2="230" y2="175" stroke="#22d3ee" strokeWidth="1.2" />
            <circle cx="230" cy="175" r="2.5" fill="#22d3ee" />
            <text x="80" y="172" fill="#22d3ee" fontSize="10" fontWeight="bold">Dynamic Water Table</text>
            <text x="80" y="184" fill="#67e8f9" fontSize="8.5">Real-time level: {effectiveDepth} m below ground</text>

            {/* Callout 4: Hydrostatic Transducer */}
            <line x1="350" y1="290" x2="440" y2="290" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="440" cy="290" r="2" fill="#06b6d4" />
            <text x="445" y="287" fill="#38bdf8" fontSize="10" fontWeight="bold">Submerged DWLR Sensor Probe</text>
            <text x="445" y="299" fill="#94a3b8" fontSize="8.5">Piezoresistive pressure transducer (±1mm accuracy)</text>
            <text x="445" y="310" fill="#94a3b8" fontSize="8.5">Continuous sampling (15-min interval)</text>
          </svg>
        </div>

        {/* Live Sensor Telemetry Parameters Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-2.5 bg-slate-950/70 p-3.5 rounded-xl border border-cyan-500/20 text-xs">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" /> Sensor Telemetry Specs
            </span>
            <span className="text-[10px] bg-cyan-900/60 text-cyan-300 px-2 py-0.5 rounded font-mono">
              CGWB / DWLR-STD-2024
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Sensor Type</span>
              <span className="text-cyan-300 font-medium">Hydrostatic Pressure</span>
            </div>
            <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Measurement Range</span>
              <span className="text-slate-200 font-medium">0 – 100 meters (mbgl)</span>
            </div>
            <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Measurement Accuracy</span>
              <span className="text-emerald-400 font-medium">±0.1% F.S. (±1 mm)</span>
            </div>
            <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Transmission Mode</span>
              <span className="text-sky-300 font-medium">4G Cellular + LoRaWAN</span>
            </div>
            <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Sampling Frequency</span>
              <span className="text-slate-200 font-medium">15-Min Live Packets</span>
            </div>
            <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Power Source</span>
              <span className="text-amber-300 font-medium flex items-center gap-1">
                <Zap className="w-3 h-3" /> Solar + LiFePO4
              </span>
            </div>
          </div>

          {interactive && (
            <div className="mt-1 pt-2 border-t border-slate-800/80">
              <div className="flex items-center justify-between text-[11px] text-slate-300 mb-1">
                <span>Simulate Aquifer Water Table Shift:</span>
                <span className="font-mono text-cyan-400">
                  {depthOffset > 0 ? `+${depthOffset}m (Extraction)` : depthOffset < 0 ? `${depthOffset}m (Recharge)` : 'Nominal'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setDepthOffset((prev) => Math.max(prev - 0.5, -4))}
                  className="flex-1 py-1 px-2 rounded bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold transition"
                >
                  ▲ Rainfall Recharge (-0.5m)
                </button>
                <button
                  type="button"
                  onClick={() => setDepthOffset((prev) => Math.min(prev + 0.5, 6))}
                  className="flex-1 py-1 px-2 rounded bg-rose-950/80 hover:bg-rose-900 text-rose-300 border border-rose-500/30 text-[11px] font-semibold transition"
                >
                  ▼ Pumping Deplete (+0.5m)
                </button>
                <button
                  type="button"
                  onClick={() => setDepthOffset(0)}
                  className="py-1 px-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px]"
                  title="Reset"
                >
                  ↺
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
