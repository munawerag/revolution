import Image from "next/image";
import style from "./BeautyRiga.module.scss";

export default function BeautyRiga() {
  return (
    <section className="section gray-color-bg">
      <div className="container-s">
        <div className="custom-row">
          <div className="col_12 col_md_6">
            <div className={`${style["img-wrapper"]}`}>
              <Image
                src="/assets/images/riga/beauty-riga.jpg"
                alt="riga"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="col_12 col_md_5">
            <div className="text-content">
              <h3>Architectural beauty of Riga</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proiden
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
