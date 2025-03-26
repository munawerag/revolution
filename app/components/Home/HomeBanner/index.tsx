import React from "react";
import style from "./index.module.scss";
import SvgComp from "../../common/SvgComp";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <>
      <section className={style.homeBanner}>
        <div className={style.homeBanner__video}>
          <video
            src="/assets/videos/banner.mp4"
            autoPlay
            muted
            loop={true}
          ></video>
        </div>
        {/* <div>
          <span className="text-upper">explore</span>
          <h3 className="h3 line-clamp-1 text-upper">A world of ones own</h3>
          <p className="p line-clamp-2"></p>
          <Link href="?!" className="uline"></Link>
        </div> */}
        <div className={style.chat}>
          <SvgComp src="/assets/svgs/chat.svg" />
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
