"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import MainMenu from "../MainMenu";
import LanguageSelector from "./LanguageSelector";
import { usePathname } from "next/navigation";
import EnquireNowPopup from "../EnquireNowPopup";

interface HeaderProps {
  data?: {
    logo?: {
      src?: string;
    };
    header?: {
      menuText?: string;
      extraMenu?: Array<{
        label?: string;
        link?: string;
      }>;
    };
    mainMenu?: any;
    enquireNowText?: string;
  };
}

const Header = ({ data = {} }: HeaderProps) => {
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

  const { logo, header, mainMenu, enquireNowText } = data;

  return (
    <>
      {/* slide menu */}
      <div className={`slide-menu ${menuActive && "active"}`}>
        <MainMenu
          data={mainMenu}
          enquireNowText={enquireNowText}
          logo={logo}
          setMenuActive={setMenuActive}
          togglePopup={togglePopup}
          closePopup={() => setPopupActive(false)}
        />
      </div>
      <div className={`menu-overlay ${menuActive && "active"}`}></div>

      {/* Enquire now modal */}
      <EnquireNowPopup
        className={popupActive ? "active" : ""}
        onClose={togglePopup} // Pass togglePopup as onClose prop
      />

      <header
        className={`header ${scrolled && "sticky-header"} 
        ${hasProjectList && "detailMenu"}`}
      >
        <div className="container-s">
          <div className={`wrapper ${scrolled && "sticky"}`}>
            <div className="left-area">
              {/* menu icon */}
              <div className="nav-button" onClick={() => setMenuActive(true)}>
                <div className="menu-icon">
                  <Image
                    src="/assets/svgs/header-nav.svg"
                    width={26}
                    height={19}
                    alt="menu"
                    onClick={() => setPopupActive(false)}
                  />
                </div>
                <p>{header?.menuText || "Menu"}</p>
              </div>
              {/* search icon */}
              <div className="search">
                <Image 
                  src="/assets/svgs/search.svg" 
                  width={23} 
                  height={23} 
                  alt="search" 
                />
              </div>
            </div>
            {/* header logo */}
            <Link href={"/"} className="sticky-logo" onClick={() => setPopupActive(false)}>
              <Image 
                src={logo?.src || ""} 
                width={158} 
                height={50} 
                alt="logo" 
              />
            </Link>
            <div className="langWrapper">
              {/* language select */}
              <div className="lang">
                <LanguageSelector />
              </div>
              {/* enquire now button */}
              <button
                className="primary-anchor desktop-only lg-font"
                id="enquireDesktopOnly"
                onClick={togglePopup} // Attach toggle function
              >
                {enquireNowText || "Enquire Now"}
              </button>
            </div>
          </div>
          {/* extra menu */}
          <div className="extraMenu">
            <ul>
              {header?.extraMenu?.map((item, index) => (
                <li key={index}>
                  <Link href={item?.link || "#"} className="w-uline">
                    {item?.label || ""}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
