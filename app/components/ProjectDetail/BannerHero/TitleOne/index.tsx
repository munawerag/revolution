"use client";
import { useInView } from "react-intersection-observer";
import style from "../BannerHero.module.scss";
import Image from "next/image";

interface TitleOneData {
  logo?: {
    src?: string;
  };
  title?: string;
  description?: string;
}

interface TitleOneProps {
  titleOneData?: TitleOneData;
}

const TitleOne = ({ titleOneData }: TitleOneProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  return (
    <>
      <div className={style.banner__titleOneSpace} ref={ref} id="overview"></div>
      <div className={`${style.banner__titleOne} ${inView ? style.active : ""}`}>
        <h5 className={`${style.logo}`}>
          <Image src={titleOneData?.logo?.src || ""} width={216} height={52} alt="logo" />
        </h5>
        <h3 className={`${style.title2} fw-400`}>{titleOneData?.title || ""}</h3>
        <p>{titleOneData?.description || ""}</p>
      </div>
    </>
  );
};

export default TitleOne;
