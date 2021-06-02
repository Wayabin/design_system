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

const Products = [1, 2, 3, 4];

export default function Home() {
  return (
    <BasicLayout>
      <Carousel
        carouselItems={[
          <Banner
            texts={{
              text1: "#TecatonBetosmascercadeti",
              text2: "2 x $32 y 3 x $45",
              text3: "Hasta el 16 de junio",
              text4: "Encuentra más promos en tienda o llama a los teléfonos y pide a domicilio",
            }}
            img="https://scontent.fmex24-1.fna.fbcdn.net/v/t1.6435-0/s600x600/130749834_252707419527906_2112004596168754534_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeE2LMZFDC0UBuew4DDO4JYwrRrxZ88O-UWtGvFnzw75RV5g276iZoytM6AcJw4zNoJ2GCl8k7cpIAVWsC2KAJvo&_nc_ohc=SyLAWccPiTkAX-D6k7-&_nc_ht=scontent.fmex24-1.fna&tp=7&oh=0f107a83db69c61d23195615aa97d098&oe=60DB93EE"
          />,
          <Banner
            texts={{
              text1: "#TecatonBetosteconciente",
              text2: "Promos inalcanzables",
              text3: "Pregunta por nuestros vinos y licores también...",
              text4: "Buscanos en facebook como Tecaton Beto's",
            }}
            img="https://http2.mlstatic.com/D_NQ_NP_802995-MLM45722761670_042021-W.jpg"
          />,
        ]}
      ></Carousel>
      <Contact phone="7712048359, 7711987720, 7711763933" />
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
