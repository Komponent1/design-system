import React, { useCallback, useEffect, useId, useMemo, useState } from 'react';
import type { InputSize, InputState, InputVariant } from './input.type';
import {
  boxStyle,
  disabledStyle,
  errorStyle,
  focusedStyle,
  grayStyle,
  hoverStyle,
  sizeStyles,
  successStyle,
  underlinedStyle,
} from './input.style';

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
} & React.HTMLAttributes<HTMLInputElement>;
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
        return { ...boxStyle, ...underlinedStyle, ...sizeStyle };
      case 'gray':
        return { ...boxStyle, ...grayStyle, ...sizeStyle };
      case 'box':
      default:
        return { ...boxStyle, ...sizeStyle };
    }
  }, [variant, size]);
  useEffect(() => {
    switch (state) {
      case 'disabled':
        setInputStyle({ ...basicStyle, ...disabledStyle });
        break;
      case 'hover':
        setInputStyle({ ...basicStyle, ...hoverStyle });
        break;
      case 'focused':
        if (variant === 'gray') {
          setInputStyle({ ...basicStyle, ...focusedStyle, border: '1px solid' });
        } else {
          setInputStyle({ ...basicStyle, ...focusedStyle });
        }
        break;
      case 'error':
        setInputStyle({ ...basicStyle, ...errorStyle });
        break;
      case 'success':
        setInputStyle({ ...basicStyle, ...successStyle });
        break;
      default:
        setInputStyle({ ...basicStyle });
    }
  }, [state, basicStyle, variant]);
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
  const onBlur = useCallback(() => {
    if (state !== 'disabled') {
      if (error) {
        setState('error');
      } else {
        setState('default');
      }
    }
  }, [state, error]);

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
