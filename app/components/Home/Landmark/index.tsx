"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import SwiperNavButtons from "../../Buttons/SwiperNavButtons";
import Heading from "../../common/Heading";
import Link from "next/link";

import style from "./index.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    title: "Philosophers Residence",
    ctaText: "Discover",
    ctaLink: "#",
    img: "/assets/images/home/landmark-1.jpg"
  },
  {
    title: "Villa Milia",
    ctaText: "Discover",
    ctaLink: "#",
    img: "/assets/images/home/landmark-2.jpg"
  },
  {
    title: "HOFT",
    ctaText: "Discover",
    ctaLink: "#",
    img: "/assets/images/home/landmark-3.jpg"
  }
]

const Landmark = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <>
      <div className={`${style.landmarkTitleWrapper}`}>
        <Heading title="DISCOVER OUR Landmarks" title2="Explore More Projects Developed By R.Evolution" />
      </div>
      <div className={`${style.landmarkSlider}`}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          speed={1200}
          navigation={{
            prevEl,
            nextEl,
          }}
          modules={[Pagination, Navigation]}
          pagination={{
            type: "progressbar",
          }}
          className="landmark-slider"
        >
          {data?.map((item: any, index: number) =>

            <SwiperSlide className={`${style.landmark__slide}`} key={index}>
              <div className={style.card}>
                <div className={style.imgWrapper}>
                  <Image
                    src={item?.img}
                    width={870}
                    height={666}
                    alt="img"
                    className="img-hack"
                  />
                </div>
                <div className={style.contentWrapper}>
                  <h5 className={`${style.title}`}>{item?.title}</h5>
                  <Link className={`${style.anchor}`} href={item?.ctaLink}>{item?.ctaText}</Link>
                </div>
              </div>
              <Link
                href={item?.ctaLink}
                target="_blank"
                className="fullCoverAnchor"
              ></Link>
            </SwiperSlide>
          )}
        </Swiper>
        <div className={`${style.landmark__nav}`}>
          <SwiperNavButtons nextFunc={setNextEl} prevFunc={setPrevEl} />
        </div>
      </div>
    </>
  );
};

export default Landmark;
