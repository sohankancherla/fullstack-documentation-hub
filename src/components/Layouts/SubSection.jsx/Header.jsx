import { ChevronLeftIcon } from '@heroicons/react/20/solid'

export default function Header({ title }) {
  return (
    <div>
      <div>
        <nav aria-label="Back">
          <a href="/" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-600">
            <ChevronLeftIcon className="-ml-1 mr-1 h-5 w-5 flex-shrink-0" aria-hidden="true" />
            Home
          </a>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-200 sm:truncate sm:text-3xl sm:tracking-tight">
            {title}
          </h2>
        </div>
      </div>
    </div>
  )
}