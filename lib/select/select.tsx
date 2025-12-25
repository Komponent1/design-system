import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { SelectOption, SelectSize, SelectVariant } from './select.type';
import { SelectOptionItem } from './selectOption';
import {
  arrowBaseStyle,
  baseStyle,
  disabledStyle,
  dropdownBaseStyle,
  sizeStyles,
  variantStyles,
} from './select.style';

export type SelectProps = {
  options: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: SelectVariant;
  size?: SelectSize;
  disabled?: boolean;
  width?: string | number;
};

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  variant = 'default',
  size = 'md',
  disabled = false,
  width = '100%',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = useMemo(
    () => options.find((opt) => opt.value === value),
    [options, value],
  );

  const containerStyle: React.CSSProperties = useMemo(
    () => ({
      position: 'relative',
      width: typeof width === 'number' ? `${width}px` : width,
    }),
    [width],
  );

  const [selectButtonStyle, setSelectButtonStyle] = useState<React.CSSProperties>({
    ...sizeStyles[size],
    ...baseStyle,
    ...variantStyles[variant],
    ...(disabled ? disabledStyle : {}),
    color: selectedOption ? '#1c1f23ff' : '#9ca3af',
  });
  useEffect(() => {
    setSelectButtonStyle((prevStyle) => ({
      ...prevStyle,
      color: selectedOption ? '#1c1f23ff' : '#9ca3af',
    }));
  }, [selectedOption]);

  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({
    ...dropdownBaseStyle,
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(-8px)',
    pointerEvents: isOpen ? 'auto' : 'none',
  });
  const [arrowStyle, setArrowStyle] = useState<React.CSSProperties>({
    ...arrowBaseStyle,
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  });
  useEffect(() => {
    setDropdownStyle((prevStyle) => ({
      ...prevStyle,
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? 'translateY(0)' : 'translateY(-8px)',
      pointerEvents: isOpen ? 'auto' : 'none',
    }));
    setArrowStyle((prevStyle) => ({
      ...prevStyle,
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    }));
  }, [isOpen]);

  const handleToggle = useCallback(() => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  }, [disabled, isOpen]);

  const handleSelect = useCallback(
    (optionValue: string) => {
      if (onChange) {
        onChange(optionValue);
      }
      setIsOpen(false);
    },
    [onChange],
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={selectRef} style={containerStyle}>
      <div style={selectButtonStyle} onClick={handleToggle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
          {selectedOption?.icon && <span>{selectedOption.icon}</span>}
          <span>{selectedOption?.label || placeholder}</span>
        </div>
        <span style={arrowStyle}>▼</span>
      </div>
      <div style={{ ...dropdownStyle, minWidth: 'max-content', width: 'auto' }}>
        {options.map((option) => (
          <SelectOptionItem
            key={option.value}
            option={option}
            isSelected={option.value === value}
            onClick={() => handleSelect(option.value)}
            size={size}
          />
        ))}
      </div>
    </div>
  );
};
