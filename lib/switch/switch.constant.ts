import type { SwitchSize } from './switch.type';

export const knobMoveDistance: { [key in SwitchSize]: { on: number; off: number } } = {
  sm: {
    on: 16,
    off: 2,
  },
  md: {
    on: 22,
    off: 4,
  },
  lg: {
    on: 32,
    off: 6,
  },
};
