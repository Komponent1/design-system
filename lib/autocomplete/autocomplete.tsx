import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import Input from '../input/input';
import { autocompleteContainerBaseStyle, dropdownBaseStyle } from './autocomplet.style';
import { useTheme } from '../theme/ThemeProvider';

export type AutocompleteProps = {
  onSearch: (query: string) => void;
  onSelect: (value: string) => void;
  suggestions: string[];
  placeholder?: string;
  disabled?: boolean;
  width?: string | number;
  withSearchButton?: boolean;
};

export const Autocomplete: React.FC<AutocompleteProps> = ({
  onSearch,
  onSelect,
  suggestions,
  placeholder = 'Type to search...',
  disabled = false,
  width = '100%',
  withSearchButton = false,
}) => {
  const { theme } = useTheme();
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (isOpen && suggestions.length > 0) setHighlighted(0);
    else setHighlighted(-1);
  }, [isOpen, suggestions]);

  useEffect(() => {
    if (highlighted >= 0 && itemRefs.current[highlighted]) {
      itemRefs.current[highlighted]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [highlighted]);

  const handleInputChange = useCallback(
    (value: string) => {
      setInputValue(value);
      onSearch(value);
      setIsOpen(true);
    },
    [onSearch],
  );
  const handleSelect = useCallback(
    (value: string) => {
      setInputValue(value);
      setIsOpen(false);
      onSelect(value);
    },
    [onSelect],
  );
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen || suggestions.length === 0) return;
      if (e.key === 'ArrowDown') {
        setHighlighted((prev) => (prev + 1) % suggestions.length);
        e.preventDefault();
      } else if (e.key === 'ArrowUp') {
        setHighlighted((prev) => (prev - 1 + suggestions.length) % suggestions.length);
        e.preventDefault();
      } else if (e.key === 'Enter' && highlighted >= 0) {
        handleSelect(suggestions[highlighted]);
        e.preventDefault();
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    },
    [handleSelect, highlighted, isOpen, suggestions],
  );

  const handleBlur = useCallback(() => {
    setTimeout(() => setIsOpen(false), 100);
  }, []);

  const containerStyle: React.CSSProperties = useMemo(
    () => ({
      ...autocompleteContainerBaseStyle,
      width: typeof width === 'number' ? `${width}px` : width,
    }),
    [width],
  );
  const dropdownStyle: React.CSSProperties = {
    ...dropdownBaseStyle,
    display: isOpen && suggestions.length > 0 ? 'block' : 'none',
  };
  const genItemStyle = useCallback(
    (active: boolean): React.CSSProperties => ({
      padding: '8px 12px',
      background: active ? '#eff6ff' : '#fff',
      color: active ? theme.color.primary.main : '#111827',
      cursor: 'pointer',
      fontWeight: active ? 600 : 400,
      transition: 'background 0.15s',
    }),
    [theme],
  );

  return (
    <div style={containerStyle}>
      <Input
        ref={inputRef}
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete='off'
        withSubmitButton={withSearchButton}
        onClickSubmitButton={() => onSelect(inputValue)}
      />
      <div ref={listRef} style={dropdownStyle}>
        {suggestions.map((s, i) => (
          <div
            key={s}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            style={genItemStyle(i === highlighted)}
            onMouseDown={() => handleSelect(s)}
            onMouseEnter={() => setHighlighted(i)}
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
};
