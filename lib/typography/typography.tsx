import React from 'react';
import type { TypographySize, TypographyWeight } from './typography.type';
import { typographyMap } from './typography.config';

type TypographyProps = {
  children: React.ReactNode;
  type?: TypographySize;
  weight?: TypographyWeight;
  color?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

export const Typography: React.FC<TypographyProps> = ({
  children,
  type = 'md',
  color = 'black',
  weight = 'regular',
  ...spanProps
}) => {
  const { fontSize, lineHeight } = typographyMap[type];
  return (
    <span
      style={{
        fontSize,
        lineHeight: lineHeight ? lineHeight : undefined,
        fontWeight: weight,
        color,
      }}
      {...spanProps}
    >
      {children}
    </span>
  );
};
