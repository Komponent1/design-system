import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type { InputSize, InputState } from './input.type';
import { typographyMap } from '../typography/typography.config';

type InputProps = {
  size?: InputSize;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
};
export const Input: React.FC<InputProps> = ({
  size = 'md',
  placeholder = '',
  value,
  onChange,
  disabled,
  error,
}) => {
  const [state, setState] = useState<InputState>(disabled ? 'disabled' : 'default');
  useEffect(() => {
    if (disabled) {
      setState('disabled');
    } else if (error) {
      setState('error');
    } else {
      setState('default');
    }
  }, [disabled, error]);
  const basicStyle = useMemo(
    () => ({
      ...typographyMap.lg,
      padding: '0.625rem 1rem',
      border: '1px solid',
      borderColor: '#ccc',
      borderRadius: '0.5rem',
    }),
    [],
  );
  const sizeStyle = useMemo(() => {
    switch (size) {
      case 'sm':
        return { ...typographyMap.sm, padding: '0.625rem 0.75rem' };
      case 'lg':
        return { ...typographyMap.md, padding: '0.875rem 1.25rem' };
      default:
        return { ...typographyMap.lg, padding: '0.625rem 1rem' };
    }
  }, [size]);
  const disabledStyle = useMemo(
    () => ({
      backgroundColor: '#f5f5f5',
      borderColor: '#ddd',
      cursor: 'not-allowed',
    }),
    [],
  );
  const hoverStyle = useMemo(
    () => ({
      borderColor: '#888',
    }),
    [],
  );
  const focusedStyle = useMemo(
    () => ({
      borderColor: '#00ff',
      boxShadow: '0 0 0 2px #00ff',
    }),
    [],
  );
  const errorStyle = useMemo(
    () => ({
      borderColor: 'red',
    }),
    [],
  );
  const successStyle = useMemo(
    () => ({
      borderColor: 'green',
    }),
    [],
  );
  const inputStyle = useMemo(() => {
    switch (state) {
      case 'disabled':
        return { ...basicStyle, ...sizeStyle, ...disabledStyle };
      case 'hover':
        return { ...basicStyle, ...sizeStyle, ...hoverStyle };
      case 'focused':
        return { ...basicStyle, ...sizeStyle, ...focusedStyle };
      case 'error':
        return { ...basicStyle, ...sizeStyle, ...errorStyle };
      case 'success':
        return { ...basicStyle, ...sizeStyle, ...successStyle };
      default:
        return basicStyle;
    }
  }, [
    state,
    sizeStyle,
    basicStyle,
    hoverStyle,
    focusedStyle,
    errorStyle,
    successStyle,
    disabledStyle,
  ]);

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
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        ...inputStyle,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
    />
  );
};

export default Input;
