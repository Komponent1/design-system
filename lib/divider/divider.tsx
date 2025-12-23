import React, { useMemo } from 'react';
import type { DividerOrientation, DividerTypes } from './divider.type';
import {
  dividerBaseStyle,
  dividerContainerBaseStyle,
  dividerInsideBaseStyle,
} from './divider.style';

export type DividerProps = {
  orientation?: DividerOrientation;
  thickness?: number;
  color?: string;
  type?: DividerTypes;
  children?: React.ReactNode;
  childrenPosition?: 'center' | 'left' | 'right';
  verticalHeight?: number;
};
export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  thickness = 1,
  type = 'fullWidth',
  color = '#e0e0e0',
  children,
  childrenPosition = 'center',
  verticalHeight,
}) => {
  const isHorizontal = useMemo(() => orientation === 'horizontal', [orientation]);
  const length = useMemo(
    () =>
      type === 'fullWidth' ? '100%' : type === 'inset' ? 'calc(100% - 16px)' : 'calc(100% - 32px)',
    [type],
  );

  const containerStyle: React.CSSProperties = useMemo(
    () => ({
      ...dividerContainerBaseStyle,
      justifyContent: type === 'middle' ? 'center' : type === 'inset' ? 'flex-end' : 'flex-start',
      width: isHorizontal ? '100%' : 'auto',
      height: !isHorizontal ? (verticalHeight ?? '100%') : 'auto',
    }),
    [type, isHorizontal, verticalHeight],
  );

  const dividerStyle: React.CSSProperties = useMemo(
    () => ({
      ...dividerBaseStyle,
      borderTop: isHorizontal ? `${thickness}px solid ${color}` : 'none',
      borderLeft: !isHorizontal ? `${thickness}px solid ${color}` : 'none',
      backgroundColor: color,
      ...(isHorizontal
        ? {
            height: thickness,
            width: children ? 'auto' : length,
            flex: children ? 1 : undefined,
          }
        : {
            width: thickness,
            height: children ? 'auto' : (verticalHeight ?? length),
            flex: children ? 1 : undefined,
          }),
    }),
    [isHorizontal, thickness, color, length, children, verticalHeight],
  );

  const wrapperStyle: React.CSSProperties = useMemo(
    () => ({
      ...dividerInsideBaseStyle,
      width: isHorizontal ? length : thickness,
      height: !isHorizontal ? length : thickness,
      gap: children ? '8px' : 0,
      justifyContent:
        childrenPosition === 'left'
          ? 'flex-start'
          : childrenPosition === 'right'
            ? 'flex-end'
            : 'center',
    }),
    [isHorizontal, length, thickness, children, childrenPosition],
  );

  return (
    <div style={containerStyle}>
      {children ? (
        <div style={wrapperStyle}>
          {childrenPosition !== 'right' && <div style={dividerStyle} />}
          <span>{children}</span>
          {childrenPosition !== 'left' && <div style={dividerStyle} />}
        </div>
      ) : (
        <div style={dividerStyle} />
      )}
    </div>
  );
};
