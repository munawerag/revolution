import style from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

export interface ProjectProps {
  img: string;
  subTitle?: string;
  title: string;
  desc?: string;
  ctaTitle?: string;
  ctaLink?: any;
  target?: string;
  customclass?: string;
  customImgWrapper?: string;
}

const ProjectCard = ({
  img,
  subTitle,
  title,
  desc,
  ctaTitle,
  ctaLink,
  target,
  customclass,
  customImgWrapper,
}: ProjectProps) => {
  return (
    <>
      <div className={`${customclass ? customclass : ""} ${style.card}`}>
        <div className={`${style.imgWrapper} ${customImgWrapper ? customImgWrapper : ""}`}>
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
          <h3 className="line-clamp-1 text-upper">{title}</h3>
          <p className="line-clamp-2">{desc}</p>
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

export default ProjectCard;
