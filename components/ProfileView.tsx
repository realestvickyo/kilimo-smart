
import React, { useState } from 'react';
import { FarmerProfile, Language } from '../types';

interface ProfileViewProps {
  farmer: FarmerProfile;
  setFarmer: React.Dispatch<React.SetStateAction<FarmerProfile>>;
  lang: Language;
  setLang: (l: Language) => void;
  onLogout: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ farmer, setFarmer, lang, setLang, onLogout }) => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ ...farmer });

  const handleSave = () => {
    setFarmer(formData);
    setEditing(false);
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto pb-12 animate-slide-up">
      <header className="text-center mb-16">
        <div className="relative inline-block">
          <div className="w-40 h-40 rounded-[3rem] bg-emerald-50 border-4 border-white shadow-2xl overflow-hidden mb-8">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${farmer.name}`} alt="Profile" />
          </div>
          <button className="absolute bottom-6 right-0 p-3.5 bg-emerald-600 text-white rounded-2xl border-4 border-white shadow-2xl hover:scale-110 active:scale-95 transition-transform">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </button>
        </div>
        <h1 className="text-4xl font-black text-stone-900 leading-none tracking-tight">{farmer.name}</h1>
        <p className="text-stone-400 font-black uppercase tracking-widest text-[11px] mt-4">
          {farmer.isPremium ? 'Verified Premium Producer' : 'Standard Farmer Account'} • {farmer.location}, Kenya
        </p>
      </header>

      <section className="bg-white p-10 rounded-[3rem] shadow-sm border border-stone-100 relative overflow-hidden">
        <div className="flex justify-between items-center mb-10">
          <h3 className="font-black text-xl text-stone-900">Farm Details</h3>
          <button 
            onClick={() => editing ? handleSave() : setEditing(true)}
            className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${editing ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100' : 'bg-stone-50 text-stone-400 hover:text-emerald-600'}`}
          >
            {editing ? 'Save Profile' : 'Edit Details'}
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {[
             { label: 'Full Legal Name', key: 'name' as const },
             { label: 'Mobile Number', key: 'phone' as const },
             { label: 'Home Sector', key: 'location' as const },
             { label: 'Total Farm Size (Ha)', key: 'farmSize' as const }
           ].map((field) => (
             <div key={field.key} className="space-y-3">
               <label className="text-[10px] font-black text-stone-300 uppercase tracking-widest ml-1">{field.label}</label>
               <input 
                 type="text" 
                 value={editing ? formData[field.key] : farmer[field.key]} 
                 readOnly={!editing}
                 onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                 className={`w-full border-none rounded-2xl p-5 font-bold text-stone-900 transition-all ${editing ? 'bg-stone-50 ring-2 ring-emerald-500' : 'bg-stone-50'}`} 
               />
             </div>
           ))}
        </div>
      </section>

      <section className="bg-white p-10 rounded-[3rem] shadow-sm border border-stone-100">
        <h3 className="font-black text-xl mb-10 text-stone-900">System Preferences</h3>
        <div className="flex flex-col gap-8">
           <div className="flex flex-col sm:flex-row justify-between items-center p-8 bg-stone-50 rounded-[2.5rem] gap-6">
              <div className="text-center sm:text-left">
                <h4 className="font-black text-stone-900">Primary Language</h4>
                <p className="text-xs text-stone-400 font-bold uppercase tracking-widest mt-1">Interface localization</p>
              </div>
              <div className="flex gap-3 bg-white p-2 rounded-2xl shadow-sm border border-stone-100 w-full sm:w-auto">
                 <button 
                  onClick={() => setLang(Language.ENGLISH)}
                  className={`flex-1 sm:px-8 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all ${lang === Language.ENGLISH ? 'bg-emerald-600 text-white shadow-xl' : 'text-stone-300 hover:text-stone-600'}`}
                 >
                   ENGLISH
                 </button>
                 <button 
                  onClick={() => setLang(Language.SWAHILI)}
                  className={`flex-1 sm:px-8 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all ${lang === Language.SWAHILI ? 'bg-emerald-600 text-white shadow-xl' : 'text-stone-300 hover:text-stone-600'}`}
                 >
                   SWAHILI
                 </button>
              </div>
           </div>

           <div className="flex justify-between items-center p-8 bg-stone-50 rounded-[2.5rem]">
              <div>
                <h4 className="font-black text-stone-900">Voice Alerts</h4>
                <p className="text-xs text-stone-400 font-bold uppercase tracking-widest mt-1">Daily morning updates</p>
              </div>
              <div className="w-16 h-9 bg-emerald-600 rounded-full relative p-1.5 transition-all cursor-pointer">
                 <div className="absolute right-1.5 w-6 h-6 bg-white rounded-full shadow-lg"></div>
              </div>
           </div>
        </div>
      </section>

      <button 
        onClick={onLogout} 
        className="w-full bg-stone-900 text-white py-6 rounded-[2.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl active:scale-95 transition-all hover:bg-black"
      >
        Sign Out Securely
      </button>
    </div>
  );
};

export default ProfileView;
