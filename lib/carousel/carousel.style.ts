export const carouselContainerStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
};
export const carouselSlideStyle: React.CSSProperties = {
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
};
export const buttonBaseStyle: React.CSSProperties = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  backgroundColor: 'transparent',
  border: 'none',
  width: '48px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,
  transition: 'all 0.2s ease',
};
export const prevButtonStyle: React.CSSProperties = {
  ...buttonBaseStyle,
  left: '0',
};
export const nextButtonStyle: React.CSSProperties = {
  ...buttonBaseStyle,
  right: '0',
};
export const indicatorContainerStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '16px',
  right: '16px',
  display: 'flex',
  gap: '8px',
  zIndex: 10,
};
export const indicatorButtonStyle: React.CSSProperties = {
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  border: '1px solid rgba(255, 255, 255, 0.8)',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  padding: 0,
};
