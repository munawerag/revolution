"use client";

import Tour360Card, { Tour360CardProps } from "../../common/cards/Tour360Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "./Lofts.module.scss";
import SwiperNavButtons from "../../Buttons/SwiperNavButtons";
import { useState } from "react";

type LoftsData = {
  heading?: string;
  description?: string;
  cards?: Tour360CardProps[];
};

type LoftsProps = {
  data?: LoftsData;
};

export default function Lofts({ data }: LoftsProps) {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  // Use data from props without default fallback
  const cards = data?.cards || [];
  const heading = data?.heading || "THE LOFTS";
  const description = data?.description || "No description available";

  // Error handling - if no cards available, don't render the section
  if (!cards.length) {
    return null;
  }

  return (
    <section className="section">
      <div className="container-s">
        <div className={`${style["panel"]}`}>
          <h2 className="h3">{heading}</h2>
          <p className="p">{description}</p>
        </div>
        <div className={`${style["lofts-slider-wrapper"]} element-lg-right-zero`}>
          {cards.length > 0 && (
            <>
              <Swiper
                speed={1200}
                slidesPerView={1.11}
                spaceBetween={15}
                navigation={{
                  prevEl,
                  nextEl,
                }}
                modules={[Pagination, Navigation]}
                pagination={{
                  type: "progressbar",
                }}
                breakpoints={{
                  768: {
                    spaceBetween: 20,
                    slidesPerView: 2.5,
                  },
                  992: {
                    spaceBetween: 30,
                    slidesPerView: 2.9,
                  },
                  1200: {
                    spaceBetween: 50,
                    slidesPerView: 3.11,
                  },
                }}
                className="lofts-slider"
              >
                {cards.map((card: Tour360CardProps, index: number) => (
                  <SwiperSlide key={index} className={`${style["slide-item"]}`}>
                    <Tour360Card
                      figureUrl={card.figureUrl}
                      title={card.title}
                      figureClassName={style.imgWrapper}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className={`${style.lofts__nav}`}>
                <SwiperNavButtons nextFunc={setNextEl} prevFunc={setPrevEl} />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
