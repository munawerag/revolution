"use client";
import Image from "next/image";
import Link from "next/link";
import style from "./index.module.scss";

const Overview = () => {
  return (
    <>
      <div className={`${style.realCollectionTitleWrapper}`} id="treeOfLife">
        <div className={`${style.realCollectionTitle}`}>
          <h5 className={style.subtitle}>Overview</h5>
          <h3 className={style.title}>Home of Science and Technology</h3>
          <p className="fw-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua the enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
        </div>
      </div>
      <div className={`${style.realCollection__img} `}>
        <Image
          src={"/assets/images/project-detail/overview.jpg"}
          fill
          alt="img"
          className="img-hack"
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

export default Overview;
