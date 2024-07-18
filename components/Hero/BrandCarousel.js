'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import './BrandCarousel.css'

const BrandCarousel = () => {
  const [carouselProgress, setCarouselProgress] = useState(0);

  return (
    <div className='logo-container flex flex-col items-center justify-center w-full h-[10rem] gap-10 mt-10'>
        <div className='logos w-[60vw]'>
            <div className='logos-slide'>
                <img src="./logos/3m.svg" />
                <img src="./logos/barstool-store.svg" />
                <img src="./logos/budweiser.svg" />
                <img src="./logos/buzzfeed.svg" />
                <img src="./logos/forbes.svg" />
                <img src="./logos/macys.svg" />
                <img src="./logos/menshealth.svg" />
                <img src="./logos/mrbeast.svg" />
            </div>
            <div className='logos-slide'>
                <img src="./logos/3m.svg" />
                <img src="./logos/barstool-store.svg" />
                <img src="./logos/budweiser.svg" />
                <img src="./logos/buzzfeed.svg" />
                <img src="./logos/forbes.svg" />
                <img src="./logos/macys.svg" />
                <img src="./logos/menshealth.svg" />
                <img src="./logos/mrbeast.svg" />
            </div>
        </div>
      </div>
  )
}

export default BrandCarousel
