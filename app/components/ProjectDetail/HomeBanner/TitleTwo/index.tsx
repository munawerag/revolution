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
            <h5 className={style.title1}>Location</h5>
            <h2 className={style.title2}>Dubai Water Canal</h2>
          </div>
          <div className={style.listItem}>
            <h5 className={style.title1}>Total units</h5>
            <h2 className={style.title2}>52</h2>
          </div>
          <div className={style.listItem}>
            <h5 className={style.title1}>Total area</h5>
            <h2 className={style.title2}>
              37,284 <span>Sq. ft</span>
            </h2>
          </div>
          <div className={style.listItem}>
            <h5 className={style.title1}>No of Storeys</h5>
            <h2 className={style.title2}>G+19</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleTwo;
