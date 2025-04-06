import SvgComp from "../SvgComp";
import Link from "next/link";
import FooterLinks from "./FooterLinks";
import Image from "next/image";
import style from "./Footer.module.scss";

interface SubItem {
  title: string;
  link?: string;
}

interface FooterItem {
  title: string;
  link?: string;
  type?: string;
  target?: string;
  subitems?: SubItem[];
}

interface FooterSection {
  title: string;
  items: FooterItem[];
}

interface ProgressCard {
  value: string;
  description: string;
}

interface SocialLink {
  icon: string;
  link: string;
}

interface FooterData {
  sections: FooterSection[];
  contactLink: {
    title: string;
    link: string;
  };
  companyProgress: ProgressCard[];
  socialLinks: SocialLink[];
  copyright: string;
}

interface FooterProps {
  data: {
    logo: {
      src: string;
    };
    footer: FooterData;
  };
}

const Footer = ({ data }: FooterProps) => {
  return (
    <footer className={style.footer}>
      <div className="container-s">
        <div className={style.footerWrapper}>
          <div className={`${style.row}`}>
            {data.footer.sections.map((item: FooterSection, index: number) => {
              return (
                <div className={`${style["col"]}`} key={index}>
                  <FooterLinks data={item?.items} title={item?.title} />
                </div>
              );
            })}
          </div>
          <Link href={data.footer.contactLink.link} className="primary-anchor white-col">
            {data.footer.contactLink.title}
          </Link>
        </div>

        {/* companies progress */}
        <div className={style.footerCardsWrapper}>
          {data.footer.companyProgress.map((item: ProgressCard, index: number) => (
            <div className={style.cardItem} key={index}>
              <h3>{item.value}</h3>
              <h6 className="mb-0">{item.description}</h6>
            </div>
          ))}
        </div>

        <div className={style.bottomWrapper}>
          <div className={style.left}>
            {/* logo */}
            <div className={style.logoWrapper}>
              <Link href={"/"}>
                <Image src={data.logo.src} alt="footer logo" width={279} height={89} />
              </Link>
            </div>
          </div>
          <div className={style.center}>
            <div className="">
              <div className={style.socialLinks}>
                {data.footer.socialLinks.map((item: SocialLink, index: number) => (
                  <Link href={item.link} className={style.socialLinks__item} key={index}>
                    <Image
                      src={item.icon}
                      width={16}
                      height={16}
                      alt="icon"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={style.right}>
            <p className="mb-0">{data.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
