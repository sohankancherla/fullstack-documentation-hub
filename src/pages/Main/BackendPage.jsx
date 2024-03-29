import React from 'react'
import Layout from '../../components/Layouts/Subtopics/Layout'

const title = "Backend"
const subpages = [
    {
        name: 'Python',
        description: 'Programming language',
        href: '/backend/python',
    },
]

const BackendPage = () => {
  return (
    <Layout title={title} subpages={subpages} />
  )
}

export default BackendPage