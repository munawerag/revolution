"use client";

import UniquenessCard, { UniquenessCardProps } from "../../common/cards/UniquenessCard";
import style from "./HomeUnique.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type HomeUniqueProps = {
  title?: string;
  description?: string;
  data?: UniquenessCardProps[];
};

export default function HomeUnique({ title, description, data }: HomeUniqueProps) {
  return (
    <section className="relative z-1 white-color-bg section">
      <div className="container-s">
        <div className="custom-row">
          {(title || description) && (
            <div className="col_12 col_lg_4">
              <div>
                {title && <h2 className="h3">{title}</h2>}
                {description && <p>{description}</p>}
              </div>
            </div>
          )}

          <div className="col_12 col_lg_8">
            {data && data.length > 0 && (
              <div className={`${style["slider-wrapper"]} homeUniqueness-slider-main`}>
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  breakpoints={{
                    576: { slidesPerView: 2 },
                    992: { slidesPerView: 2.5 },
                    1200: { 
                      slidesPerView: 2.5,
                      spaceBetween: 50,
                     },
                  }}
                  pagination={{
                    type: "progressbar",
                    clickable: true,
                  }}
                  className={""}
                >
                  {data.map((project: UniquenessCardProps, index: number) => (
                    <SwiperSlide key={index} className={style.swiperSlide}>
                      <UniquenessCard
                        img={project?.img}
                        subTitle={project?.subTitle}
                        title={project?.title}
                        ctaLink={project?.ctaLink}
                        ctaTitle={project?.ctaTitle}
                        desc={project?.desc}
                        customclass={style.threecolumnLayoutCard}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
