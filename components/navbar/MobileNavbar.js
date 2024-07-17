import React from 'react'

const MobileNavbar = () => {
  return (
    <nav className='sticky top-0 flex justify-between px-10 border h-[80px]'>
      <div id ="left-nav" className='flex gap-7 text-lg text-gray-600 items-center'>
        <div className='flex items-center gap-1'>
            <Image
                src = "/Officevibe-Blue-40.svg"
                alt = "logo"
                height = {35}
                width = {35}
            />
            <span className= 'text-black text-xl font-semibold'>Officevibe</span>
        </div>
        <button 
            className='flex items-center group border-transparent border-b-2 hover:border-blue-600 h-full'
            onClick = {()=>triggerDropdown(1)}
        >
            <span>Overview</span>
            <ChevronUp
                className='mt-1 transition group-hover:rotate-180'
            />
        </button>
        <button 
            className='flex items-center group border-transparent border-b-2 hover:border-blue-600 h-full'
            onClick = {()=>triggerDropdown(2)}
        >
            <span>Features</span>
            <ChevronUp
                className='mt-1 transition group-hover:rotate-180'
            />
        </button>
        <Link
            href = "/"
        >
            Pricing
        </Link>
        <button 
            className='flex items-center group border-transparent border-b-2 hover:border-blue-600 h-full'
            onClick = {()=>triggerDropdown(3)}
        >
            <span>Learn & Support</span>
            <ChevronUp
                className='mt-1 transition group-hover:rotate-180'
            />
        </button>
      </div>
      <div
        id = "right-nav" className='absolute right-10 top-1/4 flex flex-row items-center gap-4'
      >
        <button className='px-3 border-2 py-1 border-blue-600 rounded-md text-blue-600 transition hover:bg-blue-800 hover:text-white'>
            Request a demo
        </button>
        <button className='bg-blue-600 rounded-md px-3 text-white py-1 transition hover:bg-blue-800'>
            Get started free
        </button>
      </div>

      {/* //Dropdown/Overlay for Display */}
        <AnimatePresence>
            {dropdown !== 0 && 
            <DropdownTransition>
            <div className='fixed h-full w-full bg-gray-200/50 top-0 left-0 mt-[80px]'>
                <div className='w-full py-4 bg-white pointer-events-auto px-10'>
                    
                    {dropdown === 1 && (

                        <DropdownOne/>
                        
                    )}
                    {dropdown === 2 && (
                    
                        <DropdownTwo/>
                        
                    )}
                    {dropdown === 3 && (
                    
                        <DropdownThree/>
                        
                    )}
                </div>
            </div>
            </DropdownTransition>
            }
            
        </AnimatePresence>

    </nav>
  )
}

export default MobileNavbar
