
import React, { useState } from 'react';
import { Language, FarmerProfile, AppView, FarmTask, MarketPrice } from './types';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import Dashboard from './components/Dashboard';
import MapView from './components/MapView';
import TaskView from './components/TaskView';
import InsightView from './components/InsightView';
import ProfileView from './components/ProfileView';
import Login from './components/Login';
import PremiumModal from './components/PremiumModal';

const INITIAL_TASKS: FarmTask[] = [
  { id: '1', title: 'Apply Fertilizer on west side', date: '20, August 2025 07:30am', completed: false, type: 'soil' },
  { id: '2', title: 'Check plant nutrient density', date: '21, August 2025 09:30am', completed: true, type: 'soil' },
  { id: '3', title: 'Test irrigation flow rate', date: '22, August 2025 06:00am', completed: false, type: 'water' },
];

const INITIAL_PRICES: MarketPrice[] = [
  { crop: 'Maize', market: 'Kitale', price: 4200, unit: '90kg Bag', verified: true, upvotes: 24, timestamp: '1h ago' },
  { crop: 'Beans', market: 'Narok', price: 8500, unit: '90kg Bag', verified: true, upvotes: 18, timestamp: '3h ago' },
  { crop: 'Potato', market: 'Molo', price: 2800, unit: '50kg Bag', verified: false, upvotes: 2, timestamp: '15m ago' },
];

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [lang, setLang] = useState<Language>(Language.ENGLISH);
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);
  
  // App State
  const [farmer, setFarmer] = useState<FarmerProfile>({
    name: "Eduardo Kamau",
    phone: "254712345678",
    location: "Narok",
    crops: ["Wheat", "Corn", "Rice"],
    farmSize: 65,
    isPremium: false,
    completeness: 85
  });
  const [tasks, setTasks] = useState<FarmTask[]>(INITIAL_TASKS);
  const [marketPrices, setMarketPrices] = useState<MarketPrice[]>(INITIAL_PRICES);

  const handleUpgrade = () => setIsPremiumModalOpen(true);
  const finalizeUpgrade = () => {
    setFarmer(prev => ({ ...prev, isPremium: true }));
    setIsPremiumModalOpen(false);
  };

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const addTask = (title: string) => {
    const newTask: FarmTask = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
      completed: false,
      type: 'soil'
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const votePrice = (index: number) => {
    const newPrices = [...marketPrices];
    newPrices[index].upvotes += 1;
    if (newPrices[index].upvotes >= 3) newPrices[index].verified = true;
    setMarketPrices(newPrices);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView(AppView.DASHBOARD);
  };

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex min-h-screen bg-stone-50 font-sans text-stone-900 overflow-x-hidden">
      {/* Sidebar - Desktop */}
      <Sidebar 
        currentView={currentView} 
        setView={setCurrentView} 
        farmer={farmer}
        lang={lang}
        setLang={setLang}
      />
      
      {/* Main Container */}
      <main className="flex-1 md:ml-64 pb-24 md:pb-12 transition-all duration-300">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-10">
          {currentView === AppView.DASHBOARD && (
            <Dashboard 
              lang={lang} 
              farmer={farmer} 
              onUpgrade={handleUpgrade}
              tasks={tasks}
              onToggleTask={toggleTask}
              setView={setCurrentView}
            />
          )}
          {currentView === AppView.MAP && <MapView farmer={farmer} />}
          {currentView === AppView.TASKS && (
            <TaskView 
              tasks={tasks} 
              onToggleTask={toggleTask} 
              onAddTask={addTask}
            />
          )}
          {currentView === AppView.INSIGHTS && (
            <InsightView 
              isPremium={farmer.isPremium} 
              onUpgrade={handleUpgrade} 
              marketPrices={marketPrices}
              onVote={votePrice}
              lang={lang}
            />
          )}
          {currentView === AppView.PROFILE && (
            <ProfileView 
              farmer={farmer} 
              setFarmer={setFarmer}
              setLang={setLang} 
              lang={lang} 
              onLogout={handleLogout}
            />
          )}
        </div>
      </main>

      {/* Mobile Nav */}
      <BottomNav currentView={currentView} setView={setCurrentView} />

      {/* Upgrade Overlay */}
      {isPremiumModalOpen && (
        <PremiumModal 
          onClose={() => setIsPremiumModalOpen(false)} 
          onSuccess={finalizeUpgrade} 
        />
      )}
    </div>
  );
};

export default App;
