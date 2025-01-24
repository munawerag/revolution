import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SvgComp from "@/app/components/common/SvgComp";
import PrimaryButton from "../../Buttons/PrimaryButton";

const MainMenu = ({ setMenuActive }: any) => {
  const [active, setActive] = useState<number | null>(1);
  const [locationsActive, setLocationsActive] = useState(false);

  const navigation = [
    {
      id: 1,
      label: "Our Destination",
      submenu: [
        { label: "Destination 1", link: "#" },
        { label: "Destination 2", link: "#" },
        { label: "Destination 3", link: "#" },
      ],
    },
    {
      id: 2,
      label: "Our Story",
      submenu: [
        { label: "Story 1", link: "#" },
        { label: "Story 2", link: "#" },
        { label: "Story 3", link: "#" },
      ],
    },
    {
      id: 3,
      label: "Our Landmarks",
      submenu: [
        { label: "Completed Projects", link: "#" },
        { label: "Rising Brilliance", link: "#" },
        { label: "Eywa", link: "#" },
      ],
    },
    { id: 4, label: "Our Uniqueness", link: "#" },
    { id: 5, label: "Contact Us", link: "#" },
  ];

  return (
    <>
      <div className="main__menu">
        <div className="col-1">
          <div className="menu__logo">
            <Image
              src={"/assets/svgs/logo.svg"}
              width={277}
              height={88}
              alt="logo"
            />
          </div>

          <nav className="nav__menu">
            <ul className="nav__menu__leftCol">
              {navigation.map((item) => {
                return item.link ? (
                  <li key={item.id} className="nav__menu__item">
                    <Link href={item.link} className="menu__label">
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li
                    key={item.id}
                    className={`nav__menu__item ${
                      active === item.id ? "active" : ""
                    } `}
                    onMouseEnter={() => setActive(item.id)}
                    onMouseLeave={() => setActive(null)}
                    onClick={() => {
                      if (active) {
                        setActive(null);
                        return;
                      }
                      setActive(item.id);
                    }}
                  >
                    <div className="menu__label">
                      {item.label}
                      <SvgComp src="/assets/svgs/arrow-right.svg" />
                    </div>
                    <nav className="submenu">
                      <ul>
                        {item?.submenu?.map((subItem, i) => {
                          return (
                            <li
                              key={subItem.link + i}
                              className="submenu__item"
                            >
                              <Link href={subItem.link} className="w-uline">
                                {subItem.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
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
                    <li className="additional__links__item">
                      <Link href="#" className="w-uline">
                        Careers
                      </Link>
                    </li>
                    <li className="additional__links__item">
                      <Link href="#" className="w-uline">
                        Properties Names
                      </Link>
                    </li>

                    <li className="additional__links__item">
                      <Link href="#" className="w-uline">
                        Blogs
                      </Link>
                    </li>
                    <li className="additional__links__item">
                      <Link href="#" className="w-uline">
                        Broker Portal
                      </Link>
                    </li>
                  </ul>
                </nav>
              </li>
            </ul>
          </nav>

          <PrimaryButton
            title="Enquire Now"
            link="/"
            className="mobile-only w-100 justify-center"
          />
        </div>
        <div className={`col-2 ${locationsActive ? "isActive" : ""}`}>
          <div className="locations__wrapper">
            <div
              className="back__icon"
              onClick={() => {
                setLocationsActive(false);
              }}
            >
              <SvgComp src="/assets/svgs/arrow-right.svg" />
            </div>
            <p className="locations__title">Discover R.evolution In...</p>
            <ul className="locations">
              <li className="locations__item">Barcelona</li>
              <li className="locations__item">Berlin</li>
              <li className="locations__item">Dubai</li>
              <li className="locations__item">Riga</li>
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
        <Image
          src={"/assets/svgs/cross.svg"}
          width={19}
          height={19}
          alt="close"
        />
      </div>
    </>
  );
};

export default MainMenu;
