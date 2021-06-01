<<<<<<< HEAD
import React from "react"
import { Story, Meta } from "@storybook/react"
import {Banner} from '../Banner/Banner'

import { Carousel, CarouselProps } from "./Carousel"

export default {
  title: "Design System/Atoms/Carousel",
=======
import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Carousel, CarouselProps } from './Carousel'

export default {
  title: 'Design System/Atoms/Carousel',
>>>>>>> a14f013 (Feature/crear carousel (#5))
  component: Carousel,
  parameters: {
    position: "0.2",
  },
  argTypes: {
<<<<<<< HEAD
    backgroundColor: { control: "color" },
=======
    backgroundColor: { control: 'color' },
>>>>>>> a14f013 (Feature/crear carousel (#5))
  },
} as Meta

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />

export const CarouselDemo = Template.bind({})

CarouselDemo.args = {
<<<<<<< HEAD
  carouselItems: [<Banner/>, <Banner/>],
}


=======
  primary: true,
  label: 'Button',
  onClick: () => {
    alert('Primary')
  }
}

>>>>>>> a14f013 (Feature/crear carousel (#5))
