import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={['rounded-2xl border border-stone-200 bg-white shadow-sm', className ?? ''].join(' ')}>
      {children}
    </div>
  );
};

export default Card;
