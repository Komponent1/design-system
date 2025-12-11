import { typographyMap } from '../typography/typography.config';
import type { ButtonVariant } from './button.type';
import { clamp, hexToRgb, hexToRgba, hslToRgb, rgbToHex, rgbToHsl } from '../util/colorHelper';

export const baseStyle = {
  unset: 'all',
};
export const widthStyles = {
  width: '100%',
};
export const solidStyle = {
  border: 'none',
};
export const outlineStyle = {
  border: '1px solid',
  backgroundColor: 'transparent',
};
export const textStyle = {
  border: 'none',
  backgroundColor: 'transparent',
};
export const sizeStyles = {
  sm: {
    ...typographyMap.sm,
    padding: '0.25rem 0.5rem',
    fontSize: '0.875rem',
  },
  md: {
    ...typographyMap.md,
    padding: '0.5rem 1rem',
    fontSize: '1rem',
  },
  lg: {
    ...typographyMap.lg,
    padding: '0.75rem 1.5rem',
    fontSize: '1.25rem',
  },
};
export const cornerStyles = {
  rounded: {
    borderRadius: '100rem',
  },
  square: {
    borderRadius: '0.375rem',
  },
};
export const disabledStyle = {
  backgroundColor: '#e0e0e0',
  borderColor: '#e0e0e0',
  color: '#a0a0a0',
  cursor: 'not-allowed',
};

export const getHoverColor = (baseColor: string, amount = 0.08) => {
  try {
    const { r, g, b } = hexToRgb(baseColor);
    const { h, s, l } = rgbToHsl(r, g, b);
    const direction = l > 0.6 ? -1 : 1;
    const newL = clamp(l + direction * amount, 0, 1);
    const { r: nr, g: ng, b: nb } = hslToRgb(h, s, newL);
    return rgbToHex(nr, ng, nb);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return baseColor;
  }
};

export const getHoverStyles = (color: string): Record<ButtonVariant, React.CSSProperties> => ({
  solid: {
    backgroundColor: getHoverColor(color),
  },
  outline: {
    backgroundColor: hexToRgba(color, 0.1),
  },
  text: {
    backgroundColor: hexToRgba(color, 0.1),
  },
});
