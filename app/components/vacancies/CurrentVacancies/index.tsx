"use client";
import { useForm } from "react-hook-form";
import FormGroup from "../../FormGroup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PhoneRegex } from "../../../utilities/utility";
import FormLoading from "../../FormLoading";
import { Fragment, useState } from "react";
import Image from "next/image";
import Select from "react-select";
import style from "./CurrentVacancies.module.scss";
import "./CurrentVacancies.scss";
import CandidatesPolicies from "../CandidatesPolicies";

const options = [
  { value: "MostRecent", label: "Most recent" },
  { value: "MostRelevant", label: "Most relevant" },
];

const locationOptions = [
  { value: "default", label: "Location" },
  { value: "Remote", label: "Remote" },
  { value: "OnSite", label: "On-site" },
  { value: "Hybrid", label: "Hybrid" },
];

const categoriesOptions = [
  { value: "default", label: "Categories" },
  { value: "Engineering", label: "Engineering" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "Design", label: "Design" },
  { value: "Finance", label: "Finance" },
  { value: "HR", label: "HR" },
  { value: "IT", label: "IT" },
  { value: "CustomerSupport", label: "Customer Support" },
];


const positionTypeOptions = [
  { value: "default", label: "Position Type" },
  { value: "FullTime", label: "Full Time" },
  { value: "PartTime", label: "Part Time" },
  { value: "Contract", label: "Contract" },
  { value: "Internship", label: "Internship" },
  { value: "Temporary", label: "Temporary" },
  { value: "Freelance", label: "Freelance" },
];





interface Vacancy {
  id: number;
  title: string;
  location: string;
  categories: string[];
  description: string;
}

interface CurrentVacanciesProps {
  vacancies: Vacancy[];
}

