"use client";
import Image from "next/image";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { useInView } from "react-intersection-observer";

import style from "./index.module.scss"

const Enquire = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <>
      <div
        className={` ${style.enquireWrapper} ${inView ? style.inView : ""}`}
        ref={ref}
        id="contact"
      >
        <div className={`${style.enquireTitleWrapper}`}>
          <div className={`${style.enquireTitle}`}>
            <div className={`${style.title1}`}>enquire now</div>
            <div className={`${style.title2}`}>
              Discover 52 Exclusive Residencies Of Eywa
            </div>
          </div>
          <div className={`${style.enquire__btnWrapper}`}>
            <PrimaryButton title={"Download Brochure"} link={"/"} />
            <PrimaryButton
              title={"Request A Call Back"}
              link={"/"}
              isWhite={true}
            />
          </div>
        </div>
        <div className={`${style.enquire__img}`}>
          <Image
            src={"/assets/images/ninth-sec-img.jpg"}
            width={1920}
            height={874}
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default Enquire;
