"use client";
import Image from "next/image";
import PrimaryButton from "../../Buttons/PrimaryButton";

import style from "./index.module.scss";

const Enquire = () => {
  // const { ref, inView } = useInView({
  //   threshold: 0.5,
  //   triggerOnce: true,
  // });
  return (
    <>
      <div className={` ${style.enquireWrapper}`} id="contact">
        <div className={`${style.enquireTitleWrapper}`}>
          <div className={`${style.enquireTitle}`}>
            <h5 className={`${style.title1}`}>enquire now</h5>
            <h2 className={`${style.title2}`}>
              Discover 52 Exclusive Residencies Of Eywa
            </h2>
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
            fill
            className="img-hack"
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default Enquire;
