
import React from 'react';

const HOURLY_DATA = [
  { time: 'Now', temp: 25, active: true },
  { time: '5 PM', temp: 19, active: false },
  { time: '6 PM', temp: 18, active: false },
  { time: '7 PM', temp: 17, active: false },
  { time: '8 PM', temp: 21, active: false },
];

const WeatherWidget: React.FC = () => {
  return (
    <div className="bg-emerald-700 p-6 rounded-[2rem] text-white shadow-lg relative overflow-hidden">
      <div className="flex justify-between items-start relative z-10">
        <div>
          <p className="text-emerald-100/70 text-sm font-medium">Cloudy</p>
          <h2 className="text-5xl font-black mt-1">26°</h2>
          <p className="text-emerald-100/70 text-xs font-bold mt-2 uppercase tracking-widest">Friday<br/>27.09.2025</p>
          <div className="mt-6 flex items-center gap-2">
            <svg className="w-8 h-8 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          {HOURLY_DATA.map((h) => (
            <div key={h.time} className={`flex flex-col items-center min-w-[3.5rem] p-3 rounded-2xl transition-all ${h.active ? 'bg-white/20 backdrop-blur-md border border-white/30' : ''}`}>
              <span className="text-[10px] font-bold opacity-60 mb-2 whitespace-nowrap">{h.time}</span>
              <div className="w-6 h-6 mb-2">
                 <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>
              </div>
              <span className="text-sm font-black">{h.temp}°</span>
              <div className="mt-2 text-[8px] flex items-center gap-1 opacity-60">
                 <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
                 3.2
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default WeatherWidget;
