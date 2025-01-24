import Image from "next/image";
import Link from "next/link";
import style from "./index.module.scss"
import Heading from "../../common/Heading";

const Experience = () => {
  return (
    <>
      <div className={`${style.experienceTitleWrapper}`}>
        <div className={`${style.experienceTitle}`}>
          <Heading title="WILD LUXURY OF A UNIQUE LIFE EXPERIENCE" title2=" Eywa Is A Home Where Well-Being Is Truly The Essence Of Living" />
        </div>
      </div>
      <div className={`${style.experience__img}`}>
        <Image
          src={"/assets/images/fourth-sec-img.jpg"}
          alt="img"
          className="w-100"
          width={1920}
          height={2077}
        />
        <Link
          href={"https://storage.net-fs.com/hosting/6316408/182/"}
          target="_blank"
        >
          <Image
            src={"/assets/images/second-sec-link.png"}
            width={57}
            height={57}
            alt="img"
          />
        </Link>
      </div>
    </>
  );
};

export default Experience;
