import EvolutionCard, { EvolutionCardProps } from "../../common/cards/EvolutionCard";
import style from "./index.module.scss";

type HomeThreeColumnLayout = {
  projectsData: EvolutionCardProps[];
};


export default function HomeThreeColumnLayout({projectsData}: HomeThreeColumnLayout) {
  return (
    <section className="relative z-1 white-color-bg section">
      <div className="container-s">
        <div className="custom-row">
          {projectsData?.map((project: EvolutionCardProps, index: number) => (
            <div className="col_12 col_lg_4">
              <EvolutionCard
                img={project?.img}
                subTitle={project?.subTitle}
                title={project?.title}
                ctaLink={project?.ctaLink}
                ctaTitle={project?.ctaTitle}
                desc={project?.desc}
                customclass={style.threecolumnLayoutCard}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
