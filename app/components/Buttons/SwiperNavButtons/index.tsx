import Image from "next/image";
import style from "./swiperNavButtons.module.scss";

interface SwiperNavButtonsProps {
  nextFunc: any;
  prevFunc: any;
  isWhite?: boolean;
}

const SwiperNavButtons = ({
  nextFunc,
  prevFunc,
  isWhite,
}: SwiperNavButtonsProps) => {
  return (
    <>
      <div
        className={`${style.wrapper} ${isWhite == true ? style.whiteBtns : ""}`}
      >
        <div
          ref={(node) => prevFunc(node)}
          className={`swiper-button-prev ${style.btn} ${style.prevBtn}`}
        >
          <Image
            src={"/assets/svgs/nav-arrow.svg"}
            width={39}
            height={15}
            alt="arrow-icon"
          />
        </div>
        <div
          ref={(node) => nextFunc(node)}
          className={`swiper-button-next ${style.btn} ${style.nextBtn}`}
        >
          <Image
            src={"/assets/svgs/nav-arrow.svg"}
            width={39}
            height={15}
            alt="arrow-icon"
          />
        </div>
      </div>
    </>
  );
};

export default SwiperNavButtons;
