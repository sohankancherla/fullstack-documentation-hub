import { XMarkIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'

export default function Banner({ text }) {
  const [show, setShow] = useState(true)
  return (
    <Transition
      show={show}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="flex items-center gap-x-6 bg-primary-700 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
          <p className="text-sm leading-6 text-white">
            {text}
          </p>
          <div className="flex flex-1 justify-end">
            <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={() => {setShow(false)}}>
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
            </button>
          </div>
      </div>
    </Transition>
  )
}