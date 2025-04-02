"use client";

import { useState } from "react";
import FormButton from "../../Buttons/FormButton";
import style from "./CurrentVacancies.module.scss";
import Image from "next/image";

interface Vacancy {
  id: number;
  title: string;
  location: string;
  categories: string[];
}

interface CurrentVacanciesProps {
  vacancies: Vacancy[];
}

export default function CurrentVacancies({ vacancies }: CurrentVacanciesProps) {
  // All hooks must be called at the top level of the component
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination values outside of any loops or conditions
  const itemsPerPage = 5; // Changed from 4 to 5
  const totalPages = Math.ceil(vacancies.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = vacancies.slice(indexOfFirstItem, indexOfLastItem);

  // Generate page numbers for pagination separately
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Pagination functions
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <section style={{ marginTop: "15em" }}>
      <div className="container">
        <div className={`${style["results-row"]}`}>
          <div className={`${style["results-col"]}`}>
            <p>{vacancies.length} Results</p>
          </div>
          <div className={`${style["results-col"]}`}>
            <div className={`${style["sort-by"]}`}>
              <span>sort by</span>
              <div>
                <select name="" id="">
                  <option value="">Most recent</option>
                  <option value="">Most relevant</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className={`${style["panel"]} gray2-color-bg`}>
          {currentItems.map((vacancy) => (
            <div key={vacancy.id} className={`${style["panel__row"]}`}>
              <div className={`${style["panel__col"]}`}>
                <h4 className="h4">{vacancy.title}</h4>
              </div>
              <div className={`${style["panel__col"]}`}>
                <p className="location-title">Location:</p>
                <p className="location-title__value">{vacancy.location}</p>
              </div>
              <div className={`${style["panel__col"]}`}>
                <p className="category-title">Categories:</p>
                <p className="category-title__value">{vacancy.categories.join(", ")}</p>
              </div>
              <div className={`${style["panel__col"]}`}>
                <FormButton title={"Apply Now"} isWhite={false} />
              </div>
            </div>
          ))}
        </div>

        <div className={`${style["c-pagination"]}`}>
          <ul>
            <li onClick={handlePrevPage} className={currentPage === 1 ? style["disabled"] : ""}>
              <Image src="/assets/svgs/blog-left-pagination.svg" alt="icon" width={9} height={15} />
            </li>
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={currentPage === number ? style["active"] : ""}
                onClick={() => handlePageChange(number)}
              >
                {number}
              </li>
            ))}
            <li
              onClick={handleNextPage}
              className={currentPage === totalPages ? style["disabled"] : ""}
            >
              <Image
                src="/assets/svgs/blog-right-pagination.svg"
                alt="icon"
                width={9}
                height={15}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
