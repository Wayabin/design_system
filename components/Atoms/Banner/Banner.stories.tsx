import React from "react";
import { Story, Meta } from "@storybook/react";

import { Banner, BannerProps } from "./Banner";

export default {
  title: "Design System/Atoms/Banner",
  component: Banner,
  parameters: {
    position: "0.2",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<BannerProps> = (args) => <Banner {...args} />;

export const BannerDemo = Template.bind({});

BannerDemo.args = {
  texts: {
    text1: "#ESTEUNDEMO",
    text2: "Aquí va el texto de descuento 20%",
    text3: "Aqui puedes colocar un texto alternativo",
    text4: "Y por ultimo algun texto adicional",
  },
};
