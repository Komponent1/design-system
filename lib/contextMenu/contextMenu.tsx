import React, { useCallback, useRef, useState } from 'react';
import Portal from '../portal/portal';
import { ContextMenuItem } from './contextMenuItem';
import {
  contextMenuContainerStyle,
  contextMenuDividerStyle,
  contextMenuOverlayStyle,
} from './contextMenu.style';

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
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuPosition, setMenuPosition] = useState({ x: position.x, y: position.y });

  const handleMenuRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node && visible) {
        menuRef.current = node;

        const menuRect = node.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        let adjustedX = position.x;
        let adjustedY = position.y;

        // 오른쪽 화면 밖으로 나가는 경우
        if (adjustedX + menuRect.width > viewportWidth) {
          adjustedX = viewportWidth - menuRect.width - 10;
        }

        // 왼쪽 화면 밖으로 나가는 경우
        if (adjustedX < 10) {
          adjustedX = 10;
        }

        // 아래쪽 화면 밖으로 나가는 경우
        if (adjustedY + menuRect.height > viewportHeight) {
          adjustedY = viewportHeight - menuRect.height - 10;
        }

        // 위쪽 화면 밖으로 나가는 경우
        if (adjustedY < 10) {
          adjustedY = 10;
        }

        setMenuPosition({ x: adjustedX, y: adjustedY });
      }
    },
    [position.x, position.y, visible],
  );

  if (!visible) return null;

  return (
    <Portal>
      <div onClick={onClose} style={contextMenuOverlayStyle}>
        <div
          ref={handleMenuRef}
          onClick={(e) => e.stopPropagation()}
          style={{
            top: menuPosition.y,
            left: menuPosition.x,
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
