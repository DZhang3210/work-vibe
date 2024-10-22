import Image from 'next/image'
import React from 'react'

const ReviewComponent = () => {
  return (
    <div className='w-full flex flex-col items-center py-20 px-10 text-center gap-10'>
        <div className='text-3xl max-w-2xl'>
            Officevibe is inexpensive, simple to start, and
            easy to use. Your team will thank you for it.
        </div>
        <div className='grid md:grid-cols-2 px-5 py-5 gap-10 md:gap-0'>
            <div className='flex flex-col items-center gap-4 justify-center'>
                <img
                    src = "/brand/brand-stars.svg"
                    alt = "product-stars"
                />
                <img
                    src = "/brand/brand-arrow.svg"
                    alt = "product-arrow"
                />
                <div className='text-gray-400'>
                    3.6 on Capterra | Officevibe
                </div>
            </div>
            <Image
                src = "/brand/brand-certificate.webp"
                alt = "certificate"
                width = {1280}
                height = {520}
                className='w-full'
            />

        </div>
      
    </div>
  )
}

export default ReviewComponent
