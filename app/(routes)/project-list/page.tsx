import SectionHeading from "@/app/components/common/SectionHeading";
import OurUnique from "@/app/components/ProjectListing/OurUnique";
import ProjectsList from "@/app/components/ProjectListing/ProjectsList";
import ProjectVideo from "@/app/components/ProjectListing/ProjectVideo";

const ProjectList = () => {
  return (
    <>
      <SectionHeading
        subTitle="OUR LANDMARKS"
        title="Completed Projects"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        isCenter={true}
      />
      <ProjectVideo />
      <ProjectsList />
      <OurUnique />
    </>
  );
};

export default ProjectList;
