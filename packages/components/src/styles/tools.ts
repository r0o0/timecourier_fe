export const createOutlineGradientBackgroundImage = (bgColor: string, gradient: string) => `linear-gradient(${bgColor}, ${bgColor}), ${gradient}`;

export const important = (css: string | number) => `${css} !important`;
