import { theme } from '..';
import { typographyMap } from '../typography/typography.config';
import type { AlertType, AlertVariant } from './alert.type';

export const baseStyle = {
  color: '#f2f2f2',
  padding: '0.75rem 1rem',
  borderRadius: '0.25rem',
};
export const sizesStyle = {
  sm: {
    ...typographyMap.sm,
  },
  md: {
    ...typographyMap.md,
  },
  lg: {
    ...typographyMap.lg,
  },
};
export const baseHeadStyle = {
  fontWeight: 'bold',
  marginBottom: '0.25rem',
};
export const headSizesStyle = {
  sm: {
    ...typographyMap.md,
  },
  md: {
    ...typographyMap.lg,
  },
  lg: {
    ...typographyMap.xl,
  },
};

export const colorMap = {
  info: theme.color.info,
  success: theme.color.success,
  warning: theme.color.warning,
  error: theme.color.error,
};
export const genVariantStyle = (variant: AlertVariant, type: AlertType) => {
  switch (variant) {
    case 'outlined':
      return {
        backgroundColor: 'transparent',
        border: `1px solid ${colorMap[type]}`,
        color: colorMap[type],
      };
    default:
      return {
        backgroundColor: colorMap[type],
      };
  }
};
