import type { Theme } from '../theme';

export const getCardContainerBaseStyle = (theme: Theme): React.CSSProperties => ({
  borderRadius: '8px',
  overflow: 'hidden',
  border: `1px solid ${theme.color.border.default}`,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
});
export const cardHoverStyles: Record<string, React.CSSProperties> = {
  none: {},
  shadow: {
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  lift: {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
  },
};
export const cardSizeStyles: Record<string, React.CSSProperties> = {
  sm: {
    width: '200px',
  },
  md: {
    width: '300px',
  },
  lg: {
    width: '400px',
  },
};
export const cardImageStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  verticalAlign: 'bottom',
};
export const getCardHeaderStyle = (theme: Theme): React.CSSProperties => ({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  marginBottom: '8px',
  backgroundColor: theme.color.neutral[100],
  borderBottom: `1px solid ${theme.color.neutral[200]}`,
  overflow: 'auto',
  color: theme.color.neutral[800],
});
export const getCardFooterStyle = (theme: Theme): React.CSSProperties => ({
  marginTop: '12px',
  backgroundColor: theme.color.neutral[100],
  borderTop: `1px solid ${theme.color.neutral[200]}`,
  color: theme.color.neutral[600],
});
