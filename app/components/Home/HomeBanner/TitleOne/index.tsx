"use client";
import { useInView } from "react-intersection-observer";

import style from "../index.module.scss"

const TitleOne = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  return (
    <>
      <div className={style.homeBanner__titleOneSpace} ref={ref} id="overview"></div>
      <div className={`${style.homeBanner__titleOne} ${inView ? style.active : ""}`}>
        <div className={`${style.title1}`}>overview</div>
        <div className={`${style.title2}`}>
          Harnessing Ancient Wisdom And Energy In Modern Living
        </div>
        <div className={style.para}>
          Our sages and seers knew the secrets of using all five elements of
          nature and their special characteristics and influences for the
          benefit of people for the development of real estate for living,
          prayer, entertainment, education, work, production and other purposes.
        </div>
      </div>
    </>
  );
};

export default TitleOne;
