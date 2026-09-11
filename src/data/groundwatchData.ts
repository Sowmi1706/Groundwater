import { DwlrStation, PredictionData, RiskAlert, ProblemItem, SolutionStep, SdgGoal } from '../types';

export const SAMPLE_STATIONS: DwlrStation[] = [
  {
    id: 'dwlr-01',
    code: 'TN-CBE-DWLR-104',
    name: 'Perur Aquifer Observatory',
    district: 'Coimbatore',
    state: 'Tamil Nadu',
    lat: 10.985,
    lng: 76.921,
    currentDepth: 12.4, // meters below ground level
    previousDepth: 13.1,
    waterLevelChange: +0.7, // recharge
    rechargeRate: 8.4,
    status: 'Normal',
    lastUpdated: '2 mins ago (14:32 IST)',
    batteryPercent: 94,
    signalStrength: 88,
    wellDepthTotal: 65,
    aquiferType: 'Fissured Hard Rock (Gneiss)',
    historicalTrend: [
      { month: 'Apr', depth: 16.2, rainfall: 12 },
      { month: 'May', depth: 17.5, rainfall: 4 },
      { month: 'Jun', depth: 16.8, rainfall: 42 },
      { month: 'Jul', depth: 14.9, rainfall: 110 },
      { month: 'Aug', depth: 13.1, rainfall: 145 },
      { month: 'Sep', depth: 12.4, rainfall: 82 },
    ]
  },
  {
    id: 'dwlr-02',
    code: 'TN-MDU-DWLR-089',
    name: 'Vaigai Basin Station 04',
    district: 'Madurai',
    state: 'Tamil Nadu',
    lat: 9.925,
    lng: 78.119,
    currentDepth: 22.8,
    previousDepth: 21.6,
    waterLevelChange: -1.2, // depletion
    rechargeRate: -2.1,
    status: 'Warning',
    lastUpdated: '10 mins ago (14:24 IST)',
    batteryPercent: 82,
    signalStrength: 76,
    wellDepthTotal: 80,
    aquiferType: 'Granitic Alluvium Transition',
    historicalTrend: [
      { month: 'Apr', depth: 18.0, rainfall: 10 },
      { month: 'May', depth: 19.8, rainfall: 8 },
      { month: 'Jun', depth: 20.5, rainfall: 20 },
      { month: 'Jul', depth: 21.2, rainfall: 35 },
      { month: 'Aug', depth: 21.6, rainfall: 40 },
      { month: 'Sep', depth: 22.8, rainfall: 15 },
    ]
  },
  {
    id: 'dwlr-03',
    code: 'TN-TNJ-DWLR-042',
    name: 'Cauvery Delta Piezometer #12',
    district: 'Thanjavur',
    state: 'Tamil Nadu',
    lat: 10.787,
    lng: 79.137,
    currentDepth: 34.2,
    previousDepth: 31.8,
    waterLevelChange: -2.4,
    rechargeRate: -5.6,
    status: 'Critical',
    lastUpdated: 'Just now (14:34 IST)',
    batteryPercent: 68,
    signalStrength: 92,
    wellDepthTotal: 100,
    aquiferType: 'Deep Semi-Confined Tertiary Sandstone',
    historicalTrend: [
      { month: 'Apr', depth: 25.1, rainfall: 5 },
      { month: 'May', depth: 27.8, rainfall: 2 },
      { month: 'Jun', depth: 29.4, rainfall: 18 },
      { month: 'Jul', depth: 30.6, rainfall: 22 },
      { month: 'Aug', depth: 31.8, rainfall: 30 },
      { month: 'Sep', depth: 34.2, rainfall: 12 },
    ]
  },
  {
    id: 'dwlr-04',
    code: 'TN-CHE-DWLR-015',
    name: 'Kovalam Coastal Piezometer',
    district: 'Chennai South',
    state: 'Tamil Nadu',
    lat: 12.791,
    lng: 80.252,
    currentDepth: 8.6,
    previousDepth: 9.0,
    waterLevelChange: +0.4,
    rechargeRate: 3.2,
    status: 'Normal',
    lastUpdated: '15 mins ago (14:19 IST)',
    batteryPercent: 91,
    signalStrength: 95,
    wellDepthTotal: 40,
    aquiferType: 'Coastal Sandy Coastal Plain',
    historicalTrend: [
      { month: 'Apr', depth: 10.5, rainfall: 20 },
      { month: 'May', depth: 11.2, rainfall: 15 },
      { month: 'Jun', depth: 10.8, rainfall: 45 },
      { month: 'Jul', depth: 9.8, rainfall: 90 },
      { month: 'Aug', depth: 9.0, rainfall: 130 },
      { month: 'Sep', depth: 8.6, rainfall: 160 },
    ]
  },
  {
    id: 'dwlr-05',
    code: 'TN-SLM-DWLR-073',
    name: 'Shevaroy Foothills Station',
    district: 'Salem',
    state: 'Tamil Nadu',
    lat: 11.664,
    lng: 78.146,
    currentDepth: 28.5,
    previousDepth: 26.9,
    waterLevelChange: -1.6,
    rechargeRate: -3.8,
    status: 'Warning',
    lastUpdated: '1 hr ago (13:34 IST)',
    batteryPercent: 74,
    signalStrength: 64,
    wellDepthTotal: 90,
    aquiferType: 'Charnockite Hard Rock Aquifer',
    historicalTrend: [
      { month: 'Apr', depth: 22.0, rainfall: 18 },
      { month: 'May', depth: 24.1, rainfall: 25 },
      { month: 'Jun', depth: 25.0, rainfall: 35 },
      { month: 'Jul', depth: 26.1, rainfall: 40 },
      { month: 'Aug', depth: 26.9, rainfall: 45 },
      { month: 'Sep', depth: 28.5, rainfall: 22 },
    ]
  }
];

