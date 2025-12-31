import { typographyMap } from '../typography/typography.config';

export const baseStyle = {
  unset: 'all',
};
export const widthStyles = {
  width: '100%',
};
export const solidStyle = {
  border: 'none',
};
export const outlineStyle = {
  border: '1px solid',
  backgroundColor: 'transparent',
};
export const textStyle = {
  border: 'none',
  backgroundColor: 'transparent',
};
export const sizeStyles = {
  sm: {
    ...typographyMap.sm,
    padding: '0.25rem 0.5rem',
    fontSize: '0.875rem',
  },
  md: {
    ...typographyMap.md,
    padding: '0.5rem 1rem',
    fontSize: '1rem',
  },
  lg: {
    ...typographyMap.lg,
    padding: '0.75rem 1.5rem',
    fontSize: '1.25rem',
  },
};
export const cornerStyles = {
  rounded: {
    borderRadius: '100rem',
  },
  square: {
    borderRadius: '0.375rem',
  },
};
