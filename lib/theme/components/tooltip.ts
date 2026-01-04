import type { ColorType } from '../color';
import { mergeTokens, type DeepPartial } from '../utils';

export type TooltipTokens = {
  bg: {
    default: string;
  };
  text: {
    default: string;
  };
};

export const createTooltipTokens = (
  palette: ColorType,
  customTooltip?: DeepPartial<TooltipTokens>,
) => {
  const baseTooltipToken: TooltipTokens = {
    bg: {
      default: palette.neutral[700],
    },
    text: {
      default: palette.neutral[300],
    },
  };
  if (!customTooltip) {
    return baseTooltipToken;
  }
  return mergeTokens(baseTooltipToken, customTooltip);
};
