"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import style from "./FooterLinks.module.scss";

interface SubItem {
  title: string;
  link?: string;
}

interface FooterItem {
  title: string;
  link?: string;
  type?: string;
  target?: string;
  subitems?: SubItem[];
}

interface FooterLinksProps {
  data: FooterItem[];
  title: string;
}

const FooterLinks = ({ data, title }: FooterLinksProps) => {
  const [active, setActive] = useState(false);

  return (
    <div className={style.footerLinksWrapper}>
      <div className={style.linksColumn}>
        <div className={style.linksHead} onClick={() => setActive(!active)}>
          <span className={style.title}>{title}</span>
          <div className={`${style.dropdownArrow} ${active ? style.active : ""}`}>
            <Image src={"/assets/svgs/footer-arrow.svg"} width={9} height={14} alt="arrow" />
          </div>
        </div>
        <div className={`${style.listWrapper} ${active ? style.active : ""}`}>
          <ul>
            {data.map((item, index) => {
              // Store subitems in a variable with a default empty array
              const subitems = item.subitems || [];
              
              return (
                <li key={index}>
                  <Link
                    href={item.link || "/"}
                    target={item?.target || "_self"}
                    className={`${item?.type == "button" ? "primary-anchor white-col" : "w-uline"}`}
                  >
                    {item?.title}
                  </Link>
                  {subitems.length > 0 && (
                    <ul className={`${style["submenuItems"]}`}>
                      {subitems.map((subitem, index) => {
                        return (
                          <li key={index}>
                            <a href={subitem.link || ""}>{subitem.title}</a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
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
