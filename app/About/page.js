"use client";
import { delay, motion, useInView, useScroll } from 'framer-motion'
import { useRef } from 'react'
import Brain from "../components/Brain";
import react from 'react';
import Experience from './Experience';
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
            <h1 className='font-bold text-2xl'>SUMMARY</h1>
            <p className='text-lg'>Highly motivated Web Developer skilled in building scalable full-stack web applications using MERN and Next.js. Experienced
in developing REST APIs, working with agile team, and integrating some animation frameworks. Quick learner with strong
problem-solving and debugging skills.</p>
            {/* <span className='italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, sunt?</span> */}
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
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>React</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Next.js</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>HTML</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>CSS</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Tailwind CSS</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>EJS</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>GSAP</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Framer Motion</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Node</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>MongoDB</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Express</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>REST APIs</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>GitHub</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Postman</div>
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
          {/* <Experience/> */}
        </div>
        {/* SVG content */}
        <div className='hidden lg:block w-1/3 xl:1/2 sticky top-0 z-30 xl:1/2'>
        <Brain scrollYProgress={scrollYProgress}/>
        </div>
      </div>
    </motion.div>
  )
}