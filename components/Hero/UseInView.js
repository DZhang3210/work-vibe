'use client'
import React from 'react'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const variants = {
    initial: {
        opacity:0, 
        y:20
    },
    animate: {
        opacity:1,
        y:0
    }
}
const UseInView = ({children}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.5, // Percentage of the element visible before triggering
    });
    if (inView) {
        controls.start('animate');
      }
  return (
    <motion.div
      ref={ref}
      variants = {variants}
      initial="initial"
      animate={controls}
      className="your-class"
    >
      {children}
    </motion.div>
  )
}

export default UseInView
