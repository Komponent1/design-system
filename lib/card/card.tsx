import React, { useCallback, useMemo, useState } from 'react';
import type { CardSizes, CardVaraints, HoverType } from './card.type';
import {
  getCardContainerBaseStyle,
  getCardFooterStyle,
  getCardHeaderStyle,
  cardHoverStyles,
  cardImageStyle,
  cardSizeStyles,
} from './card.style';
import { useTheme } from '../theme';

export type CardProps = {
  type: CardVaraints;
  size?: CardSizes;
  src?: string;
  alt?: string;
  hoverType?: HoverType;
  children?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  autoPadding?: boolean;
};
export const Card: React.FC<CardProps> = ({
  type,
  size = 'md',
  src = '',
  hoverType = 'none',
  alt = 'Card Image',
  children,
  header,
  footer,
  autoPadding = true,
}) => {
  const { theme } = useTheme();
  const cardToken = useMemo(() => type.split('-'), [type]);
  const cardContainerBasicStyle = useMemo(() => {
    return {
      ...cardSizeStyles[size],
      ...getCardContainerBaseStyle(theme),
    };
  }, [size, theme]);
  const [cardContainerStyle, setCardContainerStyle] =
    useState<React.CSSProperties>(cardContainerBasicStyle);
  const onMouseEnter = useCallback(() => {
    if (hoverType !== 'none') {
      setCardContainerStyle({
        ...cardContainerBasicStyle,
        ...cardHoverStyles[hoverType],
      });
    }
  }, [hoverType, cardContainerBasicStyle]);
  const onMouseLeave = useCallback(() => {
    setCardContainerStyle(cardContainerBasicStyle);
  }, [cardContainerBasicStyle]);

  if (cardToken[0] === 'image_overlay') {
    return (
      <div
        style={{
          ...cardContainerStyle,
          position: 'relative',
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img src={src} alt={alt} style={cardImageStyle} />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            alignItems: 'center',
            padding: '16px',
          }}
        >
          <div>{children}</div>
        </div>
      </div>
    );
  }
  return (
    <div style={cardContainerStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {cardToken.map((token, index) => {
        if (token === 'image' && src) {
          return <img key={`${token}_${index}`} src={src} alt={alt} style={cardImageStyle} />;
        } else if (token === 'header' && header) {
          return (
            <div
              key={`${token}_${index}`}
              style={{
                ...getCardHeaderStyle(theme),
                padding: autoPadding ? '8px 16px' : '0',
              }}
            >
              {header}
            </div>
          );
        } else if (token === 'content') {
          return (
            <div
              key={`${token}_${index}`}
              style={{
                padding: autoPadding ? '16px' : '0',
              }}
            >
              {children}
            </div>
          );
        } else if (token === 'footer' && footer) {
          return (
            <div
              key={`${token}_${index}`}
              style={{
                ...getCardFooterStyle(theme),
                padding: autoPadding ? '8px 16px' : '0',
              }}
            >
              {footer}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};
