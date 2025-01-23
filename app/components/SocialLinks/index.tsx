import Link from "next/link";
import style from "./socialLinks.module.scss";
import Image from "next/image";
interface SocialLinksProps {
  isVertical?: boolean;
}

const SocialLinks = ({ isVertical }: SocialLinksProps) => {
  return (
    <>
      <ul
        className={`${style.socialLinks} ${isVertical ? style.isVertical : ""}`}
      >
        <li className={style.socialLink}>
          <Link href={"/"}>
            <Image
              src={"/assets/svgs/facebook.svg"}
              width={16}
              height={16}
              alt="social"
            />
          </Link>
        </li>
        <li className={style.socialLink}>
          <Link href={"/"}>
            <Image
              src={"/assets/svgs/instagram.svg"}
              width={16}
              height={16}
              alt="social-icon"
            />
          </Link>
        </li>
        <li className={style.socialLink}>
          <Link href={"/"}>
            <Image
              src={"/assets/svgs/twitter.svg"}
              width={16}
              height={16}
              alt="social-icon"
            />
          </Link>
        </li>
        <li className={style.socialLink}>
          <Link href={"/"}>
            <Image
              src={"/assets/svgs/linkedin.svg"}
              width={16}
              height={16}
              alt="social-icon"
            />
          </Link>
        </li>
        <li className={style.socialLink}>
          <Link href={"/"}>
            <Image
              src={"/assets/svgs/youtube.svg"}
              width={16}
              height={16}
              alt="social-icon"
            />
          </Link>
        </li>
      </ul>
    </>
  );
};
export default SocialLinks;
