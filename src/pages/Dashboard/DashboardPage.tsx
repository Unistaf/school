import KpiCardItem from '@/components/Dashboard/Card/KpiCardItem'
import Title1 from '@/components/Typography/Title1'
import formationsImg from "@assets/images/formations.png"
import candidaturesImg from "@assets/images/candidatures.png"
import diplomesImg from "@assets/images/diplomes.png"
// import GridList from 'react-flexible-list'

const DashboardPage = () => {
  const kpis = [
    { title: "Formations", number: 200, img: formationsImg },
    { title: "Candidatures", number: 23, img: candidaturesImg },
    { title: "Diplômes accrédités", number: 356, img: diplomesImg },
  ]
  return (
    <div>
      <Title1 title="Dashboard" />
      <div className='mt-4 grid grid-cols-3 gap-4'>
        {
          kpis.map((item) => <KpiCardItem title={item.title} number={item.number} img={item.img} key={item.title} />)
        }
      </div>
      <div className='mt-8'>
        <div className='bg-white min-h-80 rounded-xl p-4'>
          <h2 className='font-bold text-xl'>Le nombre de visite du profil</h2>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage