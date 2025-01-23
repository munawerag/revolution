"use client";
import { useInView } from "react-intersection-observer";
import style from "../index.module.scss"

const TitleTwo = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  return (
    <>
      <div className={`${style.homeBanner__titleTwoSpace}`} ref={ref}></div>
      <div className={`${style.homeBanner__titleTwo} ${inView ? style.active : ""}`}>
        <div className={style.listItemsWrapper}>
          <div className={style.listItem}>
            <div className={style.title1}>Location</div>
            <div className={style.title2}>Dubai Water Canal</div>
          </div>
          <div className={style.listItem}>
            <div className={style.title1}>Total units</div>
            <div className={style.title2}>52</div>
          </div>
          <div className={style.listItem}>
            <div className={style.title1}>Total area</div>
            <div className={style.title2}>
              37,284 <span>Sq. ft</span>
            </div>
          </div>
          <div className={style.listItem}>
            <div className={style.title1}>No of Storeys</div>
            <div className={style.title2}>G+19</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleTwo;
