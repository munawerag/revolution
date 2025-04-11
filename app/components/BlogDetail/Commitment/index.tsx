import Image from "next/image";
import style from "./Commitment.module.scss";

// TypeScript interfaces
interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface SectionProps {
  content: string;
  image: ImageProps;
}

interface SecondSectionProps extends Omit<SectionProps, "image"> {
  smallImage: Omit<ImageProps, "width" | "height">;
  largeImage: ImageProps;
}

interface CommitmentData {
  heading: string;
  firstSection: SectionProps;
  secondSection: SecondSectionProps;
  centerDescription: string;
}

export interface CommitmentProps {
  commitmentData?: CommitmentData;
}

export default function Commitment({ commitmentData }: CommitmentProps) {
  if (!commitmentData) return null;

  const { heading, firstSection, secondSection, centerDescription } = commitmentData;

  return (
    <section className="section-my">
      <div className="container-s">
        <div className={`${style["main-wrapper"]}`}>
          <div className={`${style["custom-row"]} custom-row justify-between`}>
            <div className="col_12 col_lg_6 col_xl_5">
              <div className={`${style["text-cotent"]}`}>
                <h3>{heading}</h3>
                <div dangerouslySetInnerHTML={{ __html: firstSection?.content ?? "" }} />
              </div>
            </div>
            <div className="col_12 col_lg_6">
              <div className="img-wrapper">
                <Image
                  src={firstSection?.image?.src ?? ""}
                  alt={firstSection?.image?.alt ?? ""}
                  width={firstSection.image.width}
                  height={firstSection.image.height}
                />
              </div>
            </div>
          </div>
          <div className={`${style["custom-row"]} custom-row justify-between`}>
            <div className="col_12 col_lg_6 col_xl_5">
              <div className={`${style["text-cotent"]}`}>
                <div dangerouslySetInnerHTML={{ __html: secondSection.content }} />

                <div className={`${style["center-img-wrapper"]}`}>
                  <Image
                    src={secondSection.smallImage.src}
                    alt={secondSection.smallImage.alt}
                    className="img-hack"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
            <div className="col_12 col_lg_6">
              <div className="img-wrapper">
                <Image
                  src={secondSection.largeImage.src}
                  alt={secondSection.largeImage.alt}
                  width={secondSection.largeImage.width}
                  height={secondSection.largeImage.height}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className={`${style["center-description"]}`}>
          {centerDescription && (
            <div dangerouslySetInnerHTML={{ __html: centerDescription || "" }} />
          )}
        </div>
      </div>
    </section>
  );
}
