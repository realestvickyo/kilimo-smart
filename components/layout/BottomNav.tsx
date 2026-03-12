import React from 'react';

export type NavItemKey = 'home' | 'farm' | 'crops' | 'weather' | 'settings';

export interface BottomNavProps {
  current: NavItemKey;
  onNavigate: (key: NavItemKey) => void;
}

const items: Array<{ key: NavItemKey; label: string }> = [
  { key: 'home', label: 'Home' },
  { key: 'farm', label: 'Farm' },
  { key: 'crops', label: 'Crops' },
  { key: 'weather', label: 'Weather' },
  { key: 'settings', label: 'Settings' },
];

const BottomNav: React.FC<BottomNavProps> = ({ current, onNavigate }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-stone-200 bg-white/90 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2">
        {items.map((item) => {
          const active = item.key === current;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onNavigate(item.key)}
              className={[
                'flex flex-1 flex-col items-center justify-center rounded-lg px-2 py-2 text-xs transition-colors',
                active ? 'text-emerald-700' : 'text-stone-600 hover:text-stone-900',
              ].join(' ')}
              aria-current={active ? 'page' : undefined}
            >
              <span className={active ? 'font-semibold' : 'font-medium'}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
