import React, { useCallback, useState } from 'react';
import { AccordionItem } from './accordionItem';
import type {
  AccordionOutlineVariant,
  AccordionSize,
  AccordionTitleVariant,
  AccordionVariant,
} from './accordion.type';

type AccordionProps = {
  titles: React.ReactNode[];
  children: React.ReactNode;
  color?: string;
  selectColor?: string;
  size?: AccordionSize;
  variant?: AccordionVariant;
  titleVariant?: AccordionTitleVariant;
  outlineVariant?: AccordionOutlineVariant;
};
export const Accordion: React.FC<AccordionProps> = ({
  titles,
  children,
  color = '#000',
  selectColor = '#00ff',
  size = 'md',
  variant = 'singleOpen',
  titleVariant = 'normal',
  outlineVariant = 'none',
}) => {
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const open = useCallback((index: number) => {
    setOpenIndex(index);
  }, []);
  const close = useCallback(() => {
    setOpenIndex(-1);
  }, []);
  const onClickItem = useCallback(
    (index: number) => {
      if (index === openIndex) {
        close();
      } else {
        open(index);
      }
    },
    [openIndex, close, open],
  );
  return (
    <div
      style={{
        border: outlineVariant === 'box' ? '2px solid #ccc' : '2px solid transparent',
        borderRadius: '0.5rem',
        boxSizing: 'border-box',
      }}
    >
      {children &&
        React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <AccordionItem
                title={titles[index]}
                onClick={() => onClickItem(index)}
                isOpen={variant === 'singleOpen' ? index === openIndex : true}
                color={color}
                selectColor={selectColor}
                size={size}
                variant={variant}
                titleVariant={titleVariant}
                outlineVariant={outlineVariant}
                isLast={index === React.Children.count(children) - 1}
              >
                {child}
              </AccordionItem>
            );
          }
        })}
    </div>
  );
};
