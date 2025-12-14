import React, { useState } from 'react';
import { TabNav } from './tabNav';
import { TabContent } from './tabContent';
import type { TabVariant } from './tab.type';

export type TabProps = {
  variant?: TabVariant;
  tabs: string[];
  children: React.ReactNode[];
  defaultIndex?: number;
  bordered?: boolean;
};

export const Tab: React.FC<TabProps> = ({ variant = 'line', tabs, children, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div>
      <TabNav
        variant={variant}
        tabs={tabs}
        activeIndex={activeIndex}
        onTabChange={setActiveIndex}
      />
      <TabContent>{children[activeIndex]}</TabContent>
    </div>
  );
};
