import classNames from 'classnames';

import { ReactComponent as ArrowGradientPrev } from '../../assets/images/arrow-gradient-back.svg';
import { ReactComponent as ArrowGradientNext } from '../../assets/images/arrow-gradient-front.svg';
import Button from '../Button';

import { ButtonNextProps } from './ButtonPrevNext.types';

import { gradientOutlineRecipe } from '../../styles/gradient.css';
import { buttonNextStyle, buttonPrevStyle } from './ButtonPrevNext.css';

export function ButtonPrev(props: ButtonNextProps) {
  const { className, ...rest } = props;

  return (
    <Button
      {...rest}
      className={classNames(buttonPrevStyle, gradientOutlineRecipe({ background: 'black' }), className)}
      borderColor="gradient"
    >
      <ArrowGradientPrev />
    </Button>
  );
}

export function ButtonNext(props: ButtonNextProps) {
  const { className, ...rest } = props;
  return (
    <Button
      {...rest}
      className={classNames(buttonNextStyle, gradientOutlineRecipe({ background: 'black' }), className)}
      borderColor="gradient"
    >
      <ArrowGradientNext />
    </Button>
  );
}
