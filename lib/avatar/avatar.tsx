import React, { useMemo } from 'react';
import type { AvatarDot, AvatarSize, AvatarType, AvatarVariant } from './avatar.type';
import {
  baseStyle,
  basicImageStyle,
  containerStyle,
  dotBaseStyle,
  dotPositionStyles,
  dotSizesStyle,
  genOutlineStyle,
  sizesStyle,
  variantStyle,
} from './avatar.style';

export type AvatarProps = {
  type?: AvatarType;
  size?: AvatarSize;
  variant?: AvatarVariant;
  outline?: boolean;
  color?: string;
  backgroundColor?: string;
  outlineColor?: string;
  dot?: AvatarDot;
  dotColor?: string;

  src?: string;
  alt?: string;
};
export const Avatar: React.FC<AvatarProps> = ({
  type = 'image',
  size = 'md',
  variant = 'circle',
  outline = false,
  color = '#ddd',
  backgroundColor = '#222',
  outlineColor = '#000',
  dot = 'none',
  dotColor = '#ff0000',
  src = '',
  alt = 'avatar',
}) => {
  const avatarStyle: React.CSSProperties = useMemo(() => {
    const outlineStyle = outline ? genOutlineStyle(outlineColor) : {};

    return {
      ...baseStyle,
      ...variantStyle[variant],
      ...sizesStyle[size],
      ...outlineStyle,
      backgroundColor: backgroundColor,
      color: color,
    };
  }, [variant, size, outline, outlineColor, color, backgroundColor]);

  return (
    <div style={containerStyle}>
      <div style={avatarStyle}>
        {type === 'image' ? (
          <img src={src || ''} alt={alt} style={basicImageStyle} />
        ) : (
          <div>{alt.toUpperCase()}</div>
        )}
      </div>
      {dot !== 'none' && (
        <span
          style={{
            ...dotBaseStyle,
            ...dotPositionStyles[dot],
            ...dotSizesStyle[size],
            backgroundColor: dotColor,
          }}
        />
      )}
    </div>
  );
};
