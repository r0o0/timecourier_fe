import { style } from '@vanilla-extract/css';

import { spacing } from '~components/styles/tools';

const letterFormPaddingX = spacing(20);

export const letterFormStyle = style({
  flex: '1 1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

export const letterFormContentStyle = style({
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  padding: `40px ${letterFormPaddingX}`,
});

export const letterFormActionsStyle = style({
  display: 'flex',
  padding: `${letterFormPaddingX}`,
  marginBottom: 20,
});

export const letterFormActionButtonStyle = style({ width: 64 });
