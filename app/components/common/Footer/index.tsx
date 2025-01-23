import Image from "next/image";
import style from "./index.module.scss"
import SvgComp from "../SvgComp";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container-s">
        <div className="custom-row">
          <div className="col_12 col_lg_offset_5 col_lg_2">
            <Link href={"/"} className={`${style.logoWrapper}`}>
              <SvgComp src="/assets/svgs/footer-logo.svg" />
            </Link>
          </div>
          <div className="col_12 col_lg_offset_3 col_lg_2">
            <div className={style.phoneWrapper}>
              <p className={`sm-font ${style.title}`}>Enquire Now</p>
              <Link href={"tel:+971 54 308 6000"} className={style.phone}>+971 54 308 6000</Link>
            </div>
          </div>
        </div>
        <div className="custom-row">
          <div className="col_12 col_lg_2">
            <div className={style.trademarkWrapper}>
              <SvgComp src="/assets/svgs/trademark-1.svg" />
              <SvgComp src="/assets/svgs/trademark-2.svg" />
              <SvgComp src="/assets/svgs/trademark-3.svg" />
            </div>
          </div>
          <div className="col_12 col_lg_offset_1 col_lg_6">
            <div className={`${style.wrapper}`}>
              <ul className={`${style.menu}`}>
                <li className={style.menuItem}>
                  <Link href={"#"}>
                    Eywa Story
                  </Link>
                </li>
                <li className={style.menuItem}>
                  <Link href={"#"}>
                    Revolution
                  </Link>
                </li>
                <li className={style.menuItem}>
                  <Link href={"#"}>
                    Privacy Policy
                  </Link>
                </li>
                <li className={style.menuItem}>
                  <Link href={"#"}>
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col_12 col_lg_offset_1 col_lg_2">
            <div className={style.socialContainer}>
              <p>Follow Us</p>
              <ul className={style.socialWrapper}>
                <li className={style.socialItem}>
                  <Link href={"#"}>
                    <SvgComp src="/assets/svgs/facebook.svg" />
                  </Link>
                </li>
                <li className={style.socialItem}>
                  <Link href={"#"}>
                    <SvgComp src="/assets/svgs/instagram.svg" />
                  </Link>
                </li>
                <li className={style.socialItem}>
                  <Link href={"#"}>
                    <SvgComp src="/assets/svgs/twitter.svg" />
                  </Link>
                </li>
                <li className={style.socialItem}>
                  <Link href={"#"}>
                    <SvgComp src="/assets/svgs/linkedin.svg" />
                  </Link>
                </li>
                <li className={style.socialItem}>
                  <Link href={"#"}>
                    <SvgComp src="/assets/svgs/youtube.svg" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