export const PREDICTION_DATA: Record<string, PredictionData> = {
  '7 Days': {
    timeframe: '7 Days',
    predictedLevel: 11.8,
    trend: 'Rising',
    confidenceScore: 94.6,
    deltaMeters: +0.6,
    dataPoints: [
      { label: 'Day -3', actual: 12.9, upperBound: 13.0, lowerBound: 12.8 },
      { label: 'Day -2', actual: 12.7, upperBound: 12.8, lowerBound: 12.6 },
      { label: 'Day -1', actual: 12.5, upperBound: 12.6, lowerBound: 12.4 },
      { label: 'Today', actual: 12.4, predicted: 12.4, upperBound: 12.5, lowerBound: 12.3 },
      { label: '+2 Days', predicted: 12.2, upperBound: 12.4, lowerBound: 12.0 },
      { label: '+5 Days', predicted: 11.9, upperBound: 12.2, lowerBound: 11.6 },
      { label: '+7 Days', predicted: 11.8, upperBound: 12.1, lowerBound: 11.5 },
    ]
  },
  '30 Days': {
    timeframe: '30 Days',
    predictedLevel: 11.2,
    trend: 'Rising',
    confidenceScore: 91.2,
    deltaMeters: +1.2,
    dataPoints: [
      { label: 'Wk -3', actual: 13.8, upperBound: 14.0, lowerBound: 13.6 },
      { label: 'Wk -2', actual: 13.2, upperBound: 13.4, lowerBound: 13.0 },
      { label: 'Wk -1', actual: 12.8, upperBound: 13.0, lowerBound: 12.6 },
      { label: 'Now', actual: 12.4, predicted: 12.4, upperBound: 12.6, lowerBound: 12.2 },
      { label: '+10 D', predicted: 12.0, upperBound: 12.3, lowerBound: 11.7 },
      { label: '+20 D', predicted: 11.5, upperBound: 11.9, lowerBound: 11.1 },
      { label: '+30 D', predicted: 11.2, upperBound: 11.7, lowerBound: 10.8 },
    ]
  },
  '6 Months': {
    timeframe: '6 Months',
    predictedLevel: 15.6,
    trend: 'Falling',
    confidenceScore: 86.8,
    deltaMeters: -3.2,
    dataPoints: [
      { label: 'Jun', actual: 16.8, upperBound: 17.0, lowerBound: 16.6 },
      { label: 'Jul', actual: 14.9, upperBound: 15.1, lowerBound: 14.7 },
      { label: 'Aug', actual: 13.1, upperBound: 13.3, lowerBound: 12.9 },
      { label: 'Sep', actual: 12.4, predicted: 12.4, upperBound: 12.6, lowerBound: 12.2 },
      { label: 'Nov', predicted: 13.2, upperBound: 13.8, lowerBound: 12.6 },
      { label: 'Jan', predicted: 14.5, upperBound: 15.2, lowerBound: 13.8 },
      { label: 'Mar', predicted: 15.6, upperBound: 16.5, lowerBound: 14.7 },
    ]
  },
  '1 Year': {
    timeframe: '1 Year',
    predictedLevel: 14.1,
    trend: 'Falling',
    confidenceScore: 82.4,
    deltaMeters: -1.7,
    dataPoints: [
      { label: 'Q1', actual: 16.5, upperBound: 16.8, lowerBound: 16.2 },
      { label: 'Q2', actual: 17.2, upperBound: 17.5, lowerBound: 16.9 },
      { label: 'Q3', actual: 13.0, upperBound: 13.3, lowerBound: 12.7 },
      { label: 'Now', actual: 12.4, predicted: 12.4, upperBound: 12.7, lowerBound: 12.1 },
      { label: '+3M', predicted: 13.8, upperBound: 14.6, lowerBound: 13.0 },
      { label: '+6M', predicted: 15.4, upperBound: 16.4, lowerBound: 14.4 },
      { label: '+12M', predicted: 14.1, upperBound: 15.3, lowerBound: 12.9 },
    ]
  }
};

