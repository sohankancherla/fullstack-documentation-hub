import React from 'react'
import Notification from '../components/Notification'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import "../style/main/HomePage.css"

const icon = <ExclamationTriangleIcon className="h-6 w-6 text-yellow-400" aria-hidden="true" />

const title = "Under Construction";
const body = "Website is currently under construction aiming to be ready by May 2024!";

const HomePage = () => {
  return (
    <>
      <header>
        <div className="magicpattern flex flex-col items-center justify-center relative py-52">
          <h1 className="text-3xl tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl md:text-6xl">Everything About <span className="text-primary-700">Full Stack,</span></h1>
          <h1 className="text-3xl tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl md:text-6xl">All in One Place</h1>
        </div>
      </header>
      <Notification icon={icon} title={title} body={body} />
    </>
  )
}
export default HomePage