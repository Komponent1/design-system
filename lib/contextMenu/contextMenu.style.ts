import type { Theme } from '../theme';

export const contextMenuOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
  width: '100vw',
  height: '100vh',
};
export const getContextMenuContainerStyle = (theme: Theme): React.CSSProperties => ({
  position: 'fixed',
  backgroundColor: theme.color.neutral[50],
  boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  zIndex: 1000,
});
export const contextMenuItemStyle: React.CSSProperties = {
  padding: '8px 12px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
};
export const contextMenuItemHoverStyle: React.CSSProperties = {
  backgroundColor: 'rgba(0,0,0,0.03)',
};
export const contextMenuDividerStyle: React.CSSProperties = {
  height: '1px',
  backgroundColor: 'rgba(0,0,0,0.12)',
  margin: '4px 0',
};
