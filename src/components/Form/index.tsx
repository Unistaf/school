import { useForm } from "react-hook-form"
import { Input } from "./Input"
import { Select } from "./Select"
import React from "react"

type FormType = {
  children: React.ReactNode;
  defaultValues: string;
  onSubmit: () => void;
}

const Form = ({ children, defaultValues, onSubmit }: FormType) => {
  const methods = useForm({ defaultValues })
  const { handleSubmit } = methods

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
            ...{
              ...child.props,
              register: methods.register,
              key: child.props.name,
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