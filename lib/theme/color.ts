import { mergeTokens, type DeepPartial } from './utils';

export const light = {
  mode: 'light',

  primary: {
    50: '#EEF2FF',
    100: '#E0E7FF',
    200: '#C7D2FE',
    300: '#A5B4FC',
    400: '#818CF8',
    500: '#6366F1',
    600: '#4F46E5',
    700: '#4338CA',
    800: '#3730A3',
    900: '#312E81',
    main: '#6366F1',
    contrastText: '#FFFFFF',
  },

  neutral: {
    0: '#FFFFFF',
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    1000: '#000000',
  },

  success: {
    main: '#16A34A',
    hover: '#15803D',
    active: '#166534',
    subtle: '#DCFCE7',
  },

  warning: {
    main: '#D97706',
    hover: '#B45309',
    active: '#92400E',
    subtle: '#FEF3C7',
  },

  danger: {
    main: '#DC2626',
    hover: '#B91C1C',
    active: '#991B1B',
    subtle: '#FEE2E2',
  },

  background: {
    default: '#FFFFFF',
    surface: '#F9FAFB',
    elevated: '#FFFFFF',
  },

  text: {
    primary: '#111827',
    secondary: '#374151',
    tertiary: '#6B7280',
    disabled: '#9CA3AF',
    inverse: '#FFFFFF',
  },

  border: {
    default: '#E5E7EB',
    strong: '#D1D5DB',
    subtle: '#F3F4F6',
  },
};
export const dark = {
  mode: 'dark',

  primary: {
    50: '#EEF2FF',
    100: '#E0E7FF',
    200: '#C7D2FE',
    300: '#A5B4FC',
    400: '#818CF8',
    500: '#6366F1',
    600: '#4F46E5',
    700: '#4338CA',
    800: '#3730A3',
    900: '#312E81',
    main: '#818CF8',
    contrastText: '#0F172A',
  },

  neutral: {
    0: '#000000',
    50: '#111827',
    100: '#1F2937',
    200: '#374151',
    300: '#4B5563',
    400: '#6B7280',
    500: '#9CA3AF',
    600: '#D1D5DB',
    700: '#E5E7EB',
    800: '#F3F4F6',
    900: '#F9FAFB',
    1000: '#FFFFFF',
  },

  success: {
    main: '#22C55E',
    hover: '#16A34A',
    active: '#15803D',
    subtle: '#052E16',
  },

  warning: {
    main: '#F59E0B',
    hover: '#D97706',
    active: '#B45309',
    subtle: '#451A03',
  },

  danger: {
    main: '#EF4444',
    hover: '#DC2626',
    active: '#B91C1C',
    subtle: '#450A0A',
  },

  background: {
    default: '#020617',
    surface: '#020617',
    elevated: '#020617',
  },

  text: {
    primary: '#F9FAFB',
    secondary: '#E5E7EB',
    tertiary: '#9CA3AF',
    disabled: '#6B7280',
    inverse: '#020617',
  },

  border: {
    default: '#1F2937',
    strong: '#374151',
    subtle: '#111827',
  },
};

export type ColorType = typeof light | typeof dark;
export const colorPalette: { light: ColorType; dark: ColorType } = {
  light,
  dark,
} as const;

export const createColorTokens = (
  mode: 'light' | 'dark',
  customColors?: DeepPartial<ColorType>,
): ColorType => {
  const baseColors = mode === 'light' ? light : dark;
  if (customColors === undefined) {
    return baseColors;
  }
  return mergeTokens(baseColors, customColors);
};
