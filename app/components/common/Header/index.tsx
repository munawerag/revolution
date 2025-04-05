"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import MainMenu from "../MainMenu";
import LanguageSelector from "./LanguageSelector";
import { usePathname } from "next/navigation";
import EnquireNowPopup from "../EnquireNowPopup";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [popupActive, setPopupActive] = useState(false); // State for popup

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

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

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (menuActive) {
      htmlElement.classList.add("overflow-hidden");
    } else {
      htmlElement.classList.remove("overflow-hidden");
    }
  }, [menuActive]);

  const pathname = usePathname();

  // Check if the pathname contains "/project-list/"
  const hasProjectList = pathname.includes("/project-list/");

  const togglePopup = () => setPopupActive(!popupActive); // Toggle popup function

  return (
    <>
      <div className={`slide-menu ${menuActive ? "active" : ""}`}>
        <MainMenu setMenuActive={setMenuActive} togglePopup={togglePopup} /> {/* Pass togglePopup */}
      </div>
      <div className={`menu-overlay ${menuActive ? "active" : ""}`}></div>

      {/* Enquire now modal */}
      <EnquireNowPopup
        className={popupActive ? "active" : ""}
        onClose={togglePopup} // Pass togglePopup as onClose prop
      />

      <header
        className={`header ${scrolled ? "sticky-header" : ""} 
        ${hasProjectList ? "detailMenu" : ""}`}
      >
        <div className="container-s">
          <div className={`wrapper ${scrolled ? "sticky" : ""}`}>
            <div className="left-area">
              <div className="nav-button" onClick={() => setMenuActive(true)}>
                <div className="menu-icon">
                  <Image src={"/assets/svgs/header-nav.svg"} width={26} height={19} alt="img" />
                </div>
                <p>Menu</p>
              </div>
              <div className="search">
                <Image src={"/assets/svgs/search.svg"} width={23} height={23} alt="logo" />
              </div>
            </div>
            <Link href={"/"} className="sticky-logo">
              <Image src={"/assets/svgs/logo.svg"} width={158} height={50} alt="logo" />
            </Link>
            <div className="langWrapper">
              <div className="lang">
                <LanguageSelector />
              </div>
              <button
                className="primary-anchor desktop-only lg-font"
                id="enquireDesktopOnly"
                onClick={togglePopup} // Attach toggle function
              >
                Enquire Now
              </button>
            </div>
          </div>
          <div className="extraMenu">
            <ul>
              <li>
                <Link href={"#treeOfLife"} className="w-uline">
                  Overview
                </Link>
              </li>
              <li>
                <Link href={"#residencies"} className="w-uline">
                  Residences
                </Link>
              </li>
              <li>
                <Link href={"#amenities"} className="w-uline">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href={"#locations"} className="w-uline">
                  Location
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
