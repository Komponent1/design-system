import { typographyMap } from '../typography/typography.config';

export const radioContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  gap: 8,
  userSelect: 'none',
  opacity: 1,
};
export const radioDisabledStyle: React.CSSProperties = {
  cursor: 'not-allowed',
  opacity: 0.6,
};
export const radioCircleBaseStyle: React.CSSProperties = {
  display: 'inline-block',
  borderRadius: '50%',
  boxSizing: 'border-box',
  transition: 'border 0.2s cubic-bezier(.4,0,.2,1), box-shadow 0.2s',
  backgroundColor: '#fff',
};
export const radioSizesStyle: Record<string, React.CSSProperties> = {
  sm: {
    width: 16,
    height: 16,
  },
  md: {
    width: 20,
    height: 20,
  },
  lg: {
    width: 24,
    height: 24,
  },
};
export const radioLabelSizesStyle: Record<string, React.CSSProperties> = {
  sm: {
    ...typographyMap.sm,
  },
  md: {
    ...typographyMap.md,
  },
  lg: {
    ...typographyMap.lg,
  },
};
