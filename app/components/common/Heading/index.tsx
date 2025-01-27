import React from "react";
import style from "./index.module.scss";

type headingProps = {
  title: string;
  title2?: string;
  desc?: string;
  hasDesc?: boolean;
};

const Heading = ({ title, title2, desc, hasDesc }: headingProps) => {
  return (
    <div className={style.titleWrapper}>
      <div className={style.title}>{title}</div>
      <div className={`${style.title2} ${hasDesc ? style.active : ""}`}>
        {title2}
      </div>
      {desc && <p className={style.para}>{desc}</p>}
    </div>
  );
};

export default Heading;
