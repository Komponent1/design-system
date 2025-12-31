export const sidebarContainerStyle: React.CSSProperties = {
  height: '100%',
  boxShadow: '2px 0 8px #0001',
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  transition:
    'width 0.25s cubic-bezier(.4,0,.2,1), min-width 0.25s cubic-bezier(.4,0,.2,1), background 0.2s',
  zIndex: 20,
};
export const sidebarPositionStyles: Record<string, React.CSSProperties> = {
  left: {
    left: 0,
  },
  right: {
    right: 0,
  },
};
export const buttonBaseStyle: React.CSSProperties = {
  position: 'absolute',
  zIndex: 100,
  transition: 'left 0.25s cubic-bezier(.4,0,.2,1), right 0.25s cubic-bezier(.4,0,.2,1)',
  outline: 'none',
  background: '#fff',
};
export const sidebarContentBaseStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
  width: '100%',
  height: '100%',
  whiteSpace: 'nowrap',
  overflowX: 'hidden',
  overflowY: 'auto',
  boxSizing: 'border-box',
  padding: '24px 16px',
};
