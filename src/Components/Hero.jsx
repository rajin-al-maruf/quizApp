import React from 'react'

const Hero = () => {
  return (
    
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className='text-4xl text-indigo-500 font-semibold tracking-wider'>Quizzical</h1>
            <p className='mt-4 font-medium tracking-wide'>Get the highest score NOW!</p>
            <button className='bg-indigo-500 text-[#F5F7FB] px-10 py-3 mt-6 rounded-xl'>Start quiz</button>
        </div>
    
  )
}

export default Hero
