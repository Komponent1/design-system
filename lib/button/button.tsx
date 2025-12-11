import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type { ButtonCorner, ButtonSize, ButtonVariant, ButtonState } from './button.type';
import {
  cornerStyles,
  disabledStyle,
  getHoverStyles,
  outlineStyle,
  sizeStyles,
  solidStyle,
  textStyle,
} from './button.style';
import { theme } from '..';

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
  color = theme.color.primary,
  textColor = theme.color.buttonTextPrimary,
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
        return {
          ...sizeStyle,
          ...cornerStyle,
          ...widthStyle,
          ...outlineStyle,
          color: textColor === theme.color.buttonTextPrimary ? color : textColor,
          borderColor: color,
        };
      case 'text':
        return {
          ...sizeStyle,
          ...cornerStyle,
          ...widthStyle,
          ...textStyle,
          color: textColor === theme.color.buttonTextPrimary ? color : textColor,
        };
      case 'solid':
      default:
        return {
          ...sizeStyle,
          ...cornerStyle,
          ...widthStyle,
          ...solidStyle,
          color: textColor,
          backgroundColor: color,
        };
    }
  }, [variant, corner, size, full, color, textColor]);
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
          ...getHoverStyles(color)[variant],
        });
        break;
      case 'abled':
      default:
        setButtonStyle(basicStyle);
        break;
    }
  }, [state, basicStyle, variant, color]);
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
