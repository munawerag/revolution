import Image from "next/image";
import style from "./MainTagLine.module.scss";

export default function MainTagLine() {
  return (
    <section className="section">
      <div className="container">
        <div className={`${style["wrapper-top"]}`}>
          <div className="custom-row no-gutters justify-between">
            <div className="col_12 col_lg_5">
              <div className="wrapper-left">
                <span className={`${style["date"]}`}>June 11, 2024</span>
                <h2 className="h2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </h2>
              </div>
            </div>
            <div className="col_12 col_lg_4">
              <div className={`${style["wrapper-right"]}`}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip.
                </p>
              </div>
            </div>
          </div>
          <div className={`${style["main-figure"]}`}>
            <Image src="/assets/images/blog-detail/main.jpg" alt="main" className="img-hack" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </div>
          <div className={`${style["center-description"]}`}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo sequat. fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
