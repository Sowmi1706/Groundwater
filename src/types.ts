export type StationStatus = 'Normal' | 'Warning' | 'Critical';

export interface DwlrStation {
  id: string;
  code: string;
  name: string;
  district: string;
  state: string;
  lat: number;
  lng: number;
  currentDepth: number; // meters below ground level (mbgl)
  previousDepth: number;
  waterLevelChange: number; // positive = recharge, negative = depletion
  rechargeRate: number; // mm/hr or %
  status: StationStatus;
  lastUpdated: string;
  batteryPercent: number;
  signalStrength: number; // dBm or %
  wellDepthTotal: number;
  aquiferType: string;
  historicalTrend: { month: string; depth: number; rainfall: number }[];
}

export interface PredictionData {
  timeframe: '7 Days' | '30 Days' | '6 Months' | '1 Year';
  predictedLevel: number;
  trend: 'Rising' | 'Falling';
  confidenceScore: number;
  deltaMeters: number;
  dataPoints: { label: string; actual?: number; predicted?: number; upperBound: number; lowerBound: number }[];
}

export interface RiskAlert {
  id: string;
  type: 'depletion' | 'recharge' | 'sensor_offline' | 'critical_level';
  title: string;
  titleTa?: string;
  station: string;
  severity: 'high' | 'medium' | 'info';
  timestamp: string;
  riskScore: number;
  recommendedAction: string;
  recommendedActionTa?: string;
}

export interface ArchitectureNode {
  step: number;
  title: string;
  tech: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  stat: string;
  icon: string;
}

export interface SolutionStep {
  step: number;
  verb: 'Monitor' | 'Analyse' | 'Predict' | 'Alert' | 'Act';
  verbTa: string;
  headline: string;
  description: string;
  icon: string;
}

export interface SdgGoal {
  num: number;
  title: string;
  color: string;
  description: string;
  impactMetric: string;
}
