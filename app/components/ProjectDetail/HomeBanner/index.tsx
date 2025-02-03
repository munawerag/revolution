import React from "react";
import TitleOne from "./TitleOne";
import TitleTwo from "./TitleTwo";
import style from "./index.module.scss";
import BannerLogo from "./BannerLogo";

const HomeBanner = () => {
  return (
    <>
      <div className={style.homeBanner}>
        <div className={style.homeBanner__video}>
          <video
            src="/assets/videos/22palm-office-video.mp4"
            autoPlay
            muted
            loop={true}
          ></video>
        </div>
        <div className={style.homeBanner__descripWrapper}>
          <div className={style.homeBanner__descrip}>
            <h5 className="h5">22PALMS</h5>
            <h2 className="h2">The place for pioneering tomorrow</h2>
          </div>
        </div>
      </div>
      <BannerLogo />
      <TitleOne />
      <TitleTwo />
    </>
  );
};

export default HomeBanner;
