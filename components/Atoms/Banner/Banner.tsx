import React from "react";
import "./_banner.scss";

export interface BannerProps {
  img?: string;
  texts: TextProps;
  backgroundColor?: string;
}

interface TextProps {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}

export const Banner: React.FC<BannerProps> = ({
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
