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

interface EssentialItem {
  title?: string;
  desc: string;
  img: string;
  author?: string;
}

interface EssentialsProps {
  title?: string;
  title2?: string;
  description?: string;
  items?: EssentialItem[];
}

const Essentials = ({ title = "", title2 = "", description, items = [] }: EssentialsProps) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <>
      {(title2 || description) && (
        <div className={style.essentialsTitleWrapper}>
          <div className={style.essentialsTitle}>
            <Heading
              title={title}
              title2={title2}
              desc={description}
              hasDesc={!!description}
            />
          </div>
        </div>
      )}
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
          {items && items.length > 0 && items.map((item: EssentialItem, index: number) => (
            <SwiperSlide className={style.essentials__slide} key={index}>
              <div className={style.card}>
                <div className={style.imgWrapper}>
                  <Image
                    src={item.img}
                    width={600}
                    height={465}
                    alt="img"
                    className="img-hack"
                  />
                </div>
                <div className={style.textWrapper}>
                  {item.title && <h4 className={`${style.title} line-clamp-1`}>{item.title}</h4>}
                  {item.desc && <div className={`fw-400`} dangerouslySetInnerHTML={{ __html: item.desc }}></div>}
                  {item.author && <p className="lg-font">- {item.author}</p>}
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
