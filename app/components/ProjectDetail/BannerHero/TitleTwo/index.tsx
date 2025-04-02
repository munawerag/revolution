"use client";
import { useInView } from "react-intersection-observer";
import style from "../BannerHero.module.scss";

interface TitleTwoData {
  items?: {
    title?: string;
    subtitle?: string;
  }[];
}

interface TitleTwoProps {
  titleTwoData?: TitleTwoData;
}

const TitleTwo = ({ titleTwoData }: TitleTwoProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const items = titleTwoData?.items || [];

  return (
    <>
      <div className={`${style.banner__titleTwoSpace}`} ref={ref}></div>
      <div
        className={`${style.banner__titleTwo} ${
          inView ? style.active : ""
        }`}
      >
        <div className={style.listItemsWrapper}>
          {items.map((item, index) => (
            <div className={style.listItem} key={index}>
              <h5 className={`${style.title1} h1 fw-300`}>{item?.title || ""}</h5>
              <h2 className={`${style.title2} mb-0`}>{item?.subtitle || ""}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};



export default TitleTwo;
