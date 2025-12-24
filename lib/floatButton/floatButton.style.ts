import type { FloatButtonPosition } from './floatButton.type';

export const floatButtonBaseStyle: React.CSSProperties = {
  position: 'fixed',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  zIndex: 1000,
  transition: 'transform 0.3s ease',
};
export const floatButtonPostionStyles: Record<FloatButtonPosition, React.CSSProperties> = {
  'bottom-right': { bottom: '1.5rem', right: '1.5rem' },
  'bottom-left': { bottom: '1.5rem', left: '1.5rem' },
  'top-right': { top: '1.5rem', right: '1.5rem' },
  'top-left': { top: '1.5rem', left: '1.5rem' },
};
export const floatButtonContainerBaseStyle: React.CSSProperties = {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  zIndex: 999,
};
export const floatButtonChildBaseStyle: React.CSSProperties = {
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  transition: 'all 0.3s ease',
};
