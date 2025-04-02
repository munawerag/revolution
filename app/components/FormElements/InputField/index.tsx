import { Controller } from 'react-hook-form'

const InputField = (props: any) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field: { value, onChange } }) => {
        return (
          <>
            <input
              value={value}
              type={props.type}
              placeholder={props.placeholder}
              className={`c_form-field__control`}
              onChange={(e) => {
                onChange(e)
                props.onChange && props.onChange(e)
              }}
            />
          </>
        )
      }}
    />
  )
}

export default InputField
