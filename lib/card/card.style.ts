export const cardContainerBaseStyle: React.CSSProperties = {
  borderRadius: '8px',
  overflow: 'hidden',
  border: '1px solid #e0e0e0',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};
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
export const cardContentStyle: React.CSSProperties = {
  padding: '16px',
};
export const cardImageStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  verticalAlign: 'bottom',
};
export const cardHeaderStyle: React.CSSProperties = {
  fontSize: '1.25rem',
  fontWeight: 'bold',
  marginBottom: '8px',
  backgroundColor: '#f5f5f5',
  borderBottom: '1px solid #e0e0e0',
  overflow: 'auto',
};
export const cardFooterStyle: React.CSSProperties = {
  marginTop: '12px',
  backgroundColor: '#f5f5f5',
  borderTop: '1px solid #e0e0e0',
  padding: '8px 16px',
};
