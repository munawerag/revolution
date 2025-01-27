"use client";
import { useInView } from "react-intersection-observer";
import style from "../index.module.scss";

const TitleTwo = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  return (
    <>
      <div className={`${style.homeBanner__titleTwoSpace}`} ref={ref}></div>
      <div
        className={`${style.homeBanner__titleTwo} ${
          inView ? style.active : ""
        }`}
      >
        <div className={style.listItemsWrapper}>
          <div className={style.listItem}>
            <h5 className={`${style.title1} h1 fw-300`}>7010 sqm</h5>
            <h2 className={`${style.title2}`}>Offices:</h2>
          </div>
          <div className={style.listItem}>
            <h5 className={`${style.title1} h1 fw-300`}>1001 sqm</h5>
            <h2 className={`${style.title2}`}>Terrace:</h2>
          </div>
          <div className={style.listItem}>
            <h5 className={`${style.title1} h1 fw-300`}>58 lots</h5>
            <h2 className={`${style.title2}`}>Parking:</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleTwo;
