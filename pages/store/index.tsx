import React from "react";
import BasicLayout from "../../components/Templates/Layouts/BasicLayout/BasicLayout";
import { Carousel } from "../../components/Atoms/Carousel/Carousel";
import { Banner } from "../../components/Atoms/Banner/Banner";
import Contact from "../../components/Atoms/Contact/Contact";
import ProductCard from "../../components/Atoms/ProductCard/ProductCard";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const Products = [
  {
    img:
      "https://www.sampieri.com.mx/wp-content/uploads/2020/04/CERVEZA-TECATE-LATA-473-ml..jpg",
    brand: "Tecate",
    title: "Cerveza Tecate Lata 473 ml.",
    text:
      "Una cerveza lager dorada, brillante y bien equilibrada con un sabor crujiente a malta, un amargor bajo a medio que termina limpio. Originaria de hace 60 años en la cervecería en el pueblo de Tecate en Baja California (México), Tecate original fue su primera cerveza de autor.",
    price: 18.0,
  },
  {
    img:
      "https://www.sampieri.com.mx/wp-content/uploads/2019/11/CERVEZA-HEINEKEN-VIDRIO-355-ml.-510x510.jpg.webp",
    brand: "Heineken ",
    title: "Cerveza Heineken Vidrio 355 ml.",
    text:
      "Heineken es una cerveza lager premium de cuerpo completo con un color dorado intenso, un ligero aroma afrutado, un sabor amargo suave y un aroma equilibrado de lúpulo que deja un acabado fresco y limpio para un sabor refrescante.",
    price: 21.0,
  },
  {
    img:
      "https://www.sampieri.com.mx/wp-content/uploads/2020/04/CERVEZA-XX-LAGER-LATA-473-ml.-510x510.jpg.webp",
    brand: "Xx Lager",
    title: "Cerveza Xx Lager Lata 473 ml.",
    text:
      "Dos Equis es una cerveza dorada crujiente y dorada de estilo pilsner de México con tonos terrosos y el equilibrio justo de sabor y refresco. Elaborado por primera vez por el maestro cervecero alemán Wilhelm Hasse a fines del siglo XIX en México e importado desde 1983 en los Estados Unidos, auténtica cerveza lager Mexicon.",
    price: 19.0,
  },
  {
    img:
      "https://www.sampieri.com.mx/wp-content/uploads/2020/04/CERVEZA-INDIO-VIDRIO-355-ml-510x510.jpg.webp",
    brand: "Indio ",
    title: "Cerveza Indio Vidrio 355 ml.",
    text:
      "Cerveza oscura conocida por su carácter a malta y su ligero aroma a caramelo.",
    price: 12.0,
  },
];

export interface HomeProps {
  banners: Array<BannerObject>;
}

type BannerObject = {
  hashTitle: string;
  mainTitle: string;
  secondTitle: string;
  thirdTitle: string;
  imgBanner: BannerImage;
};

type BannerImage = {
  url: string;
};

const Home: React.FC<HomeProps> = ({ banners }) => {
  return (
    <BasicLayout>
      <Carousel
        carouselItems={banners?.map((banner: BannerObject) => {
          return (
            <Banner
              texts={{
                text1: banner.hashTitle,
                text2: banner.mainTitle,
                text3: banner.secondTitle,
                text4: banner.thirdTitle,
              }}
              img={banner.imgBanner.url}
            />
          );
        })}
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
};

export default Home;

// export async function getStaticProps() {
//   const client = new ApolloClient({
//     uri: "http://localhost:1337/graphql",
//     cache: new InMemoryCache(),
//   });

//   const { data } = await client.query({
//     query: gql`
//       query getBanners {
//         banners {
//           id
//           hashTitle
//           mainTitle
//           secondTitle
//           thirdTitle
//           imgBanner {
//             url
//           }
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       banners: data.banners,
//     },
//   };
// }
