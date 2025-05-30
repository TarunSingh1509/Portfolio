"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink'
import { motion } from 'framer-motion'
import react from 'react'

const links = [
  { title: 'Home', url: '/' },
  { title: 'Projects', url: '/Projects' },
  { title: 'About', url: '/About' },
  { title: 'Contact', url: '/Contact' }
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    }
  }
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    }
  }
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    }
  }

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      },
    }
  }

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      opacity: 1,
      x: 0
    }
  }


  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 text-xl'>
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>
      <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
          <span className='text-white mr-1'>Tarun</span>
          <span className='w-12 h-8 bg-white rounded text-black flex items-center justify-center'>.dev</span>
        </Link>
      </div>
      <div className='hidden md:flex gap-4 w-1/3 justify-center'>
        <Link href="https://github.com/TarunSingh1509" target="_blank">
          <Image
            src="/github.png"
            alt="github"
            width={24}
            height={24}
            className="hidden md:block" />
        </Link>
        <Link href="https://www.linkedin.com/in/tarun-singh-777991260/" target="_blank">
          <Image
            src="/linkedin.png"
            alt="linkedin"
            width={24}
            height={24}
            className="hidden md:block" />
        </Link>
        <Link href="https://www.instagram.com/king_tarun_singh/" target="_blank">
          <Image
            src="/instagram.png"
            alt="instagram"
            width={24}
            height={24}
            className="hidden md:block" />
        </Link>
      </div>
      <div className='md:hidden'>
        <button className='w-10 h-8 flex flex-col items-center justify-between z-50 relative' onClick={() => setIsOpen(!isOpen)}>
          <motion.div variants={topVariants} animate={isOpen ? "opened" : "closed "} className="w-10 h-1 origin-left bg-black"></motion.div>
          <motion.div variants={centerVariants} animate={isOpen ? "opened" : "closed "} className="w-10 h-1 bg-black"></motion.div>
          <motion.div variants={bottomVariants} animate={isOpen ? "opened" : "closed "} className="w-10 h-1 origin-left bg-black"></motion.div>
        </button>
        {isOpen && (
          <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center z-50 justify-center gap-8 text-4xl">
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url} onClick={() => setIsOpen(false)} >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
