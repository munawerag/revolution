"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import style from "../FooterLinks/index.module.scss";

type footerLinksProps = {
  data: any;
  title: any;
};

const FooterLinks = ({ data, title }: footerLinksProps) => {
  const [active, setActive] = useState(false);

  return (
    <div className={style.footerLinksWrapper}>
      <div className={style.linksColumn}>
        <div className={style.linksHead} onClick={() => setActive(!active)}>
          <span className={style.title}>{title}</span>
          <div
            className={`${style.dropdownArrow} ${active ? style.active : ""}`}
          >
            <Image
              src={"/assets/svgs/footer-arrow.svg"}
              width={9}
              height={14}
              alt="arrow"
            />
          </div>
        </div>
        <div className={`${style.listWrapper} ${active ? style.active : ""}`}>
          <ul>
            {data.map((item: any, index: number) => {
              return (
                <li key={index}>
                  <Link
                    href={item.link || "/"}
                    target={item?.link?.target || "_self"}
                    className={`${
                      item?.type == "button"
                        ? "primary-anchor white-col"
                        : "w-uline"
                    }`}
                  >
                    {item?.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
