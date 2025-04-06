"use client";

import Select from "react-select";
import Image from "next/image";

const options = [
  { value: "en", label: "English" },
  { value: "ar", label: "عربى" },
];

const LanguageSelector = () => {
  return (
    <div>
      <Select
        className="select"
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
        <Image src={"/assets/svgs/arrow-down.svg"} width={6} height={9} alt="arrow down" />
      </div>
    </div>
  );
};

export default LanguageSelector;
