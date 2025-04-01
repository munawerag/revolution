"use client";
import { useState } from "react";
import Heading from "../../common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import style from "./index.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import SwiperNavButtons from "../../Buttons/SwiperNavButtons";
import Link from "next/link";
import SvgComp from "../../common/SvgComp";

interface AmenityItem {
  title: string;
  img: string;
  ctaLink: string;
}

interface AmenitiesProps {
  title?: string;
  description?: string;
  items?: AmenityItem[];
}

const Amenities = ({ title = "", description, items = [] }: AmenitiesProps) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <section className={style.section}>
      <div className={`${style.amenitiesTitleWrapper}`} id="amenities">
        <div className={style.amenitiesTitle}>
          <Heading
            title2={title}
            desc={description}
            hasDesc={!!description}
          />
        </div>
      </div>
      <div className={`${style.amenitiesSlider}`}>
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
          className="amenities-slider"
          breakpoints={{
            768: {
              spaceBetween: 50,
            },
          }}
        >
          {items?.map((item: AmenityItem, index: number) => (
            <SwiperSlide className={`${style.amenities__slide}`} key={index}>
              <div className={style.card}>
                <div className={style.imgWrapper}>
                  <Image
                    src={item.img}
                    fill
                    alt="img"
                    className="img-hack"
                  />
                </div>
                <div className={style.textWrapper}>
                  <h4 className="mb-0">{item.title}</h4>
                </div>
                <Link
                  href={item.ctaLink}
                  target="_blank"
                  className="fullCoverAnchor"
                ></Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`${style.amenities__nav}`}>
          <SwiperNavButtons nextFunc={setNextEl} prevFunc={setPrevEl} />
        </div>
      </div>
    </section>
  );
};

export default Amenities;
