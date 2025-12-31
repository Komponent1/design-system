import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type {
  ButtonCorner,
  ButtonSize,
  ButtonVariant,
  ButtonState,
  ButtonType,
} from './button.type';
import { cornerStyles, outlineStyle, sizeStyles, solidStyle, textStyle } from './button.style';
import { useTheme } from '../theme/ThemeProvider';

type ButtonProps = {
  label?: string /** aria-label */;
  onClick: () => void;
  variant?: ButtonVariant;
  corner?: ButtonCorner;
  size?: ButtonSize;
  type?: ButtonType;
  full?: boolean;
  disabled?: boolean;
  content: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  content,
  type = 'primary',
  variant = 'solid',
  corner = 'square',
  size = 'md',
  full = false,
  disabled = false,
  ...buttonProps
}) => {
  const { theme } = useTheme();

  // 버튼 토큰 추출
  const buttonTokens = theme.button[type as keyof typeof theme.button];
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
          color: buttonTokens.bg.default,
          borderColor: buttonTokens.bg.default,
          backgroundColor: 'transparent',
        };
      case 'text':
        return {
          ...sizeStyle,
          ...cornerStyle,
          ...widthStyle,
          ...textStyle,
          color: buttonTokens.bg.default,
          backgroundColor: 'transparent',
        };
      case 'solid':
      default:
        return {
          ...sizeStyle,
          ...cornerStyle,
          ...widthStyle,
          ...solidStyle,
          color: buttonTokens.text.default,
          backgroundColor: buttonTokens.bg.default,
        };
    }
  }, [variant, corner, size, full, buttonTokens]);
  useEffect(() => {
    switch (state) {
      case 'disabled':
        setButtonStyle({
          ...basicStyle,
          backgroundColor: buttonTokens.bg.disabled,
          color: buttonTokens.text.disabled,
          borderColor: buttonTokens.bg.disabled,
          cursor: 'not-allowed',
        });
        break;
      case 'hover':
        setButtonStyle({
          ...basicStyle,
          backgroundColor: buttonTokens.bg.hover,
        });
        break;
      case 'abled':
      default:
        setButtonStyle(basicStyle);
        break;
    }
  }, [state, basicStyle, buttonTokens]);
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
