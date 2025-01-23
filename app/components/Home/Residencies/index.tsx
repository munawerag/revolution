"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCreative } from "swiper/modules";

import style from "./index.module.scss"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import SwiperNavButtons from "../../Buttons/SwiperNavButtons";
const Residencies = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <>
      <div className={`${style.residenciesTitleWrapper}`} id="residencies">
        <div className={`${style.residenciesTitle}`}>
          <div className="title1">WILD LUXURY OF A UNIQUE LIFE EXPERIENCE</div>
          <div className="title2">
            Eywa Is A Home Where Well-Being Is Truly The Essence Of Living
          </div>
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
              <h6 className={`fw-500 text-uppercase`}>Residencies</h6>
              <h3 className={`fw-300 ${style.title}`}>Apartments</h3>
              <p className={`fw-300 sm-font`}>2,3,4 & 5 Bedrooms</p>
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
              <h6 className={`fw-500 text-uppercase`}>Residencies</h6>
              <h3 className={`fw-300 ${style.title}`}>Skyline Collection</h3>
              <p className={`fw-300 sm-font`}>2,3 & 4 Bedrooms</p>
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
              <h6 className={`fw-500 text-uppercase`}>Residencies</h6>
              <h3 className={`fw-300 ${style.title}`}>Penthouse</h3>
              <p className={`fw-300 sm-font mb-0`}>Neytiri, Toruk Makto</p>
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

export default Residencies;
