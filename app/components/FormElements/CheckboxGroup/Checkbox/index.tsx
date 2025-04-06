import React from "react";
import style from "./Checkbox.module.scss";

const Checkbox = (props: any) => {
  return (
    <label
      htmlFor={props.name}
      className={`${style["checkbox"]} ${style[props.exclass]} custom-checkbox`}
    >
      <input
        id={props.name}
        type="checkbox"
        aria-label={props.label}
        {...props.field}
        value={props?.value}
        checked={props?.field?.value?.includes(props.value) || false}
        onChange={(e) => {
          const value = e.target.value;
          const currentValue = Array.isArray(props.field.value) ? props.field.value : [];
          if (e.target.checked) {
            props.field.onChange([...currentValue, value]);
          } else {
            props.field.onChange(currentValue?.filter((item: string) => item !== value));
          }
        }}
      />
      <span className={`${style.checkboxIcon} checkmark`}></span>
      {props.label && (
        <div className={style.labelWrapper}>
          <p className={`${style.label}`}>{props.label}</p>
        </div>
      )}
    </label>
  );
};

export default Checkbox;
