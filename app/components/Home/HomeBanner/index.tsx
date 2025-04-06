import style from "./index.module.scss";
import SvgComp from "../../common/SvgComp";
import Link from "next/link";

interface HomeBannerProps {
  data?: {
    video?: string;
    content?: {
      subTitle?: string;
      title?: string;
      link?: {
        url: string;
        title: string;
      };
    };
  };
}

const HomeBanner = ({ data }: HomeBannerProps) => {
  return (
    <>
      <section className={style.homeBanner}>
        {data?.video && (
          <div className={style.homeBanner__video}>
            <video 
              src={data.video} 
              autoPlay 
              muted 
              loop={true} 
            />
          </div>
        )}
        <div className="container-s">
          {data?.content && (
            <div className={`${style["content"]}`}>
              {data.content.subTitle && (
                <span className={`${style.subTitle} text-upper`}>{data.content.subTitle}</span>
              )}
              {data.content.title && (
                <h3 className="h3 line-clamp-1">{data.content.title}</h3>
              )}
              {data.content.link && (
                <Link href={data.content.link.url} className={`${style.link} uline uline--stretch`}>
                  <span className="uline__title">{data.content.link.title}</span>
                </Link>
              )}
            </div>
          )}
        </div>
        
        
        
      </section>
    </>
  );
};

export default HomeBanner;
