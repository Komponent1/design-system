import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import type { CarouselVariant } from './carousel.type';
import {
  carouselContainerStyle,
  carouselSlideStyle,
  indicatorButtonStyle,
  indicatorContainerStyle,
  nextButtonStyle,
  prevButtonStyle,
} from './carousel.style';

export type CarouselProps = {
  children: React.ReactNode[];
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
  showButtons?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  variant?: CarouselVariant;
};
export const Carousel: React.FC<CarouselProps> = ({
  children,
  currentIndex: controlledIndex,
  onIndexChange,
  showButtons = true,
  autoPlay = true,
  autoPlayInterval = 3000,
  variant = 'arrows',
}) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const isControlled = controlledIndex !== undefined;
  const currentIndex = isControlled ? controlledIndex : internalIndex;
  const intervalRef = useRef<number | null>(null);

  const handlePrev = useCallback(() => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : children.length - 1;
    if (!isControlled) {
      setInternalIndex(newIndex);
    }
    onIndexChange?.(newIndex);
  }, [currentIndex, children.length, isControlled, onIndexChange]);

  const handleNext = useCallback(() => {
    const newIndex = currentIndex < children.length - 1 ? currentIndex + 1 : 0;
    if (!isControlled) {
      setInternalIndex(newIndex);
    }
    onIndexChange?.(newIndex);
  }, [currentIndex, children.length, isControlled, onIndexChange]);

  const goToSlide = useCallback(
    (index: number) => {
      if (!isControlled) {
        setInternalIndex(index);
      }
      onIndexChange?.(index);
    },
    [isControlled, onIndexChange],
  );

  useEffect(() => {
    if (!autoPlay) return;

    intervalRef.current = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, handleNext]);

  const slideStyle = useMemo<React.CSSProperties>(
    () => ({
      ...carouselSlideStyle,
      transform: `translateX(-${currentIndex * 100}%)`,
    }),
    [currentIndex],
  );

  return (
    <div style={carouselContainerStyle}>
      {showButtons && variant === 'arrows' && (
        <>
          <button
            style={prevButtonStyle}
            onClick={handlePrev}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            aria-label='Previous slide'
          >
            <svg
              width='24'
              height='48'
              viewBox='0 0 24 48'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18 6L6 24L18 42'
                stroke='white'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <button
            style={nextButtonStyle}
            onClick={handleNext}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            aria-label='Next slide'
          >
            <svg
              width='24'
              height='48'
              viewBox='0 0 24 48'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 6L18 24L6 42'
                stroke='white'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </>
      )}

      {showButtons && variant === 'indicators' && (
        <div style={indicatorContainerStyle}>
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                ...indicatorButtonStyle,
                backgroundColor:
                  currentIndex === index ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.3)',
              }}
              onMouseEnter={(e) => {
                if (currentIndex !== index) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentIndex !== index) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                }
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      <div style={slideStyle}>{children}</div>
    </div>
  );
};

export default Carousel;
