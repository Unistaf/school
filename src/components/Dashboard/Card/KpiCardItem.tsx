
type KpiType = {
  title: string;
  number: number;
  img: string;
}

const KpiCardItem = ({ title, number, img }: KpiType) => {
  return (
    <div className='bg-white min-h-32 p-3 rounded-xl'>
      <span className='font-semibold text-gray74'>{title}</span>
      <div className='flex justify-between items-center mt-3'>
        <div>
          <p className='text-5xl font-bold'>{number}</p>
        </div>
        <img className="w-20" src={img} />
      </div>
    </div>
  )
}

export default KpiCardItem