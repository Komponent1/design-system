import type { ColorType } from '../color';

export const createTooltipTokens = (palette: ColorType) => ({
  bg: {
    default: palette.neutral[700],
  },
  text: {
    default: palette.neutral[300],
  },
});
export type TooltipTokens = ReturnType<typeof createTooltipTokens>;
