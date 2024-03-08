import React from 'react'
import { DocsLayout } from '../../../components/Layouts/Docs/DocsLayout'

const title = "What is Python?"
const section = "Introduction"
const prevNext = {
    previousPage: null,
    previousHref: null,
    nextPage: "Installation",
    nextHref: "/backend/python/installation"
}

const PythonPage = () => {
  return (
    <DocsLayout title={title} section={section} prevNext={prevNext} />
  )
}

export default PythonPage