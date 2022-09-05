import { useEffect, useId, useRef } from 'react';
import classNames from 'classnames';

import { Position, Toast, Toaster } from '@blueprintjs/core';

import { notificationToasterStyle } from './NotificationToaster.css';
import { NotificationToasterProps } from './NotificationToaster.types';

function NotificationToaster(props: NotificationToasterProps) {
  const { className, message } = props;

  const toasterRef = useRef<Toaster>(null);
  const uniqueId = useId();

  useEffect(
    () => () => {
      toasterRef.current?.dismiss(uniqueId);
    },
    [],
  );

  return (
    <Toaster
      ref={toasterRef}
      className={classNames(notificationToasterStyle, className)}
      position={Position.TOP}
      key={uniqueId}
    >
      <Toast message={message} />
    </Toaster>
  );
}

const Notification = Toaster.create({
  className: classNames(notificationToasterStyle),
  position: Position.TOP,
});

const NotificationFn = (message: string) =>
  // useEffect(
  //   () => () => {
  //     Notification.clear();
  //   },
  //   [],
  // );

  Notification.show({ message });
export default Object.assign(NotificationToaster, {
  show: NotificationFn,
});
