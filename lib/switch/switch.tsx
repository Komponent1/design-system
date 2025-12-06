import React, { useCallback, useEffect, useId } from 'react';
import { baseStyle, knobBaseStyle, knobSizesStyle, sizesStyle } from './switch.style';
import type { SwitchSize } from './switch.type';
import { knobMoveDistance } from './switch.constant';

export type SwitchProps = {
  size?: SwitchSize;
  id?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  accentColor?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

export const Switch: React.FC<SwitchProps> = ({
  size = 'md',
  id,
  checked = false,
  onChange,
  disabled = false,
  accentColor = '#3b82f6',
  ...switchProps
}) => {
  const autoId = useId();
  const switchId = id || autoId;
  const [isChecked, setIsChecked] = React.useState<boolean>(checked);
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
      if (onChange) {
        console.log('onChange called with', e.target.checked);
        onChange(e.target.checked);
      }
    },
    [onChange],
  );
  const [switchStyle, setSwitchStyle] = React.useState<React.CSSProperties>({
    ...baseStyle,
    ...sizesStyle[size],
    cursor: disabled ? 'not-allowed' : 'pointer',
    backgroundColor: isChecked ? accentColor : '#d1d5db',
  });
  const [knobStyle, setKnobStyle] = React.useState<React.CSSProperties>({
    ...knobBaseStyle,
    ...knobSizesStyle[size],
    left: isChecked ? `${knobMoveDistance[size].on}px` : `${knobMoveDistance[size].off}px`,
  });

  useEffect(() => {
    setKnobStyle((prevStyle) => ({
      ...prevStyle,
      left: isChecked ? `${knobMoveDistance[size].on}px` : `${knobMoveDistance[size].off}px`,
    }));
    setSwitchStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: isChecked ? accentColor : '#d1d5db',
    }));
  }, [isChecked, accentColor, size]);

  return (
    <label htmlFor={switchId} style={{ display: 'inline-block' }}>
      <div style={switchStyle}>
        <div style={knobStyle} />
      </div>
      <input
        id={switchId}
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        style={{ display: 'none' }}
        {...switchProps}
      />
    </label>
  );
};
