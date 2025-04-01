import SectionHeading from "@/app/components/common/SectionHeading";
import OurUnique from "@/app/components/ProjectListing/OurUnique";
import ProjectsList from "@/app/components/ProjectListing/ProjectsList";
import ProjectVideo from "@/app/components/ProjectListing/ProjectVideo";
import projectListData from "../../data/project-list.json";

const Page = () => {
  return (
    <>
      <SectionHeading
        subTitle={projectListData?.sectionHeading?.subTitle}
        title={projectListData?.sectionHeading?.title}
        desc={projectListData?.sectionHeading?.desc}
        isCenter={projectListData?.sectionHeading?.isCenter}
      />
      <ProjectVideo videoSrc={projectListData?.projectVideo?.videoSrc} />
      <ProjectsList projects={projectListData?.projects} />
      <OurUnique
        content={projectListData?.unique?.content}
        image={projectListData?.unique?.image}
        link={projectListData?.unique?.link}
      />
    </>
  );
};

export default Page;