export const RISK_ALERTS: RiskAlert[] = [
  {
    id: 'alt-01',
    type: 'depletion',
    title: 'Rapid Groundwater Depletion Alert',
    titleTa: 'விரைவான நிலத்தடி நீர் வீழ்ச்சி எச்சரிக்கை',
    station: 'TN-TNJ-DWLR-042 (Cauvery Delta #12)',
    severity: 'high',
    timestamp: '14:28 IST (6m ago)',
    riskScore: 88,
    recommendedAction: 'Restrict agricultural pump-out by 40% & trigger artificial recharge sump injection.',
    recommendedActionTa: 'விவசாய பம்பிங் பயன்பாட்டை 40% குறைத்து செயற்கை செறிவூட்டல் கிணறுகளை இயக்கவும்.'
  },
  {
    id: 'alt-02',
    type: 'recharge',
    title: 'Monsoon Recharge Detected',
    titleTa: 'பருவமழை செறிவூட்டல் கண்டறியப்பட்டது',
    station: 'TN-CBE-DWLR-104 (Perur Observatory)',
    severity: 'info',
    timestamp: '13:50 IST (44m ago)',
    riskScore: 14,
    recommendedAction: 'Infiltration rate +0.7m/24h. Maintain check-dam flow gates for maximal percolation.',
    recommendedActionTa: 'ஊடுருவல் வீதம் +0.7மீ/24ம. அதிகபட்ச நிலத்தடி நீர் சேர்க்கைக்கு தடுப்பணைகளை ஒழுங்குபடுத்தவும்.'
  },
  {
    id: 'alt-03',
    type: 'critical_level',
    title: 'Critical Water-Level Threshold Breached',
    titleTa: 'ஆபத்தான நீர்மட்ட வரம்பு தாண்டியது',
    station: 'TN-MDU-DWLR-089 (Vaigai Basin #04)',
    severity: 'high',
    timestamp: '12:15 IST (2h ago)',
    riskScore: 79,
    recommendedAction: 'Aquifer depth exceeded 22m (Warning threshold 20m). Activate Gram Panchayat water rationing.',
    recommendedActionTa: 'ஆழம் 22மீ தாண்டியது. பஞ்சாயத்து அளவில் நீர் பங்கீட்டு நெறிமுறையை அமல்படுத்தவும்.'
  },
  {
    id: 'alt-04',
    type: 'sensor_offline',
    title: 'DWLR Telemetry Sensor Offline Alert',
    titleTa: 'DWLR சென்சார் ஆஃப்லைன் எச்சரிக்கை',
    station: 'TN-SLM-DWLR-073 (Shevaroy Foothills)',
    severity: 'medium',
    timestamp: '11:00 IST (3h ago)',
    riskScore: 52,
    recommendedAction: 'LoRaWAN gateway heartbeat lost. Dispatch field engineer for battery/SIM inspection.',
    recommendedActionTa: 'LoRaWAN தொடர்பு துண்டிக்கப்பட்டது. கள பொறியாளரை உடனடியாக ஆய்வு செய்ய அனுப்பவும்.'
  }
];

