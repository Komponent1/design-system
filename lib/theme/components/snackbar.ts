import type { ColorType } from '../color';
import { mergeTokens, type DeepPartial } from '../utils';

export type SnackbarTokens = {
  bg: {
    default: string;
  };
  text: {
    default: string;
  };
};

export const createSnackbarTokens = (
  palette: ColorType,
  customSnackbar?: DeepPartial<SnackbarTokens>,
) => {
  const baseSnackbarToken: SnackbarTokens = {
    bg: {
      default: palette.neutral[700],
    },
    text: {
      default: palette.neutral[300],
    },
  };
  if (!customSnackbar) {
    return baseSnackbarToken;
  }
  return mergeTokens(baseSnackbarToken, customSnackbar);
};
