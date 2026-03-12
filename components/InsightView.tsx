
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { MarketPrice, Language } from '../types';
import MarketPrices from './MarketPrices';
import GroupView from './GroupView';
import Chatbot from './Chatbot';

const PROFIT_DATA = [
  { name: 'Last Season', profit: 48000 },
  { name: 'This Season', profit: 62000 },
  { name: 'Projected', profit: 79000 },
];

interface InsightViewProps {
  isPremium: boolean;
  onUpgrade: () => void;
  marketPrices: MarketPrice[];
  onVote: (idx: number) => void;
  lang: Language;
}

const InsightView: React.FC<InsightViewProps> = ({ isPremium, onUpgrade, marketPrices, onVote, lang }) => {
  return (
    <div className="space-y-6 pb-12">
      <header>
        <h1 className="text-3xl font-black text-stone-900">Yield & Market Analytics</h1>
        <p className="text-stone-400 text-sm font-medium mt-1">Financial forecasts and real-time marketplace data.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100">
            <h3 className="font-black text-lg mb-8 uppercase tracking-widest text-stone-400">Revenue Performance</h3>
            <div className="h-[300px] w-full relative">
              <div className={`${!isPremium ? 'blur-lg grayscale opacity-40 select-none' : ''} h-full`}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={PROFIT_DATA}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" fontSize={10} fontWeight="bold" tickLine={false} axisLine={false} tick={{fill: '#94a3b8'}} />
                    <YAxis fontSize={10} fontWeight="bold" tickLine={false} axisLine={false} tick={{fill: '#94a3b8'}} />
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                    <Bar dataKey="profit" radius={[8, 8, 0, 0]}>
                      {PROFIT_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 2 ? '#10b981' : '#e2e8f0'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {!isPremium && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                  <div className="bg-white/95 backdrop-blur-md p-8 rounded-[2rem] border border-stone-100 shadow-2xl max-w-sm">
                    <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    </div>
                    <h4 className="text-xl font-black text-stone-900 mb-2 leading-tight">ROI Projection Locked</h4>
                    <p className="text-stone-400 text-sm font-medium mb-6">Pro members get detailed financial forecasts based on real-time market volatility.</p>
                    <button onClick={onUpgrade} className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-emerald-100 transition-transform active:scale-95">
                      Unlock Insights
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Fully functional MarketPrices component */}
          <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-stone-100 overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">Verified Market Prices</h3>
              <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Real-time Crowdsourced</span>
            </div>
            <div className="space-y-4">
               {marketPrices.map((p, idx) => (
                 <div key={idx} className="flex items-center justify-between p-5 bg-stone-50 rounded-3xl border border-stone-100 hover:border-emerald-200 transition-all group">
                   <div className="flex gap-4 items-center">
                     <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-xl">{p.crop === 'Maize' ? '🌽' : p.crop === 'Beans' ? '🫘' : '🥔'}</div>
                     <div>
                       <h4 className="font-bold text-stone-900">{p.crop} at {p.market}</h4>
                       <div className="flex gap-2 mt-1 items-center">
                         <span className="text-emerald-700 font-black text-sm">KSh {p.price.toLocaleString()}</span>
                         <span className="text-[10px] text-stone-400 font-bold uppercase">/ {p.unit}</span>
                         {p.verified && <span className="bg-emerald-100 text-emerald-700 text-[8px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-tighter">Verified</span>}
                       </div>
                     </div>
                   </div>
                   <button 
                    onClick={() => onVote(idx)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${p.verified ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-white text-stone-400 border-stone-100 hover:border-emerald-500 hover:text-emerald-600'}`}
                   >
                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>
                     {p.upvotes}
                   </button>
                 </div>
               ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 space-y-6">
           <GroupView isPremium={isPremium} onUpgrade={onUpgrade} />
           <Chatbot isPremium={isPremium} lang={lang} />
        </div>
      </div>
    </div>
  );
};

export default InsightView;
