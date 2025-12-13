import React, { useEffect, useState } from 'react';
import type { ListVariant } from './list.type';
import { baseStyle, genBorderStyle } from './list.style';

export type ListItemProps = {
  children: React.ReactNode;
  variant: ListVariant;
  onClick?: () => void;
  selected?: boolean;
  isLast?: boolean;
};
export const ListItem: React.FC<ListItemProps> = ({
  children,
  variant,
  onClick,
  selected,
  isLast,
}) => {
  const [hover, setHover] = useState(false);
  const [listStyle, setListStyle] = useState<React.CSSProperties>({
    ...baseStyle,
    borderBottom: genBorderStyle(variant, isLast || false),
    cursor: onClick ? 'pointer' : 'default',
    backgroundColor:
      selected && onClick ? 'rgba(0,0,0,0.06)' : hover && onClick ? 'rgba(0,0,0,0.03)' : undefined,
  });

  useEffect(() => {
    setListStyle((prev) => ({
      ...prev,
      backgroundColor:
        selected && onClick
          ? 'rgba(0,0,0,0.06)'
          : hover && onClick
            ? 'rgba(0,0,0,0.03)'
            : undefined,
    }));
  }, [hover, selected, onClick]);

  return (
    <div
      onClick={onClick}
      style={listStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </div>
  );
};
