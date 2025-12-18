import React from 'react';
import { SkeletonAnimator } from './skeletonAnimator';
import { skeletonTextSizeStyles, skeletonCircleSizesStyle } from './skeleton.style';

export type SkeletonProps = {
  variant?: 'simple' | 'card';
  lineCount?: number;
  size?: 'sm' | 'md' | 'lg';
};
export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'simple',
  lineCount = 3,
  size = 'md',
}) => {
  return (
    <div>
      {variant === 'simple' && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {Array.from({ length: lineCount }).map((_, index) => (
            <div
              key={`skeleton_line_${index}`}
              style={{ ...skeletonTextSizeStyles[size], marginBottom: 8 }}
            >
              <SkeletonAnimator />
            </div>
          ))}
        </div>
      )}
      {variant === 'card' && (
        <div style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>
          <div>
            <div style={skeletonCircleSizesStyle[size]}>
              <SkeletonAnimator />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {Array.from({ length: lineCount }).map((_, index) => (
              <div
                key={`skeleton_card_line_${index}`}
                style={{ ...skeletonTextSizeStyles[size], marginBottom: 8 }}
              >
                <SkeletonAnimator />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
