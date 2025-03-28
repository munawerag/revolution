import TitleOne from "./TitleOne";
import TitleTwo from "./TitleTwo";
import style from "./BannerHero.module.scss";
import BannerLogo from "./BannerLogo";

const BannerHero = () => {
  return (
    <>
      <div className={style.banner}>
        <div className={style.banner__video}>
          <video src="/assets/videos/22palm-office-video.mp4" autoPlay muted loop={true}></video>
        </div>
        <div className={style.banner__descripWrapper}>
          <div className={style.banner__descrip}>
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

export default BannerHero;
