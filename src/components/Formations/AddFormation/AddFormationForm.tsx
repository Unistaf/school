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
      </Form>
    </div>
  )
}

export default AddFormationForm