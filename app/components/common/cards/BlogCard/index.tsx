import Image from "next/image";
import Link from "next/link";
import style from "./BlogCard.module.scss";

export interface BlogCardProps {
  img: string;
  subTitle?: string;
  title: string;
  ctaTitle?: string;
  ctaLink?: any;
  target?: string;
  customclass?: string;
}

const BlogCard = ({
  img,
  subTitle,
  title,
  ctaTitle,
  ctaLink,
  target,
  customclass,
}: BlogCardProps) => {
  return (
    <>
      <div className={`${customclass ? customclass : ""} ${style.card}`}>
        <div className={`${style.imgWrapper}`}>
          <Image
            src={img}
            alt={title}
            className="transition-slow"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={`${style.contentWrapper}`}>
          {subTitle && <span className={`${style.subtitle}`}>{subTitle}</span>}
          <h4 className="h4 line-clamp-2">{title}</h4>
          {ctaLink && (
            <Link
              href={ctaLink}
              target={target ? target : "_self"}
              className={`uline ${style.anchor}`}
            >
              {ctaTitle}
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogCard;
