
import React, { useState } from 'react';
import { Language } from '../types';

interface Message {
  text: string;
  isBot: boolean;
}

const Chatbot: React.FC<{ lang: Language; isPremium: boolean }> = ({ lang, isPremium }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Habari! I am your Kilimo Assistant. How can I help you with your crops today?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.toLowerCase();
    const newMessages = [...messages, { text: input, isBot: false }];
    setMessages(newMessages);
    setInput("");

    // Simple Rule-Based Simulation
    setTimeout(() => {
      let botResponse = "I am not sure about that. Let me connect you to a KALRO expert.";
      if (userMsg.includes("armyworm")) {
        botResponse = "For Fall Armyworm, apply pesticides like Duduthrin or Belt as soon as you see egg clusters or pinholes in leaves.";
      } else if (userMsg.includes("price") || userMsg.includes("soko")) {
        botResponse = "Maize prices are highest in Kitale right now at KSh 4,200 per bag. It's a good time to harvest!";
      } else if (userMsg.includes("habari")) {
        botResponse = "Mzuri sana! Unahitaji msaada gani leo?";
      }

      if (!isPremium && newMessages.length > 3) {
        botResponse = "Upgrade to Premium for unlimited detailed advice from our AI agronomist.";
      }

      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 800);
  };

  return (
    <section className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200">
      <h3 className="text-lg font-bold mb-4">Ask Advisor</h3>
      <div className="h-64 overflow-y-auto mb-4 space-y-3 p-2 bg-stone-50 rounded-2xl">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.isBot ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm font-medium shadow-sm ${m.isBot ? 'bg-white text-stone-900 border border-stone-200' : 'bg-emerald-600 text-white'}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="e.g. 'How to kill armyworm?'" 
          className="flex-1 bg-stone-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500"
        />
        <button 
          onClick={handleSend}
          className="bg-emerald-600 text-white p-2 rounded-xl hover:bg-emerald-700"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Chatbot;
