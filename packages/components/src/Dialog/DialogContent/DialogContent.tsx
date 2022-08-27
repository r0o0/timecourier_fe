import classNames from 'classnames';

import { dialogContentStyle } from './DialogContent.css';
import { DialogContentProps } from './DialogContent.types';

function DialogContent(props: DialogContentProps) {
  const { className, ...rest } = props;

  return <div className={classNames(dialogContentStyle, className)} {...rest} />;
}

export default DialogContent;
