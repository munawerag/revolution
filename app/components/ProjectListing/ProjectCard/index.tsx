import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

type projectProps = {
  img: string;
  title: string;
  desc?: string;
  ctaTitle?: string;
  ctaLink?: any;
  target?: string;
  customclass?: string;
};

const ProjectCard = ({
  img,
  title,
  desc,
  ctaTitle,
  ctaLink,
  target,
  customclass,
}: projectProps) => {
  return (
    <>
      <div className={`${customclass} ${style.card}`}>
        <div className={style.imgWrapper}>
          <Image src={img} width={1080} height={700} alt={title} />
        </div>
        <div className={`${style.contentWrapper}`}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <Link
            href={ctaLink}
            target={target ? target : "_self"}
            className={`uline ${style.anchor}`}
          >
            {ctaTitle}
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
