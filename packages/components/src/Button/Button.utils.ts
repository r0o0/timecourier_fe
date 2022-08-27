import { ButtonBackground, ButtonVariant } from './Button.types';

export function getBackground(
  variant: ButtonVariant | undefined,
  background?: ButtonBackground,
): ButtonBackground {
  if (background || !variant) {
    return background;
  }

  return (<Record<ButtonVariant, ButtonBackground>>{
    solid: 'primary',
    outline: 'transparent',
  })[variant];
}
