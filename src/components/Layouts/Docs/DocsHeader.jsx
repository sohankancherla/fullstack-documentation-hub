export function DocsHeader({ title, section }) {

  return (
    <header className="mb-9 space-y-1">
      <p className="text-sm font-medium text-primary-700">
        {section}
      </p>
      <h1 className="text-3xl text-gray-900 dark:text-white">
        {title}
      </h1>
    </header>
  )
}
