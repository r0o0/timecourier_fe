import { ButtonBackground, ButtonVariant } from './Button.types';

export function getBackground(
  variant: ButtonVariant,
  background?: ButtonBackground,
): ButtonBackground {
  if (background) {
    return background;
  }

  return (<Record<ButtonVariant, ButtonBackground>>{
    solid: 'gradient',
    outline: 'transparent',
  })[variant];
}

export const outlineGradientBackgroundImage = (bgColor: string, gradient: string) => `linear-gradient(${bgColor}, ${bgColor}), ${gradient}`;
