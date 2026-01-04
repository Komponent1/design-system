import { type ColorType } from '../color';
import { mergeTokens, type DeepPartial } from '../utils';

export type DividerTokens = {
  color: {
    default: string;
    strong: string;
    subtle: string;
  };
  thickness: {
    default: string;
    strong: string;
    subtle: string;
  };
};

export const createDividerTokens = (
  palette: ColorType,
  customDivider?: DeepPartial<DividerTokens>,
) => {
  const baseDividerToken: DividerTokens = {
    color: {
      default: palette.border.default,
      strong: palette.border.strong,
      subtle: palette.border.subtle,
    },
    thickness: {
      default: '1px',
      strong: '2px',
      subtle: '0.5px',
    },
  };
  if (!customDivider) {
    return baseDividerToken;
  }
  return mergeTokens(baseDividerToken, customDivider);
};
