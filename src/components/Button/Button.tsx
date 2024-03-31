import { IconType } from "react-icons";

type ButtonType = {
  onClick: () => void;
  title: string;
  variant: "primary" | "outlined";
  icon?: IconType;
}
interface Variants {
  primary: string,
  outlined: string
}

const Button = ({ title, variant, onClick, icon: Icon }: ButtonType) => {
  const variants: Variants = {
    primary: "bg-blue text-white",
    outlined: "bg-white text-blue border-blue border"
  }
  // const Icon = icon;
  return (
    <button
      onClick={onClick}
      className={"active:scale-95 transition-all p-3 px-6 rounded-xl shadow-sm flex items-center gap-2 hover:shadow-xl " +
        variants[variant as keyof Variants]}
    >
      {!!Icon && <Icon />}
      {title}
    </button>
  )
}

export default Button