import React from 'react';
import { Typography } from './typography';

export const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Typography type='3xl' weight='extraBold'>
      {children}
    </Typography>
  );
};
export const TitleExplain: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Typography type='md' weight='regular'>
      {children}
    </Typography>
  );
};
export const Subtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Typography type='xl' weight='bold'>
      {children}
    </Typography>
  );
};
