"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import MainMenu from "../MainMenu";
import LanguageSelector from "./LanguageSelector";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    if (window.pageYOffset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const pathname = usePathname();

  // Check if the pathname contains "/project-list/"
  const hasProjectList = pathname.includes("/project-list/");

  return (
    <>
      <header
        className={`header ${scrolled ? "sticky-header" : ""} ${
          hasProjectList ? "detailMenu" : ""
        }`}
      >
        <div className="container-s">
          <div className={`wrapper ${scrolled ? "sticky" : ""}`}>
            <div className="left-area">
              <div className="nav-button" onClick={() => setMenuActive(true)}>
                <div className="menu-icon">
                  <Image
                    src={"/assets/svgs/header-nav.svg"}
                    width={25}
                    height={17}
                    alt="img"
                  />
                </div>
                <p>Menu</p>
              </div>
              <div className="search">
                <Image
                  src={"/assets/svgs/search.svg"}
                  width={23}
                  height={23}
                  alt="logo"
                />
              </div>
            </div>
            <Link href={"/"} className="sticky-logo">
              <Image
                src={"/assets/svgs/logo.svg"}
                width={277}
                height={88}
                alt="logo"
              />
            </Link>
            <div className="langWrapper">
              <div className="lang">
                <LanguageSelector />
              </div>
              <PrimaryButton
                title="Enquire Now"
                link="/"
                className="desktop-only"
              />
            </div>
          </div>
          <div className="extraMenu">
            <ul>
              <li>
                <Link href={"/"} className="w-uline">
                  Overview
                </Link>
              </li>
              <li>
                <Link href={"/"} className="w-uline">
                  Residences
                </Link>
              </li>
              <li>
                <Link href={"/"} className="w-uline">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href={"/"} className="w-uline">
                  Location
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className={`slide-menu ${menuActive ? "active" : ""}`}>
        <MainMenu setMenuActive={setMenuActive} />
      </div>
      <div className={`menu-overlay ${menuActive ? "active" : ""}`}>dsd</div>
    </>
  );
};

export default Header;
