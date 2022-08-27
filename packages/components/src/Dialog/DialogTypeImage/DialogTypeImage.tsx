import { ReactComponent as Warning } from '../../assets/images/caution.svg';
import { ReactComponent as Success } from '../../assets/images/confirm.svg';
import { ReactComponent as Info } from '../../assets/images/draft-letter.svg';

import { imageWrapperClassName } from './DialogTypeImage.css';
import { DialogTypeImageProps } from './DialogTypeImage.types';

function DialogTypeImage(props: DialogTypeImageProps) {
  const { type } = props;

  if (!type) {
    return null;
  }

  const image = {
    caution: <Warning />,
    info: <Info />,
    success: <Success />,
  };

  return <div className={imageWrapperClassName}>{image[type]}</div>;
}

export default DialogTypeImage;
