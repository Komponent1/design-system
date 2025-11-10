import React from 'react';
import type { TypographySize, TypographyWeight } from './typography.type';
import { typographyMap } from './typography.config';

type TypographyProps = {
  children: React.ReactNode;
  type?: TypographySize;
  weight?: TypographyWeight;
  color?: string;
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  type = 'base',
  color = 'black',
  weight = 'regular',
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
    >
      {children}
    </span>
  );
};
