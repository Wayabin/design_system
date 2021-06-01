import React from "react"
import { Story, Meta } from "@storybook/react"

import { Carousel, CarouselProps } from "./Carousel"

export default {
  title: "Design System/Atoms/Carousel",
  component: Carousel,
  parameters: {
    position: "0.2",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />

export const CarouselDemo = Template.bind({})

CarouselDemo.args = {
  carouselItems: [<h1 style={{ fontSize: 45}}>Hola mundo</h1>, <h1>Hola como estas</h1>],
}


