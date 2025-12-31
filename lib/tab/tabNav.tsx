import React, { useCallback, useMemo } from 'react';
import type { TabVariant } from './tab.type';
import { getNavVariantStyles, navBaseStyle, getNavContainerStyle } from './tab.style';
import { useTheme } from '../theme/ThemeProvider';

export type TabNavProps = {
  variant: TabVariant;
  tabs: string[];
  activeIndex: number;
  onTabChange: (index: number) => void;
};

export const TabNav: React.FC<TabNavProps> = ({ variant, tabs, activeIndex, onTabChange }) => {
  const { theme } = useTheme();
  const genTabNavStyle = useCallback(
    (index: number): React.CSSProperties => ({
      ...navBaseStyle,
      ...getNavVariantStyles(activeIndex === index, theme)[variant],
    }),
    [activeIndex, variant, theme],
  );
  const containerStyle: React.CSSProperties = useMemo(
    () => ({
      ...getNavContainerStyle(theme)[variant],
    }),
    [variant, theme],
  );

  return (
    <div style={containerStyle}>
      {tabs.map((tab, index) => (
        <button key={index} onClick={() => onTabChange(index)} style={genTabNavStyle(index)}>
          {tab}
        </button>
      ))}
    </div>
  );
};
