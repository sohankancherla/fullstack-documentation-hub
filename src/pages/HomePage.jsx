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
      <div>HomePage</div>
    </>
  )
}
export default HomePage