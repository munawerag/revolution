"use client";
import Image from "next/image";
import style from "./index.module.scss";

interface OverviewProps {
  subtitle?: string;
  title?: string;
  description?: string;
  imagePath?: string;
}

const Overview = ({ subtitle, title, description, imagePath }: OverviewProps) => {
  return (
    <>
      <div className={`${style.realCollectionTitleWrapper}`} id="treeOfLife">
        <div className={`${style.realCollectionTitle}`}>
          {subtitle && <h5 className={style.subtitle}>{subtitle}</h5>}
          {title && <h3 className={style.title}>{title}</h3>}
          {description && <p className="fw-400">{description}</p>}
        </div>
      </div>
      {imagePath && (
        <div className={`${style.realCollection__img} `}>
          <Image src={imagePath} fill alt="img" className="img-hack" />
        </div>
      )}
    </>
  );
};

export default Overview;
