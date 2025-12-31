import React, { useCallback, useState } from 'react';
import { AccordionItem } from './accordionItem';
import type {
  AccordionOutlineVariant,
  AccordionSize,
  AccordionTitleVariant,
  AccordionVariant,
} from './accordion.type';
import { genContainerStyle } from './accordion.style';
import { useTheme } from '../theme/ThemeProvider';

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
  color,
  selectColor,
  size = 'md',
  variant = 'singleOpen',
  titleVariant = 'normal',
  outlineVariant = 'none',
}) => {
  const { theme } = useTheme();
  color = color || theme.color.text.primary;
  selectColor = variant === 'alwaysOpen' ? color : selectColor || theme.color.primary.main;

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
    <div style={genContainerStyle(outlineVariant, theme)}>
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
