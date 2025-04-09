import ProjectCard, { ProjectProps } from "../../ProjectListing/ProjectCard";
import style from "./index.module.scss";

export interface HomeTwoColumnLayoutProps {
  projectsData?: ProjectProps[];
}


// component
export default function HomeTwoColumnLayout({ projectsData }: HomeTwoColumnLayoutProps) {
  return (
    <section className="relative z-1 white-color-bg section">
      <div className="container-s">
        {projectsData && projectsData.length > 0 && (
          <div className={`${style["row"]}`}>
            {projectsData.map((project: ProjectProps, index: number) => (
              <div className={`${style["col"]}`} key={index}>
                <ProjectCard
                  img={project?.img}
                  subTitle={project?.subTitle}
                  title={project?.title}
                  ctaLink={project?.ctaLink}
                  ctaTitle={project?.ctaTitle}
                  desc={project?.desc}
                  customclass={style.twocolumnLayoutCard}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
