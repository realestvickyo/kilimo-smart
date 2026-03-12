
import React from 'react';
import { Language, FarmerProfile, AppView, FarmTask } from '../types';
import WeatherCard from './WeatherCard';
import AnalyticCard from './AnalyticCard';
import DailyBriefing from './DailyBriefing';

interface DashboardProps {
  lang: Language;
  farmer: FarmerProfile;
  onUpgrade: () => void;
  tasks: FarmTask[];
  onToggleTask: (id: string) => void;
  setView: (v: AppView) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ lang, farmer, onUpgrade, tasks, onToggleTask, setView }) => {
  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="space-y-8 animate-slide-up">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div onClick={() => setView(AppView.PROFILE)} className="cursor-pointer group">
          <p className="text-stone-400 text-sm font-bold uppercase tracking-widest">Welcome Back</p>
          <h1 className="text-3xl font-black text-stone-900 leading-tight group-hover:text-emerald-600 transition-colors">{farmer.name}</h1>
        </div>
        <div className="flex gap-4">
          <button className="p-4 bg-white rounded-[1.5rem] shadow-sm border border-stone-100 text-stone-400 hover:text-emerald-600 transition-all active:scale-90">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          </button>
          <div onClick={() => setView(AppView.PROFILE)} className="h-14 w-14 rounded-[1.5rem] bg-emerald-50 border-2 border-white shadow-md overflow-hidden cursor-pointer hover:ring-2 hover:ring-emerald-500 transition-all active:scale-95">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${farmer.name}`} alt="Profile" />
          </div>
        </div>
      </header>

      {/* AI Briefing */}
      <DailyBriefing farmerName={farmer.name} location={farmer.location} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Main Field Card */}
          <div onClick={() => setView(AppView.MAP)} className="relative h-[28rem] rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer border border-white/20">
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Farm" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-transparent"></div>
            
            {/* Floating Top Buttons */}
            <div className="absolute top-8 left-8">
               <div className="bg-white/20 backdrop-blur-xl p-4 rounded-3xl border border-white/20 text-white font-black text-xs uppercase tracking-widest">
                  Narok Sector 4
               </div>
            </div>

            <div className="absolute bottom-10 left-8 right-8">
              <div className="bg-white/95 backdrop-blur-2xl p-7 rounded-[2.5rem] flex items-center justify-between shadow-2xl">
                <div className="flex gap-6 items-center">
                   <div className="w-16 h-16 bg-emerald-50 rounded-[1.5rem] flex items-center justify-center shadow-inner">
                      <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                   </div>
                   <div>
                      <h2 className="text-stone-900 font-black text-2xl tracking-tight">Strawberry Primary</h2>
                      <div className="flex gap-2 mt-2">
                        <span className="bg-emerald-100 text-emerald-700 text-[10px] px-3 py-1.5 rounded-full font-black uppercase tracking-wider">High Yield</span>
                        <span className="bg-stone-100 text-stone-500 text-[10px] px-3 py-1.5 rounded-full font-black uppercase tracking-wider">{farmer.farmSize} Hectares</span>
                      </div>
                   </div>
                </div>
                <div className="text-right border-l border-stone-200 pl-8 hidden sm:block">
                  <p className="text-[10px] text-stone-400 font-black uppercase tracking-widest mb-1">Harvest In</p>
                  <p className="text-emerald-600 font-black text-2xl">7 Days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Grid */}
          <section>
            <div className="flex justify-between items-center mb-6 px-4">
              <h3 className="font-black text-2xl text-stone-900">AI Analytic</h3>
              <button onClick={() => setView(AppView.INSIGHTS)} className="text-stone-400 text-sm font-black uppercase tracking-widest hover:text-emerald-600 transition-colors">See Details</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <AnalyticCard label="Water Depth" value="71%" sub="Optimal" trend="up" />
              <AnalyticCard label="Plant Health" value="89%" sub="Robust" trend="up" />
              <AnalyticCard label="Soil Fertility" value="47%" sub="Action Needed" trend="down" />
            </div>
          </section>

          {/* Activity List */}
          <section>
             <div className="flex justify-between items-center mb-6 px-4">
              <h3 className="font-black text-2xl text-stone-900">Activity in this field</h3>
              <span className="text-emerald-600 text-sm font-black px-4 py-2 bg-emerald-50 rounded-full">{completedCount}/{tasks.length} Completed</span>
            </div>
            <div className="space-y-4">
              {tasks.slice(0, 3).map((act) => (
                <div key={act.id} onClick={() => onToggleTask(act.id)} className="bg-white p-6 rounded-[2rem] shadow-sm border border-stone-100 flex items-center justify-between group hover:shadow-xl hover:border-emerald-100 transition-all cursor-pointer active:scale-[0.98]">
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-inner transition-all ${act.completed ? 'bg-emerald-50 text-emerald-600 opacity-60' : 'bg-stone-50 text-stone-900'}`}>
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 001 1h10a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className={`font-black text-lg ${act.completed ? 'text-stone-300 line-through' : 'text-stone-900'}`}>{act.title}</h4>
                      <p className="text-[11px] text-stone-400 font-black uppercase tracking-widest mt-1">{act.date}</p>
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${act.completed ? 'bg-emerald-500 border-emerald-500 shadow-lg shadow-emerald-200' : 'border-stone-100 group-hover:border-emerald-500'}`}>
                     {act.completed && <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column (Widgets) */}
        <div className="lg:col-span-4 space-y-8">
          <WeatherCard />
          
          <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-stone-100">
             <div className="flex justify-between items-center mb-8">
              <h3 className="font-black text-xl text-stone-900">Other Fields</h3>
              <button className="text-stone-300 hover:text-emerald-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/></svg>
              </button>
            </div>
            
            <div className="flex gap-3 overflow-x-auto pb-6 no-scrollbar">
               {['All', 'Grain', 'Herbs'].map((cat, i) => (
                 <button key={cat} className={`whitespace-nowrap px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${i === 0 ? 'bg-stone-900 text-white shadow-xl' : 'bg-stone-50 text-stone-400 hover:bg-stone-100'}`}>
                   {cat}
                 </button>
               ))}
            </div>

            <div className="mt-4 relative group cursor-pointer overflow-hidden rounded-[2.5rem] border border-stone-100">
              <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=400" className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110" alt="Farm" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent p-8 flex flex-col justify-end">
                <h4 className="text-white font-black text-xl">Heisenberg Estate</h4>
                <p className="text-emerald-400 text-xs font-black uppercase tracking-widest mt-1">Wheat & Corn</p>
                <div className="flex gap-4 mt-6">
                  <span className="flex items-center gap-2 text-white text-[10px] font-black uppercase bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md">7 Tasks</span>
                  <span className="flex items-center gap-2 text-white text-[10px] font-black uppercase bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md">Premium</span>
                </div>
              </div>
            </div>
          </div>

          {!farmer.isPremium && (
            <div className="bg-emerald-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4 leading-tight">Unlock AI Pro Yield Insights</h3>
                <p className="text-emerald-100/70 text-sm mb-8 font-medium">Get personalized ROI calculators and direct buyer access.</p>
                <button onClick={onUpgrade} className="w-full bg-white text-emerald-900 py-5 rounded-[1.5rem] font-black text-sm uppercase tracking-widest shadow-xl hover:bg-emerald-50 active:scale-95 transition-all">
                  Get Pro Access
                </button>
              </div>
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
