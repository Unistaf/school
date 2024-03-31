import Button from "@/components/Button/Button"
import Form from "@/components/Form"

const AddFormationForm = () => {
  const submit = () => {
    console.log("submit")
  }
  return (
    <div>
      <Form defaultValues={{ formation: "" }} onSubmit={submit}>
        <Form.Input label="Nom de la formation" name="formation" htmlFor="formation" placeholder="Sélectionner un domaine" />
        <Form.Select label="Domaine" name="domaine" htmlFor="domaine" options={[1, 2, 3, 4]} register={submit} />
        <Form.Select label="Filière" name="filiere" htmlFor="filiere" options={[1, 2, 3, 4]} register={submit} />
        <Form.Select label="Diplôme" name="diplome" htmlFor="diplome" options={[1, 2, 3, 4]} register={submit} />
        <Form.Input label="Durée" name="duree" htmlFor="duree" placeholder="Choisir la filière domaine" />
        <Form.Select label="Lieu" name="lieu" htmlFor="lieu" options={[1, 2, 3, 4]} register={submit} />
        <Form.TextArea label="Description" name="description" htmlFor="description" placeholder="Ajouter un description" />
        <div className="mt-4">
          <label
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >Accréditation</label>
          <div className="flex justify-between">
            <Form.Radio label="Anaq-Sup" htmlFor="accreditation-anaq" name="accreditation" />
            <Form.Radio label="Cames" htmlFor="accreditation-cames" name="accreditation" />
            <Form.Radio label="Pas d’accréditation" htmlFor="accreditation-nope" name="accreditation" />
          </div>
        </div>
        <div className="mt-4">
          <label
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >Statut de la formation</label>
          <div className="flex gap-8">
            <Form.Radio label="Privée" htmlFor="status_formation-anaq" name="status_formation" />
            <Form.Radio label="Publique" htmlFor="status_formation-cames" name="status_formation" />
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="outlined" title="Annuler" onClick={submit} />
          <Button variant="primary" title="Ajouter" onClick={submit} />
        </div>
      </Form>
    </div>
  )
}

export default AddFormationForm