import type { TypographySize } from './typography.type';

export const typographyMap: Record<TypographySize, { fontSize: string; lineHeight?: string }> = {
  xs: { fontSize: '0.75rem', lineHeight: '1rem' } /** 12/16px */,
  sm: { fontSize: '0.875rem', lineHeight: '1.25rem' } /** 14/20px */,
  md: { fontSize: '1rem', lineHeight: '1.5rem' } /** 16/24px */,
  lg: { fontSize: '1.125rem' } /** 18px */,
  xl: { fontSize: '1.25rem' } /** 20px */,
  '2xl': { fontSize: '1.5rem' } /** 24px */,
  '3xl': { fontSize: '1.875rem' } /** 30px */,
  '4xl': { fontSize: '2.25rem' } /** 36px */,
  '5xl': { fontSize: '3rem' } /** 48px */,
  '6xl': { fontSize: '3.75rem' } /** 60px */,
  '7xl': { fontSize: '4.5rem' } /** 72px */,
  '8xl': { fontSize: '6rem' } /** 96px */,
  '9xl': { fontSize: '8rem' } /** 128px */,
};
