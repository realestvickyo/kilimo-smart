
import React from 'react';

interface AnalyticCardProps {
  label: string;
  value: string;
  sub: string;
  trend: 'up' | 'down';
}

const AnalyticCard: React.FC<AnalyticCardProps> = ({ label, value, sub, trend }) => {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100 flex flex-col gap-6 group hover:border-emerald-200 hover:shadow-xl transition-all duration-300">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-stone-50 text-stone-300'}`}>
        {trend === 'up' ? (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
        ) : (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
        )}
      </div>
      <div>
        <p className="text-[10px] font-black text-stone-300 uppercase tracking-widest">{label}</p>
        <div className="flex items-end gap-3 mt-2">
          <p className="text-4xl font-black text-stone-900 leading-none">{value}</p>
          <span className={`text-[10px] font-black uppercase tracking-widest pb-1 ${trend === 'up' ? 'text-emerald-600' : 'text-amber-500'}`}>
            {sub}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnalyticCard;
