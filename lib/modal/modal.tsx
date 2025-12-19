import React, { useEffect, useMemo, useState } from 'react';
import Portal from '../portal/portal';
import {
  closeButtonBaseStyle,
  closeButtonHoverStyle,
  closeButtonPositionStyles,
  modalAnimationKeyframes,
  modalAnimationStyles,
  modalContainerBaseStyle,
  modalOverlayStyle,
  modalPositionStyles,
  modalSizeStyles,
  modalVariantStyles,
} from './modal.style';
import type {
  ModalAnimationTypes,
  ModalCloseButtonPositions,
  ModalPositions,
  ModalSizes,
  ModalVariants,
} from './modal.type';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  variant?: ModalVariants;
  size?: ModalSizes;
  position?: ModalPositions;
  animationType?: ModalAnimationTypes;
  closeOnEsc?: boolean;
  closeButtonPosition?: ModalCloseButtonPositions;
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  variant = 'default',
  size = 'md',
  position = 'center',
  animationType = 'fade',
  closeOnEsc = true,
  closeButtonPosition = 'none',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const overlayStyle = useMemo(
    () => ({
      ...modalOverlayStyle,
      ...modalPositionStyles[position],
    }),
    [position],
  );

  const containerStyle = useMemo(
    () => ({
      ...modalContainerBaseStyle,
      ...modalSizeStyles[size],
      ...modalVariantStyles[variant],
      ...modalAnimationStyles[animationType],
    }),
    [size, variant, animationType],
  );

  const closeButtonStyle = useMemo(() => {
    if (closeButtonPosition === 'none') return {};
    return {
      ...closeButtonBaseStyle,
      ...closeButtonPositionStyles[closeButtonPosition],
      ...(isHovered && closeButtonHoverStyle),
    };
  }, [closeButtonPosition, isHovered]);

  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeOnEsc, onClose]);

  if (!isOpen) return null;

  return (
    <Portal>
      <style>{modalAnimationKeyframes[animationType]}</style>
      <div style={overlayStyle} onClick={onClose}>
        <div style={containerStyle} onClick={(e) => e.stopPropagation()}>
          {closeButtonPosition !== 'none' && (
            <button
              style={closeButtonStyle}
              onClick={onClose}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              aria-label='Close modal'
            >
              ✕
            </button>
          )}
          {children}
        </div>
      </div>
    </Portal>
  );
};
