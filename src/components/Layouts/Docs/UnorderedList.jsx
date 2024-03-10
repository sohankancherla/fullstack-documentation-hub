import React from 'react'

const UnorderedList = ({ text, list }) => {
  return (
    <>
        <p className='mt-4'>{text}</p>
        <ul className='list-disc'>
            {list.map((bullet) => (
                <li key={bullet} className='ml-8'>{bullet}</li>
            ))}
        </ul>
    </>
  )
}

export default UnorderedList