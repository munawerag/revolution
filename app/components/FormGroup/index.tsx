"use client";
import React from "react";
import InputField from "../FormElements/InputField";
import TextareaField from "../FormElements/TextareaField";
import SelectField from "../FormElements/SelectField";
import InputPhone from "../FormElements/InputPhone";
import DateField from "../FormElements/DateField";
import UploadFile from "../FormElements/uploadFile";
import RadioGroup from "../FormElements/RadioGroup";
import style from './formGroup.module.scss';
import CheckboxGroup from "../FormElements/CheckboxGroup";

const FormGroup = (props: any) => {
  const { item, control, errors } = props;

  return (
    <>
      {item.type == "input" && (
        <div className={`c_form-field ${errors[`${item.name}`] ? 'border-red' : ''}`}>
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
        <div className={`c_form-field ${errors[`${item.name}`] ? 'border-red' : ''}`}>
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
        <div className={`c_form-field ${item.exclass} ${errors[`${item.name}`] ? 'border-red' : ''}`}>
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
        <div className={`c_form-field ${errors[`${item.name}`] ? 'border-red' : ''}`}>
          {item?.label && <label>{item?.label}</label>}
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
      {item.type == 'upload' && (
        <>
          <div
            className={`form-group form-group-upload ${errors[`${item.name}`] ? 'border-red' : ''
            }`}
          >
            <UploadFile
              name={item.name}
              init={item.name || ''}
              control={control}
              placeholder={item.placeholder || ''}
              class={item.exclass || ''}
              req={item.req}
              multiple={item.multiple}
              setValue={props.setValue}
            />
            {errors[`${item.name}`] && (
            <span className="error">{errors[`${item.name}`]?.message}</span>
          )}
          </div>
        </>
      )}
      {item.type == 'checkbox' && (
        <>
          <div className={`form-group check-box-form-group ${errors[`${item.name}`] ? 'border-red' : ''}`}>
            <div className={item.isInline ? style.inlineCheckbox : ''}>
              <CheckboxGroup
                name={item.name}
                init={item.name}
                control={control}
                options={item.options}
                label={item.label}
                bold={item.bold}
                exclass={item.exclass}
              />
            </div>
            <p className={style.labelCheckbox}>{item.label}</p>
            {errors[`${item.name}`] && (
            <span className="error">{errors[`${item.name}`]?.message}</span>
          )}
          </div>
        </>
      )}
      {item.type == 'radio' && (
        <>
          <p className={style.labelCheckbox}>{item.label}</p>
          <div
            className={`form-group ${item.name} ${style.customRadio}`}
          >
            <RadioGroup
              name={item.name}
              init={item.name || ''}
              control={control}
              options={item.options}
              onChange={item.onChange}
              heading={item.heading}
              class={item.customClass ? item.customClass : item.customClass}
            />
            {errors[`${item.name}`] && (
            <span className="error">{errors[`${item.name}`]?.message}</span>
          )}
          </div>
        </>
      )}
      {item.type == 'date' && (
        <>
          <div className={`c_form-field ${errors[`${item.name}`] ? 'border-red' : ''}`}>
            <DateField
              name={item.name}
              init={item.name || ''}
              control={control}
              placeholder={item.placeholder || ''}
              label={item.label}
              class={item.exclass || ''}
              onChange={item.onChange}
              isTime={item.time}
            />
           {errors[`${item.name}`] && (
            <span className="error">{errors[`${item.name}`]?.message}</span>
          )}
          </div>
        </>
      )}
    </>
  );
};

export default FormGroup;
