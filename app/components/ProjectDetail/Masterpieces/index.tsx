"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCreative } from "swiper/modules";

import style from "./index.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import SwiperNavButtons from "../../Buttons/SwiperNavButtons";
const Masterpieces = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <>
      <div className={`${style.residenciesTitleWrapper}`} id="residencies">
        <div className={`${style.residenciesTitle}`}>
          <h5 className="primary-col text-uppercase fw-500">Masterpieces</h5>
          <h2 className="h2">
            Picture yourself in a perfect place in which the infinities of time
            and space
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua the enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
        </div>
      </div>
      <div className={`${style.residenciesSlider}`}>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          speed={1200}
          navigation={{
            prevEl,
            nextEl,
          }}
          className="residencies-slider"
          modules={[Pagination, Navigation, EffectCreative]}
          pagination={{
            type: "progressbar",
          }}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: false,
              translate: [0, 0, -5],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
        >
          <SwiperSlide className={`${style.residenciesSlider__slide}`}>
            <Image
              src={"/assets/images/home/residencies-1.jpg"}
              fill
              alt="img"
              className="img-hack"
            />
            <div className={style.textWrapper}>
              <h2 className={`fw-300 ${style.title}`}>Lorem et dolore ma</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${style.residenciesSlider__slide}`}>
            <Image
              src={"/assets/images/home/residencies-2.jpg"}
              fill
              alt="img"
              className="img-hack"
            />
            <div className={style.textWrapper}>
              <h2 className={`fw-300 ${style.title}`}>
                Consectetur Adipiscing
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${style.residenciesSlider__slide}`}>
            <Image
              src={"/assets/images/home/residencies-3.jpg"}
              fill
              alt="img"
              className="img-hack"
            />
            <div className={style.textWrapper}>
              <h2 className={`fw-300 ${style.title}`}>Lorem et dolore ma</h2>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={`${style.residenciesSlider__nav}`}>
          <SwiperNavButtons nextFunc={setNextEl} prevFunc={setPrevEl} />
        </div>
      </div>
    </>
  );
};

export default Masterpieces;
