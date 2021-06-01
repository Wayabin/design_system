import React from "react"
// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/scrollbar/scrollbar.scss"
import "./_carousel.scss"

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export interface CarouselProps {
  backgroundColor?: string
  carouselItems: Array<Element>
}

export const Carousel = ({ backgroundColor, carouselItems = [] }) => {
  return (
    <Swiper
      style={{ backgroundColor: backgroundColor }}
      observer
      // spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {carouselItems?.map((item, index) => {
        console.log(item)

        return <SwiperSlide key={index}> {item}</SwiperSlide>
      })}
    </Swiper>
  )
}
