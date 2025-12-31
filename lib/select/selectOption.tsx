import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type { SelectOption, SelectSize } from './select.type';
import {
  selectOptionBaseStyle,
  selectOptionDescriptionSizeStyles,
  selectOptionDescriptionStyle,
  selectOptionDisabledStyle,
  selectOptionSizeStyles,
} from './select.style';
import { useTheme } from '../theme/ThemeProvider';

type SelectOptionItemProps = {
  option: SelectOption;
  isSelected: boolean;
  onClick: () => void;
  size: SelectSize;
};

export const SelectOptionItem: React.FC<SelectOptionItemProps> = ({
  option,
  isSelected,
  onClick,
  size,
}) => {
  const { theme } = useTheme();
  const [optionStyle, setOptionStyle] = useState<React.CSSProperties>({
    ...selectOptionSizeStyles[size],
    ...selectOptionBaseStyle,
    ...(option.disabled ? selectOptionDisabledStyle : {}),
    backgroundColor: isSelected ? theme.color.primary[50] : '#ffffff',
    color: 'black',
  });
  useEffect(() => {
    setOptionStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: isSelected ? theme.color.primary[50] : '#ffffff',
    }));
  }, [isSelected, theme]);

  const descriptionStyle: React.CSSProperties = useMemo(
    () => ({
      ...selectOptionDescriptionSizeStyles[size],
      ...selectOptionDescriptionStyle,
    }),
    [size],
  );

  const handleClick = useCallback(() => {
    if (!option.disabled) {
      onClick();
    }
  }, [option.disabled, onClick]);

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!option.disabled && !isSelected) {
        e.currentTarget.style.backgroundColor = '#f3f4f6';
      }
    },
    [option.disabled, isSelected],
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isSelected) {
        e.currentTarget.style.backgroundColor = '#ffffff';
      }
    },
    [isSelected],
  );

  return (
    <div
      style={optionStyle}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {option.icon && <span>{option.icon}</span>}
          <span>{option.label}</span>
          {isSelected && (
            <span style={{ marginLeft: 'auto', color: theme.color.primary[50] }}>✓</span>
          )}
        </div>
        {option.description && <div style={descriptionStyle}>{option.description}</div>}
      </div>
    </div>
  );
};
