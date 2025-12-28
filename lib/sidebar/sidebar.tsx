import React, { useMemo, useState } from 'react';
import type { buttonSizes, sidebarPosition, sidebarVariant } from './sidebar.type';
import {
  buttonBaseStyle,
  sidebarContainerStyle,
  sidebarContentBaseStyle,
  sidebarPositionStyles,
} from './sidebar.style';
import { buttonHeights, buttonWidths } from './sidebar.constant';

export type SidebarProps = {
  width?: string | number;
  variant?: sidebarVariant;
  position?: sidebarPosition;
  buttonTop?: number;
  buttonSize?: buttonSizes;
  children?: React.ReactNode;

  style?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
};

export const Sidebar: React.FC<SidebarProps> = ({
  width = 250,
  variant = 'collapsible',
  position = 'left',
  style = {},
  buttonTop = 36,
  buttonStyle,
  children,
  buttonSize = 'md',
}) => {
  const buttonWidth = useMemo(() => buttonWidths[buttonSize], [buttonSize]);
  const buttonHeight = useMemo(() => buttonHeights[buttonSize], [buttonSize]);
  const [open, setOpen] = useState(variant === 'alwaysOpen');
  const sidebarWidth = useMemo(() => (typeof width === 'number' ? `${width}px` : width), [width]);
  const isOpen = variant === 'alwaysOpen' ? true : open;
  const sidebarStyle: React.CSSProperties = {
    width: isOpen ? sidebarWidth : 0,
    minWidth: isOpen ? sidebarWidth : 0,
    maxWidth: isOpen ? sidebarWidth : 0,
    ...sidebarContainerStyle,
    ...sidebarPositionStyles[position],
    ...style,
  };
  const toggleButtonStyle: React.CSSProperties = {
    left:
      position === 'left' ? (isOpen ? `calc(${sidebarWidth} - ${buttonWidth}px)` : 0) : undefined,
    right:
      position === 'right' ? (isOpen ? `calc(${sidebarWidth} - ${buttonWidth}px)` : 0) : undefined,

    borderRadius:
      position === 'left'
        ? isOpen
          ? `${buttonWidth / 2}px 0 0 ${buttonWidth / 2}px`
          : `0 ${buttonWidth / 2}px ${buttonWidth / 2}px 0`
        : isOpen
          ? `0 ${buttonWidth / 2}px ${buttonWidth / 2}px 0`
          : `${buttonWidth / 2}px 0 0 ${buttonWidth / 2}px`,
    boxShadow: position === 'left' ? '2px 0 8px #0001' : '-2px 0 8px #0001',
    width: `${buttonWidth}px`,
    height: `${buttonHeight}px`,
    top: `${buttonTop}px`,
    ...buttonBaseStyle,
    ...buttonStyle,
  };
  const sidebarContentStyle: React.CSSProperties = {
    ...sidebarContentBaseStyle,
    ...(variant === 'collapsible'
      ? position === 'left'
        ? { paddingRight: buttonWidth }
        : { paddingLeft: buttonWidth + 8 }
      : {}),
  };

  return (
    <div>
      {variant === 'collapsible' && (
        <button type='button' style={toggleButtonStyle} onClick={() => setOpen((v) => !v)}>
          {position === 'left' ? (isOpen ? '◀' : '▶') : isOpen ? '▶' : '◀'}
        </button>
      )}
      <div style={sidebarStyle}>
        <div style={sidebarContentStyle}>{children}</div>
      </div>
    </div>
  );
};
