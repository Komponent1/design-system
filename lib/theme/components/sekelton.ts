import type { ColorType } from '../color';
import { mergeTokens, type DeepPartial } from '../utils';

export type SkeletonTokens = {
  background: {
    0: string;
    50: string;
    100: string;
  };
};
export const createSkeletonTokens = (
  palette: ColorType,
  customSkeleton?: DeepPartial<SkeletonTokens>,
) => {
  const baseSkeletonToken: SkeletonTokens = {
    background: {
      0: palette.neutral[100],
      50: palette.neutral[200],
      100: palette.neutral[100],
    },
  };
  if (!customSkeleton) {
    return baseSkeletonToken;
  }
  return mergeTokens(baseSkeletonToken, customSkeleton);
};
