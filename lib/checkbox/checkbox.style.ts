import type { CheckboxSize } from './checkbox.type';

export const baseStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  appearance: 'none',
  backgroundClip: 'content-box',
  boxSizing: 'border-box',
  border: '1px solid gray',
  transition: 'all 0.2s ease-in-out',
};
export const sizesStyle: { [key in CheckboxSize]: React.CSSProperties } = {
  sm: {
    width: '1rem',
    height: '1rem',
    borderRadius: '0.125em',
    padding: '0.0625em',
  },
  md: {
    width: '1.5em',
    height: '1.5em',
    borderRadius: '0.25em',
    padding: '0.125em',
  },
  lg: {
    width: '2rem',
    height: '2rem',
    borderRadius: '0.375em',
    padding: '0.25em',
  },
};
