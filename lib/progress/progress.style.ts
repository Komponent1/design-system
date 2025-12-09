import { theme } from '..';
import { typographyMap } from '../typography/typography.config';

export const barContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};
export const barBaseStyle: React.CSSProperties = {
  backgroundColor: '#e0e0e0',
  borderRadius: '8px',
  overflow: 'hidden',
};
export const barLabelStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '1rem',
  color: theme.color.textPrimary,
  fontWeight: 'bold',
};
export const barSizesStyle: Record<string, React.CSSProperties> = {
  sm: {
    height: '8px',
  },
  md: {
    height: '12px',
  },
  lg: {
    height: '16px',
  },
};
export const getBarProgressStyle = (progress: number, color: string): React.CSSProperties => ({
  width: `${Math.min(Math.max(progress, 0), 1) * 100}%`,
  backgroundColor: color,
  height: '100%',
  borderRadius: 'inherit',
  transition: 'width 0.2s ease-in-out',
});

export const circleContainerStyle: React.CSSProperties = {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const circleLabelSizesStyle: Record<string, React.CSSProperties> = {
  sm: {
    ...typographyMap.sm,
  },
  md: {
    ...typographyMap.lg,
  },
  lg: {
    ...typographyMap['2xl'],
  },
};
export const circleLabelStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  color: '#666',
  textAlign: 'center',
  fontWeight: 'bold',
};
