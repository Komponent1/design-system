import React from 'react';
import type {
  TypographyElement,
  TypographySize,
  TypographyType,
  TypographyWeight,
} from './typography.type';
import { typographyMap } from './typography.config';
import { useTheme } from '../theme/ThemeProvider';

export type TypographyProps = {
  children: React.ReactNode;
  type?: TypographyType;
  element?: TypographyElement;
  size?: TypographySize;
  weight?: TypographyWeight;
  color?: string;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLDivElement>;

export const Typography: React.FC<TypographyProps> = ({
  children,
  type = 'primary',
  element = 'span',
  size = 'md',
  color,
  weight = 'regular',
  style,
  ...spanProps
}) => {
  const { theme } = useTheme();
  const textColor = color ? color : theme.color.text[type];
  color = color === 'black' ? textColor : color;
  const { fontSize, lineHeight } = typographyMap[size];
  switch (element) {
    case 'p':
      return (
        <div
          style={{
            fontSize,
            lineHeight: lineHeight ? lineHeight : undefined,
            fontWeight: weight,
            color: textColor,
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
        color: textColor,
        ...style,
      }}
      {...spanProps}
    >
      {children}
    </span>
  );
};
