
import React, { useState } from 'react';
import { Language, MarketPrice } from '../types';

const INITIAL_PRICES: MarketPrice[] = [
  { crop: 'Maize', market: 'Kitale', price: 4200, unit: '90kg Bag', verified: true, upvotes: 24, timestamp: '1h ago' },
  { crop: 'Beans', market: 'Narok', price: 8500, unit: '90kg Bag', verified: true, upvotes: 18, timestamp: '3h ago' },
  { crop: 'Potato', market: 'Molo', price: 2800, unit: '50kg Bag', verified: false, upvotes: 2, timestamp: '15m ago' },
];

const MarketPrices: React.FC<{ lang: Language }> = ({ lang }) => {
  const [prices, setPrices] = useState(INITIAL_PRICES);

  const handleVote = (index: number) => {
    const newPrices = [...prices];
    newPrices[index].upvotes += 1;
    if (newPrices[index].upvotes >= 3) newPrices[index].verified = true;
    setPrices(newPrices);
  };

  return (
    <section className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold">Crowdsourced Market Prices</h3>
          <p className="text-xs text-stone-500">Real-time verification by farmers in your region.</p>
        </div>
        <button className="bg-stone-900 text-white px-4 py-2 rounded-xl text-sm font-bold">+ Submit Price</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-stone-400 text-[10px] uppercase tracking-widest font-bold">
              <th className="pb-4">Crop</th>
              <th className="pb-4">Market</th>
              <th className="pb-4">Price (KSh)</th>
              <th className="pb-4">Trust Score</th>
              <th className="pb-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {prices.map((p, idx) => (
              <tr key={idx} className="group">
                <td className="py-4 font-bold text-stone-900">{p.crop}</td>
                <td className="py-4 text-sm text-stone-600">{p.market}</td>
                <td className="py-4">
                  <span className="font-bold text-emerald-700">{p.price.toLocaleString()}</span>
                  <span className="text-[10px] text-stone-400 ml-1">/{p.unit}</span>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-1.5">
                    {p.verified ? (
                      <span className="bg-emerald-100 text-emerald-700 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center">
                         <svg className="w-3 h-3 mr-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                         Verified
                      </span>
                    ) : (
                      <span className="bg-stone-100 text-stone-500 text-[10px] px-2 py-0.5 rounded-full font-bold">
                        Awaiting Verify
                      </span>
                    )}
                    <span className="text-xs text-stone-400">({p.upvotes} votes)</span>
                  </div>
                </td>
                <td className="py-4">
                   <button 
                    onClick={() => handleVote(idx)}
                    className="p-1.5 rounded-lg border border-stone-200 hover:bg-stone-50 text-stone-400 hover:text-emerald-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MarketPrices;
