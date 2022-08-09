import { ProgressBarProps as BlueprintProgressBarProps } from '@blueprintjs/core';

export interface ProgressBarProps extends Pick<BlueprintProgressBarProps, 'className'> {
  steps: number;
  activeStep: number;
}
