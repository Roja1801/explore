import React from 'react'
import Image from 'next/Image'
import About from '../../public/assets/about.jpg'
import { motion } from 'framer-motion'

const Aboutus = () => {
    return (
        <div id="about" className='p-10 pb-16 flex bg-[#F9F9F9] flex-col items-center gap-4 md:flex-row lg:py-14 lg:justify-center lg:items-center '>
            <div className='flex flex-col gap-5 p-5 items-center text-center md:items-start lg:pl-28 '>
                <motion.h1 className='text-3xl font-bold text-[#20284F] lg:py-5'
                    initial={{ x: -10, scale: 0.5 }} whileInView={{ x: 0, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}

                >About Us</motion.h1>
                <motion.h3 className='text-2xl text-[#20284F] md:text-left'
                    initial={{ x: -10, scale: 0.5 }} whileInView={{ x: 0, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}

                >The best travel agency for you</motion.h3>
                <motion.p className='text-xl text-[#787878] md:text-left lg:w-3/4 '
                    initial={{ x: -250 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}

                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sapiente, minus non pariatur nobis tempore ex cum esse provident culpa voluptates laboriosam, dolorum numquam ad dolorem nostrum magnam fugiat tempora.</motion.p>
                <a className='text-xl text-[#20284F] cursor-pointer hover:underline ' href='#' >Read more about us</a>
            </div>
            <motion.div className='w-60 h-60 pb-5 mb-9 md:w-3/4 md:h-3/4 lg:w-1/2 lg:h-1/2 lg:mr-36'
                initial={{ x: 10, opacity: 0, scale: 0.5 }} whileInView={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}

            >
                <Image src={About} className='rounded-xl' />
            </motion.div>
        </div>
    )
}

export default Aboutus