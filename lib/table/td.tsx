import React, { useMemo } from 'react';
import { useTheme } from '../theme/ThemeProvider';

export type TdProps = {
  children: React.ReactNode;
  index: number;
  variant: 'default' | 'striped' | 'bordered';
};
export const Td: React.FC<TdProps> = ({ children, index, variant }) => {
  const { theme } = useTheme();
  const token = theme.table[variant];
  const tdStyle = useMemo(() => {
    const style: React.CSSProperties = {
      padding: '16px',
      color: token.row.color,
      backgroundColor: token.row.bg,
      borderBottom: `1px solid ${token.row.border}`,
    };
    if (variant === 'striped' && 'evenBg' in token.row && token.row.evenBg && index % 2 === 0) {
      style.backgroundColor = token.row.evenBg;
    }
    return style;
  }, [index, token, variant]);
  return <td style={tdStyle}>{children}</td>;
};
