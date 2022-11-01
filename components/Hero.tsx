import Link from 'next/link';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';

type Props = {
    pageInfo: PageInfo
}

export default function Hero({pageInfo} : Props) {
    const [text] = useTypewriter({
        words: [
            "Hi, I'm Matheus",
            "I'm a Web Developer",
            "Entrepreneur",
            "And...",
            "I wanna work with you!",
            ""
        ],
        loop: true,
        delaySpeed: 2000,
      });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
        <div className=''>
            <BackgroundCircles />
        </div>
        
        
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={urlFor(pageInfo?.heroImage).url()} alt='profile'/>
        
        <div className='z-20 max-w-screen'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                {pageInfo?.role}
            </h2>
            <h2 className='text-4xl lg:text-5xl sm:text-3xl font-semibold  '>
                <span>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h2>

            <div className='pt-5'>
                <Link href='#about'>
                    <button className='heroButton'>About</button>
                </Link>
                <Link href='#experience'>
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href='#skills'>
                    <button className='heroButton'>Skills</button>
                </Link>
                {/* <Link href='#projects'>
                    <button className='heroButton'>Projects</button>
                </Link> */}
                
            </div>
        </div>
    </div>
  )
}
