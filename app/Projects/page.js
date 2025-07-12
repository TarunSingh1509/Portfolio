"use client";
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import react from 'react';


const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Portfolio",
    desc: "This is my portfolio here i am show casing my skills and my projects. In this project i am using Next.js for frontend and for styling i am using Tailwind CSS and for animations i am using Framer Motion.",
    img: "/project1.png",
    //  ?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://portfolio-tau-sable-13.vercel.app/"
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "User Management System",
    desc: "This is user management system where we can add user, read user, edit user information and delete user.",
    img: "/project2.png",
    // img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://user-data-base-4wfl.onrender.com/",
  },
  // {
  //   id: 3,
  //   color: "from-violet-300 to-purple-300",
  //   title: "Vanilla Book App",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //   img: "/project1.png",
  //   // img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //   link: "https://lama.dev",
  // },
  // {
  //   id: 4,
  //   color: "from-purple-300 to-red-300",
  //   title: "Spotify Music App",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //   img: "/project1.png",
  //   // img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   link: "https://lama.dev",
  // },
];


export default function Page() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ["-20%", "-66%"])//[0%,-80%]


  return (
    <motion.div className='h-full' initial={{ y: "-200vh" }} animate={{ y: 0 }} transition={{ duration: 1 }}>
      <div className='h-[600vh] relative' ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">My Works</div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className='flex'>
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
                <div className='flex flex-col gap-8 text-white items-center'>
                  <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl'>{item.title}</h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[340px]">
                    <Image src={item.img} alt={item.title} fill />
                  </div>
                  <p className='w-80 h-[100px] md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]'>{item.desc}</p>
                  <Link href={item.link} className='flex justify-end'>
                  <button className='p-2 text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded'>See Demo</button></Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center'>
        <h1 className='text-8xl'>Do you have a Project?</h1>
        <div className='relative'>
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link href="/Contact" className='w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center '>Hire Me</Link>
        </div>
      </div>
    </motion.div>
  )
}
