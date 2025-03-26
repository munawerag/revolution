"use client";
import { useInView } from "react-intersection-observer";

import style from "../index.module.scss";
import Image from "next/image";

const TitleOne = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  return (
    <>
      <div className={style.homeBanner__titleOneSpace} ref={ref} id="overview"></div>
      <div className={`${style.homeBanner__titleOne} ${inView ? style.active : ""}`}>
        <h5 className={`${style.logo}`}>
          <Image src={"/assets/svgs/banner-logo.svg"} width={216} height={52} alt="logo" />
        </h5>
        <h3 className={`${style.title2} fw-400`}>
          22Palms embodies sustainability by reimagining an existing industrial building
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua the enim ad minim veniam, quis nostrud exercitation
          ullamco
        </p>
      </div>
    </>
  );
};

export default TitleOne;
