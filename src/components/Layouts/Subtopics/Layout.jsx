import React from 'react'
import Header from './Header'
import StackedList from './StackedList'

const pages = [
  { name: 'Backend', href: '/backend', current: true },
]

const Layout = ({ title, subpages }) => {
  return (
    <>
      <Header title={title} pages={pages}/>
      <StackedList subpages={subpages} />
    </>
  )
}

export default Layout