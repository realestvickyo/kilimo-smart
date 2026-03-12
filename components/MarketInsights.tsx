
import React, { useState, useEffect } from 'react';
import { fetchVerifiedMarketPrices } from '../lib/ai';

const MarketInsights: React.FC<{ crop: string; location: string }> = ({ crop, location }) => {
  const [insight, setInsight] = useState<string>('');
  const [sources, setSources] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const getMarketData = async () => {
    setLoading(true);
    try {
      const { text, sources } = await fetchVerifiedMarketPrices(crop, location);
      setInsight(text);
      setSources(sources);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMarketData();
  }, [crop, location]);

  return (
    <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-black text-lg text-stone-900">Verified Market Grounding</h3>
        <button 
          onClick={getMarketData}
          className="text-emerald-600 text-[10px] font-black uppercase tracking-widest"
        >
          Refresh Feed
        </button>
      </div>

      {loading ? (
        <div className="space-y-3 animate-pulse">
          <div className="h-4 bg-stone-100 rounded-full w-3/4"></div>
          <div className="h-4 bg-stone-100 rounded-full w-1/2"></div>
        </div>
      ) : (
        <>
          <p className="text-sm text-stone-600 leading-relaxed font-medium">
            {insight || 'Analyzing real-time market trends...'}
          </p>
          
          {sources.length > 0 && (
            <div className="mt-6 pt-6 border-t border-stone-100">
              <p className="text-[10px] font-black text-stone-300 uppercase tracking-widest mb-3">Verified Sources</p>
              <div className="flex flex-wrap gap-2">
                {sources.map((chunk, i) => (
                  chunk.web && (
                    <a 
                      key={i} 
                      href={chunk.web.uri} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-stone-50 text-[10px] font-bold px-3 py-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
                    >
                      {chunk.web.title || 'Market Source'}
                    </a>
                  )
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default MarketInsights;
