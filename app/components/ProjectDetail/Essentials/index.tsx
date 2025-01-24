"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import style from "./index.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import SwiperNavButtons from "../../Buttons/SwiperNavButtons";
import Heading from "../../common/Heading";

const data = [
  {
    title: "24/7 concierge service",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. quat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    img: "/assets/images/home/essentials-1.jpg",
  },
  {
    title: "Outdoor lounge seating & waterfalls",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. quat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    img: "/assets/images/home/essentials-2.jpg",
  },
  {
    title: "Outdoor lounge seating & waterfalls",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. quat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    img: "/assets/images/home/essentials-3.jpg",
  },
];

const Essentials = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <>
      <div className={style.essentialsTitleWrapper}>
        <div className={style.essentialsTitle}>
          <Heading
            title="Refined Living Essentials"
            title2="A Lifestyle Of Comfort And Ease Awaits"
            desc="At Eywa, residents are treated to exceptional 5-star concierge
            services, providing personalized assistance with reservations, event
            planning, in-residence dining, and more—transforming everyday living
            into a seamless blend of luxury and convenience."
          />
        </div>
      </div>
      <div className={style.essentialsSlider}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={50}
          speed={1200}
          navigation={{
            prevEl,
            nextEl,
          }}
          modules={[Pagination, Navigation]}
          pagination={{
            type: "progressbar",
          }}
          className="essentials-slider"
        >
          {data?.map((item: any, index: number) => (
            <SwiperSlide className={style.essentials__slide} key={index}>
              <div className={style.card}>
                <div className={style.imgWrapper}>
                  <Image
                    src={item?.img}
                    width={600}
                    height={465}
                    alt="img"
                    className="img-hack"
                  />
                </div>
                <div className={style.textWrapper}>
                  <h4 className={`${style.title} line-clamp-1`}>
                    {item?.title}
                  </h4>
                  <p className={`line-clamp-6`}>{item?.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={style.essentials__nav}>
          <SwiperNavButtons nextFunc={setNextEl} prevFunc={setPrevEl} />
        </div>
      </div>
    </>
  );
};

export default Essentials;
