import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  CustomButton,
  CustomButtonProps,
} from "../../components/Atoms/Button/Button";
import React from "react";
import BasicLayout from "../../components/Templates/Layouts/BasicLayout/BasicLayout";
import { Carousel } from "../../components/Atoms/Carousel/Carousel";
import { Banner } from "../../components/Atoms/Banner/Banner";
import Contact from "../../components/Atoms/Contact/Contact";
import ProductCard from "../../components/Atoms/ProductCard/ProductCard";

const Products = [1, 2, 3, 4, 5];

export default function Home() {
  return (
    <BasicLayout>
      <Carousel carouselItems={[<Banner />, <Banner />]}></Carousel>
      <Contact phone="7713595210" />
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-0 md:px-10 lg:px-32 xl:px-60 gap-4">
          {Products.map((product, index) => {
            return <ProductCard key={index} />;
          })}
        </div>
      </div>
    </BasicLayout>
  );
}
