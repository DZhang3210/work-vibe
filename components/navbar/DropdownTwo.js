import { ArrowRight, ClipboardCheck, Compass, Goal, GoalIcon, MessageCircleCode, MessageSquareText, NotebookTabs, NotebookText, Proportions, Rocket, Sparkles, SquarePen, Star } from 'lucide-react'
import React from 'react'

const DropdownTwo = () => {
  const navItems = [
    [<ClipboardCheck/>, "Performance Reviews", true],
    [<Rocket/>, "Continuous Performance", true],
    [<MessageSquareText/>, "Automated Pulse Surveys", false],
    [<MessageCircleCode/>, "Anonymous Feedback & Messaging"],
    [<GoalIcon/>, "Goal & OKRs"],
    [<NotebookText/>, "One-on-one meetings"],
    [<Sparkles/>, "Good Vibes recognition"],
    [<Proportions/>, "Reports"],
    [<SquarePen/>, "Custom employee surveys"],
    [<Compass/>, "Leadership and conversation"],
    [<MessageSquareText/>, "Survey meeting templates"],
  ]

  return (
    <div className='block md:grid grid-cols-3 gap-x-5 grid-rows-4 grid-flow-col pb-8'>
        {
          navItems.map(([icon, title, newItem = false],i)=>(
            <div className='flex justify-between p-3 items-center group group-hover transition border-2 rounded-xl border-transparent cursor-pointer hover:border-blue-600' key ={i}>
              <div className='flex gap-2 text-blue-600'>
                {icon}
                <span className='text-black'>{title}</span>
              </div>
              <div className='flex gap-2'>
                {newItem && 
                  <div className='px-3 rounded-full bg-yellow-100 text-orange-600 flex gap-2 items-center'>
                    <Star size={15} className='mb-[1px]'/>
                    <span>NEW</span>
                  </div>
                }
                <ArrowRight
                  className='transition group-hover:text-blue-600 group-hover:translate-x-2'
                />
              </div>
            </div>
          ))
        }
      </div>
  )
}

export default DropdownTwo
