import React from "react"
import { Story, Meta } from "@storybook/react"

import { Banner, BannerProps } from "./Banner"

export default {
  title: "Design System/Atoms/Banner",
  component: Banner,
  parameters: {
    position: "0.2",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<BannerProps> = (args) => <Banner {...args} />

export const BannerDemo = Template.bind({})

BannerDemo.args = {
  carouselItems: [<h1 style={{ fontSize: 45}}>Hola mundo</h1>, <h1>Hola como estas</h1>],
}


