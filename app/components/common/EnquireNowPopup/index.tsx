"use client";
import { useForm } from "react-hook-form";
import FormGroup from "../../FormGroup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PhoneRegex } from "../../../utilities/utility";
import FormLoading from "../../FormLoading";
import { Fragment, useState } from "react";
import style from "./EnquireNowPopup.module.scss";

interface EnquireNowPopupProps {
  className?: string;
  onClose: () => void;
}

export default function EnquireNowPopup({ className = "", onClose }: EnquireNowPopupProps) {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("form-enquire"); // State for active tab

  const initFormFields = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    checkbox: "",
    checkbox2: "",
    radio: "",
    radio2: "",
  };

  // schema for form validation
  const schema: any = yup
    .object({
      name: yup
        .string()
        .required("Name is required")
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
      checkbox: yup.object().required("Please select checkbox"),
      checkbox2: yup.object().required("Please select checkbox"),
      radio: yup.object().required("Please select radio"),
      radio2: yup.object().required("Please select radio"),
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
    },
    {
      type: "checkbox",
      name: "checkbox",
      options: [
        { id: "checkbox", name: "I would like to receive communications from R.Evolution" },
      ],
    },
    {
      type: "checkbox",
      name: "checkbox2",
      options: [{ id: "checkbox2", name: "I have read and agree to the Privacy Policy." }],
    },
    {
      type: "radio",
      name: "radio",
      heading: "Please select a preferred mode of contact",
      options: [{ id: "radio", name: "Request a phone call back" }],
    },
    {
      type: "radio",
      name: "radio",
      options: [{ id: "radio2", name: "Request email communications" }],
    },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId); // Update active tab
  };

  const onFormSubmit = async (val: Object) => {
    console.log(val);
    setLoading(true);
  };

  return (
    <div className={`${style["main-wrapper"]} ${style[className]}`}>
      <div className={`${style["container"]} container`}>
        <div className="title-wrapper">
          <h2 className="h2 text-center">Express your interest</h2>
          <div className={`${style["tab-wrapper"]}`}>
            <div className={`${style["tab-indicator"]} ${style[`indicator-${activeTab}`]}`}></div>
            <ul>
              <li
                data-id="form-enquire"
                className={`${activeTab === "form-enquire" ? style["active"] : ""}`}
                onClick={() => handleTabClick("form-enquire")}
              >
                Enquire now
              </li>
              <li
                data-id="form-visit"
                className={`${activeTab === "form-visit" ? style["active"] : ""}`}
                onClick={() => handleTabClick("form-visit")}
              >
                Schedule a visit
              </li>
            </ul>
          </div>
        </div>
        <div className="form-wrapper">
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            id="form-enquire"
            style={{ display: activeTab === "form-enquire" ? "block" : "none" }}
          >
            <div className="custom-row">
              {fields.map((item: any, i: number) => (
                <Fragment key={i}>
                  {item.heading ? (
                    <div className="col_12">
                      <p className="black-color" style={{ marginTop: "1em" }}>
                        Please select a preferred mode of contact
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className={`col_12 col_md_6`}>
                    <FormGroup control={control} errors={errors} item={item} />
                  </div>
                </Fragment>
              ))}
            </div>
            <div className={`${style["button-wrapper"]}`}>
              <button className={`primary-button white-col`} type="submit">
                <span className={`wrapper__text`}>
                  {loading ? <FormLoading /> : <span>{"Submit"}</span>}
                </span>
              </button>
            </div>
          </form>
          <form
            action=""
            id="form-visit"
            style={{ display: activeTab === "form-visit" ? "block" : "none" }}
          >
            <h2 className="h2">Coming Soon</h2>
          </form>
        </div>
      </div>
      <div className={`${style["back-btn-wrapper"]}`}>
        <button className="primary-anchor white-col" onClick={onClose}>
          Back
        </button>
      </div>
    </div>
  );
}
