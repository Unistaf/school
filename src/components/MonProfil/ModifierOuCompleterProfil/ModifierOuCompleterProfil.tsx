import Form from "@/components/Form"
import Title2 from "@/components/Typography/Title2"

const ModifierOuCompleterProfil = () => {
  const defaultValues = {
    name: ""
  }
  const mockedFn = () => {
    console.log("mocked fn");

  }
  return (
    <div>
      <div className="bg-white p-4">
        <Title2 title="Détails de l’école" />
        <Form defaultValues={defaultValues} onSubmit={mockedFn}>
          <Form.Input label="Nom etablissement" htmlFor="nom_etablissement" name="nom_etablissement" placeholder="Nom de l’entreprise" />
        </Form>
      </div>
    </div>
  )
}

export default ModifierOuCompleterProfil