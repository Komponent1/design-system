import type { ColorType } from '../color';

export const createButtonTokens = (palette: ColorType) => ({
  primary: {
    bg: {
      default: palette.primary.main,
      hover: palette.primary[600],
      active: palette.primary[700],
      disabled: palette.neutral[200],
    },
    text: {
      default: palette.primary.contrastText,
      disabled: palette.neutral[400],
    },
  },

  secondary: {
    bg: {
      default: palette.neutral[100],
      hover: palette.neutral[200],
      active: palette.neutral[300],
      disabled: palette.neutral[100],
    },
    text: {
      default: palette.text.primary,
      disabled: palette.text.disabled,
    },
  },
});
