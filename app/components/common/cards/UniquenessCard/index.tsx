import Image from "next/image";
import Link from "next/link";
import style from "./UniquenessCard.module.scss";

export interface UniquenessCardProps {
  img: string;
  subTitle?: string;
  title: string;
  desc?: string;
  ctaTitle?: string;
  ctaLink?: any;
  target?: string;
  customclass?: string;
}

const UniquenessCard = ({
  img,
  subTitle,
  title,
  desc,
  ctaTitle,
  ctaLink,
  target,
  customclass,
}: UniquenessCardProps) => {
  return (
    <>
      <div className={`${customclass ? customclass : ""} ${style.card}`}>
        <div className={`${style.imgWrapper} img-wrapper`}>
          <Image
            src={img}
            alt={title}
            className="transition-slow"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={`${style.contentWrapper}`}>
          {subTitle && <span className={`${style.subtitle} text-upper`}>{subTitle}</span>}
          <h4 className="h4">{title}</h4>
          <p className="p line-clamp-2">{desc}</p>
          {ctaLink && (
            <Link
              href={ctaLink}
              target={target ? target : "_self"}
              className={`uline uline--stretch ${style.anchor}`}
            >
              <span className="uline__title">{ctaTitle}</span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default UniquenessCard;
