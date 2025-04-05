import style from './Checkbox.module.scss';

const RadioButton = (props: any) => {
  return (
    <label htmlFor={props.index} className={`${style['radio']} ${style[props.class]}`}>
      <div className={`${style['inputWrapper']}`}>
        <input
          ref={props.ref}
          name={props.name}
          id={props.index}
          type="radio"
          aria-label={props.label}
          onChange={() => props.onChange(props.value)}
          value={props.value}
          {...props}
          className={`${style.radioInput} ${props.classCustom}`}
        />
        {props?.label && (
          <p className={props.class === 'customRadio' ? style.radioLabel : style.customLabel}>
            <span className={style.checkboxIcon}></span>
            {props.label}
          </p>
        )}
      </div>
    </label>
  );
};

export default RadioButton;
