import classNames from 'classnames';

import { Position, Toaster } from '@blueprintjs/core';

import { notificationToasterStyle } from './NotificationToaster.css';

function NotificationToaster() {
  return null;
}

const Notification = Toaster.create({
  className: classNames(notificationToasterStyle),
  position: Position.TOP,
});

const NotificationFn = (message: string) => Notification.show({ message, timeout: 1200 });

export default Object.assign(NotificationToaster, {
  show: NotificationFn,
});
