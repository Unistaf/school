import AddFormationTrigger from "@/components/Formations/AddFormation/AddFormationTrigger"
import Title1 from "@/components/Typography/Title1"
import Title2 from "@/components/Typography/Title2"

const FormationsPage = () => {

  return (
    <div>
      <div className="flex justify-between items-center">
        <Title1 title="Formations" />
        <AddFormationTrigger />
      </div>
      <div className="mt-6">
        <div className="min-h-96 bg-white rounded-xl shadow-sm p-4">
          <Title2 title="Liste des formations (20)" />
        </div>
      </div>
    </div>
  )
}

export default FormationsPage