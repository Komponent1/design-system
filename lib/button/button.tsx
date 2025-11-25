import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type { ButtonCorner, ButtonSize, ButtonVariant, ButtonState } from './button.type';
import {
  cornerStyles,
  disabledStyle,
  hoverStyles,
  outlineStyle,
  sizeStyles,
  solidStyle,
  textStyle,
} from './button.style';

type ButtonProps = {
  label?: string /** aria-label */;
  onClick: () => void;
  variant?: ButtonVariant;
  corner?: ButtonCorner;
  size?: ButtonSize;
  full?: boolean;
  color?: string;
  textColor?: string;
  disabled?: boolean;
  content: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  content,
  variant = 'solid',
  corner = 'square',
  size = 'md',
  full = false,
  disabled = false,
  ...buttonProps
}) => {
  const [state, setState] = useState<ButtonState>('abled');
  const [buttonStyle, setButtonStyle] = useState<React.CSSProperties>({});
  useEffect(() => {
    if (disabled) {
      setState('disabled');
    } else {
      setState('abled');
    }
  }, [disabled]);
  const basicStyle = useMemo(() => {
    const sizeStyle = sizeStyles[size];
    const cornerStyle = cornerStyles[corner];
    const widthStyle = full ? { width: '100%' } : {};
    switch (variant) {
      case 'outline':
        return { ...sizeStyle, ...cornerStyle, ...widthStyle, ...outlineStyle };
      case 'text':
        return { ...sizeStyle, ...cornerStyle, ...widthStyle, ...textStyle };
      case 'solid':
      default:
        return { ...sizeStyle, ...cornerStyle, ...widthStyle, ...solidStyle };
    }
  }, [variant, corner, size, full]);
  useEffect(() => {
    switch (state) {
      case 'disabled':
        setButtonStyle({
          ...basicStyle,
          ...disabledStyle,
        });
        break;
      case 'hover':
        setButtonStyle({
          ...basicStyle,
          ...hoverStyles[variant],
        });
        break;
      case 'abled':
      default:
        setButtonStyle(basicStyle);
        break;
    }
  }, [state, basicStyle, variant]);
  const onMouseEnter = useCallback(() => {
    if (!disabled) {
      setState('hover');
    }
  }, [disabled]);
  const onMouseLeave = useCallback(() => {
    if (!disabled) {
      setState('abled');
    }
  }, [disabled]);

  return (
    <button
      aria-label={label ? label : ''}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        ...buttonStyle,
      }}
      {...buttonProps}
    >
      {content}
    </button>
  );
};
