import React, { useMemo } from 'react';
import type { DividerOrientation, DividerTypes } from './divider.type';
import {
  dividerBaseStyle,
  dividerContainerBaseStyle,
  dividerInsideBaseStyle,
} from './divider.style';
import { useTheme } from '../theme/ThemeProvider';

export type DividerProps = {
  orientation?: DividerOrientation;
  thickness?: number | 'default' | 'strong' | 'subtle';
  color?: 'default' | 'strong' | 'subtle' | string;
  type?: DividerTypes;
  children?: React.ReactNode;
  childrenPosition?: 'center' | 'left' | 'right';
  verticalHeight?: number;
};
export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  thickness = 'default',
  type = 'fullWidth',
  color = 'default',
  children,
  childrenPosition = 'center',
  verticalHeight,
}) => {
  const { theme } = useTheme();
  const dividerTokens =
    theme.divider || theme?.color?.border
      ? theme.divider
      : {
          color: {
            default: theme?.color?.border?.default || '#e0e0e0',
            strong: theme?.color?.border?.strong || '#bdbdbd',
            subtle: theme?.color?.border?.subtle || '#f3f4f6',
          },
          thickness: {
            default: '1px',
            strong: '2px',
            subtle: '0.5px',
          },
        };

  const resolvedColor =
    color === 'default' || color === undefined
      ? dividerTokens.color.default
      : color === 'strong'
        ? dividerTokens.color.strong
        : color === 'subtle'
          ? dividerTokens.color.subtle
          : color;
  const resolvedThickness =
    thickness === 'default' || thickness === undefined
      ? dividerTokens.thickness.default
      : thickness === 'strong'
        ? dividerTokens.thickness.strong
        : thickness === 'subtle'
          ? dividerTokens.thickness.subtle
          : typeof thickness === 'number'
            ? `${thickness}px`
            : thickness;

  const isHorizontal = useMemo(() => orientation === 'horizontal', [orientation]);
  const length = useMemo(
    () =>
      type === 'fullWidth' ? '100%' : type === 'inset' ? 'calc(100% - 16px)' : 'calc(100% - 32px)',
    [type],
  );

  const dividerStyle: React.CSSProperties = useMemo(
    () => ({
      ...dividerBaseStyle,
      borderTop: isHorizontal ? `${resolvedThickness} solid ${resolvedColor}` : 'none',
      borderLeft: !isHorizontal ? `${resolvedThickness} solid ${resolvedColor}` : 'none',
      backgroundColor: resolvedColor,
      ...(isHorizontal
        ? {
            height: resolvedThickness,
            width: children ? 'auto' : length,
            flex: children ? 1 : undefined,
          }
        : {
            width: resolvedThickness,
            height: children ? 'auto' : (verticalHeight ?? length),
          }),
    }),
    [isHorizontal, resolvedThickness, resolvedColor, children, length, verticalHeight],
  );

  const wrapperStyle: React.CSSProperties = useMemo(
    () => ({
      ...dividerInsideBaseStyle,
      width: isHorizontal ? length : resolvedThickness,
      height: !isHorizontal ? length : resolvedThickness,
      gap: children ? '8px' : 0,
      justifyContent:
        childrenPosition === 'left'
          ? 'flex-start'
          : childrenPosition === 'right'
            ? 'flex-end'
            : 'center',
    }),
    [isHorizontal, length, resolvedThickness, children, childrenPosition],
  );

  return (
    <div style={dividerContainerBaseStyle}>
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
