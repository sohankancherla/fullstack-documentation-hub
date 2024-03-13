import React from 'react'

const DocImage = ({src, alt}) => {
  return (
    <img className='my-4 rounded-lg shadow dark:shadow-none' src={src} alt={alt} />
  )
}

export default DocImage