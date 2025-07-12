import { useInView,motion } from 'framer-motion';
import React, { useRef } from 'react'

export default function Experience() {
  const experianceRef=useRef();
const isExperianceRefInView=useInView(experianceRef,{margins:"-100px" });
  return (
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
  )
}
