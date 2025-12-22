import React, { useCallback, useEffect, useState } from 'react';
import { contextMenuItemStyle } from './contextMenu.style';

export type ContextMenuItemProps = {
  children: React.ReactNode;
};
export const ContextMenuItem: React.FC<ContextMenuItemProps> = ({ children }) => {
  const [hover, setHover] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>(contextMenuItemStyle);
  const onMouseEnter = useCallback(() => {
    setHover(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setHover(false);
  }, []);
  useEffect(() => {
    setStyle((prev) => ({
      ...prev,
      backgroundColor: hover ? 'rgba(0,0,0,0.03)' : undefined,
    }));
  }, [hover]);

  return (
    <div style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};
