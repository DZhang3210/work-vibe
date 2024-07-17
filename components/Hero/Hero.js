import Image from 'next/image'
import React from 'react'
import BrandCarousel from './BrandCarousel'

const Hero = () => {
  return (
    <section className='max-w-3xl mx-auto text-center flex flex-col gap-8 items-center mt-20'>
        <h1 className='text-6xl'>
            Engage, recognize, <br/>
            and drive performance
        </h1>
        <p className='text-xl text-gray-500'>
            Workleap Officevibe helps HR leaders and managers instantly drive top talent retention and team performance with simple tools for engagement, recognition, and performance management.
        </p>
        <button className='rounded-lg text-lg text-white bg-blue-600 p-2 transition hover:bg-blue-800'>
            Request a demo
        </button>
    </section>
  )
}

export default Hero
