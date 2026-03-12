
import React, { useState } from 'react';

interface PremiumModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const PremiumModal: React.FC<PremiumModalProps> = ({ onClose, onSuccess }) => {
  const [step, setStep] = useState<'prompt' | 'processing' | 'success'>('prompt');
  const [phoneNumber, setPhoneNumber] = useState('254712345678');

  const triggerSTK = () => {
    setStep('processing');
    // Mocking M-PESA STK Push latency and callback
    setTimeout(() => {
      setStep('success');
      setTimeout(() => {
        onSuccess();
      }, 1500);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl">
        {step === 'prompt' && (
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-black text-stone-900">Upgrade to Pro</h3>
              <button onClick={onClose} className="text-stone-400 hover:text-stone-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">✓</div>
                <p className="text-sm font-medium text-stone-700">Daily Pest & Weather Risk Voice Alerts</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">✓</div>
                <p className="text-sm font-medium text-stone-700">Unlimited Expert Agronomist Chatbot</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">✓</div>
                <p className="text-sm font-medium text-stone-700">Group Bulk Buying Discounts (15%+)</p>
              </div>
            </div>
            
            <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">M-PESA Phone Number</label>
            <input 
              type="text" 
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full bg-stone-100 border-none rounded-2xl px-4 py-4 text-lg font-bold focus:ring-2 focus:ring-emerald-500 mb-6" 
            />
            
            <button 
              onClick={triggerSTK}
              className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-black text-xl hover:bg-emerald-700 shadow-lg shadow-emerald-200"
            >
              Pay KSh 75 / Month
            </button>
            <p className="text-center text-xs text-stone-400 mt-4 italic">You will receive an STK Push on your phone.</p>
          </div>
        )}

        {step === 'processing' && (
          <div className="p-12 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-6"></div>
            <h3 className="text-xl font-bold mb-2">Processing Payment...</h3>
            <p className="text-stone-500">Check your phone to enter M-PESA PIN.</p>
          </div>
        )}

        {step === 'success' && (
          <div className="p-12 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
               <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-2xl font-black text-emerald-900 mb-2">Payment Successful!</h3>
            <p className="text-stone-600">Welcome to Kilimo Smart Pro.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumModal;
