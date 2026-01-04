import type { ColorType } from '../color';
import { mergeTokens, type DeepPartial } from '../utils';

export type TableTokens = {
  default: {
    header: {
      bg: string;
      color: string;
      border: string;
    };
    row: {
      bg: string;
      color: string;
      border: string;
    };
    selected: {
      bg: string;
    };
  };
  striped: {
    header: {
      bg: string;
      color: string;
      border: string;
    };
    row: {
      bg: string;
      color: string;
      border: string;
      evenBg: string;
    };
    selected: {
      bg: string;
    };
  };
  bordered: {
    header: {
      bg: string;
      color: string;
      border: string;
    };
    row: {
      bg: string;
      color: string;
      border: string;
    };
    selected: {
      bg: string;
    };
  };
};

export const createTableTokens = (palette: ColorType, customTable?: DeepPartial<TableTokens>) => {
  const baseTableToken: TableTokens = {
    default: {
      header: {
        bg: palette.neutral[200],
        color: palette.text.primary,
        border: palette.border.default,
      },
      row: {
        bg: palette.background.surface,
        color: palette.text.primary,
        border: palette.border.subtle,
      },
      selected: {
        bg: palette.primary[50],
      },
    },
    striped: {
      header: {
        bg: palette.neutral[200],
        color: palette.text.primary,
        border: palette.border.default,
      },
      row: {
        bg: palette.neutral[100],
        color: palette.text.primary,
        border: palette.border.subtle,
        evenBg: palette.neutral[50], // 짝수줄 배경
      },
      selected: {
        bg: palette.primary[50],
      },
    },
    bordered: {
      header: {
        bg: palette.neutral[200],
        color: palette.text.primary,
        border: palette.border.strong,
      },
      row: {
        bg: palette.background.surface,
        color: palette.text.primary,
        border: palette.border.strong,
      },
      selected: {
        bg: palette.primary[50],
      },
    },
  };
  if (!customTable) {
    return baseTableToken;
  }
  return mergeTokens(baseTableToken, customTable);
};
