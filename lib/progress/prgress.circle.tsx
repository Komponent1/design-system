import React from 'react';
import type { ProgressSize } from './progress.type';
import { circleContainerStyle, circleLabelSizesStyle, circleLabelStyle } from './progress.style';
import { useTheme } from '../theme/ThemeProvider';

export type ProgressCircleProps = {
  progress: number /** 0 - 1 */;
  size: ProgressSize;
  color: string;
  label?: string;
  percent: boolean;
};
export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  progress,
  size,
  color,
  label,
  percent,
}) => {
  const { theme } = useTheme();
  const sizeMap: Record<ProgressSize, number> = {
    sm: 100,
    md: 160,
    lg: 320,
  };
  const strokeWidthMap = {
    sm: 8,
    md: 12,
    lg: 16,
  };
  const strokeWidth = strokeWidthMap[size];
  const radius = (sizeMap[size] - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div style={circleContainerStyle}>
      <svg width={sizeMap[size]} height={sizeMap[size]} style={{ transform: 'rotate(135deg)' }}>
        <circle
          stroke='#e0e0e0'
          fill='transparent'
          strokeWidth={strokeWidth}
          strokeLinecap='round'
          r={radius}
          cx={sizeMap[size] / 2}
          cy={sizeMap[size] / 2}
          strokeDasharray={`${circumference * 0.75} ${circumference}`}
        />
        <circle
          stroke={color}
          fill='transparent'
          strokeWidth={strokeWidth}
          strokeLinecap='round'
          r={radius}
          cx={sizeMap[size] / 2}
          cy={sizeMap[size] / 2}
          strokeDasharray={`${circumference * 0.75} ${circumference}`}
          strokeDashoffset={circumference * 0.75 * (1 - progress)}
          style={{ transition: 'stroke-dashoffset 0.35s' }}
        />
      </svg>
      <div
        style={{
          ...circleLabelStyle,
          ...circleLabelSizesStyle[size],
          color: theme.color.text.primary,
        }}
      >
        {label && <div>{label}</div>}
        {percent && <div>{`${Math.round(progress * 100)}%`}</div>}
      </div>
    </div>
  );
};
