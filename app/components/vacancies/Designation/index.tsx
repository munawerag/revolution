"use client";
import { useForm } from "react-hook-form";
import FormGroup from "../../FormGroup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PhoneRegex } from "../../../utilities/utility";
import FormLoading from "../../FormLoading";
import Image from "next/image";
import style from "./Designation.module.scss";
import { Fragment, useState } from "react";

interface Vacancy {
  id: number;
  title?: string;
  location?: string;
  categories?: string[];
  description?: string;
}

interface DesignationProps {
  vacancy?: Vacancy;
  onBackClick?: () => void;
}

export default function Designation({ vacancy, onBackClick }: DesignationProps) {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const initFormFields = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    selectHear: "",
    selectSource: "",
  };

  // schema for form validation
  const schema: any = yup
    .object({
      name: yup
        .string()
        .required("First Name is required")
        .matches(/^[A-Za-z ]*$/, {
          message: "Please enter only letters",
          excludeEmptyString: true,
        })
        .min(3)
        .max(20),
      lastName: yup
        .string()
        .required("Last Name is required")
        .matches(/^[A-Za-z ]*$/, {
          message: "Please enter only letters",
          excludeEmptyString: true,
        })
        .min(3)
        .max(20),
      email: yup.string().email("Not a Valid email").required("Email is required"),
      phone: yup
        .string()
        .matches(PhoneRegex, {
          message: "Enter a valid phone number",
          excludeEmptyString: true,
        })
        .required("Phone number is required")
        .min(9, "Minimum 9 digits")
        .max(15, "Maximum 15 digits")
        .typeError("Phone number is required"),
      address: yup.string().required("Address is required"),
      selectHear: yup.object().required("Please select an option"),
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
      name: "name",
      label: "First Name*",
      placeholder: "",
      inputtype: "text",
    },
    {
      type: "input",
      name: "lastName",
      label: "Last Name*",
      placeholder: "",
      inputtype: "text",
    },
    {
      type: "input",
      name: "email",
      label: "Email*",
      placeholder: "",
      inputtype: "email",
    },
    {
      type: "tel",
      name: "phone",
      label: "Phone Number*",
      placeholder: "",
      inputtype: "tel",
      country:"ae"
    },
    {
      type: "input",
      name: "address",
      label: "Address*",
      placeholder: "",
      inputtype: "text",
    },
    {
      type: "select",
      name: "selectHear",
      label: "How did you hear about us?*",
      placeholder: "Make a selection",
      inputtype: "select",
      options: [
        { id: 1, name: "LinkedIn" },
        { id: 2, name: "Indeed" },
        { id: 3, name: "Facebook" },
        { id: 4, name: "Google" },
        { id: 5, name: "Other" },
      ],
    },
    {
      type: "select",
      name: "selectSource",
      label: "Please specify",
      placeholder: "Please select a source",
      inputtype: "select",
      options: [
        { id: 1, name: "LinkedIn" },
        { id: 2, name: "Indeed" },
        { id: 3, name: "Facebook" },
        { id: 4, name: "Google" },
        { id: 5, name: "Other" },
      ],
    },
  ];

  const onFormSubmit = async (val: Object) => {
    console.log(val);
    setLoading(true);
  };

  return (
    <>
      <div id="desination-form">
        <div className="container-s">
          <div className={`${style["title-wrapper"]}`}>
            <h2 className="h2 text-center">{vacancy?.title || ""}</h2>
            <div className={`${style["location"]}`}>
              <span className="icon">
                <Image
                  src="/assets/svgs/filter-location.svg"
                  alt="location icon"
                  width={10}
                  height={18}
                />
              </span>
              <span className={`${style["location-title"]}`}>{vacancy?.location || ""}</span>
            </div>
          </div>
          <div className={`${style["back-btn-wrapper"]}`}>
            <button className="primary-anchor white-col" onClick={onBackClick}>
              Back
            </button>
          </div>
        </div>
        <div className="section gray2-color-bg">
          <div className="container-s">
            <div className={`${style["profile-text-content"]}`}>
              <h3>Candidate profile</h3>
              <p>Please be sure to fill out all required fields</p>
              <p>* indicates a required field.</p>
            </div>
            <div className={`${style["form-main-wrapper"]} offwhite-color-bg`}>
              <form onSubmit={handleSubmit(onFormSubmit)}>
                <h4 className={`${style["cv-title"]}`}>CV</h4>
                <div className={`${style["choose-file-wrapper"]}`}>
                  <h6>CV/Resume*</h6>
                  <div className={`${style["choose-file-wrapper__inner"]}`}>
                    <div className={`${style["drag-drop-file"]}`}>
                      <div className={`${style["icon"]}`}>
                        <Image src="/assets/svgs/file.svg" alt="icon" width={32} height={27} />
                      </div>
                      <p className="m-0">
                        Drag and drop file here or{" "}
                        <span className={`${style["select-file"]}`}>
                          {selectedFile ? selectedFile.name : "Choose File"}
                        </span>{" "}
                      </p>
                    </div>
                    <label htmlFor="file-upload" className={`${style["custom-file-label"]}`}>
                      {selectedFile ? selectedFile.name : "Choose File"}
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      required
                      className={`${style["custom-file-input"]}`}
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                <div className={`${style["information-form"]}`}>
                  <h4 className={`${style["h4"]}`}>Enter your information</h4>
                  <div className="custom-row">
                    {fields.map((item: any, i: number) => (
                      <Fragment key={i}>
                        <div
                          className={`col_12 ${
                            item?.name == "address" ? "col_md_12" : " col_md_6"
                          }`}
                        >
                          <FormGroup control={control} errors={errors} item={item} />
                        </div>
                      </Fragment>
                    ))}
                  </div>
                  <button className={`primary-button white-col`} type="submit">
                    <span className={`wrapper__text`}>
                      {loading ? <FormLoading /> : <span>{"Submit Application"}</span>}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
