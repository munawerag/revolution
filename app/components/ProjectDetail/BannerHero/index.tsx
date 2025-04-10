import TitleOne from "./TitleOne";
import TitleTwo from "./TitleTwo";
import style from "./BannerHero.module.scss";
import BannerLogo from "./BannerLogo";

interface BannerHeroData {
  video?: {
    src?: string;
  };
  description?: {
    title?: string;
    subtitle?: string;
  };
}

interface BannerHeroProps {
  bannerData?: BannerHeroData;
  logoData?: any;
  titleOneData?: any;
  titleTwoData?: any;
}

const BannerHero = ({ bannerData, logoData, titleOneData, titleTwoData }: BannerHeroProps) => {
  return (
    <>
      <div className={style.banner}>
        <div className={style.banner__video}>
          <video 
            src={bannerData?.video?.src || ""} 
            autoPlay 
            muted 
            loop={true}
          ></video>
        </div>
        <div className={style.banner__descripWrapper}>
          <div className={style.banner__descrip}>
            <h5 className={`${style.h5} h5`}>{bannerData?.description?.title || ""}</h5>
            <h2 className="h2">{bannerData?.description?.subtitle || ""}</h2>
          </div>
        </div>
      </div>
      <BannerLogo logoData={logoData} />
      <TitleOne titleOneData={titleOneData} />
      <TitleTwo titleTwoData={titleTwoData} />
    </>
  );
};

export default BannerHero;
