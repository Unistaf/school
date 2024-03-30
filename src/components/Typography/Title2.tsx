type TitleProps = {
  title: string;
}

const Title2 = ({ title }: TitleProps) => {
  return (
    <h1 className="text-xl font-bold">{title}</h1>
  )
}

export default Title2