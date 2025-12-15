/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { ListItem } from './listItem';
import type { ListVariant } from './list.type';
import { Typography, type TypographyProps } from '../typography/typography';

export type ListProps = {
  variant?: ListVariant;
  selected?: boolean;
  selectedIndex?: number;
  children: React.ReactNode[];
  title?: string;
  titleProps?: TypographyProps;
};
export const List: React.FC<ListProps> = ({
  variant = 'none',
  selectedIndex = -1,
  children,
  selected = false,
  title = '',
  titleProps = {},
}) => {
  const [idx, setIdx] = useState(selectedIndex);

  const handleClick = (child: React.ReactNode, index: number) => {
    if (selected) {
      setIdx(index);
    }
    if (React.isValidElement(child) && typeof (child.props as any).onClick === 'function') {
      (child.props as any).onClick();
    }
  };

  const removeOnClick = (child: React.ReactNode) => {
    if (React.isValidElement(child)) {
      const props = child.props as any;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { onClick, ...restProps } = props;
      return React.cloneElement(child, {
        ...restProps,
        onClick: undefined,
        style: { ...props.style, pointerEvents: 'none' },
      } as any);
    }
    return child;
  };

  return (
    <div>
      {title && (
        <Typography weight='bold' {...titleProps}>
          {title}
        </Typography>
      )}
      <ul style={{ padding: 0, margin: 0 }}>
        {children.map((child, index) => (
          <ListItem
            onClick={() => handleClick(child, index)}
            key={`${index}_list_item`}
            variant={variant}
            selected={idx === index}
            isLast={index === children.length - 1}
          >
            {removeOnClick(child)}
          </ListItem>
        ))}
      </ul>
    </div>
  );
};
