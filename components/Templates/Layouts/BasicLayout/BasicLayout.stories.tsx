import React from 'react'
import { Story, Meta } from '@storybook/react'

<<<<<<< HEAD
import { BasicLayout, BasicLayoutProps } from './BasicLayout'
=======
import { BasicLayout, BasicLayoutProps } from './index'
>>>>>>> a14f0137553a7e53b97e0eba26ad327c46443d11

export default {
  title: 'Design System/Templates/BasicLayout',
  component: BasicLayout,
} as Meta

const Template: Story<BasicLayoutProps> = (args) => <BasicLayout {...args} />

export const BasicLayoutDemo = Template.bind({})

BasicLayoutDemo.args = {
  children: <h1> Hola como estsás </h1>
  
}

