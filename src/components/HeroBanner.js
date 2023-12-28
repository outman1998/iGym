import React from 'react'
import { Link } from 'react-router-dom';

export default function HeroBanner() {


  return (
    <div className='containerr mb-10 lg:mb-0 lg:h-screen '>

      <div className='pt-52'>
      <p className='text-4xl lg:text-5xl font-bold mt-1 mb-3'>
      Elevate Your Fitness Journey
      </p>
      
      <p className='text-xl md:w-1/2' >
      Discover your go-to for fitness excellence. Unleash the power of guided workouts and expert tips to sculpt your dream body      
      </p>
      <button className='mt-5 border bg-red-400 hover:bg-red-500 transition-all duration-300 ease-in-out text-xl text-white border-none rounded py-2 px-5'>
        <a href="#exercises" className='text-white'>Join For Free</a>
      </button>
      <p className=' mt-7 lg:block text-8xl md:text-[140px] lg:text-[200px] opacity-10 font-bold'>
        iGym
      </p>
      </div>

    </div>
  )
}
