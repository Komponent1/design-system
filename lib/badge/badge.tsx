import React, { useMemo } from 'react';
import type { BadgeCorner, BadgeSize, BadgeVariant } from './badge.type';
import { baseStyle, cornerStyles, genVariantStyle, sizeStyles } from './badge.style';

type BadgeProps = {
  text: string;
  color?: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  corner?: BadgeCorner;
} & React.HTMLAttributes<HTMLSpanElement>;
export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'hard',
  color = 'blue',
  size = 'md',
  corner = 'rounded',
  ...spanProps
}) => {
  const basicStyle = useMemo(() => {
    const sizeStyle = sizeStyles[size];
    return {
      ...baseStyle,
      ...sizeStyle,
      ...genVariantStyle(variant, color),
      ...cornerStyles[corner],
    };
  }, [variant, color, size, corner]);
  return (
    <span style={basicStyle} {...spanProps}>
      {text}
    </span>
  );
};
