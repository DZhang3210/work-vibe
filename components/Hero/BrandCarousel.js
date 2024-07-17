'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const BrandCarousel = () => {
  const [carouselProgress, setCarouselProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselProgress(prev => {
        if (prev >= 100) {
          return 0;
        } else {
          console.log(prev, carouselProgress)
          return prev + 1;
        }
      });
    }, 100); // Adjust the interval timing as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='border-8 w-[100vw] mt-10 overflow-hidden'>
      <div className={'flex justify-evenly gap-10 border-4 border-red-300 w-[200vw] ' + (`-translate-x-[${carouselProgress}%]`)}>
        <Image src = "brand-fujitsu.svg" alt = "brand-logo" width = {0} height = {0} className='height-auto w-[10%]'/>
        <Image src = "brand-fujitsu.svg" alt = "brand-logo" width = {0} height = {0} className='height-auto w-[10%]'/>
        <Image src = "brand-fujitsu.svg" alt = "brand-logo" width = {0} height = {0} className='height-auto w-[10%]'/>
        <Image src = "brand-fujitsu.svg" alt = "brand-logo" width = {0} height = {0} className='height-auto w-[10%]'/>
        <Image src = "brand-fujitsu.svg" alt = "brand-logo" width = {0} height = {0} className='height-auto w-[10%]'/>
        <Image src = "brand-fujitsu.svg" alt = "brand-logo" width = {0} height = {0} className='height-auto w-[10%]'/>
        <Image src = "brand-fujitsu.svg" alt = "brand-logo" width = {0} height = {0} className='height-auto w-[10%]'/>
        <Image src = "brand-fujitsu.svg" alt = "brand-logo" width = {0} height = {0} className='height-auto w-[10%]'/>
        <Image src = "brand-fujitsu.svg" alt = "brand-logo" width = {0} height = {0} className='height-auto w-[10%]'/>
        <Image src = "brand-fujitsu.svg" alt = "brand-logo" width = {0} height = {0} className='height-auto w-[10%]'/>
      </div>
    </div>
  )
}

export default BrandCarousel
