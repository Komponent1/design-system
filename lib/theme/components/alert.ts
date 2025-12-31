import type { ColorType } from '../color';

export const createAlertTokens = (palette: ColorType) => ({
  info: {
    bg: {
      default: palette.primary.main,
      hover: palette.primary[600],
      active: palette.primary[700],
    },
    text: {
      default: palette.text.primary,
      inverse: palette.text.inverse,
    },
  },

  success: {
    bg: {
      default: palette.success.main,
      hover: palette.success.hover,
      active: palette.success.active,
    },
    text: {
      default: palette.text.primary,
      inverse: palette.text.inverse,
    },
  },

  warning: {
    bg: {
      default: palette.warning.main,
      hover: palette.warning.hover,
      active: palette.warning.active,
    },
    text: {
      default: palette.text.primary,
      inverse: palette.text.inverse,
    },
  },

  danger: {
    bg: {
      default: palette.danger.main,
      hover: palette.danger.hover,
      active: palette.danger.active,
    },
    text: {
      default: palette.text.primary,
      inverse: palette.text.inverse,
    },
  },
});
