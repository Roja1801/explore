import React from 'react'
import { TbWorld } from 'react-icons/tb'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineYoutube } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import Link from 'next/link'
import { motion } from 'framer-motion'


const HomePage = () => {
    return (
        <div className='bg-[url("../public/assets/homepg.jpg")] bg-cover' >
            <div className='p-10  md:flex md:flex-col md:justify-start lg:h-screen lg:pl-28'>
                <div className='md:flex md:justify-between'>

                    <div className='flex items-center text-center flex-col p-5 text-white md:items-start md:p-0 md:text-black  md:pl-4' >
                        <TbWorld className='h-10 w-10 cursor-pointer' />
                        <p className='text-xs font-medium md:text-sm md:font-semibold'

                        >World Explore</p>

                    </div>
                    <div className='hidden md:flex md:text-white md:gap-14 md:items-center md:justify-center md:font-semibold md:text-xl ' >
                        <Link href="#about" scroll={false}>
                            <a className='cursor-pointer'

                            >About Us</a>
                        </Link>
                        <Link href="#services" scroll={false}>
                            <a className='cursor-pointer'>Services</a>
                        </Link>
                        <Link href="#destinations" scroll={false}>
                            <a className='cursor-pointer'>Destination</a>
                        </Link>
                        <Link href="#contact" scroll={false}>
                            <a className='cursor-pointer'>Contact Us</a>
                        </Link>


                    </div>
                </div>
                <motion.div className='md:flex md:flex-row md:justify-between md:pt-28 md:pl-4 lg:p-40 lg:gap-80 lg:pl-4'
                    initial={{ x: -10, scale: 0.5, opacity: 0 }} whileInView={{ x: 0, scale: 1, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}

                >
                    <div className='flex flex-col items-center gap-5 text-[#F9F9F9] md:items-start lg:p-5 lg:gap-10 lg:items-start'>
                        <h4 className='text-1xl font-bold md:text-2xl'>WELCOME</h4>
                        <h1 className='text-2xl font-bold text-center leading-6 md:text-3xl lg:text-start lg:text-5xl lg:w-full' >Explore our World deeper with us</h1>
                        <h5 className='text-xl font-medium text-center leading-6 md:text-2xl lg:text-start'>Watch the best tours,buy tickets and relax</h5>
                        <motion.button className='text-xl bg-cyan-400 p-3 text-black font-semibold cursor-pointer'
                            whileHover={{ scale: 1.2 }}
                            onHoverStart={e => { }}
                            onHoverEnd={e => { }}
                        >Buy Tickets</motion.button>

                    </div>
                    <div className='hidden md:flex md:flex-col md:gap-5 lg:gap-10 lg:pt-4 lg:pr-0 lg:items-center lg:justify-center'>
                        <AiOutlineInstagram className='text-white  h-12 w-12 cursor-pointer' />
                        <AiOutlineYoutube className='text-white h-12 w-12 cursor-pointer' />
                        <FiTwitter className='text-white h-12 w-12 cursor-pointer' />
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default HomePage