"use client";
import { useInView } from "react-intersection-observer";

import style from "../BannerHero.module.scss";
import Image from "next/image";

const BannerLogo = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  return (
    <>
      <div
        className={style.banner__logoOneSpace}
        ref={ref}
        id="overview"
      ></div>
      <div
        className={`${style.banner__logo} ${inView ? style.active : ""}`}
      >
        <div className={`${style.logo}`}>
          <Image
            src={"/assets/svgs/banner-logo.svg"}
            width={357}
            height={86}
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default BannerLogo;
