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

ProductCardDemo.args = {
  img:
    "https://www.sampieri.com.mx/wp-content/uploads/2020/04/CERVEZA-TECATE-LATA-473-ml..jpg",
  brand: "MyBrand",
  title: "Titulo del producto demo",
  text: "Este es un producto demo",
  price: 15.89,
};
