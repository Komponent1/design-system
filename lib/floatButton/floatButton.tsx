import React, { useMemo, useState } from 'react';
import type {
  FloatButtonPosition,
  FloatButtonPositionType,
  FloatButtonSize,
} from './floatButton.type';
import {
  floatButtonBaseStyle,
  floatButtonContainerBaseStyle,
  floatButtonPostionStyles,
} from './floatButton.style';
import { floatButtonSize } from './floatButton.constant';
import type { FloatButtonItemProps } from './floatButtonItem';

export type FloatButtonProps = {
  positionType?: FloatButtonPositionType;
  icon: React.ReactNode;
  onClick?: () => void;
  position?: FloatButtonPosition;
  size?: FloatButtonSize;
  color?: string;
  backgroundColor?: string;
  children?: React.ReactElement<FloatButtonItemProps>[];
};

export const FloatButton: React.FC<FloatButtonProps> = ({
  positionType = 'fixed',
  icon,
  onClick,
  position = 'bottom-right',
  size = 'md',
  color = '#ffffff',
  backgroundColor = '#1976d2',
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonSize = useMemo(() => floatButtonSize[size], [size]);
  const isBottom = useMemo(() => position.includes('bottom'), [position]);
  const isRight = useMemo(() => position.includes('right'), [position]);

  const buttonStyle: React.CSSProperties = {
    ...floatButtonBaseStyle,
    position: positionType,
    width: buttonSize,
    height: buttonSize,
    backgroundColor,
    color,
    ...floatButtonPostionStyles[position],
    transform: isOpen && children ? 'rotate(45deg)' : 'rotate(0deg)',
  };

  const childrenContainerStyle: React.CSSProperties = {
    ...floatButtonContainerBaseStyle,
    ...(isBottom && { bottom: `calc(1.5rem + ${buttonSize}px + 12px)` }),
    ...(!isBottom && { top: `calc(1.5rem + ${buttonSize}px + 12px)` }),
    ...(isRight && { right: `calc(1.5rem + ${buttonSize}px / 2)` }),
    ...(!isRight && { left: `calc(1.5rem + ${buttonSize}px / 2)` }),
    transform: isRight ? 'translateX(50%)' : 'translateX(-50%)',
  };

  const handleMainButtonClick = () => {
    if (children && children.length > 0) {
      setIsOpen(!isOpen);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <button
        style={buttonStyle}
        onClick={handleMainButtonClick}
        aria-label='Floating Action Button'
      >
        {icon}
      </button>
      {children && children.length > 0 && (
        <div style={childrenContainerStyle}>
          {children.map((child, index) =>
            React.cloneElement<FloatButtonItemProps>(child, {
              key: index,
              isOpen,
              isBottom,
              index,
              color,
              backgroundColor,
              buttonSize,
            }),
          )}
        </div>
      )}
    </>
  );
};
