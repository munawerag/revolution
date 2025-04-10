import Image from "next/image";
import style from "./MissionVission.module.scss";

interface MissionVissionProps {
  missionVision?: {
    introText?: string;
    sections?: {
      title?: string;
      description?: string;
      image?: string;
      alt?: string;
      width?: number;
      height?: number;
    }[];
  };
}

export default function MissionVission({ missionVision = {} }: MissionVissionProps) {
  const { introText, sections = [] } = missionVision;

  return (
    <section className="section">
      <div className="container-s">
        <div className={`${style["center-paragraph"]}`}>{introText && <p>{introText}</p>}</div>
        <div className={`${style["main-cards-wrapper"]}`}>
          {sections?.map((section: any, index: number) => (
            <div key={index} className={`${style["custom-row"]} custom-row`}>
              <div className="col_12 col_md_5 col_lg_4">
                <div className={`${style["text-content"]}`}>
                  <h3 className="">{section?.title}</h3>

                  {section?.description && (
                    <div dangerouslySetInnerHTML={{ __html: section?.description }} />
                  )}
                </div>
              </div>
              <div className="col_12 col_md_6">
                <div className="img-wrapper">
                  <Image
                    src={section?.image}
                    alt={section?.alt}
                    width={section?.width}
                    height={section?.height}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
