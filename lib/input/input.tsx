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
  searchButtonStyle,
  searchButtonSizeStyle,
  buttonIconStyle,
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
  withSubmitButton?: boolean;
  onClickSubmitButton?: () => void;
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
  withSubmitButton,
  onClickSubmitButton,
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
          setState('default');
        }
      }
    },
    [state, error, inputProps],
  );

  const handleSubmitClick = useCallback(() => {
    if (onClickSubmitButton && !disabled) {
      onClickSubmitButton();
    }
  }, [onClickSubmitButton, disabled]);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
  };

  const inputContainerStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    border: '1px solid',
    borderColor: inputStyle.borderColor || inputToken.border.default,
    borderRadius: inputStyle.borderRadius || '0.5rem',
    backgroundColor: inputStyle.backgroundColor || inputToken.bg.default,
    ...(withSubmitButton && {
      borderRight: 'none',
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    }),
  };

  return withSubmitButton ? (
    <div style={containerStyle}>
      <div style={inputContainerStyle}>
        <input
          id={inputId}
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            ...inputStyle,
            border: 'none',
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          {...inputProps}
        />
      </div>
      <button
        type='button'
        onClick={handleSubmitClick}
        disabled={disabled}
        style={{
          ...searchButtonStyle,
          ...searchButtonSizeStyle[size],
          borderColor: inputStyle.borderColor || inputToken.border.default,
          borderTopRightRadius: inputStyle.borderRadius || '0.5rem',
          borderBottomRightRadius: inputStyle.borderRadius || '0.5rem',
          backgroundColor: inputStyle.backgroundColor || inputToken.bg.default,
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
          color: inputStyle.color || inputToken.text.default,
        }}
        aria-label='Search button'
      >
        <svg
          width={buttonIconStyle[size].w}
          height={buttonIconStyle[size].h}
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='11' cy='11' r='8' />
          <path d='m21 21-4.35-4.35' />
        </svg>
      </button>
    </div>
  ) : (
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
