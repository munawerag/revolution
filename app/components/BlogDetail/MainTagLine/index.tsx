import Image from "next/image";
import style from "./MainTagLine.module.scss";

export interface MainTagLineProps {
  date: string;
  title: string;
  intro: string; // Contains HTML content
  mainImage: string;
  centeredDescription?: string; // Contains HTML content
}

export default function MainTagLine({
  date,
  title,
  intro,
  mainImage,
  centeredDescription,
}: MainTagLineProps) {
  return (
    <section className="section-my">
      <div className="container">
        <div className={`${style["wrapper-top"]}`}>
          <div className="custom-row no-gutters justify-between">
            <div className="col_12 col_lg_5">
              <div className="wrapper-left">
                <span className={`${style["date"]}`}>{date}</span>
                <h2 className="h2">{title}</h2>
              </div>
            </div>
            <div className="col_12 col_lg_4">
              {intro && (
                <div
                  className={`${style["wrapper-right"]}`}
                  dangerouslySetInnerHTML={{ __html: intro || "" }}
                />
              )}
            </div>
          </div>
          <div className={`${style["main-figure"]}`}>
            <Image
              src={mainImage || ""}
              alt="main"
              className="img-hack"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {centeredDescription && (
            <div
              className={`${style["center-description"]}`}
              dangerouslySetInnerHTML={{ __html: centeredDescription || "" }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
