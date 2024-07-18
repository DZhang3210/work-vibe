'use client'
import { ChevronUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { DropdownTransition } from './fadeInAndOutWrapper'
import { AnimatePresence } from 'framer-motion'
import DropdownOne from './DropdownOne'
import DropdownTwo from './DropdownTwo'
import DropdownThree from './DropdownThree'


const MobileNavbar = () => {
   const [dropdown, setDropdown] = useState(0)
   const [mainDrop, setMainDrop] = useState(false)
  const triggerDropdown = (dropItem) =>{
    if(dropdown === dropItem) setDropdown(0)
    else setDropdown(dropItem)
  }
  return (
    <nav className='fixed top-0 left-0 right-0 bg-white flex justify-between px-10 border h-[80px] z-[100]'>
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
      </div>
      <div
        id = "right-nav" className='absolute right-10 top-1/4 flex flex-row items-center gap-4'
      >
        <button className='hidden lg:inline px-3 border-2 py-1 border-blue-600 rounded-md text-blue-600 transition hover:bg-blue-800 hover:text-white'>
            Request a demo
        </button>
        <button className='hidden lg:inline bg-blue-600 rounded-md px-3 text-white py-1 transition hover:bg-blue-800'>
            Get started free
        </button>
        <button
            onClick = {()=>setMainDrop(prev => !prev)}
        >
            <ChevronUp
                className={'rounded-full transition hover:bg-black p-2 hover:rotate-180 hover:text-white ' + (mainDrop ?  'bg-black rotate-180 text-white':'')}
                size = {40}
            />
        </button>
      </div>

      {/* //Dropdown/Overlay for Display */}
        <AnimatePresence>
            {mainDrop && 
            <DropdownTransition>
                <div className='fixed h-full w-full bg-gray-200/50 top-0 left-0 mt-[80px] pointer-events-none'>
                    <div className='w-full py-4 bg-white pointer-events-auto px-10 max-h-[80vh] overflow-scroll'>
                    <button 
                        className='flex items-center group border-transparent border-b-2 hover:border-blue-600 h-full'
                        onClick = {()=>triggerDropdown(1)}
                    >
                        <span>Overview</span>
                        <ChevronUp
                            className='mt-1 transition group-hover:rotate-180'
                        />
                    </button>
                        {dropdown === 1 && (
                            <DropdownOne/>
                        )}
                    <button 
                        className='flex items-center group border-transparent border-b-2 hover:border-blue-600 h-full'
                        onClick = {()=>triggerDropdown(2)}
                    >
                        <span>Features</span>
                        <ChevronUp
                            className='mt-1 transition group-hover:rotate-180'
                        />
                    </button>
                    {dropdown === 2 && (
                        <DropdownTwo/>
                    )}
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
                    {dropdown === 3 && (
                    
                    <DropdownThree/>
                    
                    )}
                    </div>
                </div>
            
            {/* <div className='fixed h-full w-full bg-gray-200/50 top-0 left-0 mt-[80px]'>
                <div className='w-full py-4 bg-white pointer-events-auto px-10'>
                    
                    {dropdown === 1 && (

                        <DropdownOne/>
                        
                    )}
                    
                    
                </div>
            </div> */}
            </DropdownTransition>
            }
            
        </AnimatePresence>

    </nav>
  )
}

export default MobileNavbar
