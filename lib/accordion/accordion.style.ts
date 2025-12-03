import { typographyMap } from '../typography/typography.config';
import type { AccordionOutlineVariant } from './accordion.type';

export const genContainerStyle = (
  outlineVariant: AccordionOutlineVariant,
): React.CSSProperties => ({
  border: outlineVariant === 'box' ? '2px solid #ccc' : '2px solid transparent',
  borderRadius: '0.5rem',
  boxSizing: 'border-box',
});
export const baseStyle: React.CSSProperties = {
  all: 'unset',
  boxSizing: 'border-box',
  transition: 'height 2s',
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
export const outlineVariantStyle = {
  none: {},
  box: {
    borderBottom: '1px solid #e5e7eb',
  },
  innerBox: {
    border: '2px solid',
    borderColor: '#e5e7eb',
    borderRadius: '0.375rem',
  },
};
