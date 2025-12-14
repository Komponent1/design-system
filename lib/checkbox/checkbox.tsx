import React, { useCallback, useEffect, useId, useState } from 'react';
import type { CheckboxSize } from './checkbox.type';
import { baseStyle, markUrl, sizesStyle } from './checkbox.style';

export type CheckboxProps = {
  id?: string;
  size?: CheckboxSize;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  checked?: boolean;
  accentColor?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'>;

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  size = 'md',
  onChange,
  label,
  checked = false,
  accentColor = '#3b82f6',
  ...checkboxProps
}) => {
  const autoId = useId();
  const checkboxId = id || autoId;
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(!isChecked);
      if (onChange) {
        onChange(e.target.checked);
      }
    },
    [onChange, isChecked],
  );

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const inputStyle: React.CSSProperties = {
    ...baseStyle,
    ...sizesStyle[size],
    borderColor: isChecked ? accentColor : '#d1d5db',
    backgroundColor: isChecked ? accentColor : '#ffffff',
    backgroundImage: isChecked ? markUrl : 'none',
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
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};
