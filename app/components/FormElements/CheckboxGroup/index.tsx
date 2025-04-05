import React, { Fragment } from 'react';
import Checkbox from './Checkbox';
import { Controller } from 'react-hook-form';

const CheckboxGroup = (props: any) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <>
          {props.options.map((option: any, index: number) => {
            return (
              <Fragment key={index}>
                <Checkbox
                  i={index}
                  field={field}
                  value={option.id}
                  label={option.name}
                  exclass={props.exclass}
                />
              </Fragment>
            );
          })}
        </>
      )}
    />
  );
};

export default CheckboxGroup;
