import React from "react";
// import { Metadata } from "next";
// import NotFound from "@/app/not-found";

// import { apiFetch } from "@/app/functions/ApiResource";
import Careers from "@/app/containers/careers";
import careersData from "@/app/data/careers.json";
import awardsData from "../../data/awards-partners.json";
import contactUsData from "@/app/data/contact-us.json";
import missonData from "../../data/our-story.json";
import teamMembersData from "@/app/data/team-members.json";
import ourUniquenessData from "../../data/our-uniqueness.json";
import rigaData from "@/app/data/riga.json";
import vacanciesData from "../../data/vacancies.json";
import blogSectionData from "@/app/data/blog-section.json";




import AwardsAndPartners from "@/app/containers/awards-and-partners";

import ContactUs from "@/app/containers/contact-us";
import OurStory from "@/app/containers/our-story";
import OurTeam from "@/app/containers/our-team";
import OurUniqueness from "@/app/containers/our-uniqueness";
import Riga from "@/app/containers/riga";
import Vacancies from "@/app/containers/vacancies";
import Blogs from "@/app/containers/blogs";





const TemplatePage = async ({ params }: { params?: { slug: string } }) => {
  
  if (!params) {
    console.error("Error: params is undefined");
    return <div>Error: Missing parameters</div>;
  }

  const { slug } = params;

  // console.log("check", slug);

  return (
    <>
      <main>
        {"rest_success" == "rest_success" ? (
          (() => {
            switch (slug) {
              case "careers":
                return <Careers page={careersData} />;
              case "awards-and-partners":
                return <AwardsAndPartners page={awardsData} />;
              case "contact-us":
                return <ContactUs page={contactUsData} />;
              case "our-story":
                return <OurStory page={missonData} />;
              case "our-team":
                return <OurTeam page={teamMembersData} />;
              case "our-uniqueness":
                return <OurUniqueness page={ourUniquenessData} />;
              case "riga":
                return <Riga page={rigaData} />;
              case "vacancies":
                return <Vacancies page={vacanciesData} />;
              case "blogs":
                return <Blogs page={blogSectionData} />;

              default:
              // return <NotFound />;
            }
          })()
        ) : (
          <></>
          // <NotFound />
        )}
      </main>
    </>
  );
};

export default TemplatePage;
