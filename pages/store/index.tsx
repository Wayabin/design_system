import React, { useEffect, useState } from "react";
import BasicLayout from "../../components/Templates/Layouts/BasicLayout/BasicLayout";
import { Carousel } from "../../components/Atoms/Carousel/Carousel";
import { Banner } from "../../components/Atoms/Banner/Banner";
import Contact from "../../components/Atoms/Contact/Contact";
import ProductCard from "../../components/Atoms/ProductCard/ProductCard";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import getConfig from "next/config";
import { Products } from "../../mocks/products";

const env = getConfig().publicRuntimeConfig;
const STRIPE_PUBLIC_KEY = env.STRIPE_PUBLIC_KEY;

const stripePromise = loadStripe(
  "pk_test_51HbqwSKOGzbsHBKaPqkAcRH0UNQ4UaRrXXkfpaV0rycPRqNDW0xVB6gcBi8fW3PA5e8eHXA2lFPl7bcIy41KbrT700dUUNNrEe",
  {
    locale: "es",
  }
);

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
  
  const handleClick = async () => {
    const { sessionId } = await fetch("/api/checkout/session", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: 1 }),
    }).then((response) => response.json());

    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
  };

  return (
    <Elements stripe={stripePromise}>
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
        <div className="container">
          <button onClick={handleClick}>checkout</button>
        </div>
      </BasicLayout>
    </Elements>
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
