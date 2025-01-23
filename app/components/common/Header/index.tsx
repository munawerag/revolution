"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  useEffect(() => {
    document.getElementsByTagName("header")[0].classList.remove("onLoad");
  }, []);

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
      <header className={`header onLoad`}>
        <div className="container-s">
          <div className={`wrapper ${scrolled ? "sticky" : ""}`}>
            <div className="nav-button" onClick={() => setMenuActive(true)}>
              <Image
                src={"/assets/svgs/header-nav.svg"}
                width={25}
                height={17}
                alt="img"
              />
            </div>
            <div className="menuOne">
              <div className="menuOne__item">
                <Link href={"#overview"} className="w-uline">
                  Overview
                </Link>
              </div>
              <div className="menuOne__item">
                <Link href={"#treeOfLife"} className="w-uline">
                  Tree of life
                </Link>
              </div>
              <div className="menuOne__item">
                <Link href={"#residencies"} className="w-uline">
                  residencies
                </Link>
              </div>
            </div>
            <Link href={"/"} className="logo">
              <Image
                src={"/assets/svgs/logo.svg"}
                width={147}
                height={123}
                alt="logo"
              />
            </Link>
            <Link href={"/"} className="sticky-logo">
              <Image
                src={"/assets/svgs/logo.svg"}
                width={147}
                height={123}
                alt="logo"
              />
            </Link>
            <div className="menuTwo">
              <div className="menuTwo__item">
                <Link href={"#amenities"} className="w-uline">
                  amenities
                </Link>
              </div>
              <div className="menuTwo__item">
                <Link href={"#location"} className="w-uline">
                  location
                </Link>
              </div>
              <div className="menuTwo__item">
                <Link href={"#contact"} className="w-uline">
                  Contact
                </Link>
              </div>
            </div>
            <div className="langWrapper">
              <div className="lang">
                <Image
                  src={"/assets/svgs/language.svg"}
                  width={104}
                  height={27}
                  alt="logo"
                />
              </div>
              {/* <div className="search">
                <Image
                  src={"/assets/svgs/search.svg"}
                  width={16}
                  height={17}
                  alt="logo"
                />
              </div> */}
            </div>
          </div>
        </div>
      </header>
      {/* <div className="headerTwo">
        <div className="container-s">
          <div className="wrapper">
            <div className="nav-button" onClick={() => setMenuActive(true)}>
              <Image
                src={"/assets/svgs/header-nav.svg"}
                width={25}
                height={17}
                alt="img"
              />
            </div>
            <div className="menuOne">
              <div className="menuOne__item">
                <Link href={"/"} className="w-uline">
                  Overview
                </Link>
              </div>
              <div className="menuOne__item">
                <Link href={"/"} className="w-uline">
                  Tree of life
                </Link>
              </div>
              <div className="menuOne__item">
                <Link href={"/"} className="w-uline">
                  residencies
                </Link>
              </div>
            </div>
            <Link href={"/"} className="logo">
              <Image
                src={"/assets/svgs/logo.svg"}
                width={147}
                height={123}
                alt="logo"
              />
            </Link>

            <div className="menuTwo">
              <div className="menuTwo__item">
                <Link href={"/"} className="w-uline">
                  amenities
                </Link>
              </div>
              <div className="menuTwo__item">
                <Link href={"/"} className="w-uline">
                  location
                </Link>
              </div>
              <div className="menuTwo__item">
                <Link href={"/"} className="w-uline">
                  Contact
                </Link>
              </div>
            </div>
            <div className="langWrapper">
              <div className="lang">
                <Image
                  src={"/assets/svgs/language.svg"}
                  width={104}
                  height={27}
                  alt="logo"
                />
              </div>
              <div className="search">
                <Image
                  src={"/assets/svgs/search.svg"}
                  width={16}
                  height={17}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className={`slide-menu ${menuActive ? "active" : ""}`}>
        <Image
          src={"/assets/images/slide-menu-new.jpg"}
          width={1395}
          height={980}
          alt="menu"
        />
        <div
          className="menu-close-btn"
          onClick={() => setMenuActive(false)}
        ></div>
      </div>
      <div className={`menu-overlay ${menuActive ? "active" : ""}`}></div>
    </>
  );
};

export default Header;
