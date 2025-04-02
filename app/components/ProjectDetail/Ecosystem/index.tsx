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
import Link from "next/link";
import SvgComp from "../../common/SvgComp";
import Heading from "../../common/Heading";

interface EcosystemSlide {
  imagePath: string;
}

interface EcosystemProps {
  title?: string;
  description?: string;
  slides?: EcosystemSlide[];
}

const Ecosystem = ({ title = "", description, slides = [] }: EcosystemProps) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  // Early return if no slides
  if (!slides.length) {
    return null;
  }

  return (
    <>
      {/* Conditionally render title section */}
      {title && (
        <div className={`${style.residenciesTitleWrapper}`} id="residencies">
          <div className={`${style.residenciesTitle}`}>
            <Heading title2={title} desc={description} hasDesc={!!description} />
          </div>
        </div>
      )}

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
              {slide?.imagePath && (
                <Image src={slide?.imagePath} fill alt="img" className="img-hack" />
              )}
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

export default Ecosystem;
