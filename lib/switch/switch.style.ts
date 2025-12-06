import type { SwitchSize } from './switch.type';

export const baseStyle: React.CSSProperties = {
  position: 'relative',
  borderRadius: '9999px',
  transition: 'background-color 0.2s',
};

export const sizesStyle: { [key in SwitchSize]: React.CSSProperties } = {
  sm: {
    width: '32px',
    height: '16px',
    borderRadius: '8px',
  },
  md: {
    width: '44px',
    height: '22px',
    borderRadius: '11px',
  },
  lg: {
    width: '60px',
    height: '30px',
    borderRadius: '15px',
  },
};
export const knobSizesStyle: { [key in SwitchSize]: React.CSSProperties } = {
  sm: {
    top: '2px',
    width: '12px',
    height: '12px',
  },
  md: {
    top: '3px',
    width: '16px',
    height: '16px',
  },
  lg: {
    top: '4px',
    width: '22px',
    height: '22px',
  },
};
export const knobBaseStyle: React.CSSProperties = {
  position: 'absolute',
  backgroundColor: '#ffffff',
  borderRadius: '50%',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.4)',
  transition: 'left 0.2s',
};
