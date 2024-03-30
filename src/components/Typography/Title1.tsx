
type TitleProps = {
  title: string;
}

const Title1 = ({ title }: TitleProps) => {
  return (
    <h1 className="text-3xl font-bold">{title}</h1>
  )
}

export default Title1