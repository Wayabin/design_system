import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ButtonDemo, ButtonProps } from './Button';

export default {
  title: 'Design System/Button',
  component: ButtonDemo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <ButtonDemo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
