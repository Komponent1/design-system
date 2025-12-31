import type { ColorType } from '../color';

export const createSkeletonTokens = (palette: ColorType) => ({
  background: {
    0: palette.neutral[100],
    50: palette.neutral[200],
    100: palette.neutral[100],
  },
});
export type SkeletonTokens = ReturnType<typeof createSkeletonTokens>;
