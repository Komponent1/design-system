import type { Theme } from '../theme/ThemeProvider';
import type { ListVariant } from './list.type';

export const baseStyle = {
  listStyleType: 'none',
  padding: '12px 16px',
  transition: 'background-color 0.12s ease',
};
export const genBorderStyle = (variant: ListVariant, isLast: boolean, theme: Theme) =>
  variant === 'underline' && !isLast ? `1px solid ${theme.list.border.default}` : 'none';
