
type TitleProps = {
  title: string;
}

const Title1 = ({ title }: TitleProps) => {
  return (
    <div className="text-3xl font-bold">{title}</div>
  )
}

export default Title1