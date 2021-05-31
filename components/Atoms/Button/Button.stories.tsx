import React from 'react'
import { Story, Meta } from '@storybook/react'

import { CustomButton, CustomButtonProps } from './Button'

export default {
  title: 'Design System/Button',
  component: CustomButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<CustomButtonProps> = (args) => <CustomButton {...args} />

export const Primary = Template.bind({})

Primary.args = {
  primary: true,
  label: 'Button',
  onClick: () => {
    alert('Primary')
  }
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
  onClick: () => {
    alert('Secondary')
  }
}
