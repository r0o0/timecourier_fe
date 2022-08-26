import { style } from '@vanilla-extract/css';

export const navStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '52px',
  position: 'relative',
});

export const navMenuStyle = style({
  width: 32,
  height: 32,
  position: 'absolute',
  right: '6%',
});
