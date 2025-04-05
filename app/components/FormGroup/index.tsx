"use client";
import React from "react";
import InputField from "../FormElements/InputField";
import TextareaField from "../FormElements/TextareaField";
import SelectField from "../FormElements/SelectField";
import InputPhone from "../FormElements/InputPhone";

const FormGroup = (props: any) => {
  const { item, control, errors } = props;


  

  return (
    <>
      {item.type == "input" && (
        <div className={`c_form-field`}>
          {item?.label && <label>{item?.label}</label>}
          <InputField
            name={item.name}
            control={control}
            placeholder={item.placeholder || ""}
            type={item.inputtype || ""}
            class={item.exclass || ""}
            req={item.req}
          />
          {errors[`${item.name}`] && (
            <span className="error">{errors[`${item.name}`]?.message}</span>
          )}
        </div>
      )}
      {item.type == "select" && (
        <div className={`c_form-field `}>
          {item?.label && <label>{item?.label}</label>}
          <SelectField
            name={item.name}
            control={control}
            label={item.label}
            placeholder={item.placeholder || ""}
            static={item.static}
            options={item.options.map((x: any) => ({
              label: x.name,
              value: x.id,
            }))}
            exclass={item.exclass}
            noborder={item.noborder}
            error={item.errors}
          />
          {errors[`${item.name}`] && (
            <span className="error">{errors[`${item.name}`]?.message}</span>
          )}
        </div>
      )}
      {item.type == "textarea" && (
        <div className={`c_form-field ${item.exclass}`}>
          <TextareaField
            rows={item.rows}
            name={item.name}
            control={control}
            placeholder={item.placeholder || ""}
            class={item.exclass || ""}
            req={item.req}
          />
          {errors[`${item.name}`] && (
            <span className="error">{errors[`${item.name}`]?.message}</span>
          )}
        </div>
      )}
      {/* {item.type == "tel" && (
        <div className={`form-group`}>
          <InputPhone
            name={parent ? `${parent.name}[${index}].${item.name}` : item.name}
            init={elem && elem[item.name] ? elem[item.name] : item.name || ""}
            control={control}
            placeholder={item.placeholder || ""}
            class={item.exclass || ""}
            country={item.country}
          />

          {errors[`${item.name}`] && (
            <span className="error">{errors[`${item.name}`]?.message}</span>
          )}
        </div>
      )} */}
    </>
  );
};

export default FormGroup;
