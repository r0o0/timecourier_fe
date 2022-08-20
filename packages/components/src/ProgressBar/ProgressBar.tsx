import { useMemo } from 'react';
import classNames from 'classnames';

import { ProgressBar as BProgressBar } from '@blueprintjs/core';

import { ProgressBarProps } from './ProgressBar.types';

import { progressBarStyle } from './ProgressBar.css';

const fullValue = 1;
function ProgressBar(props: ProgressBarProps) {
  const { steps, activeStep, className } = props;

  const step = fullValue / steps;
  const value = useMemo(() => {
    if (activeStep >= steps) {
      return fullValue;
    }
    return activeStep * step;
  }, [step, activeStep]);

  return (
    <BProgressBar
      className={classNames(progressBarStyle, className)}
      value={value}
      stripes={false}
      animate={false}
    />
  );
}

export default ProgressBar;
