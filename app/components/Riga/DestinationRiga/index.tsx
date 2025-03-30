import EvolutionCard, { EvolutionCardProps } from "../../common/cards/EvolutionCard";
import SectionHeading from "../../common/SectionHeading";
import style from "./DestinationRiga.module.scss";

type DestinationRigaProps = {
  subTitle: string;
  title: string;
  desc: string;
  cardData: EvolutionCardProps[];
};

export default function DestinationRiga({ subTitle, title, desc, cardData }: DestinationRigaProps) {
  return (
    <>
      <SectionHeading
        subTitle={subTitle}
        title={title}
        desc={desc}
        isCenter={true}
      />
      <section className="section">
        <div className="main-grid-wrapper">
          {cardData.map((project, index) => (
            <div className="item" key={index}>
              <EvolutionCard
                img={project.img}
                subTitle={project.subTitle}
                title={project.title}
                ctaLink={project.ctaLink}
                ctaTitle={project.ctaTitle}
                desc={project.desc}
                customclass={style.threecolumnLayoutCard}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
