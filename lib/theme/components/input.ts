import { type ColorType } from '../color';
import { mergeTokens, type DeepPartial } from '../utils';

export type InputTokens = {
  bg: {
    default: string;
    hover: string;
    active: string;
    disabled: string;
    readonly: string;
    error: string;
    success: string;
  };
  border: {
    default: string;
    focus: string;
    error: string;
    success: string;
    disabled: string;
    readonly: string;
  };
  text: {
    default: string;
    placeholder: string;
    disabled: string;
    error: string;
    success: string;
    readonly: string;
  };
};

export const createInputTokens = (palette: ColorType, customInput?: DeepPartial<InputTokens>) => {
  const baseInputToken: InputTokens = {
    bg: {
      default: palette.background.surface,
      hover: palette.background.elevated,
      active: palette.background.elevated,
      disabled: palette.neutral[100],
      readonly: palette.neutral[50],
      error: palette.danger.subtle,
      success: palette.success.subtle,
    },
    border: {
      default: palette.border.default,
      focus: palette.primary.main,
      error: palette.danger.main,
      success: palette.success.main,
      disabled: palette.neutral[200],
      readonly: palette.neutral[100],
    },
    text: {
      default: palette.text.primary,
      placeholder: palette.text.tertiary,
      disabled: palette.text.disabled,
      error: palette.danger.main,
      success: palette.success.main,
      readonly: palette.text.secondary,
    },
  };
  if (!customInput) {
    return baseInputToken;
  }
  return mergeTokens(baseInputToken, customInput);
};
