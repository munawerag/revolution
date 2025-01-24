import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

const OurUnique = () => {
  return (
    <>
      <section className={`section ${style.unique}`}>
        <div className="container-s">
          <div className="custom-row">
            <div className="col_sm_6 col_12">
              <Image
                src={"/assets/images/project-list/unique.jpg"}
                width={870}
                height={768}
                alt="unique"
                className="img-hack"
              />
            </div>
            <div className="col_sm_5 col_12">
              <div className={style.contentWrapper}>
                <h3>Our Uniqueness</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proiden
                </p>
                <Link
                  href="/"
                  target="_self"
                  className={`uline ${style.anchor}`}
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurUnique;
