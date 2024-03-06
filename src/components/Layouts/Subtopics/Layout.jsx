import React from 'react'
import Header from './Header'
import StackedList from './StackedList'

const Layout = ({ title, subpages }) => {
  return (
    <>
      <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 py-7'>
        <Header title={title}/>
      </div>
      <StackedList subpages={subpages} />
    </>
  )
}

export default Layout