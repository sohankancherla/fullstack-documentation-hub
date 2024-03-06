import React from 'react'
import Layout from '../../components/Layouts/SubSection.jsx/Layout'

const title = "Backend"
const subpages = [
    {
        name: 'Python',
        description: 'High-level programming language',
        href: '/python',
    },
]

const Backend = () => {
  return (
    <Layout title={title} subpages={subpages} />
  )
}

export default Backend