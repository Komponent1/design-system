import { typographyMap } from '../typography/typography.config';

export const boxStyle = {
  ...typographyMap.lg,
  width: '100%',
  boxSizing: 'border-box' as const,
  outline: 'none',
  padding: '0.625rem 1rem',
  border: '1px solid',
  borderColor: '#ccc',
  borderRadius: '0.5rem',
};
export const underlinedStyle = {
  border: 'none',
  borderBottom: '1px solid',
  borderColor: '#ccc',
  borderRadius: '0',
};
export const grayStyle = {
  border: 'none',
  backgroundColor: '#f5f5f5',
};
export const sizeStyles = {
  sm: { ...typographyMap.sm, padding: '0.625rem 0.75rem' },
  md: { ...typographyMap.md, padding: '0.75rem 1rem' },
  lg: { ...typographyMap.lg, padding: '0.875rem 1.25rem' },
};
export const disabledStyle = {
  backgroundColor: '#f5f5f5',
  cursor: 'not-allowed',
  color: '#aaa',
};
/** grayStyle -> hover 적용 없음 */
export const hoverStyle = {
  borderColor: '#888',
};
export const focusedStyle = {
  borderColor: '#00ff',
};
export const errorStyle = {
  borderColor: 'red',
};
export const successStyle = {
  borderColor: 'green',
};
