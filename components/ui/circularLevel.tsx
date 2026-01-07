"use client";

type CircularLevelProps = {
  value: number;
  max?: number;
  colorClass: string;
  size?: number;
  strokeWidth?: number;
};

export function CircularLevel({
  value,
  max = 200,
  colorClass,
  size = 36,
  strokeWidth = 4,
}: CircularLevelProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(value / max, 1);
  const offset = circumference * (1 - progress);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="rotate-[-90deg]">
        {/* Background ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.15)"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progress ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={colorClass}
        />
      </svg>

      {/* Center value */}
      <span className="absolute text-[10px] font-semibold text-gray-300">
        {value}
      </span>
    </div>
  );
}
