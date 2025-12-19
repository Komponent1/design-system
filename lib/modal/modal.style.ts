import type {
  ModalAnimationTypes,
  ModalCloseButtonPositions,
  ModalPositions,
  ModalSizes,
  ModalVariants,
} from './modal.type';

export const modalOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

export const modalContainerBaseStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '1.5rem',
  borderRadius: '0.5rem',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  position: 'relative',
};

export const closeButtonBaseStyle: React.CSSProperties = {
  position: 'absolute',
  width: '2rem',
  height: '2rem',
  borderRadius: '0.25rem',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  color: '#6b7280',
  transition: 'background-color 0.2s, color 0.2s',
};

export const closeButtonHoverStyle: React.CSSProperties = {
  backgroundColor: '#f3f4f6',
  color: '#1f2937',
};

export const closeButtonPositionStyles: Record<
  Exclude<ModalCloseButtonPositions, 'none'>,
  React.CSSProperties
> = {
  'top-right': {
    top: '0.75rem',
    right: '0.75rem',
  },
  'top-left': {
    top: '0.75rem',
    left: '0.75rem',
  },
  'bottom-right': {
    bottom: '0.75rem',
    right: '0.75rem',
  },
  'bottom-left': {
    bottom: '0.75rem',
    left: '0.75rem',
  },
};

export const modalVariantStyles: Record<ModalVariants, React.CSSProperties> = {
  default: {},
  fullscreen: {
    width: '100vw',
    height: '100vh',
    borderRadius: 0,
    maxWidth: '100vw',
    maxHeight: '100vh',
  },
};

export const modalSizeStyles: Record<ModalSizes, React.CSSProperties> = {
  sm: {
    width: '20rem',
    maxWidth: '90vw',
  },
  md: {
    width: '28rem',
    maxWidth: '90vw',
  },
  lg: {
    width: '40rem',
    maxWidth: '90vw',
  },
  xl: {
    width: '56rem',
    maxWidth: '90vw',
  },
};

export const modalPositionStyles: Record<ModalPositions, React.CSSProperties> = {
  center: {
    alignItems: 'center',
  },
  top: {
    alignItems: 'flex-start',
    paddingTop: '5rem',
  },
  bottom: {
    alignItems: 'flex-end',
    paddingBottom: '2rem',
  },
};

export const modalAnimationKeyframes: Record<ModalAnimationTypes, string> = {
  fade: `
    @keyframes modal-fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
  slide: `
    @keyframes modal-slide-in {
      from {
        transform: translateY(-2rem);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `,
  zoom: `
    @keyframes modal-zoom-in {
      from {
        transform: scale(0.95);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
  `,
};

export const modalAnimationStyles: Record<ModalAnimationTypes, React.CSSProperties> = {
  fade: {
    animation: 'modal-fade-in 0.2s ease-out',
  },
  slide: {
    animation: 'modal-slide-in 0.3s ease-out',
  },
  zoom: {
    animation: 'modal-zoom-in 0.2s ease-out',
  },
};
