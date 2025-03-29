"use client";

import { useState } from "react";
import Image from "next/image";
import BlogCard from "../common/cards/BlogCard";
import SectionHeading from "../common/SectionHeading";
import style from "./blog.module.scss";

interface BlogItem {
  img: string;
  subTitle: string;
  title: string;
  ctaLink: string;
  ctaTitle: string;
}

interface BlogProps {
  sectionHeading: {
    subTitle: string;
    title: string;
  };
  blogItems: BlogItem[];
}

export default function Blog({ sectionHeading, blogItems }: BlogProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(blogItems.length / itemsPerPage);
  
  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogItems.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination functions
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <SectionHeading
        subTitle={sectionHeading.subTitle}
        title={sectionHeading.title}
        isCenter={true}
      />
      <div className="cards-wrapper">
        <div className="container">
          <div className={`${style["custom-row"]} custom-row`}>
            {currentItems.map((item, index) => (
              <div className="col_12 col_md_6" key={index}>
                <BlogCard
                  img={item?.img}
                  subTitle={item?.subTitle}
                  title={item?.title}
                  ctaLink={item?.ctaLink}
                  ctaTitle={item?.ctaTitle}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={`${style["blogs-pagination"]}`}>
          <ul>
            <li 
              onClick={handlePrevPage} 
              className={currentPage === 1 ? style["disabled"] : ''}
            >
              <Image src="/assets/svgs/blog-left-pagination.svg" alt="icon" width={9} height={15} />
            </li>
            {pageNumbers.map(number => (
              <li 
                key={number}
                className={currentPage === number ? style["active"] : ''}
                onClick={() => handlePageChange(number)}
              >
                {number}
              </li>
            ))}
            <li 
              onClick={handleNextPage} 
              className={currentPage === totalPages ? style["disabled"] : ''}
            >
              <Image src="/assets/svgs/blog-right-pagination.svg" alt="icon" width={9} height={15} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
