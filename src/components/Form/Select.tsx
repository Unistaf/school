type SelectType = {
  register: (value: string) => unknown;
  name: string;
  options: [];
}

export function Select({ register, options, name }: SelectType) {
  return (
    <select {...(register(name) as unknown as Record<string, unknown>)}>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}