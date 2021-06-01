import React from 'react'
import { Story, Meta } from '@storybook/react'

import { BasicLayout, BasicLayoutProps } from './BasicLayout'

export default {
  title: 'Design System/Templates/BasicLayout',
  component: BasicLayout,
} as Meta

const Template: Story<BasicLayoutProps> = (args) => <BasicLayout {...args} />

export const BasicLayoutDemo = Template.bind({})

BasicLayoutDemo.args = {
  children: <h1> Hola como estsás </h1>
  
}

