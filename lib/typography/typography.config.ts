import type { TypographySize } from './typography.type';

export const typographyMap: Record<TypographySize, { fontSize: string; lineHeight?: string }> = {
  xs: { fontSize: '0.75rem', lineHeight: '1rem' },
  sm: { fontSize: '0.875rem', lineHeight: '1.25rem' },
  base: { fontSize: '1rem', lineHeight: '1.5rem' },
  lg: { fontSize: '1.125rem' },
  xl: { fontSize: '1.25rem' },
  '2xl': { fontSize: '1.5rem' },
  '3xl': { fontSize: '1.875rem' },
  '4xl': { fontSize: '2.25rem' },
  '5xl': { fontSize: '3rem' },
  '6xl': { fontSize: '3.75rem' },
  '7xl': { fontSize: '4.5rem' },
  '8xl': { fontSize: '6rem' },
  '9xl': { fontSize: '8rem' },
};
