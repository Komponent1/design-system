import React, { useEffect, useMemo, useRef, useState } from 'react';
import type {
  AccordionOutlineVariant,
  AccordionSize,
  AccordionTitleVariant,
  AccordionVariant,
} from './accordion.type';
import { baseStyle, outlineVariantStyle, sizesStyle } from './accordion.style';
import AccordionTitle from './accordionTitle';

type AccordionItemProps = {
  isOpen: boolean;
  title: React.ReactNode;
  onClick: () => void;
  children: React.ReactNode;
  color: string;
  selectColor: string;
  size: AccordionSize;
  variant: AccordionVariant;
  titleVariant: AccordionTitleVariant;
  outlineVariant: AccordionOutlineVariant;
  isLast: boolean;
};
export const AccordionItem: React.FC<AccordionItemProps> = ({
  isOpen,
  title,
  onClick,
  children,
  color,
  selectColor,
  size,
  outlineVariant,
  titleVariant,
  isLast,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const boxBasicStyle = useMemo(() => {
    const outlineStyles = outlineVariantStyle[outlineVariant];
    if (outlineVariant === 'box') {
      if (isLast) return {};
      else return outlineVariantStyle['box'];
    }
    if (outlineVariant === 'innerBox') {
      if (isOpen) return outlineVariantStyle['innerBox'];
      else return { ...outlineVariantStyle['innerBox'], borderColor: 'transparent' };
    }
    return {
      ...baseStyle,
      ...outlineStyles,
    } as React.CSSProperties;
  }, [outlineVariant, isLast, isOpen]);

  const [accordionItemStyle, setAccordionItemStyle] = useState<React.CSSProperties>({
    ...boxBasicStyle,
  });

  useEffect(() => {
    setAccordionItemStyle((prevStyle) => ({
      ...prevStyle,
      ...boxBasicStyle,
    }));
  }, [boxBasicStyle]);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        const scrollHeight = contentRef.current.scrollHeight;
        setContentHeight(scrollHeight);
      } else {
        setContentHeight(0);
      }
    }
  }, [isOpen, children]);

  return (
    <div style={accordionItemStyle}>
      <AccordionTitle
        onClick={onClick}
        title={title}
        isOpen={isOpen}
        color={color}
        selectColor={selectColor}
        size={size}
        titleVariant={titleVariant}
      />
      <div
        style={{
          height: contentHeight,
          overflow: 'hidden',
          transition: 'height 0.3s ease-in-out',
        }}
      >
        <div ref={contentRef} style={{ padding: sizesStyle[size].padding }}>
          {children}
        </div>
      </div>
    </div>
  );
};
