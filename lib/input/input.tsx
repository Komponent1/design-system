import React, { useCallback, useEffect, useId, useMemo, useState } from 'react';
import type { InputSize, InputState, InputVariant } from './input.type';
import {
  getBoxStyle,
  getDisabledStyle,
  getErrorStyle,
  getFocusedStyle,
  getGrayStyle,
  getHoverStyle,
  sizeStyles,
  getSuccessStyle,
  getUnderlinedStyle,
} from './input.style';
import { useTheme } from '../theme/ThemeProvider';

type InputProps = {
  id?: string;
  variant?: InputVariant;
  value: string;
  onChange: (value: string) => void;
  size?: InputSize;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLInputElement>;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'>;
export const Input: React.FC<InputProps> = ({
  id,
  variant = 'box',
  size = 'md',
  placeholder = '',
  value,
  onChange,
  disabled,
  error,
  style,
  ...inputProps
}) => {
  const { theme } = useTheme();
  const inputToken = theme.input;
  const autoId = useId();
  const inputId = id || autoId;
  const [state, setState] = useState<InputState>(disabled ? 'disabled' : 'default');
  const [inputStyle, setInputStyle] = useState<React.CSSProperties>({});
  useEffect(() => {
    if (disabled) {
      setState('disabled');
    } else if (error) {
      setState('error');
    } else {
      setState('default');
    }
  }, [disabled, error]);
  const basicStyle = useMemo(() => {
    const sizeStyle = sizeStyles[size];
    switch (variant) {
      case 'underlined':
        return { ...getBoxStyle(inputToken), ...getUnderlinedStyle(inputToken), ...sizeStyle };
      case 'gray':
        return { ...getBoxStyle(inputToken), ...getGrayStyle(inputToken), ...sizeStyle };
      case 'box':
      default:
        return { ...getBoxStyle(inputToken), ...sizeStyle };
    }
  }, [variant, size, inputToken]);
  useEffect(() => {
    switch (state) {
      case 'disabled':
        setInputStyle({ ...basicStyle, ...getDisabledStyle(inputToken) });
        break;
      case 'hover':
        setInputStyle({ ...basicStyle, ...getHoverStyle(inputToken) });
        break;
      case 'focused':
        setInputStyle({ ...basicStyle, ...getFocusedStyle(inputToken) });
        break;
      case 'error':
        setInputStyle({ ...basicStyle, ...getErrorStyle(inputToken) });
        break;
      case 'success':
        setInputStyle({ ...basicStyle, ...getSuccessStyle(inputToken) });
        break;
      default:
        setInputStyle({ ...basicStyle });
    }
  }, [state, basicStyle, inputToken]);
  const onMouseEnter = useCallback(() => {
    if (state !== 'success' && state !== 'error' && state !== 'focused' && state !== 'disabled') {
      setState('hover');
    }
  }, [state]);
  const onMouseLeave = useCallback(() => {
    if (state !== 'success' && state !== 'error' && state !== 'focused' && state !== 'disabled') {
      setState('default');
    }
  }, [state]);
  const onFocus = useCallback(() => {
    if (state !== 'disabled') {
      setState('focused');
    }
  }, [state]);
  const onBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (inputProps.onBlur) {
        inputProps.onBlur(e);
      }
      if (state !== 'disabled') {
        if (error) {
          setState('error');
        } else {
          console.log('state');
          setState('default');
        }
      }
    },
    [state, error, inputProps],
  );

  return (
    <input
      id={inputId}
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        ...inputStyle,
        ...style,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      {...inputProps}
    />
  );
};

export default Input;
