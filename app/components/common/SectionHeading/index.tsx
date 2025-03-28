import React from "react";
import style from "./index.module.scss";

type secHeadingProps = {
  subTitle: string;
  title: string;
  desc?: string;
  isCenter?: boolean;
};

const SectionHeading = ({ subTitle, title, desc, isCenter }: secHeadingProps) => {
  return (
    <section className={`${style.titleWrapper} ${isCenter ? style.center : ""}`}>
      {subTitle && <p>{subTitle}</p>}
      {title && <h2>{title}</h2>}
      {desc && <p>{desc}</p>}
    </section>
  );
};

export default SectionHeading;
