"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import MainMenu from "../MainMenu";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  // useEffect(() => {
  //   document.getElementsByTagName("header")[0].classList.remove("onLoad");
  // }, []);

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
  return (
    <>
      <header className={`header`}>
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
                <select
                  className="select"
                  value="en"
                  onChange={() => {
                    return;
                  }}
                >
                  <option value="">Select Language</option>
                  <option value="en">English</option>
                  <option value="ar">عربى</option>
                </select>
                <div className="arrow-down">
                  <Image
                    src={"/assets/svgs/arrow-down.svg"}
                    width={6}
                    height={9}
                    alt="arrow down"
                  />
                </div>
              </div>
              <PrimaryButton title="Enquire Now" link="/" />
            </div>
          </div>
        </div>
      </header>
      <div className={`slide-menu ${menuActive ? "active" : ""}`}>
        <MainMenu />
        <div className="menu-close-btn" onClick={() => setMenuActive(false)}>
          <Image
            src={"/assets/svgs/cross.svg"}
            width={19}
            height={19}
            alt="close"
          />
        </div>
      </div>
      <div className={`menu-overlay ${menuActive ? "active" : ""}`}></div>
    </>
  );
};

export default Header;
