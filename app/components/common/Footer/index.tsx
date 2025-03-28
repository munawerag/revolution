import SvgComp from "../SvgComp";
import Link from "next/link";
import FooterLinks from "./FooterLinks";
import Image from "next/image";
import style from "./Footer.module.scss";
import { link } from "fs";

const data = [
  {
    title: "More Information",
    items: [
      {
        title: "More Information",
        link: "?!",
      },

      { title: "Partners", link: "?!" },
      { title: "Careers", link: "?!" },
      { title: "Blogs", link: "?!" },
      { title: "Privacy Policies", link: "?!" },
      { title: "Cookie Policy", link: "?!" },
      { title: "Legal Notice", link: "?!" },
      { title: "Digital Accessibility", link: "?!" },
      { title: "Cookies Settings", link: "?!" },
    ],
  },
  {
    title: "Our Destinations",
    items: [
      {
        title: "Barcelona",
        link: "?!",
        subitems: [
          { title: "Bac de roda", link: "?!" },
          { title: "22 Palms", link: "?!" },
        ],
      },
      {
        title: "Berlin",
        link: "?!",
        subitems: [
          { title: "Lorem ipsum", link: "?!" },
          { title: "Lorem ipsum", link: "?!" },
        ],
      },
      {
        title: "Dubai",
        link: "?!",
        subitems: [
          { title: "Eywa tree of life", link: "?!" },
          { title: "Eywa the way of water", link: "?!" },
        ],
      },
      {
        title: "Riga",
        link: "?!",
        subitems: [
          { title: "City zen", link: "?!" },
          { title: "Lofts & rosegold", link: "?!" },
          { title: "Hoft", link: "?!" },
          { title: "Thompson terraces", link: "?!" },
          { title: "Chocolate", link: "?!" },
          { title: "Tal residence", link: "?!" },
          { title: "Philosophers residence", link: "?!" },
        ],
      },
    ],
  },
  {
    title: "Our Story",
    items: [
      { title: "R.Evolution History", link: "?!" },
      { title: "Awards & Partners", link: "?!" },
      { title: "Our Team", link: "?!" },
    ],
  },
  {
    title: "Our Landmarks",
    items: [
      { title: "Completed Projects", link: "?!" },
      { title: "Rising Projects", link: "?!" },
      { title: "Eywa", link: "?!" },
    ],
  },


];

// {
//   title: "Contact",
//   items: [{ title: "Contact Us", type: "button", link: "?!" }],
// },

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container-s">
        <div className={style.footerWrapper}>
          <div className={`${style.row}`}>
            {data.map((item: any, index: number) => {
              return (
                <div className={`${style["col"]}`} key={index}>
                  <FooterLinks data={item?.items} title={item?.title} />
                </div>
              );
            })}
          </div>
          <Link href="?!" className="primary-anchor white-col">Contact us</Link>
        </div>

        <div className={style.footerCardsWrapper}>
          <div className={style.cardItem}>
            <h3>€270m</h3>
            <h6 className="mb-0">Largest development</h6>
          </div>
          <div className={style.cardItem}>
            <h3>60</h3>
            <h6 className="mb-0">Employees</h6>
          </div>
          <div className={style.cardItem}>
            <h3>2.5m sq. ft.</h3>
            <h6 className="mb-0">Developed</h6>
          </div>
          <div className={style.cardItem}>
            <h3>1m sq. t.</h3>
            <h6 className="mb-0">Currently in development</h6>
          </div>
          <div className={style.cardItem}>
            <h3>€500–600m</h3>
            <h6 className="mb-0">Buildings developed total GDV</h6>
          </div>
        </div>

        <div className={style.bottomWrapper}>
          <div className={style.left}>
            <div className={style.logoWrapper}>
              <Link href={"/"}>
                <SvgComp src="/assets/svgs/footer-logo.svg" />
              </Link>
            </div>
          </div>
          <div className={style.center}>
            <div className="">
              <div className={style.socialLinks}>
                <Link href={"/"} className={style.socialLinks__item}>
                  <Image
                    src={"/assets/svgs/instagram-primarycol.svg"}
                    width={16}
                    height={16}
                    alt="icon"
                  />
                </Link>
                <Link href={"/"} className={style.socialLinks__item}>
                  <Image
                    src={"/assets/svgs/youtube-primarycol.svg"}
                    width={16}
                    height={16}
                    alt="icon"
                  />
                </Link>
                <Link href={"/"} className={style.socialLinks__item}>
                  <Image
                    src={"/assets/svgs/linkedin-primarycol.svg"}
                    width={16}
                    height={16}
                    alt="icon"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className={style.right}>
            <p className="mb-0">© 2025 RVL REAL ESTATE L.L.C. . All Rights Reserved. Web by DG</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
