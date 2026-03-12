
import React, { useState } from 'react';

const INITIAL_TASKS = [
  { id: 1, title: 'Apply Fertilizer on west side', date: '20, August 2025 07:30am', completed: false, icon: '🛡️' },
  { id: 2, title: 'Change plant soil', date: '21, August 2025 09:30am', completed: true, icon: '🌱' },
  { id: 3, title: 'Plant for seed and water', date: '22, August 2025 06:00am', completed: false, icon: '💧' },
];

const ActivityList: React.FC = () => {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="space-y-3.5">
      {tasks.map((act) => (
        <div 
          key={act.id} 
          onClick={() => toggleTask(act.id)}
          className="bg-white p-5 rounded-[2rem] shadow-sm border border-stone-100 flex items-center justify-between group hover:shadow-md hover:border-emerald-100 transition-all cursor-pointer active:scale-[0.98]"
        >
          <div className="flex items-center gap-5">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 ${act.completed ? 'bg-emerald-50 text-emerald-600 scale-90 opacity-60' : 'bg-stone-50 text-stone-900 shadow-sm'}`}>
              {act.icon}
            </div>
            <div>
              <h4 className={`font-bold text-sm transition-all ${act.completed ? 'text-stone-300 line-through' : 'text-stone-900'}`}>{act.title}</h4>
              <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-1">{act.date}</p>
            </div>
          </div>
          <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${act.completed ? 'bg-emerald-500 border-emerald-500 shadow-lg shadow-emerald-100' : 'border-stone-100 group-hover:border-emerald-200'}`}>
             {act.completed && (
               <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
             )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityList;
