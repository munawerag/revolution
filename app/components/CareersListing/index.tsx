import Link from "next/link";
import style from "./CareersListing.module.scss";
import Image from "next/image";

interface SectionData {
  title: string;
  content: string;
  image: string;
  ctaTitle?: string;
  ctaLink?: string;
  ctaTarget?: string;
}

interface CareersListingProps {
  data: {
    centerDescription: string;
    sections: SectionData[];
  };
}

export default function CareersListing({ data } : CareersListingProps) {
  return (
    <section className="section">
      <div className="container-s">
        {
            data?.centerDescription && (
                <div className={`${style["center-description"]}`}
                  dangerouslySetInnerHTML={{ __html: data?.centerDescription ?? "" }}
                />
            )
        }
        <div className={`${style["main-wrapper"]}`}>
          {data?.sections?.map((section, index) => (
            <div key={index} className={`${style["custom-row"]} custom-row`}>
              <div className="col_12 col_md_5">
                <div className={`${style["text-content"]}`}>
                  <h3>{section?.title}</h3>
                  {
                    section?.content && (
                        <div dangerouslySetInnerHTML={{ __html: section?.content ?? "" }} />
                    )
                  }
                  {section?.ctaTitle && section?.ctaLink && (
                    <div>
                      <Link
                        href={section?.ctaLink}
                        target={section?.ctaTarget ?? "_self"}
                        className={`uline ${style.anchor}`}
                      >
                        {section?.ctaTitle}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="col_12 col_md_6">
                <div className={`${style["img-wrapper"]}`}>
                  <Image
                    src={section?.image ?? ""}
                    alt={section?.title ?? ""}
                    className="img-hack"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
