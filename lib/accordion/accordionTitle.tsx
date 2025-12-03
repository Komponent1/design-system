import React, { useEffect, useMemo, useState } from 'react';
import type { AccordionSize } from './accordion.type';
import { baseStyle, sizesStyle } from './accordion.style';

type AccordionTitleProps = {
  title: React.ReactNode;
  isOpen: boolean;
  color: string;
  selectColor: string;
  size: AccordionSize;
  titleVariant: 'normal' | 'arrow' | 'plus';
  onClick: () => void;
};
export const AccordionTitle: React.FC<AccordionTitleProps> = ({
  title,
  isOpen,
  color,
  selectColor,
  size,
  titleVariant,
  onClick,
}) => {
  const titleBasicStyle = useMemo<React.CSSProperties>(() => {
    const sizeStyle = sizesStyle[size];
    return {
      ...baseStyle,
      ...sizeStyle,
      color: isOpen ? selectColor : color,
    } as React.CSSProperties;
  }, [size, isOpen, color, selectColor]);
  const [titleIcon, setTitleIcon] = useState<string>(
    titleVariant === 'arrow'
      ? isOpen
        ? '▼'
        : '▶'
      : titleVariant === 'plus'
        ? isOpen
          ? '−'
          : '+'
        : '',
  );
  useEffect(() => {
    if (titleVariant === 'arrow') {
      setTitleIcon(isOpen ? '▼' : '▶');
    } else if (titleVariant === 'plus') {
      setTitleIcon(isOpen ? '−' : '+');
    } else {
      setTitleIcon('');
    }
  }, [isOpen, titleVariant]);
  const [accordionTitleStyle, setAccordionTitleStyle] =
    useState<React.CSSProperties>(titleBasicStyle);
  useEffect(() => {
    if (typeof title === 'string') {
      setAccordionTitleStyle({
        ...titleBasicStyle,
      });
    }
  }, [titleBasicStyle, title]);

  if (typeof title === 'string') {
    return (
      <button onClick={onClick} style={accordionTitleStyle}>
        {`${titleIcon} ${title}`}
      </button>
    );
  } else {
    return (
      <div onClick={onClick} style={{ padding: sizesStyle[size].padding }}>
        {title}
      </div>
    );
  }
};

export default AccordionTitle;
