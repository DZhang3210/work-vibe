import { ArrowRight, MessageCircleCode, Rocket, Trophy } from 'lucide-react'
import React from 'react'

const DropdownOne = () => {
  const dropItems = [
    [<MessageCircleCode key="logo1" className='text-blue-600'/>, "Engagement", "Act on real-time, insightful employee feedback to build a workplace that attracts and retains top talent."],
    [<Rocket key="logo2" className='text-blue-600'/>, "Performance Management",  "Give HR the flexibility to build, customize and automate a continuous performance process."],
    [<Trophy key="logo3" className='text-blue-600'/>, "Recognition", "Create a workplace culture that encourages employees to recognize each other."],
  ];
  return (
    <div className='block md:grid grid-cols-4 gap-3 pb-8'>
      {
      dropItems.map(([logo, title, par], i)=>(
        <div key = {i} className='mt-2 transition flex flex-col gap-3 p-6 border-2 border-transparent rounded-2xl cursor-pointer hover:border-blue-600 group'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2'>
            {logo}
            <h1 className='text-lg transition group-hover:text-blue-600'>{title}</h1>
          </div>
          <ArrowRight
            className='transition group-hover:text-blue-600 group-hover:translate-x-2'
          />
        </div>
        <p className='text-md text-gray-500 hidden md:inline'>
          {par}
        </p>
      </div>
      ))
      }
      <div className='grid grid-rows-3 mt-2'>
        {
          ["financial services", "IT consulting services", "For leisure, travel, and tourism"].map(
            (string,i)=>(
              <div 
                key = {i}
                className='flex justify-between border-2 border-transparent rounded-2xl cursor-pointer hover:border-blue-600 group items-center py-2 px-6'
              >
                <span>For {string}</span>
                <ArrowRight
                  className='transition group-hover:text-blue-600 group-hover:translate-x-2'
                />
              </div>
            )
          )
        }
      </div>
    </div>
  )
}

export default DropdownOne
