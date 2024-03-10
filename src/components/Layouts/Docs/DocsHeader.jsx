export default function DocsHeader({ title, section, description }) {

  return (
    <>
      <header className="mb-9 space-y-1">
        <p className="text-sm font-semibold text-primary-700">
          {section}
        </p>
        <h1 className="text-3xl font-medium text-gray-900 dark:text-white">
          {title}
        </h1>
      </header>
      <p>
        {description} 
      </p>
    </>
  )
}
