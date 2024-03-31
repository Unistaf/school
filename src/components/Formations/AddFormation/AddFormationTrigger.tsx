import Button from '@/components/Button/Button'
import ModalDialog from '@/layout/Modal/Modal'
import { useState } from 'react'
import AddFormationForm from './AddFormationForm'

const AddFormationTrigger = () => {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div>
      <Button onClick={openModal} variant="primary" title="Ajouter une formation" />
      {!!isOpen && <ModalDialog title='Ajouter une formation' isOpen={isOpen} closeModal={closeModal}>
        <AddFormationForm />
      </ModalDialog>}
    </div>
  )
}

export default AddFormationTrigger