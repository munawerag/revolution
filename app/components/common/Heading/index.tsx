import React from "react";
import style from "./index.module.scss";

type headingProps = {
  title?: string;
  title2?: string;
  desc?: string;
  hasDesc?: boolean;
};

const Heading = ({ title, title2, desc, hasDesc }: headingProps) => {
  return (
    <div className={style.titleWrapper}>
      {title && <h5 className={style.title}>{title}</h5>}
      {title2 && <h2 className={`${style.title2} ${hasDesc && style.active}`}>{title2}</h2>}
      {desc && <p className={style.para}>{desc}</p>}
    </div>
  );
};

export default Heading;
