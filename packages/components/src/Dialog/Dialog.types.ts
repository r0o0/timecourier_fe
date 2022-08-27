import { DialogProps as BDialogProps } from '@blueprintjs/core';

export type DialogMessageType = 'caution' | 'info' | 'success';

export interface DialogProps extends Omit<BDialogProps, 'isCloseButtonShown'> {
  hasBackdrop?: boolean;
  type?: DialogMessageType;
}
