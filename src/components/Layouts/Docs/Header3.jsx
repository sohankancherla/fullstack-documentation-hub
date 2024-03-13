import React from 'react'

const Header3 = ({ id, text }) => {
  return (
    <h3 id={id} className="font-medium text-[20px] mt-6 mb-4 text-gray-900 dark:text-white">{text}</h3>
  )
}

export default Header3