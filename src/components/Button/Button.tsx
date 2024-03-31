import { IoMdAdd } from "react-icons/io";

type ButtonType = {
  onClick: () => void;
  title: string;
  variant: "primary" | "outlined";
}
interface Variants {
  primary: string,
  outlined: string
}

const Button = ({ title, variant, onClick }: ButtonType) => {
  const variants: Variants = {
    primary: "bg-blue text-white",
    outlined: "bg-white text-blue border-blue border"
  }
  return (
    <button
      onClick={onClick}
      className={"active:scale-95 transition-all p-3 px-6 rounded-xl shadow-sm flex items-center gap-2 hover:shadow-xl " +
        variants[variant as keyof Variants]}
    >
      <IoMdAdd />
      {title}
    </button>
  )
}

export default Button