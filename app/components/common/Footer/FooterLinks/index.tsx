"use client";
import Link from "next/link";
import Image from "next/image";
import style from "./FooterLinks.module.scss";
import { useRef, useEffect, useState } from "react";

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
  isActive?: boolean;
  onToggle?: () => void;
}

const FooterLinks = ({ data, title, isActive = false, onToggle }: FooterLinksProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if window is mobile width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 576);
    };

    // Initial check
    checkMobile();

    // Add listener for resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Measure content height when component mounts and whenever data changes
  useEffect(() => {
    if (contentRef.current && isMobile) {
      const height = contentRef.current.scrollHeight;
      setContentHeight(height);
    }
  }, [data, isMobile]);

  // Optionally remeasure on window resize
  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current && isMobile) {
        const height = contentRef.current.scrollHeight;
        setContentHeight(height);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div className={style.footerLinksWrapper}>
      <div className={style.linksColumn}>
        <div className={style.linksHead} onClick={onToggle}>
          <span className={style.title}>{title}</span>
          <div className={`${style.dropdownArrow} ${isActive ? style.active : ""}`}>
            <Image src={"/assets/svgs/footer-arrow.svg"} width={9} height={14} alt="arrow" />
          </div>
        </div>
        <div
          className={`${style.listWrapper} ${isActive ? style.active : ""}`}
          ref={contentRef}
          style={isMobile ? (isActive ? { maxHeight: `${contentHeight}px` } : { maxHeight: "0" }) : {}}
        >
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
