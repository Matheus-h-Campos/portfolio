import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: [0,1]
    }}
    transition={{
      duration:2.5
    }}

    className='relative flex justify-center items-center'
    >
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-pulse'/>
        <div className='absolute border border-[#333333] rounded-full h-[550px] w-[550px] mt-52 animate-pulse'/>
        <div className='absolute border border-[#F7AB0A] rounded-full h-[800px] w-[800px] mt-52 animate-pulse'/>
        <div className='absolute border border-[#333333] rounded-full h-[1050px] w-[1050px] mt-52 animate-pulse'/>
    </motion.div>
  )
}

export default BackgroundCircles