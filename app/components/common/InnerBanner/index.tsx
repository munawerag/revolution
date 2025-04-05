import Image from "next/image";
import style from "./InnerBanner.module.scss";

export interface InnerBannerProps {
  desktopImage: string;
  mobileImage: string;
  alt?: string;
  VideoUrl?: string | undefined;
}

export default function InnerBanner({
  desktopImage,
  mobileImage,
  alt,
  VideoUrl,
}: InnerBannerProps) {
  return (
    <section className={`${style["wrapper"]}`}>
      {!!VideoUrl ? (
        <video className={`${style["video"]}`} autoPlay loop muted playsInline>
          <source src={VideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <picture className={`${style["picture"]}`}>
          <source media="(min-width: 640px)" srcSet={desktopImage} />
          <Image
            className="img-hack"
            src={mobileImage}
            alt={alt ? alt : "Inner Banner"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </picture>
      )}
    </section>
  );
}
