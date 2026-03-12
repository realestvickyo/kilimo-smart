
import React, { useState } from 'react';
import { FarmerProfile } from '../types';
import { KENYA_COUNTIES } from '../constants';

const MapView: React.FC<{ farmer: FarmerProfile }> = ({ farmer }) => {
  const [selectedCounty, setSelectedCounty] = useState(KENYA_COUNTIES[0]);

  return (
    <div className="space-y-6 pb-12">
       <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-3xl font-black text-stone-900">Regional Alerts</h1>
          <p className="text-stone-400 text-sm font-medium">Monitoring {selectedCounty.name} for pest and climate risks.</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-xl border border-stone-100 shadow-sm flex items-center gap-2">
           <span className={`w-3 h-3 rounded-full animate-pulse ${selectedCounty.risk === 'High' ? 'bg-red-500' : 'bg-emerald-500'}`}></span>
           <span className="text-xs font-black uppercase">{selectedCounty.risk} Risk Status</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 bg-white rounded-[2.5rem] p-4 shadow-xl border border-stone-100 relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-stone-100 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/35.8,-1.0,7/800x600?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.r69_98S473S6XUjK0lYxSA')] bg-cover bg-center opacity-60"></div>
          
          {/* Functional interactive markers based on county data */}
          {KENYA_COUNTIES.map((county, i) => (
            <div 
              key={county.id}
              onClick={() => setSelectedCounty(county)}
              style={{ top: `${20 + i * 15}%`, left: `${30 + i * 12}%` }}
              className="absolute group cursor-pointer animate-bounce-subtle"
            >
              <div className={`p-3 rounded-2xl shadow-2xl flex items-center gap-3 transition-all active:scale-95 ${selectedCounty.id === county.id ? 'bg-stone-900 text-white scale-110' : 'bg-white text-stone-900 hover:bg-stone-50'}`}>
                <div className="w-6 h-6 rounded-lg flex items-center justify-center text-xs" style={{ backgroundColor: county.color + '20', color: county.color }}>📍</div>
                <span className="text-xs font-black whitespace-nowrap">{county.name}</span>
              </div>
            </div>
          ))}

          <div className="absolute bottom-6 left-6 right-6">
             <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-stone-100 shadow-2xl flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-2xl">🌍</div>
                  <div>
                     <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Active County</p>
                     <p className="text-stone-900 font-black text-lg">{selectedCounty.name}</p>
                  </div>
                </div>
                {!farmer.isPremium && (
                   <div className="text-right hidden sm:block">
                     <p className="text-[10px] text-amber-600 font-black mb-1 uppercase">PRO FEATURE</p>
                     <button className="text-emerald-600 text-xs font-black underline">Unlock Heatmaps</button>
                   </div>
                )}
             </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
           <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100">
              <h3 className="font-bold text-lg mb-6">Risk Details: {selectedCounty.name}</h3>
              <div className="space-y-4">
                 <div className="p-5 bg-stone-50 rounded-3xl border border-stone-100">
                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-2">Primary Risk</p>
                    <p className="font-bold text-stone-900">{selectedCounty.risk === 'High' ? 'Fall Armyworm Infestation' : 'Stable Growing Conditions'}</p>
                 </div>
                 <div className="p-5 bg-stone-50 rounded-3xl border border-stone-100">
                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-2">Recommendation</p>
                    <p className="text-sm font-medium text-stone-600">{selectedCounty.risk === 'High' ? 'Apply pyrethroid-based pesticide in late evening.' : 'Continue regular irrigation cycle.'}</p>
                 </div>
                 <button className="w-full bg-stone-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-stone-100 transition-transform active:scale-95">Report New Hazard</button>
              </div>
           </section>

           <div className="bg-emerald-700 text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
              <h3 className="font-bold text-lg mb-4">Market Radius</h3>
              <p className="text-sm text-emerald-100/70 mb-6 font-medium leading-relaxed">Finding verified buyers within 50km of {selectedCounty.name}...</p>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                 <div className="bg-emerald-400 h-full w-[85%] rounded-full shadow-lg"></div>
              </div>
              <p className="mt-4 text-[10px] font-black uppercase tracking-widest opacity-60">12 Buyers Found</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
