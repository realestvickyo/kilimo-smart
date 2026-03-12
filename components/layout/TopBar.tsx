import React from 'react';

export interface TopBarProps {
  title: string;
  right?: React.ReactNode;
}

const TopBar: React.FC<TopBarProps> = ({ title, right }) => {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 sm:px-10 py-4">
        <h1 className="text-lg font-semibold text-stone-900">{title}</h1>
        <div className="flex items-center gap-2">{right}</div>
      </div>
    </header>
  );
};

export default TopBar;
