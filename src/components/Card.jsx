import React from 'react'

const Card = ({number}) => {
  return (
    <div className='flex items-center justify-center w-64 h-64 bg-slate-400 my-16'>
        <span className='font-bold text-6xl text-yellow-100'>{number}</span>
    </div>
  )
}

export default Card