
import React from 'react';

const ACTIVITIES = [
  { id: 1, title: 'Apply Fertilizer on west side', date: '20, August 2025 07:30am', completed: false, icon: '🛡️' },
  { id: 2, title: 'Change plant soil', date: '21, August 2025 09:30am', completed: true, icon: '🌱' },
  { id: 3, title: 'Plant for seed and water', date: '22, August 2025 06:00am', completed: false, icon: '💧' },
];

const ActivityFeed: React.FC = () => {
  return (
    <div className="space-y-3">
      {ACTIVITIES.map((act) => (
        <div key={act.id} className="bg-white p-4 rounded-3xl shadow-sm border border-stone-100 flex items-center justify-between group hover:shadow-md transition-all cursor-pointer">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${act.completed ? 'bg-emerald-50 text-emerald-600' : 'bg-stone-50 text-stone-900'}`}>
              {act.icon}
            </div>
            <div>
              <h4 className={`font-bold text-sm ${act.completed ? 'text-stone-400 line-through' : 'text-stone-900'}`}>{act.title}</h4>
              <p className="text-[10px] text-stone-400 font-medium">{act.date}</p>
            </div>
          </div>
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${act.completed ? 'bg-emerald-500 border-emerald-500' : 'border-stone-100'}`}>
             {act.completed && (
               <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
             )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;
