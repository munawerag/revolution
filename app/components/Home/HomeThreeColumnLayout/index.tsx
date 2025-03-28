import EvolutionCard, { EvolutionCardProps } from "../../common/cards/EvolutionCard";
import style from "./index.module.scss";

type HomeThreeColumnLayout = {
  titleTop: string;
  cardData: EvolutionCardProps[];
};




export default function HomeThreeColumnLayout({titleTop, cardData}: HomeThreeColumnLayout) {
  return (
    <section className="relative z-1 white-color-bg section">
      <div className="container-s">
        <h2 className="h3 text-center">{titleTop}</h2>
        <div className={`${style["cards-wrapper"]}`}>
          <div className="custom-row">
            {cardData?.map((project: EvolutionCardProps, index: number) => (
              <div className="col_12 col_md_6 col_lg_4" key={index}>
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
      </div>
    </section>
  );
}
