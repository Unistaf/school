import { ChangeEvent } from "react";

type InputType = {
  register?: (value: string) => unknown;
  name?: string;
  type?: string;
  value?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ register, name, type, value, onChange }: InputType) {
  if (register) {
    return <input {...(register(name as string) as unknown as Record<string, unknown>)} />
  }
  return <input type={type} value={value} onChange={onChange} />
}