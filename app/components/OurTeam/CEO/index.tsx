import Image from "next/image";
import style from "./CEO.module.scss";
import SectionHeading from "../../common/SectionHeading";

// TypeScript interfaces for CEO component
interface CEOHeadingProps {
  subTitle: string;
  title: string;
  desc: string;
}

interface CEOBioProps {
  name: string;
  title: string;
  description: string;
  image: string;
}

interface CEODataProps {
  heading: CEOHeadingProps;
  ceo: CEOBioProps;
}

export default function CEO({ data }: { data: CEODataProps }) {
  const { heading, ceo } = data;

  return (
    <>
      <SectionHeading
        subTitle={heading?.subTitle}
        title={heading?.title}
        desc={heading?.desc}
        isCenter={true}
      />
      <section className="">
        <div className="container-s">
          <div className="wrapper">
            <div className="custom-row align-item-center">
              <div className="col_12 col_lg_6">
                <div className={`${style["img-wrapper"]}`}>
                  <Image
                    src={ceo?.image}
                    alt={ceo?.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="img-hack"
                  />
                </div>
              </div>
              <div className="col_12 col_lg_offset_1 col_lg_4">
                <div className="text-content">
                  {ceo?.description && (
                    <div dangerouslySetInnerHTML={{ __html: ceo?.description || "" }} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
