import Image from 'next/image'
import React from 'react'
import './Summary.css'
import UseInView from '../Hero/UseInView'

const Summary = () => {
  return (
    <div className='w-full bg-blue-300'>
        <div className='shapedividers3 w-full h-[10rem]'/>
        <div className='bg-[#FFC999] grid md:grid-cols-10 px-10'>
            <div className='flex flex-col gap-8 items-start col-span-4 justify-center'>
                <div className='flex items-center text-6xl gap-2'>
                    <Image
                        src = "/Officevibe-Blue-40.svg"
                        alt = "company logo"
                        height = {70}
                        width = {70}
                    />
                    <span>Officevibe</span>
                </div>
                <div className='text-xl text-gray-600'>
                    Workleap Officevibe is the simplest employee experience solution that provides insights and tools to transform your organization on day 1, not in 6 months.
                </div>
                <button className='px-8 py-2 bg-black text-white rounded-lg hover:bg-blue-800 border-2 border-transparent hover:border-blue-800 transition'>
                    Request a demo
                </button>
            </div>
            <div className='col-span-6'>
                <UseInView>
                    <Image
                        src = "/OfficeVibe-Summary.webp"
                        alt = "summary logo"
                        width = {1280}
                        height = {1144}
                    />
                </UseInView>
            </div>
        </div>
    </div>
  )
}

export default Summary
