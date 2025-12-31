import React, { useMemo } from 'react';
import { tabContentStyle } from './tab.style';
import { useTheme } from '../theme/ThemeProvider';

export type TabContentProps = {
  children: React.ReactNode;
  bordered?: boolean;
};

export const TabContent: React.FC<TabContentProps> = ({ children, bordered }) => {
  const { theme } = useTheme();
  const contentStyle = useMemo(
    () => ({
      ...tabContentStyle,
      border: bordered ? `1px solid ${theme.color.border.default}` : 'none',
    }),
    [bordered, theme],
  );

  return <div style={contentStyle}>{children}</div>;
};
