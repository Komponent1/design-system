// theme를 인자로 받도록 변경
import type { Theme } from '../theme/ThemeProvider';
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

// colorMap 대신 theme을 인자로 받는 함수로 변경
export const getColorMap = (theme: Theme): Record<AlertType, string> => ({
  info: theme.color.primary.main,
  success: theme.color.success.main,
  warning: theme.color.warning.main,
  danger: theme.color.danger.main,
});
export const genVariantStyle = (variant: AlertVariant, type: AlertType, theme: Theme) => {
  const colorMap = getColorMap(theme);
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
        color: '#fff',
      };
  }
};
