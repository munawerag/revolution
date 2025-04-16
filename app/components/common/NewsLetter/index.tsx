"use client";
import FormButton from "../../Buttons/FormButton";
import { useForm } from "react-hook-form";
import FormGroup from "../../FormGroup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PhoneRegex } from "../../../utilities/utility";
import FormLoading from "../../FormLoading";
import { Fragment, useState } from "react";
import { subscribe } from "diagnostics_channel";
import style from "./index.module.scss";



interface NewsLetterProps {
  data?: {
    title?: string;
    description?: string;
    buttonText?: string;
  };
}

const NewsLetter = ({ data }: NewsLetterProps) => {
  const [loading, setLoading] = useState(false);

  const initFormFields = {
    email: "",
  };

  // schema for form validation
  const schema: any = yup
    .object({
      email: yup.string().email("Not a Valid email").required("Email is required"),
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
      name: "email",
      placeholder: "Enter your email",
      inputtype: "email",
      subscribeClass: true,
      exclass: "subscribe-input"
    },
  ];

  const onFormSubmit = async (val: Object) => {
    console.log(val);
    setLoading(true);
  };

  // If data is not provided, don't render
  if (!data) {
    return null;
  }

  return (
    <section className={`${style.newsLetter}`}>
      <div className="container-s">
        <div className={`${style.row} custom-row no-gutters`}>
          <div className="col_12 col_lg_6 col_xl_3">
            <h3>{data.title || ""}</h3>
          </div>
          <div className="col_12 col_lg_6 col_xl_4">
            <p className="fw-400">{data.description || ""}</p>
          </div>
          <div className="col_12 col_xl_5">
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <div className={style.subscribe}>
                {fields.map((item: any, i: number) => (
                  <Fragment key={i}>
                    <FormGroup control={control} errors={errors} item={item} />
                  </Fragment>
                ))}
                <FormButton title={data.buttonText || ""} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
