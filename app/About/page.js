"use client";
import { delay, motion, useInView, useScroll } from 'framer-motion'
import { useRef } from 'react'
import Brain from "../components/Brain";
import react from 'react';
export default function Page() {
  const containerRef=useRef();
  const {scrollYProgress}=useScroll({container:containerRef});

const skillRef=useRef();
const isSkillRefInView=useInView(skillRef,{margins:"-100px" });

const experianceRef=useRef();
const isExperianceRefInView=useInView(experianceRef,{margins:"-100px" });


  return (
    <motion.div className='h-full' initial={{ y: "-200vh" }} animate={{ y: 0 }} transition={{ duration: 1 }}>
      <div className='h-full overflow-scroll lg:flex overflow-x-hidden no-scrollbar' ref={containerRef}>
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap:64 lg:w-2/3 lg:pr-0 xl:1/2'>
          <div className='flex flex-col gap-12 justify-center'>
            <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, architecto laborum error est cumque magnam quibusdam ut, reprehenderit fuga facilis ipsum! Placeat, dolorem. Quibusdam dolores beatae deleniti architecto ex saepe vel eaque.</p>
            <span className='italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, sunt?</span>
            <div className=''><motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg></div>
            <div className='self-end'>Signature SVG</div>
          </div>
          <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
            <motion.h1 initial={{x : "-300px"}} animate={isSkillRefInView?{x:0}:{} } transition={{delay:"0.2"}} className='font-bold text-2xl'>SKILLS</motion.h1>
            <motion.div initial={{x : "-300px"}} animate={isSkillRefInView?{x:0}:{} } className='flex gap-4 flex-wrap'>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>JavaScript</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>JavaScript</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>JavaScript</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>JavaScript</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>JavaScript</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>JavaScript</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>JavaScript</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>JavaScript</div>
            </motion.div>
            <div className="">
              <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
            </div>
              </div>
          <div ref={experianceRef} className='flex flex-col gap-12 justify-center pb-48'>
          <motion.h1 initial={{x : "-300px"}} animate={isExperianceRefInView?{x:0}:{} } transition={{delay:"0.2"}} className='font-bold text-2xl'>EXPERIENCE</motion.h1>
          <motion.div initial={{x : "-300px"}} animate={isExperianceRefInView?{x:0}:{} } className='list'>
            {/* 1st experiences list item */}
            <div className="flex justify-between h-48">
              {/* left */}
              <div className='w-1/3'>
                {/* job title */}
                <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Senior Javascript Engineer</div>
                {/* job description */}
                <div className='p-3 text-sm italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                {/* job date */}
                <div className='p-3 text-red-400 text-sm font-semibold'>2024-Present</div>
                {/* job company */}
                <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Apple</div>
              </div>
              {/* center */}
              <div className='w-1/6'>
                {/* line */}
                <div className='w-1 h-full bg-gray-600 rounded relative'>
                  {/* line circle */}
                  <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                </div>
              </div>
              {/* right */}
              <div className='w-1/3'></div>
            </div>
            {/* 2nd experiences list item */}
            <div className="flex justify-between h-48">
              {/* left */}
              <div className='w-1/3'>
                {/* job title */}
                </div>
              {/* center */}
              <div className='w-1/6'>
                {/* line */}
                <div className='w-1 h-full bg-gray-600 rounded relative'>
                  {/* line circle */}
                  <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                </div>
              </div>
              {/* right */}
              <div className='w-1/3'>
              <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Senior Javascript Engineer</div>
                {/* job description */}
                <div className='p-3 text-sm italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                {/* job date */}
                <div className='p-3 text-red-400 text-sm font-semibold'>2024-Present</div>
                {/* job company */}
                <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Apple</div>
              </div>
            </div>
            {/* 3rd experiences list item */}
            <div className="flex justify-between h-48">
              {/* left */}
              <div className='w-1/3'>
                {/* job title */}
                <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Senior Javascript Engineer</div>
                {/* job description */}
                <div className='p-3 text-sm italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                {/* job date */}
                <div className='p-3 text-red-400 text-sm font-semibold'>2024-Present</div>
                {/* job company */}
                <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Apple</div>
              </div>
              {/* center */}
              <div className='w-1/6'>
                {/* line */}
                <div className='w-1 h-full bg-gray-600 rounded relative'>
                  {/* line circle */}
                  <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                </div>
              </div>
              {/* right */}
              <div className='w-1/3'></div>
            </div>
          </motion.div>
          </div>
        </div>
        {/* SVG content */}
        <div className='hidden lg:block w-1/3 xl:1/2 sticky top-0 z-30 xl:1/2'>
        <Brain scrollYProgress={scrollYProgress}/>
        </div>
      </div>
    </motion.div>
  )
}