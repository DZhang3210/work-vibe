import './ReviewComponent.css'
import React from 'react'

const WhyTry = () => {
  return (
    <div className='w-full'>
        <div className='shapedividers1 w-full h-[10rem]'/>

        <div className='bg-[#E8E8E8] w-full flex flex-col px-20 gap-6 pb-20'>
            <div
                className='uppercase text-xl'
            >
                WHY TRY WORKLEAP OFFICEVIBE
            </div>
            <h1 className='text-5xl font-semibold'>
                Your turnkey employee <br/>
                 experience solution
            </h1>
            <div className='max-w-xl text-lg'>
                With the simplest engagement, recognition, and performance management tools, Workleap Officevibe paves the way for thriving teams and successful businesses.
            </div>
            <div className='flex flex-col lg:flex-row gap-10'>
                {[
                    ["Increase retention", "Engage employees with a culture of regular feedback and meaningful recognition."],
                    ["Drive performance", "Design the continuous performance management process your teams need to succeed."],
                    ["Cultivate resilience", "Foster a sense of belonging and purpose-driven work with tools to nurture relationships and build stronger workplaces."]
                ].map(([title, desc], i) => (
                    <div className='flex flex-col gap-3' key = {i}>
                        <h1 className='text-2xl font-semibold'>
                            {title}
                        </h1>
                        <div className='max-w-xl'>
                            {desc}
                        </div>
                    </div>
                ))
                
                }

            </div>

        </div>
    </div>
  )
}

export default WhyTry
