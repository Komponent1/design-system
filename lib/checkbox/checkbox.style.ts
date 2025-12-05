import type { CheckboxSize } from './checkbox.type';

export const baseStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  appearance: 'none',
  backgroundClip: 'content-box',
  boxSizing: 'border-box',
  border: '2px solid #d1d5db',
  borderRadius: '0.25rem',
  backgroundColor: '#ffffff',
  transition: 'all 0.2s ease-in-out',
  position: 'relative',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '70%',
};
export const markUrl = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='white'%3e%3cpath fill-rule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clip-rule='evenodd'/%3e%3c/svg%3e")`;
export const sizesStyle: { [key in CheckboxSize]: React.CSSProperties } = {
  sm: {
    width: '1rem',
    height: '1rem',
    borderRadius: '0.125rem',
  },
  md: {
    width: '1.25rem',
    height: '1.25rem',
    borderRadius: '0.25rem',
  },
  lg: {
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '0.375rem',
  },
};
