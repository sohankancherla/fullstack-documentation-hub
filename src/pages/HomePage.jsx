import React from 'react'
import Notification from '../components/Notification'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const icon = <ExclamationTriangleIcon className="h-6 w-6 text-yellow-400" aria-hidden="true" />

const title = "Under Construction";
const body = "Website is currently under construction aiming to be ready by May 2024!";

const HomePage = () => {
  return (
    <>
      <Notification icon={icon} title={title} body={body} />
      <div className="flex flex-col items-center justify-center relative py-32">
        <div className='flex justify-center items-center gap-1  sm:gap-2 md:gap-2 lg:gap-3'>
          <h1 className="text-3xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl">Everything About</h1>
          <h1 className="text-3xl tracking-tight text-primary-700 sm:text-5xl md:text-6xl">Full Stack,</h1>
        </div>
        <h1 className="text-3xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl">All in One Place</h1>
      </div>
    </>
  )
}
export default HomePage