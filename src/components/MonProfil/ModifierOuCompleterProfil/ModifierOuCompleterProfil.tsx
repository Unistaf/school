import Button from "@/components/Button/Button"
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
      <Form defaultValues={defaultValues} onSubmit={mockedFn}>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <Title2 title="Détails de l’école" />
          <div className="mt-4">
            <Form.Input
              register={mockedFn}
              label="Nom établissement"
              htmlFor="nom_etablissement"
              name="nom_etablissement"
              placeholder="Nom de l’entreprise"
            />
            <Form.TextArea
              label="Description"
              htmlFor="description"
              name="description"
              placeholder="Ajouter une présentation"
            />
          </div>
        </div>
        <div className="mt-4 bg-white p-4 rounded-xl shadow-sm">
          <Title2 title="Contacts" />
          <div className="mt-4">
            <div className="flex w-full gap-6">
              <div className="flex-1">
                <Form.Input
                  register={mockedFn}
                  label="Téléphone"
                  htmlFor="phone"
                  name="phone"
                  placeholder="Téléphone"
                />
                <Form.Input
                  register={mockedFn}
                  label="Email"
                  htmlFor="email"
                  name="email"
                  placeholder="email@gmail.com"
                />
              </div>
              <div className="flex-1">
                <Form.Input
                  register={mockedFn}
                  label="Adresse"
                  htmlFor="adresse"
                  name="adresse"
                  placeholder="Adresse"
                />
                <Form.Input
                  register={mockedFn}
                  label="N Téléphone"
                  htmlFor="phone"
                  name="phone"
                  placeholder="Téléphone"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white p-4 rounded-xl shadow-sm">
          <Title2 title="Photos et vidéos" />
          <div className="flex gap-4">
            <div className="flex-1">
              <Form.Input
                register={mockedFn}
                label="Video"
                htmlFor="video"
                name="video"
                placeholder="video.mp4"
              />
            </div>
            <div className="flex-1">
              <Form.Input
                register={mockedFn}
                label="N Téléphone"
                htmlFor="images"
                name="images"
                placeholder="Charger des images"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white p-4 rounded-xl shadow-sm">
          <Title2 title="Liens utiles" />
          <div className="mt-2">
            <div className="flex w-full gap-6">
              <div className="flex-1">
                <Form.Input
                  register={mockedFn}
                  label="LinkedIn"
                  htmlFor="phone"
                  name="phone"
                  placeholder="Ajouter un lien"
                />
                <Form.Input
                  register={mockedFn}
                  label="Youtube"
                  htmlFor="Youtube"
                  name="Youtube"
                  placeholder="Ajouter un lien"
                />
              </div>
              <div className="flex-1">
                <Form.Input
                  register={mockedFn}
                  label="Twitter"
                  htmlFor="Twitter"
                  name="Twitter"
                  placeholder="Ajouter un lien"
                />
                <Form.Input
                  register={mockedFn}
                  label="Facebook"
                  htmlFor="phone"
                  name="phone"
                  placeholder="Ajouter un lien"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <Button variant="primary" title="Enregistrer" onClick={mockedFn} />
        </div>
      </Form>
    </div>
  )
}

export default ModifierOuCompleterProfil