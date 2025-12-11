/* eslint-disable @typescript-eslint/no-unused-vars */
export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

export const hexToRgb = (hex: string) => {
  const h = hex.replace('#', '');
  const normalized =
    h.length === 3
      ? h
          .split('')
          .map((c) => c + c)
          .join('')
      : h;
  const bigint = parseInt(normalized, 16);
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
};

export const rgbToHex = (r: number, g: number, b: number) =>
  `#${[r, g, b].map((x) => clamp(Math.round(x), 0, 255).toString(16).padStart(2, '0')).join('')}`;

export const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h, s, l };
};

export const hslToRgb = (h: number, s: number, l: number) => {
  let r: number, g: number, b: number;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
};

export const hexToRgba = (hex: string, alpha = 1) => {
  try {
    const { r, g, b } = hexToRgb(hex);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } catch (e) {
    return `rgba(0,0,0,${alpha})`;
  }
};

export const getHoverColor = (baseColor: string, amount = 0.08) => {
  try {
    const { r, g, b } = hexToRgb(baseColor);
    const { h, s, l } = rgbToHsl(r, g, b);
    const direction = l > 0.6 ? -1 : 1;
    const newL = clamp(l + direction * amount, 0, 1);
    const { r: nr, g: ng, b: nb } = hslToRgb(h, s, newL);
    return rgbToHex(nr, ng, nb);
  } catch (e) {
    return baseColor;
  }
};
