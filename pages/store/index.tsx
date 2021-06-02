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

const Products = [
  {
    img:
      "https://www.sampieri.com.mx/wp-content/uploads/2020/04/CERVEZA-TECATE-LATA-473-ml..jpg",
    brand: "Tecate",
    title: "Cerveza Tecate Lata 473 ml.",
    text:
      "Una cerveza lager dorada, brillante y bien equilibrada con un sabor crujiente a malta, un amargor bajo a medio que termina limpio. Originaria de hace 60 años en la cervecería en el pueblo de Tecate en Baja California (México), Tecate original fue su primera cerveza de autor.",
    price: "18.00",
  },
  {
    img:
      "https://www.sampieri.com.mx/wp-content/uploads/2019/11/CERVEZA-HEINEKEN-VIDRIO-355-ml.-510x510.jpg.webp",
    brand: "Heineken ",
    title: "Cerveza Heineken Vidrio 355 ml.",
    text:
      "Heineken es una cerveza lager premium de cuerpo completo con un color dorado intenso, un ligero aroma afrutado, un sabor amargo suave y un aroma equilibrado de lúpulo que deja un acabado fresco y limpio para un sabor refrescante.",
    price: "21.00",
  },
  {
    img:
      "https://www.sampieri.com.mx/wp-content/uploads/2020/04/CERVEZA-XX-LAGER-LATA-473-ml.-510x510.jpg.webp",
    brand: "Xx Lager",
    title: "Cerveza Xx Lager Lata 473 ml.",
    text:
      "Dos Equis es una cerveza dorada crujiente y dorada de estilo pilsner de México con tonos terrosos y el equilibrio justo de sabor y refresco. Elaborado por primera vez por el maestro cervecero alemán Wilhelm Hasse a fines del siglo XIX en México e importado desde 1983 en los Estados Unidos, auténtica cerveza lager Mexicon.",
    price: "19.00",
  },
  {
    img:
      "https://www.sampieri.com.mx/wp-content/uploads/2020/04/CERVEZA-INDIO-VIDRIO-355-ml-510x510.jpg.webp",
    brand: "Indio ",
    title: "Cerveza Indio Vidrio 355 ml.",
    text:
      "Cerveza oscura conocida por su carácter a malta y su ligero aroma a caramelo.",
    price: "12.00",
  },
];


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
              text4:
                "Encuentra más promos en tienda o llama a los teléfonos y pide a domicilio",

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
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-0 md:px-2 lg:px-32 xl:px-60 md:gap-1 xl:gap-4">
          {Products.map((product, index) => {
            return <ProductCard key={index} {...product} />;
          })}
        </div>
      </div>
    </BasicLayout>
  );
}
