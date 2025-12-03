import { typographyMap } from '../typography/typography.config';

export const baseStyle = {
  all: 'unset',
  boxSizing: 'border-box',
};
export const sizesStyle = {
  sm: {
    ...typographyMap.sm,
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
  },
  md: {
    ...typographyMap.md,
    fontWeight: 'bold',
    padding: '0.75rem 1.5rem',
  },
  lg: {
    ...typographyMap.lg,
    fontWeight: 'bold',
    padding: '1rem 2rem',
  },
};
export const outlineVariantStyle = {
  none: {},
  box: {
    borderBottom: '1px solid #e5e7eb',
  },
  innerBox: {
    border: '2px solid',
    borderColor: '#e5e7eb',
    borderRadius: '0.375rem',
  },
};
