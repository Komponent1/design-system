import React, { useMemo } from 'react';
import { getSpinnerStyle } from './spinner.style';
import { theme } from '..';
import type { SpinnerSize, SpinnerVariants } from './spinner.type';

export type SpinnerProps = {
  size?: SpinnerSize;
  variant?: SpinnerVariants;
  color?: string;
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = theme.color.primary,
  variant,
}) => {
  const keyframes = useMemo(() => {
    if (variant === 'inverted') {
      return `      @keyframes spinner-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(-360deg); }
      }
    `;
    }
    return `
      @keyframes spinner-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
  }, [variant]);

  return (
    <>
      <style>{keyframes}</style>
      <div style={getSpinnerStyle(size, color)} />
    </>
  );
};
