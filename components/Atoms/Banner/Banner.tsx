import React from "react";
import "./_banner.scss";

export interface BannerProps {
  image?: string;
}

export const Banner = ({ image, ...props }) => {
  return (
    <div {...props} className="banner_container">
      <div className="swiper-slide-item">
        <div className="swiper-slide-item_content">
          <p className="ssi-category">#TECATESIEMPRECONTIGO</p>
          <p className="ssi-title-1">10% de descuento</p>
          <p className="ssi-title-2">Hasta el 6 de Abril</p>
          <p className="ssi-title-3">¡No te quedes sin tu promo, ven por ella!</p>
          <img
            className="ssi-image"
            src="https://http2.mlstatic.com/D_NQ_NP_802995-MLM45722761670_042021-W.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
