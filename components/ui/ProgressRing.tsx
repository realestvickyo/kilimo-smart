import React from 'react';

export interface ProgressRingProps {
  value: number; // 0..100
  size?: number; // px
  strokeWidth?: number; // px
  className?: string;
  label?: string;
}

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

const ProgressRing: React.FC<ProgressRingProps> = ({
  value,
  size = 40,
  strokeWidth = 6,
  className,
  label,
}) => {
  const v = clamp(value, 0, 100);
  const r = (size - strokeWidth) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (v / 100) * c;

  return (
    <div className={['inline-flex items-center gap-2', className ?? ''].join(' ')}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={label ?? 'Progress'}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="currentColor"
          strokeOpacity={0.15}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={`${c} ${c}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-stone-800 text-[10px] font-semibold"
        >
          {Math.round(v)}%
        </text>
      </svg>
      {label ? <span className="text-sm text-stone-700">{label}</span> : null}
    </div>
  );
};

export default ProgressRing;
