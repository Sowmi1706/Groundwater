import React, { useState } from 'react';
import {
  Wifi,
  Battery,
  ShieldCheck,
  MapPin,
  TrendingDown,
  TrendingUp,
  Activity,
  AlertTriangle,
  FileText,
  Download,
  Calendar,
  Layers,
  Sparkles,
  Droplets,
  Radio,
  CheckCircle2,
  Bell,
  Search,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  BarChart3,
  Sliders,
  ChevronRight,
  User,
  Lock,
  Compass
} from 'lucide-react';
import { SAMPLE_STATIONS, PREDICTION_DATA, RISK_ALERTS } from '../data/groundwatchData';

interface PhoneMockupProps {
  screenIndex: 1 | 2 | 3 | 4 | 5 | 6;
  language?: 'en' | 'ta';
  onExpand?: (screenIndex: number) => void;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  screenIndex,
  language = 'en',
  onExpand
}) => {
  // Screen internal state for interactivity
  const isTa = language === 'ta';

  // Screen titles & captions
  const screenMeta = [
    { num: 'SCREEN 1', title: 'Login / Home', titleTa: 'உள்நுழைவு / முகப்பு', desc: 'Secure Role-Based Access & Quick Glance Dashboard' },
    { num: 'SCREEN 2', title: 'Live Groundwater Map', titleTa: 'நேரலை நிலத்தடி நீர் வரைபடம்', desc: 'GIS Aquifer Spatial Mapping with DWLR Stations' },
    { num: 'SCREEN 3', title: 'Station Details', titleTa: 'நிலைய விவரங்கள்', desc: 'Deep Telemetry Metrics, Water Trends & Sensor Health' },
    { num: 'SCREEN 4', title: 'AI Prediction', titleTa: 'AI முன்கணிப்பு', desc: 'LSTM Neural Forecasting (7D to 1Y) with Confidence Score' },
    { num: 'SCREEN 5', title: 'Risk & Alerts', titleTa: 'ஆபத்து & எச்சரிக்கைகள்', desc: 'Automated Threshold Detection & Actionable Directives' },
    { num: 'SCREEN 6', title: 'Reports / Analytics', titleTa: 'அறிக்கைகள் / பகுப்பாய்வு', desc: 'CGWB Standard Compliant PDF/CSV Export Engine' }
  ][screenIndex - 1];

  return (
    <div className="flex flex-col items-center">
      {/* Screen Header Badge */}
      <div className="w-full flex items-center justify-between px-3 py-1.5 mb-2.5 rounded-lg bg-slate-900/90 border border-cyan-500/20 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-bold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
            {screenMeta.num}
          </span>
          <h4 className="font-semibold text-slate-100 text-sm tracking-tight">
            {isTa ? screenMeta.titleTa : screenMeta.title}
          </h4>
        </div>
        {onExpand && (
          <button
            type="button"
            onClick={() => onExpand(screenIndex)}
            className="text-[11px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-mono transition group"
          >
            Inspect <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}
      </div>

      {/* Realistic Smartphone Shell */}
      <div className="relative w-full max-w-[310px] aspect-[9/18.8] rounded-[44px] bg-[#070e1a] p-3 shadow-2xl border-4 border-slate-700/80 ring-1 ring-cyan-500/30 group hover:ring-cyan-400/60 transition-all duration-300">
        {/* Metallic side buttons */}
        <div className="absolute -left-[6px] top-20 w-[3px] h-9 bg-slate-600 rounded-l-sm" />
        <div className="absolute -left-[6px] top-32 w-[3px] h-12 bg-slate-600 rounded-l-sm" />
        <div className="absolute -right-[6px] top-24 w-[3px] h-14 bg-slate-600 rounded-r-sm" />

        {/* Inner Bezel and Display Area */}
        <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#071220] to-[#040a12] flex flex-col text-slate-100 select-none shadow-inner border border-slate-800">
          
          {/* Mobile Status Bar */}
          <div className="relative z-30 flex items-center justify-between px-6 pt-2.5 pb-1 text-[11px] font-mono text-slate-300">
            <span>09:41</span>
            {/* Dynamic Island */}
            <div className="w-24 h-4 bg-black rounded-full flex items-center justify-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Wifi className="w-3 h-3 text-cyan-400" />
              <Battery className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>

          {/* Screen Content Router */}
          <div className="relative flex-1 overflow-y-auto px-3 py-1.5 text-xs scrollbar-none">
            {screenIndex === 1 && <Screen1LoginHome isTa={isTa} />}
            {screenIndex === 2 && <Screen2LiveMap isTa={isTa} />}
            {screenIndex === 3 && <Screen3StationDetails isTa={isTa} />}
            {screenIndex === 4 && <Screen4AiPrediction isTa={isTa} />}
            {screenIndex === 5 && <Screen5RiskAlerts isTa={isTa} />}
            {screenIndex === 6 && <Screen6ReportsAnalytics isTa={isTa} />}
          </div>

          {/* Bottom App Navigation Bar */}
          <div className="relative z-20 border-t border-cyan-500/20 bg-slate-950/90 backdrop-blur-md px-3 py-2 flex items-center justify-around text-[9px] text-slate-400">
            <div className={`flex flex-col items-center gap-0.5 ${screenIndex === 1 ? 'text-cyan-400 font-bold' : ''}`}>
              <Droplets className="w-3.5 h-3.5" />
              <span>{isTa ? 'முகப்பு' : 'Home'}</span>
            </div>
            <div className={`flex flex-col items-center gap-0.5 ${screenIndex === 2 ? 'text-cyan-400 font-bold' : ''}`}>
              <MapPin className="w-3.5 h-3.5" />
              <span>{isTa ? 'வரைபடம்' : 'Map'}</span>
            </div>
            <div className={`flex flex-col items-center gap-0.5 ${screenIndex === 4 ? 'text-cyan-400 font-bold' : ''}`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isTa ? 'AI முன்னறிவிப்பு' : 'Forecast'}</span>
            </div>
            <div className={`flex flex-col items-center gap-0.5 ${screenIndex === 5 ? 'text-cyan-400 font-bold' : ''}`}>
              <Bell className="w-3.5 h-3.5" />
              <span>{isTa ? 'எச்சரிக்கை' : 'Alerts'}</span>
            </div>
            <div className={`flex flex-col items-center gap-0.5 ${screenIndex === 6 ? 'text-cyan-400 font-bold' : ''}`}>
              <FileText className="w-3.5 h-3.5" />
              <span>{isTa ? 'அறிக்கை' : 'Reports'}</span>
            </div>
          </div>

          {/* iOS Home Indicator Bar */}
          <div className="w-full flex justify-center pb-1.5 pt-0.5 bg-slate-950">
            <div className="w-24 h-1 bg-slate-500/70 rounded-full" />
          </div>
        </div>
      </div>

      {/* Screen Sub-caption */}
      <p className="mt-2 text-center text-xs text-slate-400 max-w-[280px]">
        {screenMeta.desc}
      </p>
    </div>
  );
};

/* =========================================================================
   SCREEN 1: LOGIN / HOME
   - GroundWatch logo
   - Username / Email
   - Password
   - Login button
   - Welcome message
   - Groundwater dashboard preview
   ========================================================================= */
const Screen1LoginHome: React.FC<{ isTa: boolean }> = ({ isTa }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="h-full flex flex-col justify-between py-1">
      {!isLoggedIn ? (
        <div className="flex flex-col justify-center h-full space-y-3">
          {/* Logo & Branding */}
          <div className="text-center pt-1">
            <div className="mx-auto w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 via-teal-400 to-emerald-400 p-0.5 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-[#071324] rounded-[14px] flex items-center justify-center">
                <Droplets className="w-6 h-6 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <h3 className="mt-2 text-base font-extrabold tracking-tight text-white font-display">
              GroundWatch
            </h3>
            <p className="text-[10px] text-cyan-400 font-medium">
              {isTa ? 'DWLR நிகழ்நேர நிலத்தடி நீர் கண்காணிப்பு' : 'DWLR Real-Time Groundwater Evaluation'}
            </p>
          </div>

          {/* Form Inputs */}
          <div className="space-y-2 bg-slate-900/60 p-3 rounded-xl border border-cyan-500/20">
            <div>
              <label className="text-[10px] text-slate-400 block mb-0.5">
                {isTa ? 'பயனர்பெயர் / மின்னஞ்சல்' : 'Username / Email'}
              </label>
              <div className="relative flex items-center">
                <User className="w-3.5 h-3.5 absolute left-2 text-slate-400" />
                <input
                  type="text"
                  readOnly
                  value="officer.cgwb@gov.in"
                  className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg pl-7 pr-2 py-1.5 text-[11px] text-slate-200"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-slate-400 block mb-0.5">
                {isTa ? 'கடவுச்சொல்' : 'Password'}
              </label>
              <div className="relative flex items-center">
                <Lock className="w-3.5 h-3.5 absolute left-2 text-slate-400" />
                <input
                  type="password"
                  readOnly
                  value="••••••••••••"
                  className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg pl-7 pr-2 py-1.5 text-[11px] text-slate-200"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsLoggedIn(true)}
              className="w-full py-1.5 mt-1 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 hover:brightness-110 active:scale-95 transition"
            >
              {isTa ? 'உள்நுழைக' : 'Secure Login'}
            </button>
            <div className="text-center">
              <span className="text-[9px] text-slate-500">
                Govt. Jal Shakti / CGWB Piezometer Auth
              </span>
            </div>
          </div>

          {/* Preview Teaser */}
          <div
            onClick={() => setIsLoggedIn(true)}
            className="cursor-pointer bg-slate-900/40 p-2 rounded-lg border border-dashed border-cyan-500/30 text-center hover:bg-slate-900/70 transition"
          >
            <span className="text-[10px] text-cyan-300 font-semibold flex items-center justify-center gap-1">
              {isTa ? 'டாஷ்போர்டு மாதிரியை பார்க்க கிளிக் செய்' : 'Tap to toggle Dashboard Preview'} <ChevronRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      ) : (
        /* Logged In Home / Dashboard Preview */
        <div className="space-y-2.5">
          {/* Welcome message */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
            <div>
              <p className="text-[10px] text-cyan-400 font-mono">
                {isTa ? 'வணக்கம், கள பொறியாளர்' : 'Welcome back,'}
              </p>
              <h4 className="text-sm font-bold text-white">
                {isTa ? 'முனைவர். கே. அர்ஜுன் (CGWB)' : 'Dr. K. Arjun (CGWB Hydrologist)'}
              </h4>
            </div>
            <span
              onClick={() => setIsLoggedIn(false)}
              className="text-[9px] text-slate-400 hover:text-rose-400 cursor-pointer border border-slate-700 px-1.5 py-0.5 rounded"
            >
              Logout
            </span>
          </div>

          {/* Groundwater Dashboard Preview Cards */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-slate-900/90 p-2 rounded-xl border border-cyan-500/30">
              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                <span>{isTa ? 'சராசரி ஆழம்' : 'Avg Water Depth'}</span>
                <Droplets className="w-3 h-3 text-cyan-400" />
              </div>
              <div className="text-base font-bold text-white font-mono mt-0.5">14.8 <span className="text-[10px] font-normal text-slate-400">mbgl</span></div>
              <span className="text-[9px] text-emerald-400 flex items-center gap-0.5">
                <TrendingUp className="w-2.5 h-2.5" /> +0.6m recharge
              </span>
            </div>

            <div className="bg-slate-900/90 p-2 rounded-xl border border-cyan-500/30">
              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                <span>{isTa ? 'செயலில் உள்ள DWLR' : 'Active DWLR'}</span>
                <Radio className="w-3 h-3 text-emerald-400" />
              </div>
              <div className="text-base font-bold text-emerald-400 font-mono mt-0.5">48 / 50</div>
              <span className="text-[9px] text-slate-400">96% Telemetry Online</span>
            </div>
          </div>

          {/* Quick Basin Status */}
          <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
            <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1.5">
              <span className="font-semibold text-slate-200">
                {isTa ? 'மண்டல நீர் நிலைமை சுருக்கம்' : 'Basin Aquifer Stress Level'}
              </span>
              <span className="text-cyan-400 font-mono text-[9px]">LIVE TELEMETRY</span>
            </div>
            <div className="space-y-1.5">
              <div>
                <div className="flex justify-between text-[9px] text-slate-300 mb-0.5">
                  <span>Cauvery Delta (Normal)</span>
                  <span className="text-emerald-400 font-mono">12.4 mbgl</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[38%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[9px] text-slate-300 mb-0.5">
                  <span>Vaigai Basin (Warning)</span>
                  <span className="text-amber-400 font-mono">22.8 mbgl</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-amber-400 h-full w-[65%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[9px] text-slate-300 mb-0.5">
                  <span>Palar Basin (Critical)</span>
                  <span className="text-rose-400 font-mono">34.2 mbgl</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-rose-500 h-full w-[88%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* =========================================================================
   SCREEN 2: LIVE GROUNDWATER MAP
   - Interactive GIS map
   - Multiple DWLR wells
   - Green = Normal, Yellow = Warning, Red = Critical
   - Current groundwater level indicators
   - Real-time station status
   ========================================================================= */
const Screen2LiveMap: React.FC<{ isTa: boolean }> = ({ isTa }) => {
  const [selectedWell, setSelectedWell] = useState(SAMPLE_STATIONS[0]);

  return (
    <div className="h-full flex flex-col space-y-2">
      {/* Map Filter Bar */}
      <div className="flex items-center justify-between bg-slate-900/90 px-2 py-1.5 rounded-lg border border-cyan-500/20">
        <div className="flex items-center gap-1 text-[10px] text-slate-300">
          <Layers className="w-3 h-3 text-cyan-400" />
          <span className="font-medium">{isTa ? 'GIS நிலப்பரப்பு' : 'GIS Aquifer Layer'}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[9px]">
          <span className="flex items-center gap-0.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" /> Normal
          </span>
          <span className="flex items-center gap-0.5 text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" /> Warning
          </span>
          <span className="flex items-center gap-0.5 text-rose-400">
            <span className="w-2 h-2 rounded-full bg-rose-400 inline-block" /> Critical
          </span>
        </div>
      </div>

      {/* Simulated Interactive GIS Vector Map Canvas */}
      <div className="relative flex-1 min-h-[160px] rounded-xl overflow-hidden border border-cyan-500/30 bg-[#081726]">
        {/* SVG Topo & Watershed Contours */}
        <svg viewBox="0 0 280 200" className="w-full h-full">
          <defs>
            <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#020813" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="280" height="200" fill="#06121f" />
          <circle cx="140" cy="100" r="100" fill="url(#mapGlow)" />

          {/* Grid lines */}
          <path d="M 0 50 H 280 M 0 100 H 280 M 0 150 H 280" stroke="#0e243a" strokeWidth="0.8" />
          <path d="M 70 0 V 200 M 140 0 V 200 M 210 0 V 200" stroke="#0e243a" strokeWidth="0.8" />

          {/* Watershed / River Polygons (Cauvery / Vaigai Basin) */}
          <path
            d="M 20 60 Q 90 85, 140 70 T 260 110"
            fill="none"
            stroke="#0284c7"
            strokeWidth="3.5"
            strokeOpacity="0.6"
          />
          <path
            d="M 50 160 Q 110 140, 180 165 T 270 140"
            fill="none"
            stroke="#0284c7"
            strokeWidth="2.5"
            strokeOpacity="0.4"
          />

          {/* Aquifer Heatmap Contour Polygons */}
          <ellipse cx="90" cy="85" rx="45" ry="30" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
          <ellipse cx="180" cy="140" rx="50" ry="32" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
          <ellipse cx="225" cy="75" rx="35" ry="25" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />

          {/* Render 5 DWLR Stations Pins */}
          {/* Station 1: Coimbatore (Normal - Green) */}
          <g className="cursor-pointer" onClick={() => setSelectedWell(SAMPLE_STATIONS[0])}>
            <circle cx="75" cy="90" r="9" fill="#10b981" fillOpacity="0.3" className="animate-ping" />
            <circle cx="75" cy="90" r="5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
            <text x="75" y="77" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold" fontFamily="monospace">12.4m</text>
          </g>

          {/* Station 2: Madurai (Warning - Yellow) */}
          <g className="cursor-pointer" onClick={() => setSelectedWell(SAMPLE_STATIONS[1])}>
            <circle cx="165" cy="145" r="9" fill="#f59e0b" fillOpacity="0.3" className="animate-ping" />
            <circle cx="165" cy="145" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
            <text x="165" y="133" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="bold" fontFamily="monospace">22.8m</text>
          </g>

          {/* Station 3: Thanjavur (Critical - Red) */}
          <g className="cursor-pointer" onClick={() => setSelectedWell(SAMPLE_STATIONS[2])}>
            <circle cx="225" cy="75" r="10" fill="#ef4444" fillOpacity="0.4" className="animate-ping" />
            <circle cx="225" cy="75" r="5.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
            <text x="225" y="63" textAnchor="middle" fill="#f87171" fontSize="8" fontWeight="bold" fontFamily="monospace">34.2m</text>
          </g>

          {/* Station 4: Chennai (Normal - Green) */}
          <g className="cursor-pointer" onClick={() => setSelectedWell(SAMPLE_STATIONS[3])}>
            <circle cx="210" cy="30" r="5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
            <text x="210" y="22" textAnchor="middle" fill="#34d399" fontSize="7.5" fontWeight="bold" fontFamily="monospace">8.6m</text>
          </g>

          {/* Station 5: Salem (Warning - Yellow) */}
          <g className="cursor-pointer" onClick={() => setSelectedWell(SAMPLE_STATIONS[4])}>
            <circle cx="130" cy="65" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
            <text x="130" y="55" textAnchor="middle" fill="#fbbf24" fontSize="7.5" fontWeight="bold" fontFamily="monospace">28.5m</text>
          </g>
        </svg>

        {/* Map Compass & Scale */}
        <div className="absolute top-2 right-2 bg-slate-950/80 p-1 rounded border border-slate-800 flex items-center gap-1 text-[8px] text-cyan-300 font-mono">
          <Compass className="w-3 h-3 text-cyan-400" /> N
        </div>
      </div>

      {/* Selected Well Quick Inspector Pill */}
      <div className="bg-slate-900/90 p-2 rounded-xl border border-cyan-500/30 text-[10px]">
        <div className="flex justify-between items-start">
          <div>
            <span className="font-mono text-[9px] text-cyan-400">{selectedWell.code}</span>
            <p className="font-bold text-white text-xs leading-tight">{selectedWell.name}</p>
          </div>
          <span
            className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
              selectedWell.status === 'Normal'
                ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                : selectedWell.status === 'Warning'
                ? 'bg-amber-950 text-amber-400 border border-amber-500/30'
                : 'bg-rose-950 text-rose-400 border border-rose-500/30'
            }`}
          >
            {selectedWell.status}
          </span>
        </div>
        <div className="mt-1.5 pt-1 border-t border-slate-800 grid grid-cols-2 gap-1 text-[9px]">
          <div>
            <span className="text-slate-400 block">{isTa ? 'தற்போதைய நீர்மட்டம்' : 'Current Water Level'}:</span>
            <span className="text-white font-mono font-bold text-[11px]">{selectedWell.currentDepth} mbgl</span>
          </div>
          <div>
            <span className="text-slate-400 block">{isTa ? '24 மணி நேர மாற்றம்' : '24h Change'}:</span>
            <span className={`font-mono font-bold text-[11px] ${selectedWell.waterLevelChange >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              {selectedWell.waterLevelChange >= 0 ? `+${selectedWell.waterLevelChange}m` : `${selectedWell.waterLevelChange}m`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   SCREEN 3: STATION DETAILS
   - Selected well information
   - Current water level
   - Previous water level
   - Change in water level
   - Last updated time
   - Recharge information
   - Historical trend
   - Station health/status
   ========================================================================= */
const Screen3StationDetails: React.FC<{ isTa: boolean }> = ({ isTa }) => {
  const station = SAMPLE_STATIONS[0]; // Coimbatore Perur

  return (
    <div className="h-full flex flex-col space-y-2">
      {/* Station Header Card */}
      <div className="bg-slate-900/90 p-2.5 rounded-xl border border-cyan-500/30">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] text-cyan-400 bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-500/20">
            {station.code}
          </span>
          <span className="flex items-center gap-1 text-[9px] text-emerald-400 font-semibold bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30">
            <CheckCircle2 className="w-2.5 h-2.5" /> Station Healthy
          </span>
        </div>
        <h4 className="font-bold text-white text-xs mt-1">{station.name}</h4>
        <p className="text-[9px] text-slate-400">{station.district}, {station.state} • {station.aquiferType}</p>
        <p className="text-[8px] text-slate-500 mt-0.5 font-mono">Last updated: {station.lastUpdated}</p>
      </div>

      {/* Metrics Row: Current, Previous, Change, Recharge */}
      <div className="grid grid-cols-2 gap-1.5">
        <div className="bg-slate-950/80 p-2 rounded-lg border border-slate-800">
          <span className="text-slate-400 text-[9px] block">{isTa ? 'தற்போதைய நீர்மட்டம்' : 'Current Water Level'}</span>
          <div className="text-sm font-bold text-cyan-300 font-mono mt-0.5">
            {station.currentDepth} <span className="text-[9px] text-slate-400 font-normal">mbgl</span>
          </div>
        </div>

        <div className="bg-slate-950/80 p-2 rounded-lg border border-slate-800">
          <span className="text-slate-400 text-[9px] block">{isTa ? 'முந்தைய நீர்மட்டம்' : 'Previous Level'}</span>
          <div className="text-sm font-bold text-slate-300 font-mono mt-0.5">
            {station.previousDepth} <span className="text-[9px] text-slate-400 font-normal">mbgl</span>
          </div>
        </div>

        <div className="bg-slate-950/80 p-2 rounded-lg border border-slate-800">
          <span className="text-slate-400 text-[9px] block">{isTa ? 'மட்ட மாற்றம்' : 'Level Change (24h)'}</span>
          <div className="text-sm font-bold text-emerald-400 font-mono mt-0.5 flex items-center gap-0.5">
            <TrendingUp className="w-3 h-3" /> +{station.waterLevelChange} m
          </div>
        </div>

        <div className="bg-slate-950/80 p-2 rounded-lg border border-slate-800">
          <span className="text-slate-400 text-[9px] block">{isTa ? 'செறிவூட்டல் தகவல்' : 'Recharge Status'}</span>
          <div className="text-sm font-bold text-teal-300 font-mono mt-0.5">
            +{station.rechargeRate} <span className="text-[9px] text-slate-400 font-normal">mm/hr</span>
          </div>
        </div>
      </div>

      {/* Historical Trend Chart */}
      <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800">
        <div className="flex justify-between items-center text-[9px] text-slate-300 mb-1">
          <span className="font-semibold flex items-center gap-1">
            <BarChart3 className="w-3 h-3 text-cyan-400" /> {isTa ? 'வரலாற்று போக்கு' : 'Historical Trend (Apr - Sep)'}
          </span>
          <span className="text-cyan-400 font-mono">Depth (mbgl)</span>
        </div>

        {/* Mini SVG Bar/Line graph */}
        <svg viewBox="0 0 240 65" className="w-full h-16">
          <defs>
            <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          {/* Depth trend line: Apr(16.2), May(17.5), Jun(16.8), Jul(14.9), Aug(13.1), Sep(12.4)
              Higher depth in meters means deeper water table, so inverted y */}
          <path
            d="M 20 48 L 60 56 L 100 52 L 140 38 L 180 24 L 220 16"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="2"
          />
          <path
            d="M 20 48 L 60 56 L 100 52 L 140 38 L 180 24 L 220 16 L 220 62 L 20 62 Z"
            fill="url(#trendFill)"
          />
          {/* Data nodes */}
          <circle cx="20" cy="48" r="2.5" fill="#22d3ee" />
          <circle cx="60" cy="56" r="2.5" fill="#22d3ee" />
          <circle cx="100" cy="52" r="2.5" fill="#22d3ee" />
          <circle cx="140" cy="38" r="2.5" fill="#22d3ee" />
          <circle cx="180" cy="24" r="2.5" fill="#22d3ee" />
          <circle cx="220" cy="16" r="3.5" fill="#10b981" stroke="#ffffff" strokeWidth="1" />

          {/* Month labels */}
          <text x="20" y="64" fill="#64748b" fontSize="7" textAnchor="middle">Apr</text>
          <text x="60" y="64" fill="#64748b" fontSize="7" textAnchor="middle">May</text>
          <text x="100" y="64" fill="#64748b" fontSize="7" textAnchor="middle">Jun</text>
          <text x="140" y="64" fill="#64748b" fontSize="7" textAnchor="middle">Jul</text>
          <text x="180" y="64" fill="#64748b" fontSize="7" textAnchor="middle">Aug</text>
          <text x="220" y="64" fill="#34d399" fontSize="7" fontWeight="bold" textAnchor="middle">Sep</text>
        </svg>
      </div>

      {/* Station Health Bar */}
      <div className="bg-slate-950 p-2 rounded-lg border border-slate-800/80 flex items-center justify-between text-[9px] font-mono">
        <span className="text-slate-400">Battery: <strong className="text-emerald-400">{station.batteryPercent}%</strong></span>
        <span className="text-slate-400">Signal: <strong className="text-cyan-400">{station.signalStrength}% (4G)</strong></span>
        <span className="text-slate-400">Borehole: <strong className="text-slate-200">{station.wellDepthTotal}m</strong></span>
      </div>
    </div>
  );
};

/* =========================================================================
   SCREEN 4: AI PREDICTION
   - Water-level trend graph
   - 7 Days / 30 Days / 6 Months / 1 Year filters
   - AI/ML prediction
   - Predicted future groundwater level
   - Rising/Falling trend
   - Prediction confidence score
   ========================================================================= */
const Screen4AiPrediction: React.FC<{ isTa: boolean }> = ({ isTa }) => {
  const [filter, setFilter] = useState<'7 Days' | '30 Days' | '6 Months' | '1 Year'>('30 Days');
  const prediction = PREDICTION_DATA[filter];

  return (
    <div className="h-full flex flex-col space-y-2">
      {/* Timeframe Filter Tabs */}
      <div className="flex rounded-lg bg-slate-950 p-0.5 border border-cyan-500/20">
        {(['7 Days', '30 Days', '6 Months', '1 Year'] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setFilter(t)}
            className={`flex-1 py-1 text-[9px] font-mono font-semibold rounded-md transition ${
              filter === t
                ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* AI Prediction Summary Badge */}
      <div className="bg-gradient-to-br from-cyan-950/60 to-slate-900/90 p-2.5 rounded-xl border border-cyan-500/30">
        <div className="flex items-center justify-between text-[10px]">
          <span className="flex items-center gap-1 font-semibold text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            {isTa ? 'AI / ML முன்கணிப்பு' : 'LSTM Neural Forecast'}
          </span>
          <span className="font-mono text-[9px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30 font-bold">
            {prediction.confidenceScore}% {isTa ? 'நம்பகத்தன்மை' : 'Confidence'}
          </span>
        </div>

        <div className="mt-2 flex items-baseline justify-between">
          <div>
            <span className="text-[9px] text-slate-400 block">{isTa ? 'எதிர்கால முன்னறிவிப்பு மட்டம்' : 'Predicted Future Level'}</span>
            <div className="text-lg font-extrabold text-white font-mono">
              {prediction.predictedLevel} <span className="text-[10px] font-normal text-slate-400">mbgl</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[9px] text-slate-400 block">{isTa ? 'போக்கு' : 'Expected Trajectory'}</span>
            <span
              className={`inline-flex items-center gap-1 text-[10px] font-bold font-mono px-2 py-0.5 rounded ${
                prediction.trend === 'Rising'
                  ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                  : 'bg-rose-950/80 text-rose-400 border border-rose-500/30'
              }`}
            >
              {prediction.trend === 'Rising' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {prediction.trend} ({prediction.deltaMeters > 0 ? `+${prediction.deltaMeters}m` : `${prediction.deltaMeters}m`})
            </span>
          </div>
        </div>
      </div>

      {/* Water-level Trend Graph with Forecast Bounds */}
      <div className="flex-1 bg-slate-950/90 p-2 rounded-xl border border-slate-800 flex flex-col justify-between">
        <div className="flex justify-between items-center text-[8.5px] text-slate-400">
          <span className="flex items-center gap-1">
            <span className="w-2 h-0.5 bg-cyan-400 inline-block" /> Actual
            <span className="w-2 h-0.5 bg-emerald-400 inline-block stroke-dash" /> AI Forecast
          </span>
          <span className="font-mono text-cyan-400">Horizon: {filter}</span>
        </div>

        {/* SVG Prediction Graph */}
        <svg viewBox="0 0 260 90" className="w-full h-24 my-1">
          <defs>
            <linearGradient id="aiConfidenceBand" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          {/* Horizontal grid lines */}
          <line x1="10" y1="20" x2="250" y2="20" stroke="#1e293b" strokeDasharray="3 3" />
          <line x1="10" y1="45" x2="250" y2="45" stroke="#1e293b" strokeDasharray="3 3" />
          <line x1="10" y1="70" x2="250" y2="70" stroke="#1e293b" strokeDasharray="3 3" />

          {/* Historical Actual Line (Left) */}
          <path
            d="M 20 62 L 60 55 L 100 48 L 140 45"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="2"
          />
          <circle cx="20" cy="62" r="2.5" fill="#22d3ee" />
          <circle cx="60" cy="55" r="2.5" fill="#22d3ee" />
          <circle cx="100" cy="48" r="2.5" fill="#22d3ee" />
          <circle cx="140" cy="45" r="3" fill="#22d3ee" />

          {/* Confidence Band Polygon for AI forecast (Right) */}
          {prediction.trend === 'Rising' ? (
            <>
              <polygon
                points="140,45 180,32 215,22 245,18 245,36 215,42 180,48 140,45"
                fill="url(#aiConfidenceBand)"
              />
              <path
                d="M 140 45 L 180 40 L 215 32 L 245 28"
                fill="none"
                stroke="#34d399"
                strokeWidth="2.5"
                strokeDasharray="4 2"
              />
              <circle cx="245" cy="28" r="3.5" fill="#10b981" stroke="#ffffff" strokeWidth="1" />
            </>
          ) : (
            <>
              <polygon
                points="140,45 180,55 215,68 245,78 245,62 215,50 180,42 140,45"
                fill="url(#aiConfidenceBand)"
              />
              <path
                d="M 140 45 L 180 50 L 215 62 L 245 72"
                fill="none"
                stroke="#f43f5e"
                strokeWidth="2.5"
                strokeDasharray="4 2"
              />
              <circle cx="245" cy="72" r="3.5" fill="#f43f5e" stroke="#ffffff" strokeWidth="1" />
            </>
          )}

          {/* Dividing 'Now' line */}
          <line x1="140" y1="10" x2="140" y2="80" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
          <text x="140" y="88" fill="#f59e0b" fontSize="7" fontWeight="bold" textAnchor="middle">TODAY</text>
        </svg>

        <p className="text-[8px] text-slate-400 text-center font-mono">
          Model: Bi-LSTM + Transformer • Multi-source rainfall lag correlation
        </p>
      </div>
    </div>
  );
};

/* =========================================================================
   SCREEN 5: RISK & ALERTS
   - Groundwater depletion alert
   - Recharge detected alert
   - Sensor offline alert
   - Critical water-level warning
   - Risk score
   - Recommended action
   ========================================================================= */
const Screen5RiskAlerts: React.FC<{ isTa: boolean }> = ({ isTa }) => {
  const [activeAlert, setActiveAlert] = useState<number>(0);
  const current = RISK_ALERTS[activeAlert];

  return (
    <div className="h-full flex flex-col space-y-2">
      {/* Risk Score Meter Banner */}
      <div className="bg-slate-900/90 p-2.5 rounded-xl border border-rose-500/30 flex items-center justify-between">
        <div>
          <span className="text-[9px] text-slate-400 block">{isTa ? 'ஒட்டுமொத்த படுகை ஆபத்து குறியீடு' : 'Watershed Composite Risk Score'}</span>
          <div className="flex items-baseline gap-1.5 mt-0.5">
            <span className="text-xl font-extrabold text-rose-400 font-mono">82 / 100</span>
            <span className="text-[9px] font-bold text-rose-300 bg-rose-950/80 px-1.5 py-0.5 rounded border border-rose-500/30">
              HIGH STRESS
            </span>
          </div>
        </div>
        <div className="w-12 h-12 relative flex items-center justify-center">
          <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#334155"
              strokeWidth="3.5"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#f43f5e"
              strokeWidth="3.5"
              strokeDasharray="82, 100"
            />
          </svg>
          <AlertTriangle className="w-4 h-4 text-rose-400 absolute" />
        </div>
      </div>

      {/* 4 Required Alerts List */}
      <div className="space-y-1.5 flex-1 overflow-y-auto pr-0.5">
        {RISK_ALERTS.map((alert, idx) => {
          const isSelected = idx === activeAlert;
          return (
            <div
              key={alert.id}
              onClick={() => setActiveAlert(idx)}
              className={`cursor-pointer p-2 rounded-lg border transition ${
                isSelected
                  ? 'bg-slate-800/95 border-cyan-400/80 shadow-md'
                  : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-[8.5px] font-bold px-1.5 py-0.2 rounded font-mono ${
                    alert.type === 'depletion'
                      ? 'bg-rose-950 text-rose-300 border border-rose-500/30'
                      : alert.type === 'recharge'
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
                      : alert.type === 'critical_level'
                      ? 'bg-red-950 text-red-300 border border-red-500/30'
                      : 'bg-amber-950 text-amber-300 border border-amber-500/30'
                  }`}
                >
                  {alert.type.toUpperCase().replace('_', ' ')}
                </span>
                <span className="text-[8px] text-slate-500 font-mono">{alert.timestamp}</span>
              </div>
              <p className="text-[10px] font-bold text-white mt-1 leading-tight">
                {isTa && alert.titleTa ? alert.titleTa : alert.title}
              </p>
              <p className="text-[8.5px] text-slate-400 truncate">{alert.station}</p>
            </div>
          );
        })}
      </div>

      {/* Action Directive Card for Selected Alert */}
      <div className="bg-slate-950 p-2 rounded-xl border border-cyan-500/30">
        <div className="flex items-center justify-between text-[9px] mb-1">
          <span className="font-semibold text-cyan-300 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-cyan-400" />
            {isTa ? 'பரிந்துரைக்கப்பட்ட நடவடிக்கை' : 'Recommended Action'}
          </span>
          <span className="font-mono text-rose-400 font-bold">Score: {current.riskScore}</span>
        </div>
        <p className="text-[9px] text-slate-200 leading-tight">
          {isTa && current.recommendedActionTa ? current.recommendedActionTa : current.recommendedAction}
        </p>
        <button
          type="button"
          className="w-full mt-1.5 py-1 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-[9px] rounded font-mono uppercase tracking-wider"
        >
          {isTa ? 'அதிகாரிகளுக்கு தானியங்கி SMS அனுப்பு' : 'Dispatch SMS to Collectorate'}
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
   SCREEN 6: REPORTS / ANALYTICS
   - Water-level report
   - Recharge report
   - Historical trend analysis
   - Station comparison
   - Export PDF/CSV
   - Date-range selection
   - Generate Report button
   ========================================================================= */
const Screen6ReportsAnalytics: React.FC<{ isTa: boolean }> = ({ isTa }) => {
  const [reportType, setReportType] = useState<'water' | 'recharge' | 'trend' | 'compare'>('water');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSuccess, setGeneratedSuccess] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedSuccess(true);
      setTimeout(() => setGeneratedSuccess(false), 3000);
    }, 800);
  };

  return (
    <div className="h-full flex flex-col space-y-2">
      {/* Report Module Selector */}
      <div className="grid grid-cols-2 gap-1">
        <button
          type="button"
          onClick={() => setReportType('water')}
          className={`p-1.5 rounded-lg text-[9px] font-semibold text-left border transition ${
            reportType === 'water'
              ? 'bg-cyan-950/90 text-cyan-300 border-cyan-400'
              : 'bg-slate-900/60 text-slate-400 border-slate-800'
          }`}
        >
          📄 {isTa ? 'நீர்மட்ட அறிக்கை' : 'Water-Level Report'}
        </button>
        <button
          type="button"
          onClick={() => setReportType('recharge')}
          className={`p-1.5 rounded-lg text-[9px] font-semibold text-left border transition ${
            reportType === 'recharge'
              ? 'bg-cyan-950/90 text-cyan-300 border-cyan-400'
              : 'bg-slate-900/60 text-slate-400 border-slate-800'
          }`}
        >
          🌧️ {isTa ? 'செறிவூட்டல் அறிக்கை' : 'Recharge Report'}
        </button>
        <button
          type="button"
          onClick={() => setReportType('trend')}
          className={`p-1.5 rounded-lg text-[9px] font-semibold text-left border transition ${
            reportType === 'trend'
              ? 'bg-cyan-950/90 text-cyan-300 border-cyan-400'
              : 'bg-slate-900/60 text-slate-400 border-slate-800'
          }`}
        >
          📈 {isTa ? 'வரலாற்று போக்கு' : 'Trend Analysis'}
        </button>
        <button
          type="button"
          onClick={() => setReportType('compare')}
          className={`p-1.5 rounded-lg text-[9px] font-semibold text-left border transition ${
            reportType === 'compare'
              ? 'bg-cyan-950/90 text-cyan-300 border-cyan-400'
              : 'bg-slate-900/60 text-slate-400 border-slate-800'
          }`}
        >
          ⚖️ {isTa ? 'நிலைய ஒப்பீடு' : 'Station Compare'}
        </button>
      </div>

      {/* Date Range Selection */}
      <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800">
        <label className="text-[9px] text-slate-400 block mb-1 flex items-center gap-1 font-semibold">
          <Calendar className="w-3 h-3 text-cyan-400" />
          {isTa ? 'தேதி வரம்பு தேர்வு' : 'Date-Range Selection'}
        </label>
        <div className="grid grid-cols-2 gap-1.5 text-[9px]">
          <div className="bg-slate-950 p-1.5 rounded border border-slate-800 font-mono text-slate-200">
            From: 2024-04-01
          </div>
          <div className="bg-slate-950 p-1.5 rounded border border-slate-800 font-mono text-slate-200">
            To: 2024-09-30
          </div>
        </div>
      </div>

      {/* Station Comparison Preview Panel */}
      <div className="bg-slate-950/90 p-2 rounded-xl border border-cyan-500/20 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center text-[9px] text-slate-300 mb-1 border-b border-slate-800 pb-1">
            <span className="font-semibold">{isTa ? 'நிலைய ஒப்பீடு சுருக்கம்' : 'Multi-Station Hydrometry'}</span>
            <span className="font-mono text-cyan-400 text-[8.5px]">CGWB Format</span>
          </div>
          <div className="space-y-1 text-[8.5px]">
            <div className="flex justify-between py-0.5 border-b border-slate-900">
              <span className="text-slate-400">Coimbatore Perur:</span>
              <span className="font-mono text-emerald-400 font-bold">12.4m (+0.7m)</span>
            </div>
            <div className="flex justify-between py-0.5 border-b border-slate-900">
              <span className="text-slate-400">Madurai Vaigai:</span>
              <span className="font-mono text-amber-400 font-bold">22.8m (-1.2m)</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="text-slate-400">Thanjavur Cauvery:</span>
              <span className="font-mono text-rose-400 font-bold">34.2m (-2.4m)</span>
            </div>
          </div>
        </div>

        {/* Generate Report Button */}
        <div className="space-y-1.5 mt-2">
          <button
            type="button"
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-1.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-[10px] rounded-lg shadow-md flex items-center justify-center gap-1.5 hover:brightness-110 active:scale-95 transition"
          >
            {isGenerating ? (
              <span className="animate-spin">⏳</span>
            ) : generatedSuccess ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />
            ) : (
              <Download className="w-3.5 h-3.5" />
            )}
            {generatedSuccess
              ? (isTa ? 'அறிக்கை தயாராக உள்ளது!' : 'Report Ready!')
              : isGenerating
              ? 'Compiling Telemetry...'
              : (isTa ? 'அறிக்கையை உருவாக்கு' : 'Generate Report')}
          </button>

          {/* Export PDF / CSV options */}
          <div className="grid grid-cols-2 gap-1 text-[9px] font-mono">
            <button
              type="button"
              className="py-1 px-1.5 rounded bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-800 flex items-center justify-center gap-1"
            >
              <Download className="w-2.5 h-2.5" /> Export PDF
            </button>
            <button
              type="button"
              className="py-1 px-1.5 rounded bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-slate-800 flex items-center justify-center gap-1"
            >
              <Download className="w-2.5 h-2.5" /> Export CSV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
