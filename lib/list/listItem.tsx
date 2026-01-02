import React, { useEffect, useState } from 'react';
import type { ListVariant } from './list.type';
import { baseStyle, genBorderStyle } from './list.style';
import { useTheme } from '../theme/ThemeProvider';

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
  const { theme } = useTheme();
  const [hover, setHover] = useState(false);
  const [listStyle, setListStyle] = useState<React.CSSProperties>({
    ...baseStyle,
    borderBottom: genBorderStyle(variant, isLast || false, theme),
    cursor: onClick ? 'pointer' : 'default',
    backgroundColor:
      selected && onClick ? 'rgba(0,0,0,0.06)' : hover && onClick ? 'rgba(0,0,0,0.03)' : undefined,
  });

  useEffect(() => {
    setListStyle((prev) => ({
      ...prev,
      backgroundColor:
        selected && onClick
          ? undefined
          : hover && onClick
            ? theme.list.background.hover
            : undefined,
    }));
  }, [hover, selected, onClick, theme]);

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
