import React from "react";
import TitleOne from "./TitleOne";
import TitleTwo from "./TitleTwo";
import Image from "next/image";
import SocialLinks from "../../SocialLinks";
import PrimaryButton from "../../Buttons/PrimaryButton";
import style from "./index.module.scss";

const HomeBanner = () => {
  return (
    <>
      <div className={style.homeBanner}>
        <div className={style.homeBanner__video}>
          <video
            src="/assets/videos/banner.mp4"
            autoPlay
            muted
            loop={true}
          ></video>
        </div>
      </div>
      <TitleOne />
      <TitleTwo />
    </>
  );
};

export default HomeBanner;
