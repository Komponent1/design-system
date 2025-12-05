import React, { useCallback, useEffect, useState } from 'react';
import type { CheckboxSize } from './checkbox.type';
import { baseStyle, sizesStyle } from './checkbox.style';

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
  accentColor = '#00ff',
  ...checkboxProps
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  const [checkboxStyle, setCheckboxStyle] = useState<React.CSSProperties>({
    ...baseStyle,
    ...sizesStyle[size],
    accentColor: accentColor,
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(!isChecked);
      if (onChange) {
        onChange(e.target.value, e.target.checked);
      }
    },
    [onChange, isChecked],
  );
  useEffect(() => {
    setCheckboxStyle((prevStyle) => ({
      ...prevStyle,
      borderColor: isChecked ? accentColor : 'gray',
      backgroundColor: isChecked ? accentColor : 'transparent',
    }));
  }, [isChecked, accentColor]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
      <input
        id={id}
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
        style={checkboxStyle}
        {...checkboxProps}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};
