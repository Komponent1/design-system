import type { ColorType } from '../color';

export const createInputTokens = (palette: ColorType) => ({
  bg: {
    default: palette.background.surface,
    hover: palette.background.elevated,
    active: palette.background.elevated,
    disabled: palette.neutral[100],
    readonly: palette.neutral[50],
    error: palette.danger.subtle,
    success: palette.success.subtle,
  },
  border: {
    default: palette.border.default,
    focus: palette.primary.main,
    error: palette.danger.main,
    success: palette.success.main,
    disabled: palette.neutral[200],
    readonly: palette.neutral[100],
  },
  text: {
    default: palette.text.primary,
    placeholder: palette.text.tertiary,
    disabled: palette.text.disabled,
    error: palette.danger.main,
    success: palette.success.main,
    readonly: palette.text.secondary,
  },
});
