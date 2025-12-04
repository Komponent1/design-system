import type React from 'react';
import type { AvatarDot, AvatarSize, AvatarVariant } from './avatar.type';

export const containerStyle: React.CSSProperties = {
  position: 'relative',
  display: 'inline-flex',
};
export const baseStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
};
export const basicImageStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};
export const variantStyle: { [key in AvatarVariant]: React.CSSProperties } = {
  circle: {
    borderRadius: '50%',
  },
  square: {
    borderRadius: '0.375rem',
  },
};
export const sizesStyle: { [key in AvatarSize]: React.CSSProperties } = {
  sm: {
    width: '2rem',
    height: '2rem',
    fontSize: '0.875rem',
  },
  md: {
    width: '3rem',
    height: '3rem',
    fontSize: '1rem',
  },
  lg: {
    width: '4rem',
    height: '4rem',
    fontSize: '1.25rem',
  },
};
export const dotBaseStyle: React.CSSProperties = {
  position: 'absolute',
  borderRadius: '50%',
  backgroundColor: '#ff0000',
  border: `2px solid white`,
};
export const dotPositionStyles: { [key in AvatarDot]: React.CSSProperties } = {
  top: {
    top: '-0.25rem',
    right: '-0.25rem',
  },
  bottom: {
    bottom: '-0.25rem',
    right: '-0.25rem',
  },
  none: {},
};

export const dotSizesStyle: { [key in AvatarSize]: React.CSSProperties } = {
  sm: {
    width: '0.5rem',
    height: '0.5rem',
    borderWidth: '2px',
  },
  md: {
    width: '0.75rem',
    height: '0.75rem',
    borderWidth: '2.5px',
  },
  lg: {
    width: '1rem',
    height: '1rem',
    borderWidth: '3px',
  },
};
export const genOutlineStyle = (color: string): React.CSSProperties => ({
  boxSizing: 'border-box',
  border: `2px solid ${color}`,
});
