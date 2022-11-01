import React from 'react'
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    experience: Experience;
}

export default function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7
    flex-shrink-0 w-[500px] md:w-[600] xl:w-[900px] snap-center bg-[#292929]
    p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity
    duration-200 overflow-hidden' >
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{
            duration: 1.2
        }}
        whileInView={{ opacity:1, y: 0 }}
        viewport={{ once: true }}   

        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
        object-center'

        src={urlFor(experience?.companyImage).url()}
        alt=""
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
            <p className='uppercase font-bold text-2xl mt-1'>{experience?.company}</p>


            <p 
            className='uppercase py-5 text-gray-300'>
                {new Date(experience.dateStarted).getFullYear()}-{new Date(experience.dateStarted).getMonth()} to{" "}
                {experience.isCurrentlyWorkingHere
                    ? "Present"
                    : new Date(experience.dateEnded).getFullYear() + "-" + new Date(experience.dateStarted).getMonth()}
            </p>

            <ul className='list-disc space-y-4 ml-5 text-lg m-h-96'>
                {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
        
    </article>
  )
}