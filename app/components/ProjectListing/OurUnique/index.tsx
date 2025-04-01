import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

interface OurUniqueProps {
  content: string;
  image: string;
  link: {
    url: string;
    text: string;
  };
}

const OurUnique = ({ content, image, link }: OurUniqueProps) => {
  return (
    <>
      <section className={`section ${style.unique}`}>
        <div className="container-s">
          <div className="custom-row">
            <div className="col_sm_6 col_12">
              <Image src={image} width={870} height={768} alt="unique" className="img-hack" />
            </div>
            <div className="col_sm_5 col_12">
              <div className={style.contentWrapper}>
                {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
                <Link href={link.url} target="_self" className={`uline ${style.anchor}`}>
                  {link?.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurUnique;
