"use client";
import { useForm } from "react-hook-form";
import FormGroup from "../../FormGroup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PhoneRegex } from "../../../utilities/utility";
import FormLoading from "../../FormLoading";
import style from "./ContactUsForm.module.scss";
import { Fragment, useState } from "react";



export default function ContactUsFORM() {
  const [loading, setLoading] = useState(false);

  const initFormFields = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
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

      message: yup.string().required("Message is required"),
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
      label: "First Name",
      placeholder: "",
      inputtype: "text",
    },
    {
      type: "input",
      name: "lastName",
      label: "Last Name",
      placeholder: "",
      inputtype: "text",
    },
    {
      type: "input",
      name: "email",
      label: "Email",
      placeholder: "",
      inputtype: "email",
    },
    {
      type: "tel",
      name: "phone",
      label: "Phone",
      placeholder: "",
      // inputtype: "tel",
    },
    {
      type: "textarea",
      name: "message",
      label: "Your Message",
      placeholder: "",
      rows: 11,
      exclass: "",
    },
  ];

  const onFormSubmit = async (val: Object) => {
    console.log(val);
    setLoading(true);
  };

  return (
    <section className="section gray2-color-bg">
      <div className="container-s">
        <h3 className="h3 text-center">Express your interest</h3>
        <div className={`${style["wrapper-form"]} white-color-bg`}>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="custom-row">
              {fields.map((item: any, i: number) => (
                <Fragment key={i}>
                  <div className={`col_12 ${item?.name == "message" ? "col_md_12" : " col_md_6"}`}>
                    <FormGroup control={control} errors={errors} item={item} />
                  </div>
                </Fragment>
              ))}
            </div>
            <button className={`primary-button white-col`} type="submit">
              <span className={`wrapper__text`}>
                {loading ? <FormLoading /> : <span>{"Submit"}</span>}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
