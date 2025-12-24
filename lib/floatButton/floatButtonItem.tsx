import React from 'react';
import { floatButtonChildBaseStyle } from './floatButton.style';

export type FloatButtonItemProps = {
  children: React.ReactNode;
  buttonSize?: number;
  isBottom?: boolean;
  backgroundColor?: string;
  color?: string;
  isOpen?: boolean;
  onClick?: () => void;
  index?: number;
};
export const FloatButtonItem: React.FC<FloatButtonItemProps> = ({
  children,
  buttonSize = 40,
  isBottom = true,
  isOpen,
  backgroundColor,
  color,
  onClick,
  index = 0,
}) => {
  const childButtonStyle: React.CSSProperties = {
    ...floatButtonChildBaseStyle,
    width: buttonSize * 0.8,
    height: buttonSize * 0.8,
    backgroundColor,
    color,
    opacity: isOpen ? 1 : 0,
  };
  const getChildTransform = () => {
    const containerToButtonDistance = buttonSize + 12;

    if (!isOpen) {
      const translateY = isBottom ? containerToButtonDistance : -containerToButtonDistance;
      return `scale(0) translateY(${translateY}px)`;
    }
    return 'scale(1) translateY(0)';
  };

  return (
    <div
      style={{
        ...childButtonStyle,
        transform: getChildTransform(),
        transitionDelay: `${index * 0.05}s`,
        cursor: onClick ? 'pointer' : 'default',
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
