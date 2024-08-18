import React from 'react'

const Card = (props) => {
  return (
      
    <div className='max-w-3xl mx-auto px-6 py-4 border-b border-indigo-300'>
        <h2 className='text-2xl text-indigo-400 font-semibold'>{props.question}</h2>
        <div className='flex my-4'>
            <p className='text-indigo-400 border-indigo-400 border-2 rounded-xl px-4 borre'>{props.option1}</p>
            <p className='ml-6 text-indigo-400 border-indigo-400 border-2 rounded-xl px-4 borre'>{props.option2}</p>
            <p className='ml-6 text-indigo-400 border-indigo-400 border-2 rounded-xl px-4 borre'>{props.option3}</p>
            <p className='ml-6 text-indigo-400 border-indigo-400 border-2 rounded-xl px-4 borre'>{props.option4}</p>
        </div>        
    </div>
  )
}

export default Card