export const KEY_PROBLEMS: ProblemItem[] = [
  {
    id: 'p1',
    title: 'Groundwater Level Continuously Decreasing',
    description: 'Over-extraction exceeds natural recharge, causing progressive collapse of deeper water tables.',
    stat: '-1.4 m/year average drop',
    icon: 'TrendingDown'
  },
  {
    id: 'p2',
    title: 'Manual Measurement is Time-Consuming',
    description: 'Traditional tape & sounding probes yield delayed, quarterly data unsuitable for urgent interventions.',
    stat: '90-day delay in data',
    icon: 'Clock'
  },
  {
    id: 'p3',
    title: 'Data Scattered Across Different Wells',
    description: 'Unsynchronized siloed logs prevent basin-scale hydrological analysis and aquifer modeling.',
    stat: '70% unintegrated wells',
    icon: 'DatabaseZap'
  },
  {
    id: 'p4',
    title: 'Rainfall-to-Recharge Difficult to Assess',
    description: 'Absence of automated correlation between rainfall spikes and subterranean infiltration delay.',
    stat: 'Complex lag dynamics',
    icon: 'CloudRain'
  },
  {
    id: 'p5',
    title: 'Over-Pumping Causes Depletion',
    description: 'Unmetered agricultural & borewell pumping pulls saline intrusion and drains unconfined aquifers.',
    stat: '85% used in irrigation',
    icon: 'AlertTriangle'
  },
  {
    id: 'p6',
    title: 'Future Shortage Difficult to Predict',
    description: 'Lack of AI-driven hydrological forecasting blinds administrators before severe drought arrives.',
    stat: 'Zero early-warning',
    icon: 'HelpCircle'
  }
];

export const SOLUTION_STEPS: SolutionStep[] = [
  {
    step: 1,
    verb: 'Monitor',
    verbTa: 'கண்காணிப்பு',
    headline: 'Real-time DWLR Telemetry',
    description: 'Continuous hydrostatic pressure sensing via IoT/LoRa/GSM down to millimeter precision.',
    icon: 'Radio'
  },
  {
    step: 2,
    verb: 'Analyse',
    verbTa: 'பகுப்பாய்வு',
    headline: 'Multi-Source Hydrological Engine',
    description: 'Fusing automated DWLR records, IMD rainfall feeds, and soil-strata porosity parameters.',
    icon: 'Cpu'
  },
  {
    step: 3,
    verb: 'Predict',
    verbTa: 'முன்கணிப்பு',
    headline: 'Deep Learning Water Forecaster',
    description: 'Bi-directional LSTM neural networks predicting 7D to 1Y aquifer trajectories with >91% accuracy.',
    icon: 'Brain'
  },
  {
    step: 4,
    verb: 'Alert',
    verbTa: 'எச்சரிக்கை',
    headline: 'Intelligent Multi-Channel Alerts',
    description: 'Instant automated SMS, WhatsApp, and push alerts triggered on critical threshold breach.',
    icon: 'BellRing'
  },
  {
    step: 5,
    verb: 'Act',
    verbTa: 'செயல்பாடு',
    headline: 'Policy & Artificial Recharge',
    description: 'Empowering district collectors and panchayats with actionable recharge sump planning.',
    icon: 'CheckCircle2'
  }
];

export const EXTRA_WINNING_FEATURES = [
  { id: 'f1', name: 'Rainfall Integration', desc: 'Real-time IMD rain gauge cross-correlation with groundwater rise' },
  { id: 'f2', name: 'GIS Heatmap', desc: 'Continuous spatial interpolation (Kriging / IDW) of aquifer depths' },
  { id: 'f3', name: 'AI Prediction', desc: '7-day to 1-year groundwater level forecast using LSTM & XGBoost' },
  { id: 'f4', name: 'Anomaly Detection', desc: 'Instant flag for sudden industrial illegal drawdowns or sensor drift' },
  { id: 'f5', name: 'Risk Score', desc: 'Dynamic composite vulnerability index (0–100) per micro-watershed' },
  { id: 'f6', name: 'SMS/Email Alert Prototype', desc: 'Govt alert gateway triggering automated Tamil & English alerts' },
  { id: 'f7', name: 'PDF Report Generation', desc: 'One-click Central Ground Water Board (CGWB) compliant reports' },
  { id: 'f8', name: 'Station Comparison', desc: 'Side-by-side hydrograph comparison between multiple DWLR stations' },
  { id: 'f9', name: 'Historical Trend Analysis', desc: 'Decadal aquifer drawdown graphs with seasonal baseline overlays' },
  { id: 'f10', name: 'What-If Simulation', desc: 'Simulate monsoon deficit (-20%) vs heavy extraction (+30%) impacts' },
  { id: 'f11', name: 'Tamil + English Dashboard', desc: 'Full bilingual localization for local panchayats and state officers' },
  { id: 'f12', name: 'Mobile Responsive UI', desc: 'Built in Flutter with 60 FPS offline-first SQLite sync architecture' }
];

