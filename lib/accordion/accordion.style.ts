import type { Theme } from '../theme/ThemeProvider';
import { typographyMap } from '../typography/typography.config';
import type { AccordionOutlineVariant } from './accordion.type';

export const genContainerStyle = (
  outlineVariant: AccordionOutlineVariant,
  theme: Theme,
): React.CSSProperties => ({
  border:
    outlineVariant === 'box' ? `2px solid ${theme.color.border.default}` : '2px solid transparent',
  borderRadius: '0.5rem',
  boxSizing: 'border-box',
});
export const baseStyle: React.CSSProperties = {
  all: 'unset',
  boxSizing: 'border-box',
  transition: 'height 2s',
  cursor: 'pointer',
};
export const sizesStyle = {
  sm: {
    ...typographyMap.sm,
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
  },
  md: {
    ...typographyMap.md,
    fontWeight: 'bold',
    padding: '0.75rem 1.5rem',
  },
  lg: {
    ...typographyMap.lg,
    fontWeight: 'bold',
    padding: '1rem 2rem',
  },
};
export const genOutlineVariantStyle = (
  theme: Theme,
): Record<AccordionOutlineVariant, React.CSSProperties> => ({
  none: {},
  box: {
    borderBottom: `1px solid ${theme.color.border.default}`,
  },
  innerBox: {
    border: `1px solid ${theme.color.border.default}`,
    borderRadius: '0.375rem',
  },
});
