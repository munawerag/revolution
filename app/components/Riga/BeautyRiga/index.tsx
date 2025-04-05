import Image from "next/image";
import style from "./BeautyRiga.module.scss";

interface BeautyRigaProps {
  image: string;
  content: string;
  reverseLayout?: boolean;
}

export default function BeautyRiga({ image, content, reverseLayout }: BeautyRigaProps) {
  return (
    <section className={`${reverseLayout ? "gray2-color-bg" : "gray-color-bg-40"} section`}>
      <div className="container-s">
        <div className={` ${reverseLayout ? "flex-reverse justify-between" : ""}  custom-row`}>
          <div className="col_12 col_md_6">
            <div className={`${style["img-wrapper"]}`}>
              <Image
                src={image}
                alt="riga"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="col_12 col_md_5">
            <div
              className={`
              ${style["text-content"]}
              ${reverseLayout ? style["text-content-reverse"] : ""}
               `}
            >
              {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
