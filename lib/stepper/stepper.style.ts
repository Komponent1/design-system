import { typographyMap } from '../typography/typography.config';
import type { StepperSizes, StepperVariants } from './stepper.type';

export const stepperContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};
export const stepperBottomLabelWrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
};
export const stepperBottomLabelIconLineWrapperStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
};
export const stepperBottomLabelStyle: React.CSSProperties = {
  marginTop: '4px',
  textAlign: 'left',
  alignSelf: 'stretch',
};
export const StepperLineStyle: React.CSSProperties = {
  flex: 1,
  height: '2px',
  margin: '0px 8px',
};

export const stepperIconBaseStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  border: '2px solid transparent',
  transition: 'background-color 0.3s, border 0.3s',
  fontWeight: 600,
};
export const stepperIconVariantStyles: Record<StepperVariants, React.CSSProperties> = {
  default: {},
  bottomLabel: {},
  sideLabel: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '8px',
  },
};
export const stepperSizesStyle: Record<string, React.CSSProperties> = {
  sm: {
    width: '24px',
    height: '24px',
    fontSize: '14px',
  },
  md: {
    width: '32px',
    height: '32px',
    fontSize: '16px',
  },
  lg: {
    width: '40px',
    height: '40px',
    fontSize: '18px',
  },
};
export const stepperLabelBaseStyle: React.CSSProperties = {
  marginTop: '4px',
  textAlign: 'center',
};
export const stepperLabelSizesStyle: Record<StepperSizes, React.CSSProperties> = {
  sm: {
    ...typographyMap.sm,
  },
  md: {
    ...typographyMap.md,
  },
  lg: {
    ...typographyMap.lg,
  },
};
