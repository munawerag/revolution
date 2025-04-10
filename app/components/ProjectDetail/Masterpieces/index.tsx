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

interface SlideItem {
  imagePath: string;
  title: string;
}

interface MasterpiecesProps {
  subtitle?: string;
  title?: string;
  description?: string;
  slides?: SlideItem[];
}

const Masterpieces = ({ subtitle, title, description, slides = [] }: MasterpiecesProps) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <>
      <div className={`${style.residenciesTitleWrapper}`} id="residencies">
        <div className={`${style.residenciesTitle}`}>
          {subtitle && <h5 className="primary-col  p">{subtitle}</h5>}
          {title && <h3 className="h3">{title}</h3>}
          {description && <p className="fw-400 mb-0">{description}</p>}
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
          {slides.map((slide, index) => (
            <SwiperSlide className={`${style.residenciesSlider__slide}`} key={index}>
              <Image
                src={slide.imagePath}
                fill
                alt="img"
                className="img-hack"
              />
              <div className={style.textWrapper}>
                <h2 className={`h3 ${style.title}`}>{slide.title}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`${style.residenciesSlider__nav}`}>
          <SwiperNavButtons nextFunc={setNextEl} prevFunc={setPrevEl} />
        </div>
      </div>
    </>
  );
};

export default Masterpieces;
