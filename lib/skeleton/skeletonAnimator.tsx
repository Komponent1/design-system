import React from 'react';
import { getSkeletonKeyframes, skeletonLayerStyle } from './skeleton.style';
import { useTheme } from '../theme/ThemeProvider';

export const SkeletonAnimator: React.FC = () => {
  const { theme } = useTheme();
  const skeletonKeyframes = getSkeletonKeyframes(theme);
  return (
    <>
      <style>{skeletonKeyframes}</style>
      <div style={skeletonLayerStyle} />
    </>
  );
};
