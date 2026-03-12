
import React from 'react';

const HarvestTracker: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100 relative overflow-hidden group">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-bold text-stone-900 flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
          <span className="text-lg">Harvest Cycle</span>
        </h4>
        <button className="text-emerald-600 text-xs font-black uppercase tracking-widest hover:underline transition-all">Open Details ></button>
      </div>
      
      <div className="mt-10 relative">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="text-4xl font-black text-stone-900 leading-none">7 Days</span>
            <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-2">Remaining to peak harvest</p>
          </div>
          <span className="text-sm font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">19/31 Days</span>
        </div>
        
        <div className="w-full bg-stone-100 h-3 rounded-full overflow-hidden shadow-inner">
          <div 
            className="bg-emerald-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(16,185,129,0.4)]" 
            style={{ width: '61%' }}
          ></div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-stone-100 grid grid-cols-2 gap-4">
        <div>
           <p className="text-[9px] font-black text-stone-400 uppercase tracking-widest mb-1">Est. Quality</p>
           <p className="text-stone-900 font-bold text-sm">A+ High Grade</p>
        </div>
        <div className="text-right">
           <p className="text-[9px] font-black text-stone-400 uppercase tracking-widest mb-1">Risk Level</p>
           <p className="text-emerald-600 font-bold text-sm">Low (Clean)</p>
        </div>
      </div>
    </div>
  );
};

export default HarvestTracker;
