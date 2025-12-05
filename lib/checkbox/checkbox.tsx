import React, { useCallback, useState } from 'react';
import type { CheckboxSize } from './checkbox.type';
import { baseStyle, markUrl, sizesStyle } from './checkbox.style';

export type CheckboxProps = {
  id?: string;
  size?: CheckboxSize;
  onChange?: (value: string, checked: boolean) => void;
  label?: React.ReactNode;
  checked?: boolean;
  accentColor?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

export const Checkbox: React.FC<CheckboxProps> = ({
  id = 'seolim-ui-checkbox-label',
  size = 'md',
  onChange,
  label,
  checked = false,
  accentColor = '#3b82f6',
  ...checkboxProps
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(!isChecked);
      if (onChange) {
        onChange(e.target.value, e.target.checked);
      }
    },
    [onChange, isChecked],
  );

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
        id={id}
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
