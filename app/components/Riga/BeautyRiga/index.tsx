import Image from "next/image";
import style from "./BeautyRiga.module.scss";

interface BeautyRigaProps {
  image: string;
  content: string;
  heading?: string;
  reverseLayout?: boolean;
}

export default function BeautyRiga({ image, content, heading, reverseLayout }: BeautyRigaProps) {
  return (
    <section className={`${reverseLayout ? "gray2-color-bg" : "gray-color-bg-40"} section`}>
      <div className="container-s">
        <div className={` ${reverseLayout ? "flex-reverse justify-between" : ""}  custom-row`}>
          <div className={`col_12 ${reverseLayout ? "col_md_7" : "col_md_6"}`}>
            <div
              className={`${style["img-wrapper"]} ${
                reverseLayout ? style["img-wrapper-reverse"] : ""
              }`}
            >
              <Image
                src={image}
                alt="riga"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="img-hack"
              />
            </div>
          </div>
          <div className={`col_12 ${reverseLayout ? "col_md_4" : "col_md_5"}`}>
            <div
              className={`
              ${style["text-content"]}
              ${reverseLayout ? style["text-content-reverse"] : ""}
               `}
            >
              {heading && <h3>{heading}</h3>}
              {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
