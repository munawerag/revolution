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

type LoftsProps = {
  cards: Tour360CardProps[];
};

export default function Lofts({ cards }: LoftsProps) {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  // Using hardcoded array instead of the cards prop
  const hardcodedCards = [
    {
      figureUrl: "/assets/images/360-tour/palm-1.jpg",
      title: "Living Room",
    },
    {
      figureUrl: "/assets/images/360-tour/palm-2.jpg",
      title: "Living Room",
    },
    {
      figureUrl: "/assets/images/360-tour/palm-3.jpg",
      title: "Living Room",
    },
    {
      figureUrl: "/assets/images/360-tour/palm-1.jpg",
      title: "Living Room",
    },
    {
      figureUrl: "/assets/images/360-tour/palm-2.jpg",
      title: "Living Room",
    },
  ];

  return (
    <section className="section">
      <div className="container-s">
        <div className={`${style["panel"]}`}>
          <h2 className="h3">LOFTS AND ROSEGOLD</h2>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut.
          </p>
        </div>
        <div className={`${style["lofts-slider-wrapper"]} element-lg-right-zero`}>
          <Swiper
            speed={1200}
            slidesPerView={3.30}
            spaceBetween={50}
            navigation={{
              prevEl,
              nextEl,
            }}
            modules={[Pagination, Navigation]}
            pagination={{
              type: "progressbar",
            }}
            className="lofts-slider"
          >
            {hardcodedCards.map((card: Tour360CardProps, index: number) => (
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
        </div>
      </div>
    </section>
  );
}
