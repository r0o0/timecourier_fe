import { colorSystem } from '@timeletter_fe/components/src/styles/colors.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '~components/styles/global.css';

export const backGroundRecipe = recipe({
  base: {
    position: 'fixed',
    top: '0px',
    width: 360,
    height: '100%',
    zIndex: -1,
    backgroundColor: 'rgba(23, 23, 23, 0.5)',
  },
  variants: {
    visible: {
      true: {
        backgroundColor: 'rgba(23, 23, 23, 0.5)',
        overflow: 'visible',
        zIndex: '1',
      },
      false: { zIndex: -1, backgroundColor: 'rgba(0, 0, 0, 0)', overflow: 'hidden' },
    },
  },
});

export const sideBarRecipe = recipe({
  base: {
    backgroundColor: '#8055FA',
    position: 'absolute',
    filter: 'drop-shadow(-20px 0px 24px rgba(0, 0, 0, 0.15))',
    right: '0',
    height: '100%',
    width: '300px',
    transition: 'transform 0.5s ease-in-out',
  },
  variants: {
    visible: {
      true: { transform: 'translateX(0%)' },
      false: { transform: 'translateX(100%)' },
    },
  },
});

export const cancelIconStyle = style({
  position: 'absolute',
  top: '7px',
  right: '6%',
  height: '40px',
  width: '40px',
  color: colorSystem.white,
});

export const ulStyle = style({
  paddingLeft: 20,
  paddingTop: '6rem',
});

export const mainliStyle = style({
  margin: '5px auto',
  textAlign: 'left',
  width: '100%',
  font: vars.fonts.body.family,
  fontSize: vars.fonts.body.size[4],
  lineHeight: vars.fonts.body.lineHeight[4],
});

export const subliStyle = style({
  margin: '5px auto',
  textAlign: 'left',
  width: '100%',
  font: vars.fonts.body.family,
  fontSize: vars.fonts.body.size[2],
  lineHeight: vars.fonts.body.lineHeight[2],
});

export const logoutStyle = style({
  margin: '0px auto',
  textAlign: 'left',
  width: '100%',
  font: vars.fonts.body.family,
  fontSize: vars.fonts.body.size[2],
  lineHeight: vars.fonts.body.lineHeight[2],
});
