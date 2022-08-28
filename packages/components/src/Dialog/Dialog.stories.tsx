import { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '../Button/Button';
import Text from '../Text/Text';

import Dialog from './Dialog';
import { useDialog } from './Dialog.hooks';
import { DialogMessageType, DialogProps } from './Dialog.types';

export default {
  title: 'Feedback/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

interface DialogSampleProps extends DialogProps {
  dialogType?: DialogMessageType;
}
function DialogSample(props: DialogSampleProps) {
  const { isOpen, onClose, dialogType, ...rest } = props;
  return (
    <Dialog isOpen={isOpen} onClose={onClose} type={dialogType} {...rest}>
      <Dialog.Content>
        <Text as="p">편지 작성을 완료 하겠어요?</Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button label="취소" onClick={onClose} variant="outline" borderColor="gradient" />
        <Button label="확인" background="gradient" />
      </Dialog.Actions>
    </Dialog>
  );
}

const Templates: ComponentStory<typeof Dialog> = (args) => {
  const { isOpen, handleOpenDialog, handleCloseDialog } = useDialog();
  return (
    <>
      <Button label="Open Dialog" onClick={handleOpenDialog} />
      <DialogSample {...args} isOpen={isOpen} onClose={handleCloseDialog} />
    </>
  );
};

export const Base = Templates.bind({});
Base.parameters = { controls: { exclude: ['type'] } };

const WithTypeTemplates: ComponentStory<typeof Dialog> = (args) => {
  const { type: typeFromParent } = args;
  const { isOpen, handleOpenDialog, handleCloseDialog } = useDialog();
  const [dialogType, setDialogType] = useState<DialogMessageType>();

  const handleOpenDialogByTypeClick = (type: DialogMessageType) => () => {
    setDialogType(type);
    handleOpenDialog();
  };
  return (
    <>
      <div style={{ width: 400, display: 'flex', gap: 10 }}>
        <Button label="Caution" onClick={handleOpenDialogByTypeClick('caution')} />
        <Button label="Success" onClick={handleOpenDialogByTypeClick('success')} />
        <Button label="Info" onClick={handleOpenDialogByTypeClick('info')} />
      </div>
      <DialogSample
        onClose={handleCloseDialog}
        dialogType={dialogType || typeFromParent}
        {...args}
        isOpen={isOpen}
      />
    </>
  );
};

export const DialogTypes = WithTypeTemplates.bind({});
