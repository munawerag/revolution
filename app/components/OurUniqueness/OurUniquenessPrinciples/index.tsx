import Image from "next/image";
import style from "./OurUniquenessPrinciples.module.scss";

// Interface for individual principle items
interface PrincipleItem {
  image: string;
  content: string;
}

// Interface for component props
interface OurUniquenessPrinciplesProps {
  principles?: PrincipleItem[];
}

export default function OurUniquenessPrinciples({ principles }: OurUniquenessPrinciplesProps) {
  return (
    <section className="section">
        <div className="container-s">
            <div className={`${style["main-wrapper"]}`}>
                {principles?.map((principle, index) => (
                    <div key={index} className={`${style["custom-row"]} custom-row`}>
                        <div className="col_12 col_md_6">
                            <div className={`${style["img-wrapper"]}`}>
                                <Image src={principle.image} alt={`Principle ${index + 1}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </div>
                        </div>
                        <div className="col_12 col_md_5">
                            <div className={`${style["text-content"]}`}>
                                <div dangerouslySetInnerHTML={{ __html: principle.content }} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
