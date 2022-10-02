import { style } from '@vanilla-extract/css';

import { vars } from '../styles/global.css';
import { spacing } from '../styles/tools';

export const letterDateStyle = style({
  display: 'flex',
  gap: 4,
  padding: `4px ${spacing(8)}`,
  borderRadius: 5,
  backgroundColor: vars.colors.gray100,
  fontSize: vars.fonts.body.size[1],

  '@media': { 'screen and (max-width: 360px)': { fontSize: '10px' } },
});
