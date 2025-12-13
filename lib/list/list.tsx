import React, { useState } from 'react';
import { ListItem } from './listItem';
import type { DiskType, ListVariant } from './list.type';
import { Typography, type TypographyProps } from '../typography/typography';

export type ListProps = {
  variant?: ListVariant;
  selected?: boolean;
  selectedIndex?: number;
  children: React.ReactNode[];
  title?: string;
  titleProps?: TypographyProps;
  type?: DiskType;
};
export const List: React.FC<ListProps> = ({
  variant = 'none',
  selectedIndex = -1,
  children,
  selected = false,
  title = '',
  titleProps = {},
  type = 'disc',
}) => {
  const [idx, setIdx] = useState(selectedIndex);

  return (
    <div>
      {title && (
        <Typography weight='bold' {...titleProps}>
          {title}
        </Typography>
      )}
      <ul style={{ padding: 0, margin: 0, listStyleType: type }}>
        {children.map((child, index) => (
          <ListItem
            onClick={selected ? () => setIdx(index) : undefined}
            key={`${index}_list_item`}
            variant={variant}
            selected={idx === index}
            isLast={index === children.length - 1}
          >
            {child}
          </ListItem>
        ))}
      </ul>
    </div>
  );
};
