import React, { useCallback, useMemo } from 'react';
import type { TabVariant } from './tab.type';
import { getNavVariantStyles, navBaseStyle, navContainerStyle } from './tab.style';

export type TabNavProps = {
  variant: TabVariant;
  tabs: string[];
  activeIndex: number;
  onTabChange: (index: number) => void;
};

export const TabNav: React.FC<TabNavProps> = ({ variant, tabs, activeIndex, onTabChange }) => {
  const genTabNavStyle = useCallback(
    (index: number): React.CSSProperties => ({
      ...navBaseStyle,
      ...getNavVariantStyles(activeIndex === index)[variant],
    }),
    [activeIndex, variant],
  );
  const containerStyle: React.CSSProperties = useMemo(
    () => ({
      ...navContainerStyle[variant],
    }),
    [variant],
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
