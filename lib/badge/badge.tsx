import React, { useMemo } from 'react';
import type { BadgeCorner, BadgeSize, BadgeVariant } from './badge.type';
import { baseStyle, cornerStyles, genVariantStyle, sizeStyles } from './badge.style';
import { useTheme } from '../theme/ThemeProvider';

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
  color,
  size = 'md',
  corner = 'rounded',
  ...spanProps
}) => {
  const { theme } = useTheme();
  color = color || theme.color.primary.main;

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
