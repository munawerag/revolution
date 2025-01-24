import React from "react";
import style from "./index.module.scss";
import SvgComp from "../../common/SvgComp";

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
        <div className={style.chat}>
          <SvgComp src="/assets/svgs/chat.svg" />
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
