import React from 'react'
import { motion } from 'framer-motion';
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <motion.div 
    initial={{
      x:directionLeft ? -200 : 200,
      opacity: 0
    }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x:0 }}

    >
      <div className='group relative items-center justify-evenly flex cursor-pointer bg-gray-600 rounded-full
    w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 shadow-lg hover:scale-110 transition ease-in-out'>
        <img 
        src={urlFor(skill?.image).url()}
        className=' object-cover w-20 h-20 md:w-20 md:h-20
        xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
        />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32
        rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-black text-black opacity-100'>
              {skill.progress}%
            </p>
          </div>
        </div>
        </div>
    </motion.div>
  )
}

export default Skill