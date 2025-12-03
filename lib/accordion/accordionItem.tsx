import React, { useEffect, useMemo } from 'react';
import type {
  AccordionOutlineVariant,
  AccordionSize,
  AccordionTitleVariant,
  AccordionVariant,
} from './accordion.type';
import { baseStyle, outlineVariantStyle, sizesStyle } from './accordion.style';

type AccordionItemProps = {
  isOpen: boolean;
  title: string;
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
  isLast,
}) => {
  const titleBasicStyle = useMemo(() => {
    const sizeStyle = sizesStyle[size];
    return {
      ...baseStyle,
      ...sizeStyle,
      color: isOpen ? selectColor : color,
    } as React.CSSProperties;
  }, [size, isOpen, color, selectColor]);
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
      ...outlineStyles,
    } as React.CSSProperties;
  }, [outlineVariant, isLast, isOpen]);

  const [accordionItemStyle, setAccordionItemStyle] = React.useState<{
    title: React.CSSProperties;
    box: React.CSSProperties;
  }>({
    title: {
      ...titleBasicStyle,
    },
    box: {
      ...boxBasicStyle,
    },
  });
  useEffect(() => {
    setAccordionItemStyle((prevStyle) => ({
      ...prevStyle,
      title: {
        ...titleBasicStyle,
        color: isOpen ? selectColor : color,
      },
      box: {
        ...boxBasicStyle,
      },
    }));
  }, [titleBasicStyle, color, selectColor, isOpen, boxBasicStyle]);

  return (
    <div style={accordionItemStyle.box}>
      <button onClick={onClick} style={accordionItemStyle.title}>
        {title}
      </button>
      {isOpen && <div style={{ padding: sizesStyle[size].padding }}>{children}</div>}
    </div>
  );
};
