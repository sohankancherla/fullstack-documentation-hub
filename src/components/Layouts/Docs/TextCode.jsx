import React from 'react'

const TextCode = ({ text }) => {
  return (
    <code className='bg-gray-100 dark:bg-gray-800 text-sm p-1 rounded-lg text-pink-500'>
        {text}
    </code>
  )
}

export default TextCode