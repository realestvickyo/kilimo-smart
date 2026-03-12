
import React from 'react';
import { Language, FarmerProfile, AppView } from '../types';

interface SidebarProps {
  lang: Language;
  setLang: (l: Language) => void;
  farmer: FarmerProfile;
  currentView: AppView;
  setView: (v: AppView) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ lang, setLang, farmer, currentView, setView }) => {
  const NAV_ITEMS = [
    { id: AppView.DASHBOARD, label: 'Dashboard', icon: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
    { id: AppView.MAP, label: 'Regional Map', icon: <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /> },
    { id: AppView.TASKS, label: 'Operations', icon: <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 001 1h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /> },
    { id: AppView.INSIGHTS, label: 'Market Pro', icon: <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /> },
    { id: AppView.PROFILE, label: 'My Profile', icon: <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> },
  ];

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-white border-r border-stone-100 z-50">
      <div className="flex flex-col flex-grow pt-10 overflow-y-auto">
        <div className="px-8 mb-16 flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-900 rounded-[1.2rem] flex items-center justify-center shadow-2xl">
            <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tight text-stone-900">Kilimo<span className="text-emerald-600">Pro</span></span>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <button 
              key={item.id}
              onClick={() => setView(item.id)}
              className={`w-full group flex items-center px-5 py-4 text-[11px] font-black uppercase tracking-[0.15em] rounded-2xl transition-all duration-300 ${currentView === item.id ? 'bg-emerald-50 text-emerald-700 shadow-sm' : 'text-stone-300 hover:bg-stone-50 hover:text-stone-600'}`}
            >
              <svg className={`mr-4 h-6 w-6 transition-colors ${currentView === item.id ? 'text-emerald-600' : 'text-stone-200 group-hover:text-stone-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                {item.icon}
              </svg>
              {item.label}
              {item.id === AppView.INSIGHTS && !farmer.isPremium && <span className="ml-auto text-[8px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-lg">PRO</span>}
            </button>
          ))}
        </nav>

        <div className="p-8">
           <div className="bg-stone-50 rounded-[2rem] p-6 border border-stone-100">
             <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-stone-100">🇰🇪</div>
               <div>
                 <p className="text-[10px] font-black text-stone-300 uppercase tracking-widest">Region</p>
                 <p className="text-xs font-black text-stone-900">{farmer.location}</p>
               </div>
             </div>
             <div className="flex gap-2">
                <button 
                  onClick={() => setLang(Language.ENGLISH)}
                  className={`flex-1 py-2.5 rounded-xl text-[9px] font-black tracking-widest transition-all ${lang === Language.ENGLISH ? 'bg-white text-emerald-800 shadow-sm' : 'text-stone-300'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang(Language.SWAHILI)}
                  className={`flex-1 py-2.5 rounded-xl text-[9px] font-black tracking-widest transition-all ${lang === Language.SWAHILI ? 'bg-white text-emerald-800 shadow-sm' : 'text-stone-300'}`}
                >
                  SW
                </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
