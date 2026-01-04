import type { ColorType } from '../color';
import { mergeTokens, type DeepPartial } from '../utils';

export type ListTokens = {
  background: {
    default: string;
    hover: string;
  };
  border: {
    default: string;
  };
};
export const createListTokens = (palette: ColorType, customList?: DeepPartial<ListTokens>) => {
  const baseListToken: ListTokens = {
    background: {
      default: palette.neutral[0],
      hover: palette.neutral[100],
    },
    border: {
      default: palette.neutral[300],
    },
  };
  if (!customList) {
    return baseListToken;
  }
  return mergeTokens(baseListToken, customList);
};
