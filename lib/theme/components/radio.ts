import type { ColorType } from '../color';
import { mergeTokens, type DeepPartial } from '../utils';
export type RadioTokens = {
  bg: {
    default: string;
    hover: string;
    active: string;
    checked: string;
    disabled: string;
  };
  border: {
    default: string;
    focus: string;
    checked: string;
    disabled: string;
    error: string;
  };
  dot: {
    default: string;
    disabled: string;
    error: string;
  };
  label: {
    default: string;
    disabled: string;
    error: string;
  };
};
export const createRadioTokens = (palette: ColorType, customRadio?: DeepPartial<RadioTokens>) => {
  const baseRadioToken: RadioTokens = {
    bg: {
      default: palette.background.surface,
      hover: palette.primary[50],
      active: palette.primary[100],
      checked: palette.primary.main,
      disabled: palette.neutral[100],
    },
    border: {
      default: palette.border.default,
      focus: palette.primary.main,
      checked: palette.primary.main,
      disabled: palette.neutral[200],
      error: palette.danger.main,
    },
    dot: {
      default: palette.primary.main,
      disabled: palette.neutral[400],
      error: palette.danger.main,
    },
    label: {
      default: palette.text.primary,
      disabled: palette.text.disabled,
      error: palette.danger.main,
    },
  };
  if (!customRadio) {
    return baseRadioToken;
  }
  return mergeTokens(baseRadioToken, customRadio);
};
