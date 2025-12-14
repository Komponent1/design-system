import React, { useMemo } from 'react';
import { baseTdStyle, borderedTdStyle } from './table.style';

export type TdProps = {
  children: React.ReactNode;
  index: number;
  variant: 'default' | 'striped' | 'bordered';
};
export const Td: React.FC<TdProps> = ({ children, index, variant }) => {
  const tdStyle = useMemo(() => {
    const backgroundColor = index % 2 === 0 ? '#f9f9f9' : '#ffffff';

    switch (variant) {
      case 'striped':
        return {
          ...baseTdStyle,
          backgroundColor,
        };
      case 'bordered':
        return {
          ...baseTdStyle,
          ...borderedTdStyle,
        };
      case 'default':
      default:
        return { ...baseTdStyle };
    }
  }, [index, variant]);
  return <td style={tdStyle}>{children}</td>;
};
