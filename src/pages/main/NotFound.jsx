export default function NotFound({ companyName, logo }) {
    return (
      <>
        <div className="flex min-h-full flex-col pb-12 pt-16">
          <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
            <div className="flex flex-shrink-0 justify-center">
              <a href="#" className="inline-flex">
                <span className="sr-only">{companyName}</span>
                <img
                  className="h-12 w-auto"
                  src={logo}
                  alt={companyName}
                />
              </a>
            </div>
            <div className="py-16">
              <div className="text-center">
                <p className="text-base font-semibold text-primary-700">404</p>
                <h1 className="mt-2 text-4xl font-medium tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl">Page not found.</h1>
                <p className="mt-2 text-base text-gray-700 dark:text-gray-400">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-6">
                  <a href="/" className="text-base font-medium text-primary-700 hover:text-primary-600">
                    Go back home
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    )
  }