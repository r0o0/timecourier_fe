import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ReactComponent as CancelIcon } from '../assets/icons/cancel.svg';

import Button from './Button';

export default {
  title: 'Inputs/Button',
  component: Button,
  argTypes: {
    background: { control: 'select', defaultValue: 'primary' },
    iconPosition: { options: ['left', 'right'] },
  },
} as ComponentMeta<typeof Button>;

const Templates: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Templates.bind({});
Base.parameters = { controls: { exclude: ['iconPosition', 'iconOnly'] } };
Base.args = { label: '편지 보내기', variant: 'solid' };

export const IconOnly = Templates.bind({});
IconOnly.parameters = { controls: { exclude: ['label'] } };
IconOnly.args = {
  children: <CancelIcon />,
  variant: 'solid',
};

const PrevNextTemplates: ComponentStory<typeof Button> = (args) => (
  <div style={{ display: 'flex', gap: 20 }}>
    <Button.Prev {...args} />
    <Button.Next {...args} />
  </div>
);
export const PrevNext = PrevNextTemplates.bind({});
PrevNext.parameters = { controls: { include: [] } };