export default function CurrentVacancies({ vacancies }: CurrentVacanciesProps) {
  // All hooks must be called at the top level of the component
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null);

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

  // Handle Apply Now button click
  const handleApplyNow = (vacancy: Vacancy) => {
    setSelectedVacancy(vacancy);
  };

  // Handle back button click in CandidatesPolicies
  const handleBackClick = () => {
    setSelectedVacancy(null);
  };

  // form validation code
  const initFormFields = {
    searchKeyword: "",
    searchLocation: "",
  };

  // schema for form validation
  const schema: any = yup
    .object({
      searchKeyword: yup
        .string()
        // .required("Name is required")
        .matches(/^[A-Za-z ]*$/, {
          message: "Please enter only letters",
          excludeEmptyString: true,
        })
        .min(3)
        .max(20),
      searchLocation: yup
        .string()
        // .required("searchLocation is required")
        .matches(/^[A-Za-z ]*$/, {
          message: "Please enter only letters",
          excludeEmptyString: true,
        })
        .min(3)
        .max(20),
      // selectHear: yup.object().required("Please select an option"),
      // selectSource: yup.object().required("Please select an option"),
    })
    .required();

  // destructure useForm from react-hook-form
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), defaultValues: initFormFields });

  // This is a configuration array for the form fields in the ContactUsFORM component. Each object in the array defines the properties of a form field:
  const fields = [
    {
      type: "input",
      name: "searchKeyword",
      placeholder: "Search keyword",
      inputtype: "text",
    },
    {
      type: "input",
      name: "searchLocation",
      placeholder: "Search location",
      inputtype: "text",
    },
    // {
    //   type: "select",
    //   name: "selectHear",
    //   label: "How did you hear about us?*",
    //   placeholder: "Make a selection",
    //   inputtype: "select",
    //   options: [
    //     { id: 1, name: "LinkedIn" },
    //     { id: 2, name: "Indeed" },
    //     { id: 3, name: "Facebook" },
    //     { id: 4, name: "Google" },
    //     { id: 5, name: "Other" },
    //   ],
    // },
    // {
    //   type: "select",
    //   name: "selectSource",
    //   label: "Please specify",
    //   placeholder: "Please select a source",
    //   inputtype: "select",
    //   options: [
    //     { id: 1, name: "LinkedIn" },
    //     { id: 2, name: "Indeed" },
    //     { id: 3, name: "Facebook" },
    //     { id: 4, name: "Google" },
    //     { id: 5, name: "Other" },
    //   ],
    // },
  ];

  const onFormSubmit = async (val: Object) => {
    console.log(val);
  };

  return (
    <section className="relative">
      <div className="container">
        {selectedVacancy ? (
          <CandidatesPolicies vacancy={selectedVacancy} onBackClick={handleBackClick} />
        ) : (
          <>
            <div className={`${style["vacancies-title"]}`}>
              <h2 className="h2 text-center">Current Vacancies</h2>
            </div>

            <div className="vacancies-search-filter">
              <div className={`${style["custom-row"]}`}>
                {fields.map((item: any, i: number) => (
                  <Fragment key={i}>
                    <div
                      className={`${style["col_12"]}`}
                    >
                      <FormGroup control={control} errors={errors} item={item} />
                    </div>
                  </Fragment>
                ))}

                {/* <div className={`${style["col_12"]}`}>
                  <div className="c_form-field">
                    <input
                      type="text"
                      placeholder="Search keyword"
                      className="c_form-field__control"
                      value=""
                    />
                  </div>
                </div>
                <div className={`${style["col_12"]}`}>
                  <div className="c_form-field c_form-field--location">
                    <input
                      type="text"
                      placeholder="Search location"
                      className="c_form-field__control"
                      value=""
                    />
                  </div>
                </div> */}

                <div className={`${style["col_12"]}`}>
                  <button>
                    <img
                      src="/assets/svgs/filter-search.svg"
                      alt="search icon"
                      width={23}
                      height={23}
                    />
                  </button>
                </div>
              </div>
              <div className={`${style["filter-dropdowns-wrapper"]}`}>
                <div className={`${style["filter-title"]}`}>
                  <span className="filter-icon">
                    <img src="/assets/svgs/filter.svg" alt="filter" width={20} height={15} />
                  </span>
                  <span>Filters</span>
                </div>
                <div className="filter-dropdown">
                  <div className="relevance-select-container">
                    <Select
                      className="relevance-select"
                      classNamePrefix="react-select"
                      options={locationOptions}
                      defaultValue={locationOptions[0]}
                      instanceId="language-selector"
                      onChange={(selectedOption) => {
                        console.log(selectedOption);
                      }}
                      isSearchable={false}
                    />
                    <div className="arrow-down">
                      <Image
                        src={"/assets/svgs/arrow-down.svg"}
                        width={9}
                        height={9}
                        alt="arrow down"
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-dropdown">
                  <div className="relevance-select-container">
                    <Select
                      className="relevance-select"
                      classNamePrefix="react-select"
                      options={categoriesOptions}
                      defaultValue={categoriesOptions[0]}
                      instanceId="language-selector"
                      onChange={(selectedOption) => {
                        console.log(selectedOption);
                      }}
                      isSearchable={false}
                    />
                    <div className="arrow-down">
                      <Image
                        src={"/assets/svgs/arrow-down.svg"}
                        width={9}
                        height={9}
                        alt="arrow down"
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-dropdown">
                  <div className="relevance-select-container">
                    <Select
                      className="relevance-select"
                      classNamePrefix="react-select"
                      options={positionTypeOptions}
                      defaultValue={positionTypeOptions[0]}
                      instanceId="language-selector"
                      onChange={(selectedOption) => {
                        console.log(selectedOption);
                      }}
                      isSearchable={false}
                    />
                    <div className="arrow-down">
                      <Image
                        src={"/assets/svgs/arrow-down.svg"}
                        width={9}
                        height={9}
                        alt="arrow down"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${style["results-row"]}`}>
              <div className={`${style["results-col"]}`}>
                <p className="fw-300 m-0">{vacancies?.length} Results</p>
              </div>
              <div className={`${style["results-col"]}`}>
                <div className={`${style["sort-by"]}`}>
                  <span>sort by</span>

                  <div className="relevance-select-container">
                    <Select
                      className="relevance-select"
                      classNamePrefix="react-select"
                      options={options}
                      defaultValue={options[0]}
                      instanceId="language-selector"
                      onChange={(selectedOption) => {
                        console.log(selectedOption);
                      }}
                      isSearchable={false}
                    />
                    <div className="arrow-down">
                      <Image
                        src={"/assets/svgs/arrow-down.svg"}
                        width={9}
                        height={9}
                        alt="arrow down"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${style["panel"]} gray2-color-bg`}>
              {currentItems.map((vacancy) => (
                <div key={vacancy.id} className={`${style["panel__row"]}`}>
                  <div className={`${style["panel__col"]}`}>
                    <h4 className="h4">{vacancy?.title}</h4>
                  </div>
                  <div className={`${style["panel__col"]}`}>
                    <p className="location-title">Location:</p>
                    <p className="location-title__value">{vacancy?.location}</p>
                  </div>
                  <div className={`${style["panel__col"]}`}>
                    <p className="category-title">Categories:</p>
                    <p className="category-title__value">{vacancy?.categories.join(", ")}</p>
                  </div>
                  <div className={`${style["panel__col"]}`}>
                    <button
                      className={`primary-button`}
                      type="button"
                      onClick={() => handleApplyNow(vacancy)}
                    >
                      <span>{"Apply Now"}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className={`${style["c-pagination"]}`}>
              <ul>
                <li onClick={handlePrevPage} className={currentPage === 1 ? style["disabled"] : ""}>
                  <Image
                    src="/assets/svgs/blog-left-pagination.svg"
                    alt="icon"
                    width={9}
                    height={15}
                  />
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
          </>
        )}
      </div>
    </section>
  );
}
