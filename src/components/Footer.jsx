export default function Footer({ logo, companyName, description, githubLink, columnNames, navigation }) {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
            Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
                <img
                className="h-12"
                src={logo}
                alt={companyName}
                />
                <p className="text-sm leading-6 text-700 dark:text-gray-300">
                  {description}
                </p>
                <div className="flex space-x-6">
                <a href={githubLink} className="text-gray-500 hover:text-gray-400 text-sm leading-6 flex gap-1">
                  <span className="sr-only">Github</span>
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                    <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">{columnNames[0]}</h3>
                    <ul role="list" className="mt-6 space-y-4">
                    {navigation.content.map((item) => (
                        <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                            {item.name}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="mt-10 md:mt-0">
                    <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">{columnNames[1]}</h3>
                    <ul role="list" className="mt-6 space-y-4">
                    {navigation.resources.map((item) => (
                        <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                            {item.name}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                    <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">{columnNames[2]}</h3>
                    <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                        <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                            {item.name}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="mt-10 md:mt-0">
                    <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">{columnNames[3]}</h3>
                    <ul role="list" className="mt-6 space-y-4">
                    {navigation.support.map((item) => (
                        <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                            {item.name}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>
            </div>
            <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-400">&copy; 2024 Full Stack Documentation Hub. All rights reserved.</p>
            </div>
        </div>
        </footer>
    )
}