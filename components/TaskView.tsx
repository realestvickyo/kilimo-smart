
import React, { useState } from 'react';
import { FarmTask } from '../types';

interface TaskViewProps {
  tasks: FarmTask[];
  onToggleTask: (id: string) => void;
  onAddTask: (title: string) => void;
}

const TaskView: React.FC<TaskViewProps> = ({ tasks, onToggleTask, onAddTask }) => {
  const [newTitle, setNewTitle] = useState('');
  const [showAdd, setShowAdd] = useState(false);

  const handleAdd = () => {
    if (newTitle.trim()) {
      onAddTask(newTitle);
      setNewTitle('');
      setShowAdd(false);
    }
  };

  return (
    <div className="space-y-6">
       <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-stone-900">Farm Operations</h1>
          <p className="text-stone-400 text-sm font-medium mt-1">Detailed activity log and upcoming field tasks.</p>
        </div>
        <button 
          onClick={() => setShowAdd(!showAdd)}
          className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-emerald-100 active:scale-95 transition-all"
        >
          {showAdd ? 'Close' : '+ Add Task'}
        </button>
      </header>

      {showAdd && (
        <div className="bg-white p-6 rounded-[2rem] border-2 border-emerald-100 shadow-xl animate-bounce-subtle">
           <h3 className="font-bold mb-4">New Operational Task</h3>
           <div className="flex gap-3">
             <input 
               type="text" 
               value={newTitle}
               onChange={(e) => setNewTitle(e.target.value)}
               placeholder="e.g. Apply pesticide to north field"
               className="flex-1 bg-stone-50 border-none rounded-2xl px-4 py-3 font-medium focus:ring-2 focus:ring-emerald-500"
             />
             <button 
               onClick={handleAdd}
               className="bg-emerald-600 text-white px-6 rounded-2xl font-black text-xs uppercase"
             >
               Save
             </button>
           </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
           <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100">
             <div className="space-y-3.5">
               {tasks.length === 0 ? (
                 <div className="text-center py-12 text-stone-400">No tasks logged yet.</div>
               ) : (
                 tasks.map((act) => (
                   <div key={act.id} onClick={() => onToggleTask(act.id)} className="bg-white p-5 rounded-[2rem] shadow-sm border border-stone-100 flex items-center justify-between group hover:shadow-md hover:border-emerald-100 transition-all cursor-pointer active:scale-[0.98]">
                     <div className="flex items-center gap-5">
                       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all ${act.completed ? 'bg-emerald-50 text-emerald-600 opacity-60' : 'bg-stone-50'}`}>
                         {act.type === 'soil' ? '🌱' : act.type === 'water' ? '💧' : '🛡️'}
                       </div>
                       <div>
                         <h4 className={`font-bold text-sm ${act.completed ? 'text-stone-300 line-through' : 'text-stone-900'}`}>{act.title}</h4>
                         <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-1">{act.date}</p>
                       </div>
                     </div>
                     <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${act.completed ? 'bg-emerald-500 border-emerald-500 shadow-lg shadow-emerald-100' : 'border-stone-100 group-hover:border-emerald-200'}`}>
                        {act.completed && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>}
                     </div>
                   </div>
                 ))
               )}
             </div>
           </section>
        </div>

        <div className="lg:col-span-4 space-y-6">
           <div className="bg-emerald-700 text-white p-8 rounded-[2.5rem] shadow-xl">
             <h3 className="text-xl font-bold mb-4">Operations Summary</h3>
             <div className="space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-4">
                   <span className="text-emerald-100/70 text-sm font-medium">Completed</span>
                   <span className="font-black">{tasks.filter(t => t.completed).length} / {tasks.length}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-4">
                   <span className="text-emerald-100/70 text-sm font-medium">Efficiency</span>
                   <span className="font-black">{tasks.length > 0 ? Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100) : 0}%</span>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TaskView;
