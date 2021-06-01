// Import Swiper React components
import React from "react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./_carousel.scss";
export interface CarouselProps {
  backgroundColor?: string;
  carouselItems: Array<Element>;
}

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export const Carousel = ({ carouselItems, backgroundColor='black', ...props }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  let content = carouselItems;
  const totalItems = content.length;
  if (!carouselItems || carouselItems.length === 0) {
    return null;
  }
  if (carouselItems.length >= 5) {
    content = carouselItems.slice(0, 5);
  }

  return (
    <Swiper
      sty
      style={{ backgroundColor: backgroundColor }}
      observer
      loop={totalItems !== 1}
      touchStartreventDefault={false}
      autoplay={
        totalItems === 1
          ? false
          : {
              delay: 10000,
              disableOnInteraction: true,
            }
      }
      navigation={
        totalItems === 1
          ? false
          : {
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }
      }
      onInit={
        totalItems === 1
          ? null
          : (swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
      }
      pagination={
        totalItems === 1
          ? false
          : {
              clickable: true,
              renderBullet: function (index, className) {
                return `<span data-ui-element='Slide ${
                  index + 1
                }' class='${className}'> </span>`;
              },
            }
      }
      {...props}
      data-ui-section="Banner - Slider"
    >
      {content.map((item, index) => (
        <SwiperSlide id={"home-slider-" + (index + 1)} key={`slide -${index}`}>
          {item}
        </SwiperSlide>
      ))}
      {totalItems === 1 ? null : (
        <>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev"
            role="button"
            aria-label="Previous slide"
            data-ui-element="Slide anterior"
          ></div>
          <div
            ref={navigationNextRef}
            className="swiper-button-next"
            role="button"
            aria-label="Next slide"
            data-ui-element="Slide siguiente"
          ></div>
        </>
      )}
    </Swiper>
  );
};
