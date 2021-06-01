import React from 'react'
import { Story, Meta } from '@storybook/react'

import { CustomButton, CustomButtonProps } from './Button'

export default {
  title: 'Design System/Atoms/Button',
  component: CustomButton,
  parameters: {
<<<<<<< HEAD:components/Atoms/Button/Button.stories.tsx
    position: "0.1",
=======
    position: "0.11",
>>>>>>> a14f0137553a7e53b97e0eba26ad327c46443d11:components/Button/Button.stories.tsx
  },
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
