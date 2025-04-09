"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import SectionHeading from "../../common/SectionHeading";
import style from "./ContactAddress.module.scss";
import Image from "next/image";

// Interface for accordion items
interface AccordionItem {
  id?: number;
  title?: string;
  description?: string;
}

// Interface for ContactAddress props
interface ContactAddressProps {
  heading?: {
    title?: string;
  };
  contactAddress?: {
    title?: string;
    mainContent?: string;
    email?: string;
    phone?: string;
    whatsapp?: string;
    accordionData?: AccordionItem[];
  };
}

export default function ContactAddress({ heading, contactAddress }: ContactAddressProps) {
  // State to track which accordion item is active
  const [activeId, setActiveId] = useState<number | null>(null);

  // Refs to store content elements and their heights
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const [contentHeights, setContentHeights] = useState<{ [key: number]: number }>({});

  // Memoized function to handle setting refs
  const setContentRef = useCallback((element: HTMLDivElement | null, id: number) => {
    if (contentRefs?.current) {
      contentRefs.current[id] = element;
    }
  }, []);

  // Calculate content heights when component mounts or window resizes
  useEffect(() => {
    const calculateHeights = () => {
      if (!contentRefs?.current) return;

      const heights: { [key: number]: number } = {};

      Object.keys(contentRefs.current).forEach((id) => {
        const numId = Number(id);
        const element = contentRefs.current?.[numId];

        // Only calculate height if element exists
        if (element) {
          heights[numId] = element?.scrollHeight || 0;
        }
      });

      setContentHeights(heights);
    };

    // Initial calculation
    calculateHeights();

    // Recalculate on window resize
    window.addEventListener("resize", calculateHeights);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", calculateHeights);
    };
  }, []);

  // Toggle function to open/close accordion items
  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);

    // Recalculate heights when toggling to ensure correct height
    setTimeout(() => {
      if (contentRefs?.current?.[id]) {
        setContentHeights((prev) => ({
          ...prev,
          [id]: contentRefs?.current?.[id]?.scrollHeight || 0,
        }));
      }
    }, 0);
  };

  return (
    <>
      <SectionHeading title={heading?.title || "Contact us"} isCenter={true} />
      <section className="section">
        <div className="container-s">
          <div className="custom-row">
            <div className="col_12 col_md_5">
              <div className={`${style["main-text-accordion"]}`}>
                <div className="text-content">
                  <h4>{contactAddress?.title || "R.Evolution Headquarters"}</h4>
                  {contactAddress?.mainContent && (
                    <div dangerouslySetInnerHTML={{ __html: contactAddress?.mainContent || "" }} />
                  )}

                  <p>
                    <a href={`mailto:${contactAddress?.email}`}>{contactAddress?.email}</a>
                  </p>
                  <p>
                    <a href={`tel:${contactAddress?.phone}`}>({contactAddress?.phone})</a>
                  </p>
                  <p>
                    whatsapp{" "}
                    <a href={`tel:${contactAddress?.whatsapp}`}>({contactAddress?.whatsapp})</a>
                  </p>
                </div>
                <div className={`${style["accordion"]} accordion `}>
                  {contactAddress?.accordionData?.map((item) => (
                    <div className={`${style["accordion__item"]}`} key={item?.id}>
                      <h4
                        className={`${style["h4"]} h4 ${
                          activeId === item?.id ? style["active"] : ""
                        }`}
                        onClick={() => item?.id !== undefined && toggleAccordion(item?.id)}
                      >
                        {item?.title}
                      </h4>
                      <div
                        className={`${style["accordion__content"]}`}
                        ref={(el) => {
                          if (item?.id !== undefined) {
                            setContentRef(el, item?.id);
                          }
                        }}
                        style={{
                          maxHeight:
                            activeId === item?.id ? `${contentHeights[item?.id || 0] || 0}px` : "0",
                        }}
                      >
                        <div dangerouslySetInnerHTML={{ __html: item?.description || "" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col_12 col_md_7">
              <div className={`${style["img-wrapper"]} element-lg-right-zero`}>
                <Image
                  src="/assets/images/contact-us/contact.jpg"
                  alt="contact"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
