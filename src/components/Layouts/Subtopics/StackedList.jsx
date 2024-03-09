import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';

export default function StackedList({ subpages }) {
  return (
    <ul role="list" className="divide-y divide-gray-100 dark:divide-gray-800">
      {subpages.map((page) => (
        <li key={page.name} className="relative py-5 hover:bg-gray-50 dark:hover:bg-gray-800">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    <Link to={page.href}>
                      <span className="absolute inset-x-0 -top-px bottom-0" />
                      {page.name}
                    </Link>
                  </p>
                  <p className="mt-1 flex text-xs leading-5 text-gray-500 dark:text-gray-400">
                    {page.description}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-x-4">
                <ChevronRightIcon className="h-5 w-5 flex-none text-gray-500 dark:text-gray-400" aria-hidden="true" />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}