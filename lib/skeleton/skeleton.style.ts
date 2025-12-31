import type { Theme } from '../theme/ThemeProvider';
import type { SkeletonSize } from './skeleton.type';

export const skeletonLayerStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  backgroundColor: '#e0e0e0',
  borderRadius: '4px',
  animation: 'skeleton-loading 1.5s infinite',
};
export const getSkeletonKeyframes = (theme: Theme) => `
  @keyframes skeleton-loading {
    0% {
      background-color: ${theme.skeleton.background[0]};
    }
    50% {
      background-color: ${theme.skeleton.background[50]};
    }
    100% {
      background-color: ${theme.skeleton.background[100]};
    }
  }
`;
export const skeletonCircleSizesStyle: Record<SkeletonSize, React.CSSProperties> = {
  sm: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    overflow: 'hidden',
  },
  md: {
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    overflow: 'hidden',
  },
  lg: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    overflow: 'hidden',
  },
};
export const skeletonTextSizeStyles: Record<SkeletonSize, React.CSSProperties> = {
  sm: {
    width: '100%',
    height: '12px',
    borderRadius: '4px',
    marginBottom: '8px',
  },
  md: {
    width: '100%',
    height: '16px',
    borderRadius: '4px',
    marginBottom: '8px',
  },
  lg: {
    width: '100%',
    height: '20px',
    borderRadius: '4px',
    marginBottom: '8px',
  },
};
