
import React, { useState, useRef } from 'react';
import { generateBriefingAudio, decodeAudio } from '../lib/ai';

interface DailyBriefingProps {
  farmerName: string;
  location: string;
}

const DailyBriefing: React.FC<DailyBriefingProps> = ({ farmerName, location }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const audioCtx = useRef<AudioContext | null>(null);

  const handlePlayBriefing = async () => {
    if (isPlaying || loading) return;
    setLoading(true);
    
    try {
      if (!audioCtx.current) {
        audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      }

      const base64 = await generateBriefingAudio(farmerName, location);
      
      if (base64) {
        const buffer = await decodeAudio(base64, audioCtx.current);
        const source = audioCtx.current.createBufferSource();
        source.buffer = buffer;
        source.connect(audioCtx.current.destination);
        
        source.onended = () => setIsPlaying(false);
        source.start(0);
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Briefing Playback Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-emerald-800 text-white p-6 rounded-[2.5rem] shadow-xl flex items-center justify-between overflow-hidden relative group">
      <div className="flex gap-5 items-center z-10">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${isPlaying ? 'bg-white text-emerald-800 shadow-xl' : 'bg-emerald-700/50 backdrop-blur-md'}`}>
          {loading ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : isPlaying ? (
            <div className="flex gap-1 items-end h-5">
               {[1,2,3,4,3,2,4,1].map((i, idx) => (
                 <div key={idx} className="w-0.5 bg-emerald-800 rounded-full animate-bounce" style={{ height: `${i * 4}px`, animationDelay: `${idx * 0.1}s` }}></div>
               ))}
            </div>
          ) : (
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
          )}
        </div>
        <div>
          <h4 className="font-black text-lg leading-tight">AI Morning Briefing</h4>
          <p className="text-emerald-100/60 text-[10px] font-black uppercase tracking-widest mt-1">
            {isPlaying ? 'Now Speaking...' : 'Tap for 30s Audio Outlook'}
          </p>
        </div>
      </div>
      
      <button 
        onClick={handlePlayBriefing}
        disabled={loading || isPlaying}
        className={`z-10 px-8 py-3.5 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all ${isPlaying ? 'bg-emerald-700/50 text-emerald-100 cursor-default' : 'bg-white text-emerald-800 shadow-xl hover:scale-105 active:scale-95'}`}
      >
        {isPlaying ? 'Playing' : loading ? 'Preparing...' : 'Play Brief'}
      </button>

      {/* Background Polish */}
      <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all"></div>
    </div>
  );
};

export default DailyBriefing;
