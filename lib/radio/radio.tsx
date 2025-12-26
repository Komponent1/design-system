import React, { useCallback, useEffect, useState } from 'react';
import {
  radioCircleBaseStyle,
  radioContainerStyle,
  radioDisabledStyle,
  radioLabelSizesStyle,
  radioSizesStyle,
} from './radio.style';
import type { radioSize } from './radio.type';

export type RadioProps = {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  size?: radioSize;
};

export const Radio: React.FC<RadioProps> = ({
  label,
  name,
  value,
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
}) => {
  const [hovered, setHovered] = useState(false);

  const baseBorder = checked ? '6px solid #3b82f6' : '2px solid #d1d5db';
  const baseBoxShadow = checked ? '0 0 0 4px #3b82f633' : 'none';
  const hoverBorder = checked ? '6px solid #60a5fa' : '2px solid #60a5fa';
  const hoverBoxShadow = checked ? '0 0 0 8px #60a5fa22' : '0 0 0 6px #60a5fa22';

  const onMouseEnter = useCallback(() => {
    if (!disabled) setHovered(true);
  }, [disabled]);

  const onMouseLeave = useCallback(() => {
    if (!disabled) setHovered(false);
  }, [disabled]);

  const [circleStyle, setCircleStyle] = useState<React.CSSProperties>({
    ...radioCircleBaseStyle,
    ...radioSizesStyle[size],
    border: baseBorder,
    boxShadow: baseBoxShadow,
  });
  useEffect(() => {
    setCircleStyle((prevStyle) => ({
      ...prevStyle,
      border: hovered ? hoverBorder : baseBorder,
      boxShadow: hovered ? hoverBoxShadow : baseBoxShadow,
    }));
  }, [hovered, baseBorder, baseBoxShadow, hoverBorder, hoverBoxShadow, size]);

  return (
    <label
      style={{
        ...radioContainerStyle,
        ...(disabled ? radioDisabledStyle : {}),
      }}
    >
      <input
        type='radio'
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        style={{
          position: 'absolute',
          opacity: 0,
          width: 0,
          height: 0,
          margin: 0,
        }}
      />
      <span style={circleStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      <span style={radioLabelSizesStyle[size]}>{label}</span>
    </label>
  );
};
