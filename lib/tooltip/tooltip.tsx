import React, { useMemo } from 'react';
import type { TooltipPosition } from './tooltip.type';
import {
  genTooltipBaseStyle,
  tooltipPositionStyles,
  tooltipStyle,
  genTooltipArrowBaseStyle,
  tooltipArrowPositionStyles,
} from './tooltip.style';

export type TooltipProps = {
  position?: TooltipPosition;
  arrow?: boolean;
  children: React.ReactNode;
  content?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  width?: number;
};
export const Tooltip: React.FC<TooltipProps> = ({
  position = 'top',
  children,
  content = 'Tooltip Text',
  arrow = true,
  backgroundColor = '#555',
  textColor = '#fff',
  width = 120,
}) => {
  const tooltipContentStyle = useMemo(
    () => ({
      ...genTooltipBaseStyle(backgroundColor, textColor, width),
      ...tooltipPositionStyles[position],
    }),
    [position, textColor, backgroundColor, width],
  );

  const tooltipArrowStyle = useMemo(
    () => ({
      ...genTooltipArrowBaseStyle(backgroundColor),
      ...tooltipArrowPositionStyles[position],
    }),
    [position, backgroundColor],
  );

  const showTooltip = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const tooltipText = e.currentTarget.querySelector('.tooltip-text') as HTMLElement;
    if (tooltipText) {
      tooltipText.style.visibility = 'visible';
      tooltipText.style.opacity = '1';
    }
  };

  const hideTooltip = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const tooltipText = e.currentTarget.querySelector('.tooltip-text') as HTMLElement;
    if (tooltipText) {
      tooltipText.style.visibility = 'hidden';
      tooltipText.style.opacity = '0';
    }
  };

  return (
    <div style={tooltipStyle} onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      <div className='tooltip-text' style={tooltipContentStyle}>
        {arrow && <div className='tooltip-arrow' style={tooltipArrowStyle} />}
        {content}
      </div>
    </div>
  );
};
