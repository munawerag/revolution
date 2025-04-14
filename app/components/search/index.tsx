"use client";

import { useState, useRef, useEffect } from "react";
import style from "./search.module.scss";

export default function Search() {
  const [searchValue, setSearchValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleResetClick = () => {
    setSearchValue("");
    // Focus the input after reset
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Optional: focus the input on initial load
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      console.log(inputRef.current);
    }
  }, []);

  return (
    <>
      <section className={style["search-inner-hero"]}>
        <div className={style["search-inner-hero__main-wrapper"]}>
          <h1 className="h2 fw-700 text-upper">Search</h1>
          <form className={style["search-inner-hero__form"]}>
            <div className={style["c_form-field"]}>
              <input
                ref={inputRef}
                type="search"
                className={style["c_form-field__control"]}
                placeholder=""
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                autoFocus
              />
            </div>
            <div
              className={style["search-inner-hero__form__reset"]}
              onClick={handleResetClick}
              role="button"
              tabIndex={0}
              aria-label="Reset search"
            >
              <input type="reset" />
            </div>

            <div className={style["search-inner-hero__form__btnn"]}>
              <button className={`primary-button`} type="button">
                <span>{"Search"}</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* search result section */}
      <section className="search-result-sec section-py-100">
        <div className="container">
          <div className={style["search-result__top-result"]}>
            <div className={style["search-result__top-result-left-side"]}>
              <a href="">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </a>
              <span className={style["result-in-seconds"]}>
                About 20,000 results (0.30 seconds)
              </span>
            </div>
          </div>
          <div className={style["search-result__list-items"]}>
            <ul>
              <li>
                <a href="">The standard Lorem Ipsum passage, used since the 1500s</a>
                <p>
                  {
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  }
                </p>
              </li>
              <li>
                <a href="">The standard Lorem Ipsum passage, used since the 1500s</a>
                <p>
                  {
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  }
                </p>
              </li>
              <li>
                <a href="">The standard Lorem Ipsum passage, used since the 1500s</a>
                <p>
                  {
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  }
                </p>
              </li>
              <li>
                <a href="">The standard Lorem Ipsum passage, used since the 1500s</a>
                <p>
                  {
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  }
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
