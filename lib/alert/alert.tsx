import React, { useMemo } from 'react';
import type { AlertSize, AlertType, AlertVariant } from './alert.type';
import {
  baseHeadStyle,
  baseStyle,
  genVariantStyle,
  headSizesStyle,
  sizesStyle,
} from './alert.style';
import { useTheme } from '../theme/ThemeProvider';

type Props = {
  head?: string;
  message: React.ReactNode;
  type?: AlertType;
  size?: AlertSize;
  variant?: AlertVariant;
};
export const Alert: React.FC<Props> = ({
  head,
  message,
  type = 'info',
  size = 'md',
  variant = 'filled',
}) => {
  const { theme } = useTheme();
  const basicStyle = useMemo(() => {
    const sizeStyle = sizesStyle[size];
    const varientTypeStyle = genVariantStyle(variant, type, theme);
    return {
      ...baseStyle,
      ...sizeStyle,
      ...varientTypeStyle,
      fontWeight: head ? 'normal' : 'bold',
    };
  }, [type, size, variant, head, theme]);
  const basicHeadStyle = useMemo(() => {
    return {
      ...baseHeadStyle,
      ...genVariantStyle(variant, type, theme),
      ...headSizesStyle[size],
      border: 'none',
    };
  }, [variant, type, size, theme]);

  return (
    <div style={basicStyle}>
      {head && <div style={basicHeadStyle}>{head}</div>}
      {typeof message === 'string' ? <div>{message}</div> : message}
    </div>
  );
};
