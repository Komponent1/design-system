import React, { useMemo } from 'react';
import type { BadgeCorner, BadgeSize, BadgeVariant } from './badge.type';
import { contentBaseStyle, cornerStyles, genVariantStyle, sizeStyles } from './badge.style';

type BadgeProps = {
  children: React.ReactNode;
  color?: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  corner?: BadgeCorner;
} & React.HTMLAttributes<HTMLDivElement>;
const ContentBadge: React.FC<BadgeProps> = ({
  children,
  variant = 'hard',
  color = 'blue',
  size = 'md',
  corner = 'rounded',
  ...spanProps
}) => {
  const basicStyle = useMemo(() => {
    const sizeStyle = sizeStyles[size];
    return {
      ...contentBaseStyle,
      ...sizeStyle,
      ...genVariantStyle(variant, color),
      ...cornerStyles[corner],
    };
  }, [variant, color, size, corner]);
  return (
    <div style={basicStyle} {...spanProps}>
      {children}
    </div>
  );
};

export default ContentBadge;
