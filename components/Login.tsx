
import React from 'react';

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-emerald-900 flex flex-col items-center justify-center p-6 text-white overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-800 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-700 rounded-full blur-3xl opacity-30"></div>

      <div className="z-10 w-full max-w-md text-center">
        <div className="w-20 h-20 bg-emerald-500 rounded-3xl mx-auto flex items-center justify-center mb-8 shadow-2xl">
           <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
        </div>
        
        <h1 className="text-4xl font-black mb-2">Harvest Success,<br/>One Crop Time</h1>
        <p className="text-emerald-100/70 mb-12 px-6">Smart tools for modern agriculture ensuring global food security.</p>

        <div className="space-y-4">
          <button 
            onClick={onLogin}
            className="w-full bg-white text-emerald-900 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-50 transition-all shadow-xl active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Sign Up With Email
          </button>

          <button 
            onClick={onLogin}
            className="w-full bg-emerald-800/50 backdrop-blur-md border border-emerald-700 text-white py-4 rounded-2xl font-bold hover:bg-emerald-800 transition-all active:scale-95"
          >
            Login with M-PESA
          </button>
        </div>

        <p className="mt-8 text-xs text-emerald-100/50">By signing up you agree to our Terms and Data Policy.</p>
      </div>
    </div>
  );
};

export default Login;
