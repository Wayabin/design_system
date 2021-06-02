import React from "react";
import "./_banner.scss";

export interface BannerProps {
  image?: string;
  backgroundColor?: string;
}

export const Banner = ({
  img,
  texts,
  backgroundColor = "#000000",
  ...props
}) => {
  return (
    <div
      className="banner_container"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="swiper-slide-item">
        <div className="swiper-slide-item_content">
          <p className="ssi-category">{texts.text1}</p>
          <p className="ssi-title-1">{texts.text2}</p>
          <p className="ssi-title-2">{texts.text3}</p>
          <p className="ssi-title-3">{texts.text4}</p>
          <img className="ssi-image" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};
