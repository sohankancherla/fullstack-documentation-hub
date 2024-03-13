import React from 'react'

const Terminal = ({ text }) => {
  return (
    <div className='font-mono text-sm p-4 my-4 rounded-lg text-slate-50 bg-slate-800 overflow-x-auto whitespace-nowrap'>
        {text}
    </div>
  )
}

export default Terminal