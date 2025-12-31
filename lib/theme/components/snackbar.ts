import type { ColorType } from '../color';

export const createSnackbarTokens = (palette: ColorType) => ({
  bg: {
    default: palette.neutral[700],
  },
  text: {
    default: palette.neutral[300],
  },
});
export type SnackbarTokens = ReturnType<typeof createSnackbarTokens>;
