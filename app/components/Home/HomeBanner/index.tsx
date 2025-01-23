import React from "react";
import TitleOne from "./TitleOne";
import TitleTwo from "./TitleTwo";
import Image from "next/image";
import SocialLinks from "../../SocialLinks";
import PrimaryButton from "../../Buttons/PrimaryButton";
import style from "./index.module.scss"

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
        <div className={style.homeBanner__badge}>
          <Image
            src={"/assets/images/header-badge.png"}
            width={103}
            height={332}
            alt="badge"
          />
        </div>
      </div>
      <TitleOne />
      <TitleTwo />
      <div className={`${style.socialLinksWrapper}`}>
        <SocialLinks isVertical={true} />
      </div>
      <div className={style.stickyAnchor}>
        <PrimaryButton title={"Get A Call Back"} link={"/"} />
      </div>
    </>
  );
};

export default HomeBanner;
