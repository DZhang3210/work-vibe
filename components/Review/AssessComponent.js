import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import UseInView from '../Hero/UseInView'

const AssessComponent = () => {
  return (
    <div className='w-full bg-blue-300 py-20'>
      <div className='grid grid-cols-0 md:grid-cols-10 px-10'>
        <div className='col-span-5 order-2 md:order-1 flex items-center justify-center'>
          <UseInView>
            <Image
                src = "/Officevibe-clipboard.webp"
                alt = "Assessment Logo"
                width = {1840}
                height = {1472}
            />
          </UseInView>
        </div>
        <div className='col-span-5 flex flex-col gap-5 items-start order-1 md:order-2 mb-7'>
            <div className='text-lg roboto-mono'>
                HOW WOULD YOU GRADE YOUR EMPLOYEE EXPERIENCE?
            </div>
            <div className='text-5xl mb-8'>
                Assess your organization’s employee experience in minutes
            </div>
            <div className='text-xl max-w-lg mb-4'>
                Take our 5-minute assessment to see how your organization's employee experience is currently faring and get personalized insights.
            </div>
            <button className='transition px-8 py-2 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-800 hover:text-white hover:border-blue-800 flex'>
                <span>
                    Start Assessment
                </span>
                <ArrowRight/>
            </button>
        </div>
      </div>
    </div>
  )
}

export default AssessComponent
