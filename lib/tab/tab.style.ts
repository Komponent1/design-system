import type { TabVariant } from './tab.type';

export const navContainerStyle: Record<TabVariant, React.CSSProperties> = {
  line: {
    borderBottom: '1px solid #e5e7eb',
    gap: '0',
  },
  box: {
    borderBottom: '1px solid #e5e7eb',
    gap: '0',
  },
  pill: {
    borderBottom: 'none',
    gap: '0',
  },
  segment: {
    display: 'inline-flex',
    borderBottom: 'none',
    backgroundColor: '#f3f4f6',
    gap: '0',
    padding: '0.25rem',
    borderRadius: '1rem',
  },
};

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
): Record<TabVariant, React.CSSProperties> => ({
  line: {
    borderBottom: selected ? '2px solid #2563eb' : '2px solid transparent',
  },
  box: {
    backgroundColor: selected ? '#f0f9ff' : 'transparent',
    border: selected ? '1px solid #2563eb' : '1px solid #e5e7eb',
    borderBottom: selected ? '1px solid #fff' : '1px solid #e5e7eb',
    marginBottom: '-1px',
  },
  pill: {
    borderRadius: '1.25rem',
    backgroundColor: selected ? '#2563eb' : '#f3f4f6',
    color: selected ? '#fff' : '#666',
    marginRight: '0.5rem',
  },
  segment: {
    borderRadius: '0.5rem',
    backgroundColor: selected ? '#fff' : '#f3f4f6',
    color: selected ? '#000' : '#666',
    boxShadow: selected ? '0 1px 2px rgba(0, 0, 0, 0.1)' : 'none',
  },
});
export const tabContentStyle: React.CSSProperties = {
  padding: '0.75rem 1rem',
  borderTop: 'none',
};
