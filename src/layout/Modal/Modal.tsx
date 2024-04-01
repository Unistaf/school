import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

type ModalType = {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  closeModal: () => void;
}

export default function ModalDialog({ children, title, isOpen, closeModal }: ModalType) {

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[700px] min-h-[500px] overflow-auto transform rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-center border-b pb-4 px-5 pt-6">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-bold leading-6 text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                    <button onClick={closeModal} className="btn btn-circle p-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>
                  <div className="mt-2 p-6">
                    {children}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
