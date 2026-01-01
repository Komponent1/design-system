import React, { useCallback, useEffect, useId, useState } from 'react';
import type { CheckboxSize } from './checkbox.type';
import { baseStyle, markUrl, sizesStyle } from './checkbox.style';
import { useTheme } from '../theme/ThemeProvider';

export type CheckboxProps = {
  id?: string;
  size?: CheckboxSize;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'disabled'>;

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  size = 'md',
  onChange,
  label,
  checked = false,
  disabled = false,
  ...checkboxProps
}) => {
  const { theme } = useTheme();
  const autoId = useId();
  const checkboxId = id || autoId;
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      setIsChecked(!isChecked);
      if (onChange) {
        onChange(e.target.checked);
      }
    },
    [onChange, isChecked, disabled],
  );

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const checkboxTokens = theme.checkbox.default;

  const inputStyle: React.CSSProperties = {
    ...baseStyle,
    ...sizesStyle[size],
    borderColor: disabled
      ? checkboxTokens.box.border.disabled
      : isChecked
        ? checkboxTokens.box.border.checked
        : checkboxTokens.box.border.default,
    backgroundColor: disabled
      ? checkboxTokens.box.bg.disabled
      : isChecked
        ? checkboxTokens.box.bg.active
        : checkboxTokens.box.bg.default,
    backgroundImage: isChecked ? markUrl : 'none',
    color: disabled
      ? checkboxTokens.label.color.disabled
      : isChecked
        ? checkboxTokens.check.color.default
        : checkboxTokens.label.color.default,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
  };

  const labelStyle: React.CSSProperties = {
    color: disabled
      ? checkboxTokens.label.color.disabled
      : isChecked
        ? checkboxTokens.label.color.default
        : checkboxTokens.label.color.default,
    marginLeft: '0.5rem',
    userSelect: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <input
        id={checkboxId}
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
        style={inputStyle}
        {...checkboxProps}
      />
      {label && (
        <label htmlFor={checkboxId} style={labelStyle}>
          {label}
        </label>
      )}
    </div>
  );
};
