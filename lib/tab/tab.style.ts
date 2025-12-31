import type { Theme } from '../theme/ThemeProvider';
import type { TabVariant } from './tab.type';

export const getNavContainerStyle = (theme: Theme): Record<TabVariant, React.CSSProperties> => ({
  line: {
    borderBottom: `1px solid ${theme.color.border.default}`,
    gap: '0',
  },
  box: {
    borderBottom: `1px solid ${theme.color.border.default}`,
    gap: '0',
  },
  pill: {
    borderBottom: 'none',
    gap: '0',
  },
  segment: {
    display: 'inline-flex',
    borderBottom: 'none',
    backgroundColor: theme.color.neutral[200],
    gap: '0',
    padding: '0.25rem',
    borderRadius: '0.5rem',
  },
});

export const navBaseStyle: React.CSSProperties = {
  padding: '0.75rem 1.5rem',
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  fontSize: '0.875rem',
  transition: 'all 0.2s ease',
};
export const getNavVariantStyles = (
  selected: boolean,
  theme: Theme,
): Record<TabVariant, React.CSSProperties> => ({
  line: {
    borderBottom: selected ? `2px solid ${theme.color.primary.main}` : '2px solid transparent',
    color: theme.color.text.primary,
    fontWeight: selected ? '700' : '500',
  },
  box: {
    backgroundColor: selected ? theme.color.background.default : 'transparent',
    border: selected
      ? `1px solid ${theme.color.primary.main}`
      : `1px solid ${theme.color.border.default}`,
    borderBottom: selected
      ? `1px solid ${theme.color.background.default}`
      : `1px solid ${theme.color.border.default}`,
    marginBottom: '-1px',
    color: theme.color.text.primary,
    fontWeight: selected ? '700' : '500',
  },
  pill: {
    borderRadius: '1.25rem',
    backgroundColor: selected ? theme.color.primary.main : theme.color.background.default,
    color: selected ? '#fff' : theme.color.text.primary,
    marginRight: '0.5rem',
    fontWeight: selected ? '700' : '500',
  },
  segment: {
    borderRadius: '0.5rem',
    backgroundColor: selected ? theme.color.primary.main : theme.color.neutral[200],
    color: selected ? '#fff' : theme.color.text.primary,
    boxShadow: selected ? '0 1px 2px rgba(0, 0, 0, 0.1)' : 'none',
    fontWeight: selected ? '700' : '500',
  },
});
export const tabContentStyle: React.CSSProperties = {
  padding: '0.75rem 1rem',
  borderTop: 'none',
};
