import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Contribute() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-100 dark:bg-gray-800">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-300 dark:stroke-gray-600 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl tracking-tight text-gray-900 dark:text-gray-200 sm:text-6xl">
            Can't find what your looking for?
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-400">
            Add it yourself. FDH flourishes with your input. By improving existing content or creating new resources, 
            you contribute directly to the enrichment and growth of the platform.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
                className=' rounded-full 
                py-2 px-4 text-sm font-medium focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2
                bg-primary-700 text-white hover:bg-primary-600' 
                href="https://github.com/sohankancherla/fullstack-documentation-hub">
                View on Github
            </a>
            <a href="#" className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 dark:bg-gray-900 dark: p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  