import React from 'react';
import type { ProgressSize } from './progress.type';
import {
  barBaseStyle,
  barContainerStyle,
  barLabelStyle,
  barSizesStyle,
  getBarProgressStyle,
} from './progress.style';

type ProgressBarProps = {
  progress: number /** 0 - 1 */;
  size: ProgressSize;
  color: string;
  label?: string;
  percent: boolean;
  width: number | string;
};
export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  size,
  color,
  label,
  percent,
  width,
}) => {
  return (
    <div
      style={{
        ...barContainerStyle,
        width: width,
      }}
    >
      <div style={barLabelStyle}>
        {label && <div>{label}</div>}
        {percent && <div>{`${Math.round(progress * 100)}%`}</div>}
      </div>
      <div
        style={{
          ...barSizesStyle[size],
          ...barBaseStyle,
        }}
      >
        <div style={getBarProgressStyle(progress, color)} />
      </div>
    </div>
  );
};
