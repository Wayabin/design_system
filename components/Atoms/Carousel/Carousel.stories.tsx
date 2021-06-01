import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Carousel, CarouselProps } from './Carousel'

export default {
  title: 'Design System/Atoms/Carousel',
  component: Carousel,
  parameters: {
    position: "0.2",
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />

export const CarouselDemo = Template.bind({})

CarouselDemo.args = {
  primary: true,
  label: 'Button',
  onClick: () => {
    alert('Primary')
  }
}

