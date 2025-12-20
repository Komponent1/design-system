import type { SnackbarAnimation, SnackbarPostion } from './snackbar.type';

export const snackbarBaseStyle: React.CSSProperties = {
  position: 'fixed',
  backgroundColor: '#333',
  color: '#fff',
  padding: '0.75rem 1.5rem',
  borderRadius: '0.25rem',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  zIndex: 1000,
  maxWidth: '90vw',
};

export const snackbarPositionStyles: Record<SnackbarPostion, React.CSSProperties> = {
  top: {
    top: '1.25rem',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  bottom: {
    bottom: '1.25rem',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  'top-left': {
    top: '1.25rem',
    left: '1.25rem',
  },
  'top-right': {
    top: '1.25rem',
    right: '1.25rem',
  },
  'bottom-left': {
    bottom: '1.25rem',
    left: '1.25rem',
  },
  'bottom-right': {
    bottom: '1.25rem',
    right: '1.25rem',
  },
};

export const snackbarAnimationKeyframes: Record<SnackbarAnimation, string> = {
  fade: `
    @keyframes snackbar-fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes snackbar-fade-out {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  `,
  slide: `
    @keyframes snackbar-slide-in-top-center {
      from {
        transform: translate(-50%, -100%);
        opacity: 0;
      }
      to {
        transform: translate(-50%, 0);
        opacity: 1;
      }
    }
    @keyframes snackbar-slide-out-top-center {
      from {
        transform: translate(-50%, 0);
        opacity: 1;
      }
      to {
        transform: translate(-50%, -100%);
        opacity: 0;
      }
    }
    @keyframes snackbar-slide-in-bottom-center {
      from {
        transform: translate(-50%, 100%);
        opacity: 0;
      }
      to {
        transform: translate(-50%, 0);
        opacity: 1;
      }
    }
    @keyframes snackbar-slide-out-bottom-center {
      from {
        transform: translate(-50%, 0);
        opacity: 1;
      }
      to {
        transform: translate(-50%, 100%);
        opacity: 0;
      }
    }
    @keyframes snackbar-slide-in-top {
      from {
        transform: translateY(-100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    @keyframes snackbar-slide-out-top {
      from {
        transform: translateY(0);
        opacity: 1;
      }
      to {
        transform: translateY(-100%);
        opacity: 0;
      }
    }
    @keyframes snackbar-slide-in-bottom {
      from {
        transform: translateY(100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    @keyframes snackbar-slide-out-bottom {
      from {
        transform: translateY(0);
        opacity: 1;
      }
      to {
        transform: translateY(100%);
        opacity: 0;
      }
    }
    @keyframes snackbar-slide-in-left {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes snackbar-slide-out-left {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(-100%);
        opacity: 0;
      }
    }
    @keyframes snackbar-slide-in-right {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes snackbar-slide-out-right {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `,
  grow: `
    @keyframes snackbar-grow-in {
      from {
        transform: scale(0.8);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
    @keyframes snackbar-grow-out {
      from {
        transform: scale(1);
        opacity: 1;
      }
      to {
        transform: scale(0.8);
        opacity: 0;
      }
    }
    @keyframes snackbar-grow-in-center {
      from {
        transform: translate(-50%, 0) scale(0.8);
        opacity: 0;
      }
      to {
        transform: translate(-50%, 0) scale(1);
        opacity: 1;
      }
    }
    @keyframes snackbar-grow-out-center {
      from {
        transform: translate(-50%, 0) scale(1);
        opacity: 1;
      }
      to {
        transform: translate(-50%, 0) scale(0.8);
        opacity: 0;
      }
    }
  `,
};

export const getAnimationStyle = (
  animation: SnackbarAnimation,
  position: SnackbarPostion,
): React.CSSProperties => {
  if (animation === 'fade') {
    return {
      animation: 'snackbar-fade-in 0.3s ease-out',
    };
  }

  if (animation === 'slide') {
    if (position === 'top') {
      return {
        animation: 'snackbar-slide-in-top-center 0.3s ease-out',
      };
    }
    if (position === 'bottom') {
      return {
        animation: 'snackbar-slide-in-bottom-center 0.3s ease-out',
      };
    }
    if (position === 'top-left' || position === 'top-right') {
      return {
        animation: 'snackbar-slide-in-top 0.3s ease-out',
      };
    }
    if (position === 'bottom-left' || position === 'bottom-right') {
      return {
        animation: 'snackbar-slide-in-bottom 0.3s ease-out',
      };
    }
  }

  if (animation === 'grow') {
    if (position === 'top' || position === 'bottom') {
      return {
        animation: 'snackbar-grow-in-center 0.3s ease-out',
      };
    }
    return {
      animation: 'snackbar-grow-in 0.3s ease-out',
    };
  }

  return {};
};

export const getExitAnimationStyle = (
  animation: SnackbarAnimation,
  position: SnackbarPostion,
): React.CSSProperties => {
  if (animation === 'fade') {
    return {
      animation: 'snackbar-fade-out 0.3s ease-out',
    };
  }

  if (animation === 'slide') {
    if (position === 'top') {
      return {
        animation: 'snackbar-slide-out-top-center 0.3s ease-out',
      };
    }
    if (position === 'bottom') {
      return {
        animation: 'snackbar-slide-out-bottom-center 0.3s ease-out',
      };
    }
    if (position === 'top-left' || position === 'top-right') {
      return {
        animation: 'snackbar-slide-out-top 0.3s ease-out',
      };
    }
    if (position === 'bottom-left' || position === 'bottom-right') {
      return {
        animation: 'snackbar-slide-out-bottom 0.3s ease-out',
      };
    }
  }

  if (animation === 'grow') {
    if (position === 'top' || position === 'bottom') {
      return {
        animation: 'snackbar-grow-out-center 0.3s ease-out',
      };
    }
    return {
      animation: 'snackbar-grow-out 0.3s ease-out',
    };
  }

  return {};
};
