import { style } from '@vanilla-extract/css';

import { vars } from '../../styles/global.css';
import { outlineLinearGradientVar } from '../../styles/gradient.css';

// TODO hover 스타일 추가 - 버튼과는 다른 속성으로 구현해야함 `background-image`
export const buttonPrevStyle = style({});

export const buttonNextStyle = style(
  {
    vars: {
      [outlineLinearGradientVar]:
      vars.colors.invertedGradientDark,
    },
  },
);
