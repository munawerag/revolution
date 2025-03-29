import Image from "next/image";
import SectionHeading from "../common/SectionHeading";
import style from "./AwardsPartners.module.scss";

// TypeScript interface for AwardsPartners
interface Award {
  image: string;
  description: string;
  awardImages: string[];
}

interface AwardsPartnersData {
  heading?: {
    subTitle?: string;
    title?: string;
    desc?: string;
  };
  awards?: Award[];
}

interface AwardsPartnersProps {
  data?: AwardsPartnersData;
}

export default function AwardsPartners({ data }: AwardsPartnersProps) {
  const { heading, awards } = data || {};

  return (
    <>
      <SectionHeading
        subTitle={heading?.subTitle}
        title={heading?.title}
        desc={heading?.desc}
        isCenter={true}
      />

      <section className="section">
        <div className="container-s">
          <div className={`${style["sections-wrapper"]}`}>
            {awards?.map((award, index) => (
              <div key={index} className={`${style["custom-row"]} custom-row no-gutters`}>
                <div className="col_12 col_md_9 col_lg_6">
                  <div className={`${style["img-wrapper"]}`}>
                    <Image
                      className="img-hack"
                      src={award?.image || ""}
                      alt="awards"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <div className="col_12 col_lg_5">
                  <div className={`${style["text-content"]}`}>
                    <div dangerouslySetInnerHTML={{ __html: award?.description || "" }}></div>
                      <div className={`${style["figures-wrapper"]}`}>
                        {award?.awardImages?.map((image, imageIndex) => (
                          <div key={imageIndex} className={`${style["item"]}`}>
                            <Image src={image || ""} alt="awards" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                          </div>
                        ))}
                      </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`${style["data-loading"]}`}>
            <span className={`${style["loading-icon"]}`}>
              <Image src="/assets/svgs/loading.svg" alt="loading" width={20} height={20} />
            </span>
            <span>Loading More</span>
          </div>
        </div>
      </section>
    </>
  );
}
