import { typographyMap } from '../typography/typography.config';
import type { ButtonVariant } from './button.type';

export const baseStyle = {
  unset: 'all',
};
export const widthStyles = {
  width: '100%',
};
export const solidStyle = {
  border: 'none',
  backgroundColor: '#007bff',
  color: '#ffffff',
};
export const outlineStyle = {
  border: '1px solid #007bff',
  backgroundColor: 'transparent',
  color: '#007bff',
};
export const textStyle = {
  border: 'none',
  backgroundColor: 'transparent',
  color: '#007bff',
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
export const disabledStyle = {
  backgroundColor: '#e0e0e0',
  borderColor: '#e0e0e0',
  color: '#a0a0a0',
  cursor: 'not-allowed',
};
export const hoverStyles: Record<ButtonVariant, React.CSSProperties> = {
  solid: {
    backgroundColor: '#0056b3',
  },
  outline: {
    backgroundColor: '#007bff',
    color: '#ffffff',
  },
  text: {
    backgroundColor: 'rgba(0, 123, 255, 0.1)',
  },
};
