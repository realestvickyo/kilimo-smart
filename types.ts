
export enum Language {
  ENGLISH = 'EN',
  SWAHILI = 'SW'
}

export enum AppView {
  DASHBOARD = 'DASHBOARD',
  MAP = 'MAP',
  TASKS = 'TASKS',
  INSIGHTS = 'INSIGHTS',
  PROFILE = 'PROFILE'
}

export interface FarmerProfile {
  name: string;
  phone: string;
  location: string;
  crops: string[];
  farmSize: number;
  isPremium: boolean;
  completeness: number;
}

export interface FarmTask {
  id: string;
  title: string;
  date: string;
  completed: boolean;
  type: 'soil' | 'water' | 'pest' | 'harvest';
}

export interface MarketPrice {
  crop: string;
  market: string;
  price: number;
  unit: string;
  verified: boolean;
  upvotes: number;
  timestamp: string;
}

export interface ROIProjection {
  expectedYield: number;
  currentMarketAvg: number;
  projectedRevenue: number;
  costOfInputs: number;
  projectedProfit: number;
}
