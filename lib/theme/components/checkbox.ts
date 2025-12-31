import type { ColorType } from '../color';

export const createCheckboxTokens = (palette: ColorType) => ({
  default: {
    box: {
      bg: {
        default: palette.neutral[300],
        hover: palette.primary.main,
        active: palette.primary[600],
        disabled: palette.neutral[200],
        checked: palette.primary.main,
      },
      border: {
        default: palette.neutral[0],
        hover: palette.primary[50],
        active: palette.primary[100],
        disabled: palette.neutral[100],
        checked: palette.primary.main,
      },
    },
    check: {
      color: {
        default: palette.primary.main,
        disabled: palette.neutral[400],
      },
    },
    label: {
      color: {
        default: palette.text.primary,
        disabled: palette.text.disabled,
      },
    },
  },
});
