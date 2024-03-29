export default function Table({ columns, data }) {
  return (
    <div className="my-4">
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  {columns.map(column => (
                    <th key={column} scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900">
                {data.map((row) => (
                  <tr key={row} className="even:bg-gray-50 dark:even:bg-gray-800">
                    {row.map((col) => (
                      <td key={col} className="whitespace-nowrap font-mono px-3 py-4 text-sm text-gray-700 dark:text-gray-200">{col}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}