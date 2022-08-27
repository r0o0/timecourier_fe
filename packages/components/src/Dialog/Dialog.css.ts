import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../styles/global.css';

export const backdropRecipe = recipe({
  base: { backgroundColor: 'transparent' },
  variants: {
    hasBackdrop: {
      false: { backgroundColor: 'transparent' },
      true: {
        backgroundColor: vars.colors.black,
        opacity: 0.7,
      },
    },
  },
});

export const dialogStyle = style({
  position: 'relative',
  padding: '24px 20px',
  textAlign: 'center',
  borderRadius: '16px',
  boxShadow: '0px 4px 28px rgba(0, 0, 0, 0.08)',
  backgroundColor: vars.colors.white,
});

export const dialogRecipe = recipe({
  base: { padding: '24px 20px' },
  variants: {
    dialogType: {
      true: { paddingTop: '50px' },
      false: {},
    },
  },
});
