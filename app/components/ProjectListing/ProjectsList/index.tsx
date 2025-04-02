import React from "react";
import style from "./index.module.scss";
import ProjectCard from "../ProjectCard";

interface ProjectItem {
  img: string;
  title: string;
  ctaLink: string;
  ctaTitle: string;
  desc: string;
}

interface ProjectsListProps {
  projects: ProjectItem[];
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <>
      <section className="section">
        <div className="container-s">
          <div className={style.projectWrapper}>
            {projects?.length > 0 &&
              projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  img={project?.img}
                  title={project?.title}
                  ctaLink={project?.ctaLink}
                  ctaTitle={project?.ctaTitle}
                  desc={project?.desc}
                  customclass={style.customProjectCard}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsList;
