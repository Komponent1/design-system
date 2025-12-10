import { theme } from '..';

export const paginationConatinerStyle = {
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
};
export const pageNumberStyle = {
  padding: '0',
  border: 'none',
  borderRadius: '0.25rem',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  width: '2rem',
  height: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
export const activePageNumberStyle = {
  backgroundColor: theme.color.primary,
  color: '#fff',
};
export const ellipsisStyle = {
  padding: '0.5rem 0.75rem',
  color: '#666',
};
export const navigationButtonStyle = {
  padding: '0',
  border: 'none',
  borderRadius: '0.25rem',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  width: '2rem',
  height: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
};

export const compactPageNumberStyle = {
  padding: '0',
  border: '1px solid #ccc',
  borderRadius: '0.25rem',
  backgroundColor: '#fff',
  width: '2rem',
  height: '2rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
};
