import React from "react";
import { Story, Meta } from "@storybook/react";
import { ProductCard, ProductCardProps } from "./ProductCard";

export default {
  title: "Design System/Atoms/ProductCard",
  component: ProductCard,
  parameters: {
    position: "0.3",
  },
} as Meta;

const Template: Story<ProductCardProps> = (args) => <ProductCard {...args} />;

export const ProductCardDemo = Template.bind({});

ProductCardDemo.args = {};
