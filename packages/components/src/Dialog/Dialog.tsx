import classNames from 'classnames';

import { Dialog as BDialog } from '@blueprintjs/core';

import DialogActions from './DialogActions/DialogActions';
import DialogContent from './DialogContent/DialogContent';
import DialogTypeImage from './DialogTypeImage/DialogTypeImage';
import { backdropRecipe, dialogRecipe, dialogStyle } from './Dialog.css';
import { DialogProps } from './Dialog.types';

function Dialog(props: DialogProps) {
  const { className, children, type, hasBackdrop = true, ...rest } = props;

  return (
    <BDialog
      {...rest}
      backdropClassName={backdropRecipe({ hasBackdrop })}
      hasBackdrop={hasBackdrop}
      transitionName="dialogTransition"
      className={classNames(
        dialogStyle,
        dialogRecipe({ dialogType: type !== undefined }),
        className,
      )}
      isCloseButtonShown={false}
      lazy
    >
      {type && <DialogTypeImage type={type} />}
      {children}
    </BDialog>
  );
}

export default Object.assign(Dialog, { Actions: DialogActions, Content: DialogContent });
