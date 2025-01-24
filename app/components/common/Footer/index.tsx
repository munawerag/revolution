import style from "./index.module.scss";
import SvgComp from "../SvgComp";
import Link from "next/link";
import FooterLinks from "./FooterLinks";

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
      { title: "Revolution History" },
      { title: "Values, Vision & Mission" },
      { title: "Property Stories" },
      { title: "Awards & Partners" },
      { title: "Our Team" },
    ],
  },
  {
    title: "Our Landmarks",
    items: [
      { title: "Completed Projects" },
      { title: "Rising Brilliance" },
      { title: "Eywa" },
    ],
  },
  {
    title: "Contact",
    items: [{ title: "Contact Us" }],
  },
];

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container-s">
        <Link href={"/"} className={`${style.logoWrapper}`}>
          <SvgComp src="/assets/svgs/footer-logo.svg" />
        </Link>
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
              <p className="mb-0">Social</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
