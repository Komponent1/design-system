import type { ColorType } from '../color';
import { mergeTokens, type DeepPartial } from '../utils';

export type CheckboxTokens = {
  default: {
    box: {
      bg: {
        default: string;
        hover: string;
        active: string;
        disabled: string;
        checked: string;
      };
      border: {
        default: string;
        hover: string;
        active: string;
        disabled: string;
        checked: string;
      };
    };
    check: {
      color: {
        default: string;
        disabled: string;
      };
    };
    label: {
      color: {
        default: string;
        disabled: string;
      };
    };
  };
};

export const createCheckboxTokens = (
  palette: ColorType,
  customCheckbox?: DeepPartial<CheckboxTokens>,
): CheckboxTokens => {
  const baseCheckboxToken = {
    default: {
      box: {
        bg: {
          default: palette.neutral[300],
          hover: palette.primary.main,
          active: palette.primary[600],
          disabled: palette.neutral[200],
          checked: palette.primary.main,
        },
        border: {
          default: palette.neutral[0],
          hover: palette.primary[50],
          active: palette.primary[100],
          disabled: palette.neutral[100],
          checked: palette.primary.main,
        },
      },
      check: {
        color: {
          default: palette.primary.main,
          disabled: palette.neutral[400],
        },
      },
      label: {
        color: {
          default: palette.text.primary,
          disabled: palette.text.disabled,
        },
      },
    },
  };
  if (customCheckbox === undefined) {
    return baseCheckboxToken;
  }
  return mergeTokens(baseCheckboxToken, customCheckbox);
};
