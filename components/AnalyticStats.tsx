
import React from 'react';

const STATS = [
  { label: 'Water depth', value: '71%', icon: '🌊', color: 'blue' },
  { label: 'Plant Health', value: '89%', icon: '🌿', color: 'emerald' },
  { label: 'Soil Fertility', value: '47%', icon: '🧪', color: 'amber' },
];

const AnalyticStats: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {STATS.map((stat) => (
        <div key={stat.label} className="bg-white p-5 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col gap-3 group hover:border-emerald-200 transition-colors">
          <div className="w-10 h-10 rounded-2xl bg-stone-50 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
            {stat.icon}
          </div>
          <div>
            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{stat.label}</p>
            <p className="text-2xl font-black text-stone-900 mt-1">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnalyticStats;
