import style from "./index.module.scss";
import SvgComp from "../SvgComp";
import Link from "next/link";
import FooterLinks from "./FooterLinks";
import Image from "next/image";

const data = [
  {
    title: "Links",
    items: [
      { title: "Our Uniqueness" },
      { title: "Partners" },
      { title: "Careers" },
      { title: "Properties Names" },
      { title: "Blogs" },
    ],
  },
  {
    title: "Our Destinations",
    items: [
      { title: "Dubai" },
      { title: "Riga" },
      { title: "Barcelona" },
      { title: "Berlin" },
    ],
  },
  {
    title: "Our Story",
    items: [
      { title: "R.Evolution History" },
      { title: "Awards & Partners" },
      { title: "Our Team" },
    ],
  },
  {
    title: "Our Landmarks",
    items: [
      { title: "Completed Projects" },
      { title: "Rising Projects" },
      { title: "Eywa" },
    ],
  },
  {
    title: "Contact",
    items: [{ title: "Contact Us", type: "button" }],
  },
];

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container-s">
        <div className={style.logoWrapper}>
          <Link href={"/"}>
            <SvgComp src="/assets/svgs/footer-logo.svg" />
          </Link>
        </div>

        <div className={style.footerWrapper}>
          <div className={`custom-row ${style.row}`}>
            {data.map((item: any, index: number) => {
              return (
                <div className="col_12 col_sm_4 col_lg_2" key={index}>
                  <FooterLinks data={item?.items} title={item?.title} />
                </div>
              );
            })}
          </div>
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
            <p className="mb-0">
              © 2025 RVL REAL ESTATE L.L.C. . All Rights Reserved. Web by DG
            </p>
          </div>
          <div className={style.right}>
            <div className={style.terms}>
              <ul>
                <li>
                  <Link href={"/"} target={"_self"} className="w-uline">
                    Privacy Policies
                  </Link>
                </li>
                <li>
                  <Link href={"/"} target={"_self"} className="w-uline">
                    Terms & Condition
                  </Link>
                </li>
              </ul>
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
