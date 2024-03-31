/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form"
import { Input } from "./Input"
import { Select } from "./Select"
import React from "react"

// type ChildType = {
//   props: {
//     name: string;
//     type: string;
//   }
// }
type FormType = {
  children: React.ReactNode;
  defaultValues: any | undefined;
  onSubmit: () => void;
}

const Form = ({ children, defaultValues, onSubmit }: FormType) => {
  const methods = useForm({ defaultValues })
  const { handleSubmit } = methods

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child: React.ReactNode) => {
        const { props, type } = (child as React.ReactElement<any>);
        return props.name
          ? React.createElement(type, {
            ...{
              ...props,
              register: methods.register,
              key: props.name,
            },
          })
          : child
      })}
    </form>
  )
}

Form.Input = Input
Form.Select = Select

export default Form