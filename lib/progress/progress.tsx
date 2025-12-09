import React from 'react';
import { theme } from '..';
import type { ProgressSize, ProgressVariant } from './progress.type';
import { ProgressCircle } from './prgress.circle';
import { ProgressBar } from './progress.bar';

export type ProgressProps = {
  progress: number /** 0 - 1 */;
  size?: ProgressSize;
  variant?: ProgressVariant;
  color?: string;
  label?: string;
  percent?: boolean;
  width?: number | string /** only 'bar' variant */;
};
export const Progress: React.FC<ProgressProps> = ({
  progress,
  size = 'md',
  variant = 'bar',
  color = theme.color.primary,
  label,
  percent = false,
  width = '100%',
}) => {
  switch (variant) {
    case 'circle':
      return (
        <ProgressCircle
          progress={progress}
          size={size}
          color={color}
          label={label}
          percent={percent}
        />
      );
    case 'bar':
    default:
      return (
        <ProgressBar
          progress={progress}
          size={size}
          color={color}
          label={label}
          percent={percent}
          width={width}
        />
      );
  }
};
