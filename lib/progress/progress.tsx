import React from 'react';
import type { ProgressSize, ProgressVariant } from './progress.type';
import { ProgressCircle } from './prgress.circle';
import { ProgressBar } from './progress.bar';
import { useTheme } from '../theme/ThemeProvider';

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
  color,
  label,
  percent = false,
  width = '100%',
}) => {
  const { theme } = useTheme();

  switch (variant) {
    case 'circle':
      return (
        <ProgressCircle
          progress={progress}
          size={size}
          color={color ?? theme.color.primary.main}
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
          color={color ?? theme.color.primary.main}
          label={label}
          percent={percent}
          width={width}
        />
      );
  }
};
