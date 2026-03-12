
import React from 'react';

interface GroupProps {
  isPremium: boolean;
  onUpgrade: () => void;
}

const GroupView: React.FC<GroupProps> = ({ isPremium, onUpgrade }) => {
  return (
    <section className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200 overflow-hidden relative">
      <h3 className="text-lg font-bold mb-4">Cooperative: Narok Central</h3>
      
      <div className={`space-y-4 ${!isPremium ? 'blur-md grayscale opacity-50 select-none' : ''}`}>
        <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
          <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1">Bulk Buy Alert</p>
          <p className="text-sm font-medium text-emerald-900">14 members are buying Fertilizer Grade D. Join to get 15% discount.</p>
          <button className="mt-3 w-full bg-emerald-600 text-white text-xs font-bold py-2 rounded-lg">Join Order</button>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-[10px] font-bold">AV</div>
            <div>
              <p className="text-xs font-bold">Avg. Price</p>
              <p className="text-[10px] text-stone-500">Collective maize price</p>
            </div>
          </div>
          <p className="font-bold text-stone-900">KSh 4,150</p>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-[10px] font-bold">LA</div>
            <div>
              <p className="text-xs font-bold">Loss Avoided</p>
              <p className="text-[10px] text-stone-500">Collective savings</p>
            </div>
          </div>
          <p className="font-bold text-emerald-600">KSh 1.2M</p>
        </div>
      </div>

      {!isPremium && (
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-10">
          <div className="bg-white/95 p-6 rounded-2xl shadow-2xl border border-stone-100 w-full max-w-[240px]">
            <p className="text-sm font-bold mb-2">Group Insights Locked</p>
            <p className="text-xs text-stone-500 mb-4">Join your local cooperative to see shared alerts & bulk buying power.</p>
            <button 
              onClick={onUpgrade}
              className="w-full bg-emerald-600 text-white text-xs font-bold py-2 rounded-lg"
            >
              Get Premium Access
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GroupView;
