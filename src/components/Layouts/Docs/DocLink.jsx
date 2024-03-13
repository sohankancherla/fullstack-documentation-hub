import React from 'react'
import { Link } from 'react-router-dom'

const DocLink = ({ href, children }) => {
  return (
    <Link className="text-primary-700 hover:text-primary-800" to={href} target="_blank">{children}</Link>
  )
}

export default DocLink