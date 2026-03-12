import React, { useEffect, useState } from 'react';

export interface OfflineBannerProps {
  className?: string;
}

const OfflineBanner: React.FC<OfflineBannerProps> = ({ className }) => {
  const [online, setOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const on = () => setOnline(true);
    const off = () => setOnline(false);

    window.addEventListener('online', on);
    window.addEventListener('offline', off);

    return () => {
      window.removeEventListener('online', on);
      window.removeEventListener('offline', off);
    };
  }, []);

  if (online) return null;

  return (
    <div
      className={[
        'w-full border-b border-amber-200 bg-amber-50 text-amber-900',
        className ?? '',
      ].join(' ')}
      role="status"
      aria-live="polite"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-10 py-2 text-sm">
        You are offline. Some features may be unavailable.
      </div>
    </div>
  );
};

export default OfflineBanner;
