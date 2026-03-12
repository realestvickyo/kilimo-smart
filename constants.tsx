
import React from 'react';
// Added missing import for Language enum
import { Language } from './types';

export const KENYA_COUNTIES = [
  { id: 'narok', name: 'Narok', risk: 'High', color: '#ef4444' },
  { id: 'kitale', name: 'Trans Nzoia', risk: 'Medium', color: '#f59e0b' },
  { id: 'nakuru', name: 'Nakuru', risk: 'Low', color: '#10b981' },
  { id: 'uasin', name: 'Uasin Gishu', risk: 'High', color: '#ef4444' },
  { id: 'meru', name: 'Meru', risk: 'Low', color: '#10b981' },
];

export const KenyaMapSVG = ({ onCountyClick }: { onCountyClick: (name: string) => void }) => (
  <svg viewBox="0 0 400 500" className="w-full h-auto max-w-sm mx-auto cursor-pointer">
    {/* Simplified Abstract Kenya Map Shapes */}
    <path d="M150 50 L250 80 L300 200 L250 350 L100 400 L50 200 Z" fill="#e7e5e4" stroke="#444" strokeWidth="1" />
    <circle cx="150" cy="180" r="15" fill="#ef4444" onClick={() => onCountyClick('Narok')} />
    <circle cx="200" cy="100" r="12" fill="#f59e0b" onClick={() => onCountyClick('Trans Nzoia')} />
    <circle cx="220" cy="220" r="10" fill="#10b981" onClick={() => onCountyClick('Nakuru')} />
    <circle cx="100" cy="150" r="14" fill="#ef4444" onClick={() => onCountyClick('Uasin Gishu')} />
    <circle cx="280" cy="150" r="12" fill="#10b981" onClick={() => onCountyClick('Meru')} />
    <text x="140" y="450" className="text-xs font-bold" fill="#78716c">Tap County for Alert Details</text>
  </svg>
);

export const TRANSLATIONS = {
  [Language.ENGLISH]: {
    welcome: "Welcome back",
    premium_cta: "Unlock daily alerts & save KSh 18,000+ this season",
    upgrade: "Upgrade Now",
    profile_score: "Profile Completeness",
    yield_tracker: "Yield & Profit Tracker",
    group_view: "Cooperative View",
    market_prices: "Real-time Market Prices",
    ask_advisor: "Ask Advisor",
    last_updated: "Last updated 2 hrs ago",
    offline_mode: "Offline Mode",
  },
  [Language.SWAHILI]: {
    welcome: "Karibu tena",
    premium_cta: "Pata tahadhari kila siku na uokoe KSh 18,000+ msimu huu",
    upgrade: "Jiunge na Premium",
    profile_score: "Kukamilika kwa Wasifu",
    yield_tracker: "Kifuatiliaji cha Mazao na Faida",
    group_view: "Mtazamo wa Chama",
    market_prices: "Bei za Soko",
    ask_advisor: "Uliza Mshauri",
    last_updated: "Ilisasishwa masaa 2 yaliyopita",
    offline_mode: "Hali ya Nje ya Mtandao",
  }
};
