import type { ColorType } from '../color';

export const createRadioTokens = (palette: ColorType) => ({
  bg: {
    default: palette.background.surface,
    hover: palette.primary[50],
    active: palette.primary[100],
    checked: palette.primary.main,
    disabled: palette.neutral[100],
  },
  border: {
    default: palette.border.default,
    focus: palette.primary.main,
    checked: palette.primary.main,
    disabled: palette.neutral[200],
    error: palette.danger.main,
  },
  dot: {
    default: palette.primary.main,
    disabled: palette.neutral[400],
    error: palette.danger.main,
  },
  label: {
    default: palette.text.primary,
    disabled: palette.text.disabled,
    error: palette.danger.main,
  },
});
export type RadioTokens = ReturnType<typeof createRadioTokens>;
