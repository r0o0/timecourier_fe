import { style } from '@vanilla-extract/css';

import { vars } from '../../styles/global.css';
import { buttonOutlineBackgroundImageVar } from '../Button.css';

const commonStyles = { color: vars.colors.gradientLight, backgroundColor: vars.colors.black };

export const buttonPrevClassName = style({ ...commonStyles });

export const buttonNextClassName = style({
  vars: { [buttonOutlineBackgroundImageVar]: vars.colors.invertedGradientDark },
  ...commonStyles,
});
