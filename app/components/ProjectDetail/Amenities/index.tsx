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

const data = [
  {
    title: "Lorem ipsum dolor",
    img: "/assets/images/project-detail/amenities-1.jpg",
    ctaLink: "#",
  },
  {
    title: "Lorem ipsum",
    img: "/assets/images/project-detail/amenities-2.jpg",
    ctaLink: "#",
  },
  {
    title: "Lorem ipsum dolor",
    img: "/assets/images/project-detail/amenities-3.jpg",
    ctaLink: "#",
  },
  // {
  //   title: "Lorem Ipsum Dolor",
  //   img: "/assets/images/project-detail/amenities-4.jpg",
  //   ctaLink: "#",
  // },
];

const Amenities = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <section className={style.section}>
      <div className={`${style.amenitiesTitleWrapper}`} id="amenities">
        <div className={style.amenitiesTitle}>
          <Heading
            // title="Amenities"
            title2="Amenities"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            hasDesc={true}
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
          {data?.map((item: any, index: number) => (
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
                  <h4 className="mb-0">{item?.title}</h4>
                </div>
                <Link
                  href={item?.ctaLink}
                  target="_blank"
                  className="fullCoverAnchor"
                ></Link>
              </div>
              {/* <div className={style.virtual}>
                <Link href={"#1"}>
                  <SvgComp src="/assets/svgs/virtual.svg" />
                </Link>
              </div> */}
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
