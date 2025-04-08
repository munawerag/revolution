import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import SvgComp from "@/app/components/common/SvgComp";
import PrimaryButton from "@/app/components/Buttons/PrimaryButton";

interface MainMenuProps {
  setMenuActive: (active: boolean) => void;
  togglePopup: () => void;
  closePopup?: () => void;
  logo?: {
    src?: string;
  };
  data?: {
    navigation?: Array<{
      id?: number;
      label?: string;
      link?: string;
      target?: string;
      submenu?: Array<{
        label?: string;
        link?: string;
      }>;
    }>;
    additionalLinks?: Array<{
      label?: string;
      link?: string;
    }>;
    locations?: {
      title?: string;
      items?: Array<{
        label?: string;
        link?: string;
      }>;
    };
  };
  enquireNowText?: string;
}

const MainMenu = ({
  setMenuActive,
  togglePopup,
  closePopup,
  logo = {},
  data = {},
  enquireNowText = "Enquire Now",
}: MainMenuProps) => {
  const [active, setActive] = useState<number | null>(1);
  const [locationsActive, setLocationsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1025);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="main__menu">
        <div className="col-1">
          {/* menu logo */}
          <div className="menu__logo">
            <Link
              href="/"
              onClick={() => {
                setMenuActive(false);
              }}
            >
              <Image src={logo?.src || ""} width={277} height={88} alt="logo" />
            </Link>
          </div>

          <nav className="nav__menu">
            <ul className="nav__menu__leftCol">
              {/* main navigation items */}
              {data?.navigation?.map((item) => {
                return item.link ? (
                  <li key={item.id} className="nav__menu__item">
                    <Link
                      href={item.link}
                      className="menu__label"
                      target={item.target || "_self"}
                      onClick={() => {
                        setMenuActive(false);
                        setLocationsActive(false);
                        closePopup && closePopup();
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li key={item.id} className={`nav__menu__item ${active === item.id && "active"}`}>
                    <div
                      className="menu__label"
                      onMouseEnter={() => setActive(item.id || null)}
                      onClick={() => {
                        if (active && active === item.id && isMobile) {
                          setActive(null);
                          return;
                        }
                        setActive(item.id || null);
                      }}
                    >
                      {item.label}
                      <SvgComp src="/assets/svgs/arrow-right.svg" />
                    </div>
                    {item?.submenu && (
                      <nav className="submenu">
                        <ul>
                          {item.submenu.map((subItem, i) => (
                            <li key={`${subItem.label || "item"}-${i}`} className="submenu__item">
                              <Link
                                href={subItem.link || "#"}
                                className="w-uline"
                                onClick={() => {
                                  setMenuActive(false);
                                }}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    )}
                  </li>
                );
              })}

              <li
                className="nav__menu__item col-2-mob-opener"
                onClick={() => {
                  setLocationsActive(true);
                }}
              >
                <div className="menu__label">Locations</div>
              </li>

              <li>
                <nav className="additional__links">
                  <ul className="additional__links__list">
                    {data?.additionalLinks?.map((link, index) => (
                      <li key={index} className="additional__links__item">
                        <Link
                          href={link.link || "#"}
                          className="w-uline"
                          onClick={() => {
                            setMenuActive(false);
                            setLocationsActive(false);
                            closePopup && closePopup();
                          }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </li>
            </ul>
          </nav>

          <button
            className="primary-anchor mobile-only w-100 justify-center"
            id="enquireMobileOnly"
            onClick={togglePopup}
          >
            {enquireNowText}
          </button>
        </div>
        <div className={`col-2 ${locationsActive && "isActive"}`}>
          <div className="locations__wrapper">
            <div
              className="back__icon "
              onClick={() => {
                setLocationsActive(false);
              }}
            >
              <SvgComp src="/assets/svgs/arrow-right.svg" />
            </div>
            <p className="locations__title">{data?.locations?.title || ""}</p>
            <ul className="locations">
              {data?.locations?.items?.map((location, index) => (
                <li key={index} className="locations__item">
                  <Link
                    href={location.link || "#"}
                    onClick={() => {
                      setMenuActive(false);
                      setLocationsActive(false);
                      closePopup && closePopup();
                    }}
                  >
                    {location.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="menu-close-btn"
        onClick={() => {
          setMenuActive(false);
          setLocationsActive(false);
        }}
      >
        <Image src="/assets/svgs/cross.svg" width={20} height={19} alt="close" />
      </div>
    </>
  );
};

export default MainMenu;
