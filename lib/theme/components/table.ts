import type { ColorType } from '../color';

export const createTableTokens = (palette: ColorType) => ({
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
});
export type TableTokens = ReturnType<typeof createTableTokens>;
