import React from "react";
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
    </>
  );
};

export default HomeBanner;
