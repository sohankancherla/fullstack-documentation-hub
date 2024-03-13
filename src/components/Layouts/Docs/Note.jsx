import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import React from 'react'


const Note = ({ title, text }) => {
  return (
    <div className="flex items-start bg-yellow-50 dark:bg-slate-800 p-4 my-4 rounded-lg">
        <div className="flex-shrink-0">
            <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500" aria-hidden="true" />
        </div>
        <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-200">{title}</p>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">{text}</p>
        </div>
    </div>
)
}

export default Note