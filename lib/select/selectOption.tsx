import React from 'react';
import type { SelectOption, SelectSize } from './select.type';

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
  const sizeStyles = {
    sm: { padding: '6px 12px', fontSize: '14px' },
    md: { padding: '8px 16px', fontSize: '16px' },
    lg: { padding: '10px 20px', fontSize: '18px' },
  };

  const optionStyle: React.CSSProperties = {
    ...sizeStyles[size],
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: option.disabled ? 'not-allowed' : 'pointer',
    backgroundColor: isSelected ? '#eff6ff' : '#ffffff',
    color: option.disabled ? '#9ca3af' : '#111827',
    transition: 'background-color 0.15s ease',
    opacity: option.disabled ? 0.5 : 1,
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: size === 'sm' ? '12px' : size === 'md' ? '13px' : '14px',
    color: '#6b7280',
    marginTop: '2px',
  };

  const handleClick = () => {
    if (!option.disabled) {
      onClick();
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!option.disabled && !isSelected) {
      e.currentTarget.style.backgroundColor = '#f3f4f6';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isSelected) {
      e.currentTarget.style.backgroundColor = '#ffffff';
    }
  };

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
          {isSelected && <span style={{ marginLeft: 'auto', color: '#3b82f6' }}>✓</span>}
        </div>
        {option.description && <div style={descriptionStyle}>{option.description}</div>}
      </div>
    </div>
  );
};
