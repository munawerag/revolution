import Image from "next/image";
import style from "./Tour360Card.module.scss";

export interface Tour360CardProps {
  figureUrl: string;
  title: string;
  figureClassName?: string;
}

export default function Tour360Card({ figureUrl, title, figureClassName }: Tour360CardProps) {
  return (
    <div>
      <div className={`${style.figure} ${figureClassName ? figureClassName : ""}`}>
        <Image
          src={figureUrl}
          alt="tree"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="img-hack"
        />
      </div>
      <div className={style["footer-panel"]}>
        <h4 className="h4">{title}</h4>
        <div className={style.icon}>
          <Image
            src="/assets/svgs/360-tour.svg"
            alt="tour icon"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}
