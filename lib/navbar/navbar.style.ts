import type { NavbarVariant } from './navbar.type';

export const baseStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  padding: '16px 20px',
};
export const baseContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
};
export const linksContainerStyles: Record<NavbarVariant, React.CSSProperties> = {
  centered: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '15px',
  },
  right: {
    display: 'flex',
    gap: '15px',
    marginLeft: 'auto',
  },
};
export const hrefStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: 'inherit',
  fontSize: '1rem',
  fontWeight: 500,
  transition: 'color 0.2s ease-in-out',
};
export const titleStyle: React.CSSProperties = {
  ...hrefStyle,
  fontSize: '1.25rem',
  fontWeight: 'bold',
};
