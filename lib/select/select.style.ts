import type { SelectSize, SelectVariant } from './select.type';

export const containerStyle: React.CSSProperties = {
  position: 'relative',
};
export const sizeStyles: Record<SelectSize, React.CSSProperties> = {
  sm: { padding: '6px 12px', fontSize: '14px', minHeight: '32px' },
  md: { padding: '8px 16px', fontSize: '16px', minHeight: '40px' },
  lg: { padding: '10px 20px', fontSize: '18px', minHeight: '48px' },
};
export const variantStyles: Record<SelectVariant, React.CSSProperties> = {
  default: {
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    borderBottom: '1px solid #d1d5db',
  },
  underlined: {
    border: 'none',
    borderBottom: '2px solid #d1d5db',
    borderRadius: '0',
    backgroundColor: 'transparent',
  },
};
export const baseStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  outline: 'none',
  transition: 'background-color 0.15s ease',
};
export const disabledStyle: React.CSSProperties = {
  backgroundColor: '#f3f4f6',
  cursor: 'not-allowed',
  opacity: 0.6,
};

export const dropdownBaseStyle: React.CSSProperties = {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  backgroundColor: '#ffffff',
  border: '1px solid #d1d5db',
  borderRadius: '6px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  marginTop: '4px',
  zIndex: 1000,
  maxHeight: '200px',
  overflowY: 'auto',
  transition: 'all 0.2s ease',
};
export const arrowBaseStyle: React.CSSProperties = {
  marginLeft: '8px',
  transition: 'transform 0.2s ease',
  fontSize: '12px',
  color: '#6b7280',
};
export const selectOptionSizeStyles: Record<SelectSize, React.CSSProperties> = {
  sm: { padding: '6px 12px', fontSize: '14px' },
  md: { padding: '8px 16px', fontSize: '16px' },
  lg: { padding: '10px 20px', fontSize: '18px' },
};
export const selectOptionBaseStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'background-color 0.15s ease',
  cursor: 'pointer',
  opacity: 1,
};
export const selectOptionDescriptionStyle: React.CSSProperties = {
  color: '#6b7280',
  marginTop: '2px',
};
export const selectOptionDisabledStyle: React.CSSProperties = {
  cursor: 'not-allowed',
  opacity: 0.5,
};
export const selectOptionDescriptionSizeStyles: Record<SelectSize, React.CSSProperties> = {
  sm: { fontSize: '12px' },
  md: { fontSize: '13px' },
  lg: { fontSize: '14px' },
};
