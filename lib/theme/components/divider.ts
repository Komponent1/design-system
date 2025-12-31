import type { ColorType } from '../color';

export const createDividerTokens = (palette: ColorType) => ({
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
});
export type DividerTokens = ReturnType<typeof createDividerTokens>;
