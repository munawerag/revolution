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
const Ecosystem = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <>
      <div className={`${style.residenciesTitleWrapper}`} id="residencies">
        <div className={`${style.residenciesTitle}`}>
          <Heading
            title2="Ecosystem"
            desc="Our objective is to make Villa Milia a place, a personal space where
            you can be truly happy, unaffected by the flow of time, where you
            can contemplate the circle of life."
          />
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
              src={"/assets/images/project-detail/ecosystem-1.jpg"}
              fill
              alt="img"
              className="img-hack"
            />
            {/* <div className={style.virtual}>
              <Link href={"#1"}>
                <SvgComp src="/assets/svgs/virtual.svg" />
              </Link>
            </div> */}
          </SwiperSlide>
          <SwiperSlide className={`${style.residenciesSlider__slide}`}>
            <Image
              src={"/assets/images/project-detail/ecosystem-2.jpg"}
              fill
              alt="img"
              className="img-hack"
            />
            {/* <div className={style.virtual}>
              <Link href={"#1"}>
                <SvgComp src="/assets/svgs/virtual.svg" />
              </Link>
            </div> */}
          </SwiperSlide>
          <SwiperSlide className={`${style.residenciesSlider__slide}`}>
            <Image
              src={"/assets/images/home/residencies-3.jpg"}
              fill
              alt="img"
              className="img-hack"
            />
            {/* <div className={style.virtual}>
              <Link href={"#1"}>
                <SvgComp src="/assets/svgs/virtual.svg" />
              </Link>
            </div> */}
          </SwiperSlide>
        </Swiper>
        <div className={`${style.residenciesSlider__nav}`}>
          <SwiperNavButtons nextFunc={setNextEl} prevFunc={setPrevEl} />
        </div>
      </div>
    </>
  );
};

export default Ecosystem;
