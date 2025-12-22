import React, { useMemo } from 'react';
import Portal from '../portal/portal';
import { ContextMenuItem } from './contextMenuItem';
import { contextMenuContainerStyle, contextMenuDividerStyle } from './contextMenu.style';

export type ContextMenuProps = {
  children: React.ReactNode[];
  position: { x: number; y: number };
  visible: boolean;
  dividerIndex?: number[];
};

export const ContextMenu: React.FC<ContextMenuProps> = ({
  children,
  position,
  visible,
  dividerIndex = [],
}) => {
  const positionStyle = useMemo<React.CSSProperties>(() => {
    return {
      top: position.y,
      left: position.x,
    };
  }, [position]);

  if (!visible) return null;

  return (
    <Portal>
      <div
        style={{
          ...positionStyle,
          ...contextMenuContainerStyle,
        }}
      >
        {children.map((child, index) => (
          <>
            {dividerIndex && dividerIndex.includes(index) && (
              <div style={contextMenuDividerStyle} />
            )}
            <ContextMenuItem key={index}>{child}</ContextMenuItem>
          </>
        ))}
      </div>
    </Portal>
  );
};
