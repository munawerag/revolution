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
        <div className="container-s">
          <div className={`${style["content"]}`}>
            <span className={`${style.subTitle} text-upper`}>explore</span>
            <h3 className="h3 line-clamp-1">{`A world of one's own`}</h3>
            <Link href="?!" className={`${style.link} uline`}>Discover More</Link>
          </div>
        </div>
        <div className={style.chat}>
          <SvgComp src="/assets/svgs/chat.svg" />
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
