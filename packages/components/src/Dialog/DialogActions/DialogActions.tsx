import classNames from 'classnames';

import { layoutSprinkles } from '../../styles/layout.css';

import { dialogActionsStyle } from './DialogActions.css';
import { DialogActionsProps } from './DialogActions.types';

function DialogActions(props: DialogActionsProps) {
  const { flex = 'row', className, ...rest } = props;

  return (
    <div
      className={classNames(
        dialogActionsStyle,
        layoutSprinkles({ display: 'flex', flex }),
        className,
      )}
      {...rest}
    />
  );
}

export default DialogActions;
