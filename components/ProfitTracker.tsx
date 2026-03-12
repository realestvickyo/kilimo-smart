
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Last Year', profit: 54000 },
  { name: 'This Year', profit: 68000 },
  { name: 'Projected', profit: 82000 },
];

interface ProfitTrackerProps {
  isPremium: boolean;
  onUpgrade: () => void;
}

const ProfitTracker: React.FC<ProfitTrackerProps> = ({ isPremium, onUpgrade }) => {
  return (
    <section className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold">Yield & Profit Tracker</h3>
        <button className="text-emerald-600 font-bold text-sm">+ Add Harvest Record</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <p className="text-stone-500 text-sm mb-1 uppercase tracking-wider font-semibold">Total Revenue (This Season)</p>
            <h4 className="text-4xl font-black text-emerald-900">KSh 68,000</h4>
            <span className="text-emerald-600 text-sm font-bold">↑ 12% vs last year</span>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-stone-100">
              <span className="text-stone-600">Cost of Inputs</span>
              <span className="font-bold text-red-600">- KSh 12,400</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-stone-100">
              <span className="text-stone-600">Expected Yield (Bags)</span>
              <span className="font-bold">45 Bags</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-stone-600">Actual Harvest (Bags)</span>
              <span className="font-bold">42 Bags</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className={`h-full ${!isPremium ? 'blur-sm grayscale opacity-50' : ''}`}>
             <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Bar dataKey="profit" radius={[4, 4, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 2 ? '#10b981' : '#d6d3d1'} />
                    ))}
                  </Bar>
                </BarChart>
             </ResponsiveContainer>
             <p className="text-center text-xs text-stone-400 mt-2">Profit Growth Trend</p>
          </div>

          {!isPremium && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 p-4 text-center">
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-stone-200 max-w-[240px]">
                <p className="text-sm font-bold text-stone-900 mb-2">Next Season Projections</p>
                <p className="text-xs text-stone-500 mb-4">See how weather risks will impact your profits next month.</p>
                <button 
                  onClick={onUpgrade}
                  className="w-full bg-emerald-600 text-white text-xs font-bold py-2 rounded-lg hover:bg-emerald-700"
                >
                  Unlock with Premium
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfitTracker;
