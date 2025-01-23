"use client";
import { useState } from "react";
import Heading from "../../common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import style from "./index.module.scss"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import SwiperNavButtons from "../../Buttons/SwiperNavButtons";
import Link from "next/link";
import SvgComp from "../../common/SvgComp";

const data = [
  {
    title: "Spa Terrace",
    img: "/assets/images/home/amenities-1.jpg",
    ctaLink: "#"
  },
  {
    title: "Pools & children's playgrounds",
    img: "/assets/images/home/amenities-2.jpg",
    ctaLink: "#"
  },
  {
    title: "Club House",
    img: "/assets/images/home/amenities-3.jpg",
    ctaLink: "#"
  },
  {
    title: "Crystal Garden",
    img: "/assets/images/home/amenities-4.jpg",
    ctaLink: "#"
  }
]

const Amenities = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <section className={style.section}>
      <div className={`${style.amenitiesTitleWrapper}`} id="amenities">
        <Heading
          title="Building Amenities"
          title2="A Harmonious Blend Of Energy And Design"
          desc="The idea and design of the amenity floor of Eywa is that of a
          spacious and comfortable home for a large family of all Eywa
          residents, Apartment No 1, where she ,as a mother, invites each
          member of her big family to enjoy life and the amenities she offers."
          hasDesc={true}
        />
      </div>
      <div className={`${style.amenitiesSlider}`}>
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
          className="amenities-slider"
        >
          {data?.map((item: any, index: number) =>

            <SwiperSlide className={`${style.amenities__slide}`} key={index}>
              <div className={style.card}>
                <div className={style.imgWrapper}>
                  <Image
                    src={item?.img}
                    // width={887}
                    // height={680}
                    fill
                    alt="img"
                    className="img-hack"
                  />
                </div>
                <div className={style.textWrapper}>
                  <h5>{item?.title}</h5>
                </div>
                <Link
                  href={item?.ctaLink}
                  target="_blank"
                  className="fullCoverAnchor"
                ></Link>
              </div>
              <div className={style.virtual}>
                <Link href={"#1"}>
                  <SvgComp src="/assets/svgs/virtual.svg" />
                </Link>
              </div>
            </SwiperSlide>
          )}

        </Swiper>
        <div className={`${style.amenities__nav}`}>
          <SwiperNavButtons nextFunc={setNextEl} prevFunc={setPrevEl} />
        </div>
      </div>
    </section>
  );
};

export default Amenities;
