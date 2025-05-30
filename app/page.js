"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';



export default function Home() {
  return (
    <motion.div className='h-full' initial={{y:"-200vh"}} animate={{y:0}} transition={{duration:1}}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 text-xl">
        <div className="h-1/2 lg:w-1/2 lg:h-full relative ">
          <Image
            src="/hero.png"
            alt="Hero Image"
            fill
            className="object-contain" />
        </div>
        <div className="h-1/2 flex flex-col gap-3 lg:gap-8 items-center justify-center lg:w-1/2 lg:h-full">
          <h1 className='text-2xl md:text-5xl font-bold'>Crafting Digital Experiences with Next.js and Tailwind CSS</h1>
          <p className='text-lg md:text-xl'>
            Welcome to my digital canvas where creativity meets technology.Explore the seamless integration of Next.js and Tailwind CSS to build stunning, responsive web applications. Dive into a world of possibilities with modern web development tools that empower you to create.
          </p>
          <div className='flex gap-4 w-full'>
            <button className='p-4 rounded-lg ring-2 ring-black bg-black text-white'>View My Work</button>
            <button className='p-4 rounded-lg ring-2 ring-black'>Contact Me</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
