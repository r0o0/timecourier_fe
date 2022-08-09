import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '../styles/global.css';

export const progressBarClassName = style({
  height: '2px',
  backgroundColor: vars.colors.gray900,
});

globalStyle(`${progressBarClassName}.bp4-no-stripes .bp4-progress-meter`, {
  left: 0,
  height: 'inherit',
  background: vars.colors.gradientDark,
  transitionProperty: 'width',
  transitionDuration: vars.transitions.duration.normal,
  transitionTimingFunction: vars.transitions.timing.easeInOut,
});
