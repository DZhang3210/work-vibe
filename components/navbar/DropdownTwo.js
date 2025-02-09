import { ArrowRight, ClipboardCheck, Compass, Goal, GoalIcon, MessageCircleCode, MessageSquareText, NotebookTabs, NotebookText, Proportions, Rocket, Sparkles, SquarePen, Star } from 'lucide-react'
import React from 'react'

const DropdownTwo = () => {
  const navItems = [
    [<ClipboardCheck key="icon1" />, "Performance Reviews", true],
    [<Rocket key="icon2" />, "Continuous Performance", true],
    [<MessageSquareText key="icon3" />, "Automated Pulse Surveys", false],
    [<MessageCircleCode key="icon4" />, "Anonymous Feedback & Messaging"],
    [<GoalIcon key="icon5" />, "Goal & OKRs"],
    [<NotebookText key="icon6" />, "One-on-one meetings"],
    [<Sparkles key="icon7" />, "Good Vibes recognition"],
    [<Proportions key="icon8" />, "Reports"],
    [<SquarePen key="icon9" />, "Custom employee surveys"],
    [<Compass key="icon10" />, "Leadership and conversation"],
    [<MessageSquareText key="icon11" />, "Survey meeting templates"],
  ];

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
