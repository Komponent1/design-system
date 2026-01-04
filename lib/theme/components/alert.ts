import { type ColorType } from '../color';
import { mergeTokens, type DeepPartial } from '../utils';

export type AlertTokens = {
  info: {
    bg: {
      default: string;
      hover: string;
      active: string;
    };
    text: {
      default: string;
      inverse: string;
    };
  };

  success: {
    bg: {
      default: string;
      hover: string;
      active: string;
    };
    text: {
      default: string;
      inverse: string;
    };
  };

  warning: {
    bg: {
      default: string;
      hover: string;
      active: string;
    };
    text: {
      default: string;
      inverse: string;
    };
  };

  danger: {
    bg: {
      default: string;
      hover: string;
      active: string;
    };
    text: {
      default: string;
      inverse: string;
    };
  };
};

export const createAlertTokens = (palette: ColorType, customAlert?: DeepPartial<AlertTokens>) => {
  const baseAlertToken: AlertTokens = {
    info: {
      bg: {
        default: palette.primary.main,
        hover: palette.primary[600],
        active: palette.primary[700],
      },
      text: {
        default: palette.text.primary,
        inverse: palette.text.inverse,
      },
    },

    success: {
      bg: {
        default: palette.success.main,
        hover: palette.success.hover,
        active: palette.success.active,
      },
      text: {
        default: palette.text.primary,
        inverse: palette.text.inverse,
      },
    },

    warning: {
      bg: {
        default: palette.warning.main,
        hover: palette.warning.hover,
        active: palette.warning.active,
      },
      text: {
        default: palette.text.primary,
        inverse: palette.text.inverse,
      },
    },

    danger: {
      bg: {
        default: palette.danger.main,
        hover: palette.danger.hover,
        active: palette.danger.active,
      },
      text: {
        default: palette.text.primary,
        inverse: palette.text.inverse,
      },
    },
  };
  if (!customAlert) {
    return baseAlertToken;
  }
  return mergeTokens(baseAlertToken, customAlert);
};
