"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import style from "./index.module.scss"

const TrophyForRealCollectors = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,

  });
  return (
    <>
      <div className={`${style.realCollectionTitleWrapper}`} id="treeOfLife">
        <div className={`${style.realCollectionTitle}`}>
          <div className="title1">Eywa the most</div>
          <div className="title2">
            Health Conscious & unique building in the world{" "}
          </div>
        </div>
      </div>
      <div className={`${style.realCollection__img}  ${inView ? style.inView : ""}`} ref={ref}>
        <Image
          src={"/assets/images/home/img-1.jpg"}
          fill
          alt="img"
          className="img-hack"
        />
        <div className={style.textWrapper}>
          <h6 className={`fw-500 text-center text-uppercase`}>{"trophy for real collectors"}</h6>
          <h3 className={`fw-300 text-center ${style.title}`}>{"Tree Of Life"}</h3>
          <p className={`sm-font text-center mb-0`}>Eywa is strikingly unique from your very first glimpse, instantly evoking a glorious Tree of Life. An organic canopy of branches, an enticing weave of roots, a floating oasis and a living breathing building that represents timeless wisdom and enduring growth.</p>
        </div>
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

export default TrophyForRealCollectors;
