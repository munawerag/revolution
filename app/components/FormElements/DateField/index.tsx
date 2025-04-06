import { useRef } from 'react';
import DatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';
// import clockIcon from '/assets/svg/clock.svg';
// import calendarIcon from '/assets/svg/calendar.svg';
import style from './datePicker.module.scss';

import 'react-datepicker/dist/react-datepicker.css';

const DateField = (props: any) => {
  const datepickerRef = useRef(null);
  return (
    <>
      <Controller
        name={props.name}
        control={props.control}
        render={({ field: { value, onChange } }) => {
          return (
            <div className={'input-container'}>
              <div
                className={`${style.inputWrapperDate} ${
                  props.class === 'fillupForm' ? 'fill-up-form' : ''
                }`}
              >
                <>
                  {props.label ? (
                    <div className={`${style.label}  ${style[props.class]}`}>
                      {props.inputLabel}
                    </div>
                  ) : (
                    ''
                  )}
                  {props.isTime ? (
                    <DatePicker
                      selected={value}
                      className={`date-field ${style.datePicker} `}
                      placeholderText={props.placeholder}
                      ref={datepickerRef}
                      onChange={(e: any) => {
                        onChange(e);
                        props.onChange && props.onChange(e);
                      }}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={1}
                      timeCaption="Time"
                      dateFormat="hh:mm a"
                    />
                  ) : (
                    <DatePicker
                      selected={value}
                      className={`date-field ${style.datePicker}`}
                      placeholderText={props.placeholder}
                      ref={datepickerRef}
                      onChange={(e: any) => {
                        onChange(e);
                        props.onChange && props.onChange(e);
                      }}
                    />
                  )}

                </>
              </div>
            </div>
          );
        }}
      />
    </>
  );
};

export default DateField;
