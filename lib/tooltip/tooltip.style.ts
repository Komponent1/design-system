export const tooltipStyle: React.CSSProperties = {
  position: 'relative',
  display: 'inline-block',
  cursor: 'pointer',
};
export const genTooltipBaseStyle = (
  backgroundColor: string,
  color: string,
  width: number,
): React.CSSProperties => ({
  visibility: 'hidden',
  width: `${width}px`,
  backgroundColor,
  color,
  textAlign: 'center',
  borderRadius: '6px',
  padding: '6px 8px',
  position: 'absolute',
  zIndex: 1,
  opacity: 0,
  transition: 'opacity 0.3s',
});
export const genTooltipArrowBaseStyle = (backgroundColor: string): React.CSSProperties => ({
  position: 'absolute',
  width: '10px',
  height: '10px',
  backgroundColor,
  zIndex: 1,
  transform: 'rotate(45deg)',
});
export const tooltipArrowPositionStyles: Record<string, React.CSSProperties> = {
  top: {
    bottom: '-5px',
    left: '50%',
    transform: 'translateX(-50%) rotate(45deg)',
  },
  bottom: {
    top: '-5px',
    left: '50%',
    transform: 'translateX(-50%) rotate(45deg)',
  },
  left: {
    right: '-5px',
    top: '10px',
    transform: 'rotate(45deg)',
  },
  right: {
    left: '-5px',
    top: '10px',
    transform: 'rotate(45deg)',
  },
};
export const tooltipPositionStyles: Record<string, React.CSSProperties> = {
  top: {
    bottom: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  bottom: {
    top: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  left: {
    top: '0',
    right: 'calc(100% + 8px)',
  },
  right: {
    top: '0',
    left: 'calc(100% + 8px)',
  },
};
