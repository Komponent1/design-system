import type { ColorType } from '../color';

export const createListTokens = (palette: ColorType) => ({
  background: {
    default: palette.neutral[0],
    hover: palette.neutral[100],
  },
  border: {
    default: palette.neutral[300],
  },
});
export type ListTokens = ReturnType<typeof createListTokens>;
