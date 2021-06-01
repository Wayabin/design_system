import React from "react";
import { Story, Meta } from "@storybook/react";
import { ContactProps, Contact } from "./Contact";

export default {
  title: "Design System/Atoms/Contact",
  component: Contact,
  parameters: {
    position: "0.3",
  },
} as Meta;

const Template: Story<ContactProps> = (args) => <Contact {...args} />;

export const ContactDemo = Template.bind({});

ContactDemo.args = {
  phone: "7713295210",
};
