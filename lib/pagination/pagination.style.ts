import type { Theme } from '../theme/ThemeProvider';

export const getPaginationConatinerStyle = (theme: Theme) => ({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  color: theme.color.text.primary,
});
export const getPageNumberStyle = (theme: Theme) => ({
  padding: '0',
  border: 'none',
  borderRadius: '0.25rem',
  color: theme.color.text.primary,
  backgroundColor: 'transparent',
  cursor: 'pointer',
  width: '2rem',
  height: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
export const activePageNumberStyle = {
  color: '#fff',
};
export const getEllipsisStyle = (theme: Theme) => ({
  padding: '0.5rem 0.75rem',
  color: theme.color.text.secondary,
});
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

export const getCompactPageNumberStyle = (theme: Theme) => ({
  padding: '0',
  border: `1px solid ${theme.color.border.default}`,
  borderRadius: '0.25rem',
  backgroundColor: '#fff',
  color: 'black',
  width: '2rem',
  height: '2rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});
