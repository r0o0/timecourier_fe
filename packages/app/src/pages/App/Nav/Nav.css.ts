import { style } from '@vanilla-extract/css';

import { spacing } from '~components/styles/tools';

export const navWrapperStyle = style({ position: 'relative' });

export const navStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '52px',
});

export const navButtonStyle = style({
  position: 'absolute',
  right: `${spacing(20)}`,
  zIndex: 1,
  width: 32,
  height: 32,
});
