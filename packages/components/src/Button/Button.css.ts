import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { outlineGradientBackgroundImage } from './Button.utils';

import { vars } from '../styles/global.css';

const buttonSize = {
  large: '64px',
  medium: '60px',
  small: '54px',
  custom: '100%',
};

const buttonVariantColors = defineProperties({
  properties: {
    background: {
      gradient: vars.colors.gradientDark,
      primary: vars.colors.primary,
      primaryLight: vars.colors.primaryLight,
      transparent: 'transparent',
      black: vars.colors.black,
      white: vars.colors.white,
    },
    borderColor: {
      gradient: vars.colors.gradientDark,
      primary: vars.colors.primary,
    },
    width: {
      parent: '100%',
      ...buttonSize,
    },
    height: { ...buttonSize },
  },
});
export const buttonSprinkles = createSprinkles(buttonVariantColors);

const hoverBackground = createVar();

export const buttonClassName = style({
  vars: { [hoverBackground]: vars.colors.gradientDark },
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  cursor: 'pointer',
});

export const buttonRecipe = recipe({
  base: { borderWidth: 0 },
  variants: {
    size: {
      large: { borderRadius: '16px' },
      medium: { borderRadius: '14px' },
      small: { borderRadius: '20px' },
      custom: {
        width: '100%',
        height: '100%',
      },
    },
    variant: {
      outline: {
        border: `1px solid ${vars.colors.primary}`,
        color: vars.colors.primary,
        background: 'transparent',
        transition: `background ${vars.transitions.duration.fast} ${vars.transitions.timing.easeOut}`,
        vars: { [hoverBackground]: vars.colors.primaryLight },
        ':hover': { background: hoverBackground },
        ':active': { background: hoverBackground },
      },
      solid: {
        position: 'relative',
        color: vars.colors.white,
        backgroundColor: 'transparent',
        '::before': {
          content: '',
          position: 'absolute',
          top: 0,
          left: 0,
          width: 'inherit',
          height: 'inherit',
          background: vars.colors.primary,
          borderRadius: 'inherit',
          zIndex: -2,
        },
        '::after': {
          content: '',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: vars.colors.gradientDark,
          transition: `opacity ${vars.transitions.duration.fast} ${vars.transitions.timing.easeOut}`,
          borderRadius: 'inherit',
          zIndex: -1,
          opacity: 0,
        },
        selectors: { '&:hover:after': { opacity: 1 } },
      },
      transparent: { background: 'transparent' },
    },
  },
});

export const buttonOutlineBackgroundImageVar = createVar();
export const outlineGradientClassName = recipe({
  base: {
    vars: { [buttonOutlineBackgroundImageVar]: vars.colors.gradientDark },
    borderColor: 'transparent',
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
    borderImageSlice: 1,
  },
  variants: {
    background: {
      black: {
        backgroundImage: outlineGradientBackgroundImage(
          vars.colors.black,
          buttonOutlineBackgroundImageVar,
        ),
      },
      white: {
        backgroundImage: outlineGradientBackgroundImage(
          vars.colors.white,
          buttonOutlineBackgroundImageVar,
        ),
      },
    },
  },
});
