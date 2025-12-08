import React, { useMemo } from 'react';
import type { AlertSize, AlertType, AlertVariant } from './alert.type';
import {
  baseHeadStyle,
  baseStyle,
  genVariantStyle,
  headSizesStyle,
  sizesStyle,
} from './alert.style';

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
  const basicStyle = useMemo(() => {
    const sizeStyle = sizesStyle[size];
    const varientTypeStyle = genVariantStyle(variant, type);

    return {
      ...baseStyle,
      ...sizeStyle,
      ...varientTypeStyle,
    };
  }, [type, size, variant]);
  const basicHeadStyle = useMemo(() => {
    return {
      ...baseHeadStyle,
      ...genVariantStyle(variant, type),
      ...headSizesStyle[size],
    };
  }, [variant, type, size]);

  return (
    <div style={basicStyle}>
      {head && <div style={basicHeadStyle}>{head}</div>}
      {typeof message === 'string' ? <div>{message}</div> : message}
    </div>
  );
};
