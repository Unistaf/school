import { BiLocationPlus } from "react-icons/bi"
import { MdModeEdit } from "react-icons/md";
import { FaSchool } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"

import Button from "@/components/Button/Button"
import LogoImg from "@/components/Logo/LogoImg"
import Title2 from "@/components/Typography/Title2"
import { useNavigate } from "react-router-dom";
import { MODIFIER_OU_COMPLETER_PROFIL_PATH } from "@/routes/navigation/navigationPaths";
import { useState } from "react";
import ModalDialog from "@/layout/Modal/Modal";
import Form from "@/components/Form";
const defaultValues = {
  name: ""
}
const Banner = () => {
  const [isOpenPasswordModal, setIsOpenPasswordModal] = useState(false)
  const navigate = useNavigate()
  const mockedFn = () => {
    console.log("mocked fn");

  }
  const goToEditPage = () => {
    navigate(MODIFIER_OU_COMPLETER_PROFIL_PATH)
  }
  const openEditPasswordModal = () => {
    setIsOpenPasswordModal(true)
  }
  const closeEditPasswordModal = () => {
    setIsOpenPasswordModal(false)
  }
  return (
    <div className="bg-white shadow-sm rounded-xl relative">
      <div className="h-36 bg-slate-500">Banner</div>
      <div className="flex gap-4 absolute right-4 top-4">
        <Button icon={MdModeEdit} variant="outlined" title="Modifier ou completer votre profil" onClick={goToEditPage} />
        <Button icon={MdModeEdit} variant="outlined" title="Modifier mot de passe" onClick={openEditPasswordModal} />
        <ModalDialog title='Modifier mot de passe' isOpen={isOpenPasswordModal} closeModal={closeEditPasswordModal}>
          <Form defaultValues={defaultValues} onSubmit={mockedFn}>
            <Form.Input
              register={mockedFn}
              label="Ancien mot de passe"
              htmlFor="nom_etablissement"
              name="nom_etablissement"
              placeholder="Nom de l’entreprise" />
            <Form.Input
              register={mockedFn}
              label="Nouveau mot de passe"
              htmlFor="nom_etablissement"
              name="nom_etablissement"
              placeholder="Nom de l’entreprise" />
            <Form.Input
              register={mockedFn}
              label="Confirmer mot de passe"
              htmlFor="nom_etablissement"
              name="nom_etablissement"
              placeholder="Nom de l’entreprise" />
            <div className="mt-6">
              <Button variant="primary" title="Enregistrer" onClick={mockedFn} />
            </div>
          </Form>
        </ModalDialog>
      </div>
      <div className="flex px-6 gap-4 pb-6">
        <div className="mt-[-30px]">
          <LogoImg />
        </div>
        <div className="mt-2">
          <Title2 title="Bakeli" />
          <div className="mt-2 flex gap-5">
            <div className="flex items-center gap-1 text-gray-600">
              <FaSchool />
              <span className="text-gray">Tech</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <BiLocationPlus />
              <span className="text-gray">HLM Grand Yoff</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <FiUsers />
              <span className="text-gray">200 formations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner