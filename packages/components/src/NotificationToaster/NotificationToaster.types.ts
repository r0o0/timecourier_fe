import { ToastProps } from '@blueprintjs/core';

export interface NotificationToasterProps extends Pick<ToastProps, 'className'> {
  message?: string;
}
