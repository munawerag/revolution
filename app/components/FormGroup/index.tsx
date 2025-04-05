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
      {item.type == "tel" && (
        <div className={`form-group`}>
          <InputPhone
            name={item.name}
            init={item.name || ""}
            control={control}
            placeholder={item.placeholder || ""}
            class={item.exclass || ""}
            country={item.country}
          />

          {errors[`${item.name}`] && (
            <span className="error">{errors[`${item.name}`]?.message}</span>
          )}
        </div>
      )}
      {item.type == 'checkbox' && (
        <div className={`form-group`}>
          <p className={style.labelCheckbox}>{item.label}</p>
          <div className={item.isInline ? style.inlineCheckbox : ''}>
            <CheckboxGroup
              name={parent ? `${parent.name}[${index}].${item.name}` : item.name}
              init={elem && elem[item.name] ? elem[item.name] : item.name}
              control={control}
              options={item.options}
              label={item.label}
              bold={item.bold}
              exclass={item.exclass}
            />
          </div>
          {setValidate(false) == 'error' && <span className="error">{setValidate(true)}</span>}
        </div>
      )}
      {item.type == 'upload' && (
        <div
          className={`form-group form-group-upload ${
            setValidate(false) == 'error' ? 'border-red' : ''
          }`}
        >
          <UploadFile
            themeColor={themeColor}
            name={parent ? `${parent.name}[${index}].${item.name}` : item.name}
            init={elem && elem[item.name] ? elem[item.name] : item.name || ''}
            control={control}
            placeholder={item.placeholder || ''}
            class={item.exclass || ''}
            req={item.req}
            multiple={item.multiple}
            setValue={props.setValue}
          />
          {setValidate(false) == 'error' && <span className="error">{setValidate(true)}</span>}
        </div>
      )}
      {item.type == 'radio' && (
        <>
          <p className={style.labelCheckbox}>{item.label}</p>
          <div
            className={`form-group ${
              parent ? `${parent.name}[${index}].${item.name}` : item.name
            }  ${style.customRadio}`}
          >
            <RadioGroup
              name={parent ? `${parent.name}[${index}].${item.name}` : item.name}
              init={elem && elem[item.name] ? elem[item.name] : item.name || ''}
              control={control}
              options={item.options}
              onChange={item.onChange}
              heading={item.heading}
              class={item.customClass ? item.customClass : item.customClass}
            />
            {/* <p>{item.customValidationClass}</p> */}
            {setValidate(false) == 'error' && <span className="error">{setValidate(true)}</span>}
          </div>
        </>
      )}
    </>
  );
};

export default FormGroup;
