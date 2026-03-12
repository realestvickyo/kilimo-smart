
import React from 'react';

const HOURLY_WEATHER = [
  { time: 'Now', temp: 25, active: true },
  { time: '5 PM', temp: 19, active: false },
  { time: '6 PM', temp: 18, active: false },
  { time: '7 PM', temp: 17, active: false },
  { time: '8 PM', temp: 21, active: false },
];

const WeatherCard: React.FC = () => {
  return (
    <div className="bg-emerald-800 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden h-[24rem] flex flex-col justify-between">
      <div className="flex justify-between items-start relative z-10">
        <div>
          <p className="text-emerald-100/60 text-[10px] font-black uppercase tracking-widest">Cloudy Skies</p>
          <h2 className="text-7xl font-black mt-3 tracking-tighter">26°</h2>
          <div className="mt-8">
            <p className="text-white font-black text-sm uppercase tracking-widest leading-relaxed">Friday<br/>27 Sep 2025</p>
          </div>
        </div>

        <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-[1.5rem] flex items-center justify-center border border-white/10 shadow-xl">
           <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 relative z-10">
        {HOURLY_WEATHER.map((h) => (
          <div key={h.time} className={`flex flex-col items-center min-w-[4rem] p-4 rounded-3xl transition-all border ${h.active ? 'bg-white/20 border-white/20 shadow-2xl' : 'border-transparent opacity-40 hover:opacity-100 hover:bg-white/5'}`}>
            <span className="text-[9px] font-black uppercase tracking-widest mb-3 whitespace-nowrap">{h.time}</span>
            <div className="w-6 h-6 mb-3">
               <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1z"/></svg>
            </div>
            <span className="text-sm font-black">{h.temp}°</span>
          </div>
        ))}
      </div>

      {/* Background Graphic Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/5 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-emerald-400/20 rounded-full blur-[60px]"></div>
    </div>
  );
};

export default WeatherCard;
