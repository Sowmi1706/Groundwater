import React from 'react';
import { Droplets, Sparkles, Printer, Globe, Radio, Award } from 'lucide-react';
import { DwlrSensorGraphic } from './DwlrSensorGraphic';

interface HeaderBannerProps {
  language: 'en' | 'ta';
  setLanguage: (lang: 'en' | 'ta') => void;
  onPrintPoster: () => void;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({
  language,
  setLanguage,
  onPrintPoster
}) => {
  const isTa = language === 'ta';

  return (
    <header className="relative w-full pt-4 pb-6 border-b border-cyan-500/20 bg-gradient-to-b from-[#061122] via-[#071326] to-transparent">
      {/* Top Hackathon Metadata Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800/80 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 font-mono text-[11px] font-bold">
            <Award className="w-3.5 h-3.5 text-cyan-400" /> SMART INDIA HACKATHON
          </span>
          <span className="hidden sm:inline-block text-slate-500">•</span>
          <span className="text-slate-300 font-medium">
            Theme: <span className="text-cyan-300">Smart Water Management & Geo-Informatics</span>
          </span>
          <span className="hidden sm:inline-block text-slate-500">•</span>
          <span className="text-slate-400 text-[11px] font-mono">
            Ministry of Jal Shakti / CGWB DWLR Problem Statement
          </span>
        </div>

        {/* Poster Utility Controls */}
        <div className="flex items-center gap-2 no-print">
          {/* Tamil / English Toggle */}
          <button
            type="button"
            onClick={() => setLanguage(isTa ? 'en' : 'ta')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-cyan-500/30 text-xs font-medium transition cursor-pointer"
            title="Toggle Tamil / English Dashboard"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-bold">{isTa ? 'தமிழ் (TA)' : 'English (EN)'}</span>
            <span className="text-[10px] text-slate-400 font-mono">Toggle</span>
          </button>

          {/* Print Poster Button */}
          <button
            type="button"
            onClick={onPrintPoster}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 hover:brightness-110 text-slate-950 text-xs font-bold shadow-md shadow-cyan-500/20 transition cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save Poster</span>
          </button>
        </div>
      </div>

      {/* Main Title, Subtitle, Tagline */}
      <div className="text-center max-w-4xl mx-auto mb-6">
        {/* Logo Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-mono mb-3 shadow-inner">
          <Droplets className="w-4 h-4 text-cyan-400" />
          <span className="tracking-widest uppercase font-bold">PROJECT SHOWCASE & PROTOTYPE INFOGRAPHIC</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* TITLE */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display">
          Ground<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Watch</span>
        </h1>

        {/* SUBTITLE */}
        <p className="mt-2 text-lg sm:text-xl font-semibold text-cyan-100 tracking-normal">
          “Real-Time Groundwater Resource Evaluation Using DWLR Data”
        </p>

        {/* TAGLINE */}
        <div className="mt-2 inline-block">
          <span className="text-base sm:text-lg font-bold font-mono tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
            “Healthy Aquifers, Greener Tomorrow”
          </span>
        </div>

        {/* High-level Mission Statement */}
        <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {isTa
            ? 'DWLR தரவுகள், செயற்கை நுண்ணறிவு முன்கணிப்பு மற்றும் GIS தொழில்நுட்பம் கொண்டு நிலத்தடி நீர் வளங்களை நிகழ்நேரத்தில் துல்லியமாக மதிப்பிடும் முழுமையான டிஜிட்டல் தளம்.'
            : 'Next-generation groundwater intelligence platform fusing automated DWLR hydrostatic telemetry, IMD rainfall correlation, spatio-temporal GIS, and LSTM neural forecasting for sustainable aquifer governance.'}
        </p>
      </div>

      {/* Visual DWLR Groundwater Monitoring Sensor Near a Well in the Header */}
      <div className="mt-4 max-w-5xl mx-auto">
        <DwlrSensorGraphic currentDepth={12.4} />
      </div>
    </header>
  );
};
