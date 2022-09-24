import { TimePickerProps as BTimePickerProps } from '@blueprintjs/datetime';

import { InputFieldProps } from '../InputField/InputField.types';

export interface TimePickerDialogProps extends Omit<BTimePickerProps, 'onBlur'> {
  onBlur: (time: Date | undefined) => void;
}

export interface TimePickerProps extends Pick<InputFieldProps, 'label' | 'errorMessage'> {
  value: string;
  onChange: (time: string) => void;
  onBlur?: (time: string) => void;
}

export type TimePickerDialogFnProps = Pick<
  TimePickerDialogProps,
  'defaultValue' | 'value' | 'onChange' | 'onBlur'
>;
