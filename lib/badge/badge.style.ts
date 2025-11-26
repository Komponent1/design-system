import { typographyMap } from '../typography/typography.config';
import type { BadgeCorner, BadgeSize, BadgeVariant } from './badge.type';

export const baseStyle: React.CSSProperties = {
  display: 'inline-block',
  textAlign: 'center',
};
export const contentBaseStyle: React.CSSProperties = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
};
export const genVariantStyle = (variant: BadgeVariant, color: string) => {
  switch (variant) {
    case 'soft':
      return {
        backgroundColor: `color-mix(in srgb, ${color} 20%, transparent)`,
        color: color,
        border: 'none',
      };
    case 'outlined':
      return {
        backgroundColor: 'transparent',
        color: color,
        border: `1px solid ${color}`,
      };
    default:
      return {
        backgroundColor: color,
        color: '#ffffff',
        border: 'none',
      };
  }
};
export const cornerStyles: Record<BadgeCorner, React.CSSProperties> = {
  rounded: {
    borderRadius: '100rem',
  },
  square: {
    borderRadius: '0.5rem',
  },
};
export const sizeStyles: Record<BadgeSize, React.CSSProperties> = {
  sm: {
    padding: '0.25rem 0.5rem',
    ...typographyMap.xs,
  },
  md: {
    padding: '0.5rem 1rem',
    ...typographyMap.sm,
  },
  lg: {
    padding: '0.75rem 1.5rem',
    ...typographyMap.md,
  },
};