export const ARCHITECTURE_STEPS = [
  {
    num: '01',
    name: 'DWLR Sensors / APIs / Dataset',
    detail: 'Piezometer probes (0-100m) with GSM/GPRS & LoRa telemetry modules + IMD Gridded Rainfall APIs + Central Ground Water Board historical dataset.',
    tech: 'IoT Hydrostatic Pressure Transducers • MQTT • LoRaWAN',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    num: '02',
    name: 'FastAPI / Django Backend',
    detail: 'High-throughput async ingestion microservice, telemetry decoding, data cleaning, validation pipelines, and REST/WebSocket streaming.',
    tech: 'Python 3.11 • FastAPI Async • Celery Workers • Pydantic',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    num: '03',
    name: 'PostgreSQL + PostGIS Database',
    detail: 'Spatial geospatial database indexing well lat/long coordinates, time-series telemetry partitions, and hydrological polygons.',
    tech: 'PostgreSQL 16 • PostGIS 3.4 • TimescaleDB Extensions',
    color: 'from-indigo-600 to-emerald-600'
  },
  {
    num: '04',
    name: 'Machine Learning Model',
    detail: 'Attention-based LSTM & Ensemble Regressors trained on 15-year hydrogeological cycles to forecast groundwater recharge & depletion.',
    tech: 'PyTorch • Scikit-learn • XGBoost • SHAP Explainability',
    color: 'from-emerald-600 to-teal-500'
  },
  {
    num: '05',
    name: 'Flutter Mobile App',
    detail: 'Cross-platform native iOS/Android client with bilingual UI, offline caching, push notifications, and field inspection tools.',
    tech: 'Flutter 3.x • Dart • Riverpod • SQLite Local Cache',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    num: '06',
    name: 'GIS / Google Maps Visualization',
    detail: 'Interactive vector tiles, spatial heatmap rendering, buffer zones, and 3D terrain hydrogeology overlays.',
    tech: 'Mapbox GL / Google Maps SDK • GeoJSON • Deck.gl',
    color: 'from-cyan-500 to-sky-500'
  },
  {
    num: '07',
    name: 'AWS Cloud Infrastructure',
    detail: 'Serverless scalability, robust container orchestration, S3 data lake, RDS Multi-AZ, and automated cloud backups.',
    tech: 'AWS ECS Fargate • S3 Bucket • Amazon RDS • CloudWatch',
    color: 'from-sky-500 to-cyan-400'
  }
];

export const SDG_GOALS: SdgGoal[] = [
  {
    num: 6,
    title: 'Clean Water and Sanitation',
    color: '#26bde2',
    description: 'Ensuring sustainable withdrawal and replenishment of subterranean freshwater to halt water stress.',
    impactMetric: 'Monitors 100% aquifer recharge & depletion rates'
  },
  {
    num: 11,
    title: 'Sustainable Cities and Communities',
    color: '#fd9d24',
    description: 'Protecting peri-urban and urban water tables against unchecked over-pumping and land subsidence.',
    impactMetric: 'Early warning for municipal water supply rationing'
  },
  {
    num: 13,
    title: 'Climate Action',
    color: '#3f7e44',
    description: 'Integrating extreme weather rainfall shocks with aquifer storage resilience modeling for drought mitigation.',
    impactMetric: 'Forecasting drought stress 6 months in advance'
  },
  {
    num: 15,
    title: 'Life on Land',
    color: '#56c02b',
    description: 'Preventing wetland drying, baseflow river depletion, and soil salinization through aquifer conservation.',
    impactMetric: 'Prevents ecological drying of groundwater-fed springs'
  }
];
