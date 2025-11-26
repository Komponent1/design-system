import React, { useMemo } from 'react';
import type { BadgeSize, BadgeVariant } from './badge.type';
import { baseStyle, genVariantStyle, sizeStyles } from './badge.style';

type BadgeProps = {
  text: string;
  color?: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
};
const Badge: React.FC<BadgeProps> = ({ text, variant = 'hard', color = 'blue', size = 'md' }) => {
  const basicStyle = useMemo(() => {
    const sizeStyle = sizeStyles[size];
    return { ...baseStyle, ...sizeStyle, ...genVariantStyle(variant, color) };
  }, [variant, color, size]);
  return <span style={basicStyle}>{text}</span>;
};
export default Badge;
