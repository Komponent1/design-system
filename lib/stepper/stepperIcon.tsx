import React, { useEffect, useMemo, useState } from 'react';
import type { StepperSizes, StepperVariants } from './stepper.type';
import {
  stepperIconBaseStyle,
  stepperIconVariantStyles,
  stepperLabelBaseStyle,
  stepperLabelSizesStyle,
  stepperSizesStyle,
} from './stepper.style';
import { useTheme } from '../theme/ThemeProvider';

export type StepperIconProps = {
  isCompleted: boolean;
  children?: React.ReactNode;
  size?: StepperSizes;
  onClick?: () => void;
  label?: string;
  variant: StepperVariants;
};

export const StepperIcon: React.FC<StepperIconProps> = ({
  variant,
  isCompleted,
  size = 'md',
  children,
  onClick,
  label,
}) => {
  const { theme } = useTheme();
  const stepperLabelStyle: React.CSSProperties = useMemo(
    () => ({
      ...stepperLabelBaseStyle,
      ...stepperLabelSizesStyle[size],
    }),
    [size],
  );
  const [iconStyle, setIconStyle] = useState<React.CSSProperties>({
    ...stepperIconBaseStyle,
    ...stepperSizesStyle[size],
    cursor: onClick ? 'pointer' : 'default',
    backgroundColor: isCompleted ? theme.color.primary.main : theme.color.neutral[200],
    color: isCompleted ? '#fff' : theme.color.neutral[800],
  });
  useEffect(() => {
    setIconStyle((prev) => ({
      ...prev,
      cursor: onClick ? 'pointer' : 'default',
      backgroundColor: isCompleted ? theme.color.primary.main : theme.color.neutral[200],
      color: isCompleted ? '#fff' : theme.color.neutral[800],
    }));
  }, [onClick, isCompleted, theme]);

  return (
    <div style={stepperIconVariantStyles[variant]}>
      <div>
        <div style={iconStyle} onClick={onClick}>
          {children}
        </div>
      </div>
      {label && <div style={stepperLabelStyle}>{label}</div>}
    </div>
  );
};
