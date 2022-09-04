import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '../Button/Button';

import NotificationToaster from './NotificationToaster';

export default {
  title: 'Feedback/NotificationToaster',
  component: NotificationToaster,
} as ComponentMeta<typeof NotificationToaster>;

const Templates: ComponentStory<typeof NotificationToaster> = (args) => (
  <NotificationToaster {...args} />
);

export const Base = Templates.bind({});
Base.args = {
  message: '편지가 임시저장 되었습니다.',
};

const UsageTemplates: ComponentStory<typeof NotificationToaster> = () => {
  const handleClick = () => {
    NotificationToaster.show('편지가 임시저장 되었습니다.');
  };
  return <Button label="보내기" onClick={handleClick} />;
};
export const Usage = UsageTemplates.bind({});
