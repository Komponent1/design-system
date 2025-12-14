import React, { useMemo } from 'react';
import { tabContentStyle } from './tab.style';

export type TabContentProps = {
  children: React.ReactNode;
  bordered?: boolean;
};

export const TabContent: React.FC<TabContentProps> = ({ children, bordered }) => {
  const contentStyle = useMemo(
    () => ({
      ...tabContentStyle,
      border: bordered ? '1px solid #e5e7eb' : 'none',
    }),
    [bordered],
  );

  return <div style={contentStyle}>{children}</div>;
};
