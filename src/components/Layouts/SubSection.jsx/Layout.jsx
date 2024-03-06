import React from 'react'
import Header from './Header'
import StackedList from './StackedList'

const Layout = ({ title }) => {
  return (
    <>
      <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 py-7'>
        <Header title={title}/>
      </div>
      <StackedList />
    </>
  )
}

export default Layout