import React from 'react'

const Card = ({number, image}) => {
  return (
    <div className='flex items-center justify-center w-96 h-52 bg-slate-400 my-16 overflow-hidden relative'>
        <span className='font-bold text-7xl text-yellow-100 absolute'>{number}</span>
        <img src={image} alt="content" className='w-full '/>
    </div>
  )
}

export default Card