import { style } from '@vanilla-extract/css';

import { vars } from '../../styles/global.css';
import { outlineLinearGradientVar } from '../../styles/gradient.css';

const commonStyle = { '::before': { display: 'none' } };

// TODO hover 스타일 추가 - 버튼과는 다른 속성으로 구현해야함 `background-image`
export const buttonPrevStyle = style({ ...commonStyle });

export const buttonNextStyle = style({
  vars: { [outlineLinearGradientVar]: vars.colors.invertedGradientDark },
  ...commonStyle,
});
