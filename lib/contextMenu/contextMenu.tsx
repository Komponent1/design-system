import React, { useMemo } from 'react';
import Portal from '../portal/portal';
import { ContextMenuItem } from './contextMenuItem';
import { contextMenuContainerStyle, contextMenuDividerStyle } from './contextMenu.style';

export type ContextMenuProps = {
  children: React.ReactNode[];
  position: { x: number; y: number };
  visible: boolean;
  onClose: () => void;
  dividerIndex?: number[];
};

export const ContextMenu: React.FC<ContextMenuProps> = ({
  children,
  position,
  visible,
  onClose,
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
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          width: '100vw',
          height: '100vh',
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
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
      </div>
    </Portal>
  );
};
