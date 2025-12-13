import React from 'react';
import type { TypographySize, TypographyType, TypographyWeight } from './typography.type';
import { typographyMap } from './typography.config';

export type TypographyProps = {
  children: React.ReactNode;
  type?: TypographyType;
  size?: TypographySize;
  weight?: TypographyWeight;
  color?: string;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLDivElement>;

export const Typography: React.FC<TypographyProps> = ({
  children,
  type = 'p',
  size = 'md',
  color = 'black',
  weight = 'regular',
  style,
  ...spanProps
}) => {
  const { fontSize, lineHeight } = typographyMap[size];
  switch (type) {
    case 'p':
      return (
        <div
          style={{
            fontSize,
            lineHeight: lineHeight ? lineHeight : undefined,
            fontWeight: weight,
            color,
            margin: 0,
            ...style,
          }}
          {...spanProps}
        >
          {children}
        </div>
      );
    default:
      break;
  }
  return (
    <span
      style={{
        fontSize,
        lineHeight: lineHeight ? lineHeight : undefined,
        fontWeight: weight,
        color,
        ...style,
      }}
      {...spanProps}
    >
      {children}
    </span>
  );
};
