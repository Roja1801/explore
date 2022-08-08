import React from 'react'
import { motion } from 'framer-motion'

const Subscription = () => {
    return (
        <div className='bg-[#66DAFF] p-10 flex flex-col gap-10 justify-center items-center md:items-start md:flex-row lg:p-36'>
            <div className='flex flex-col gap-5 items-center justify-center md:items-start'>
                <motion.h1 className='text-3xl font-bold text-center'
                    initial={{ x: -10, scale: 0.5 }} whileInView={{ x: 0, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}

                >Stay in touch</motion.h1>
                <motion.p className='text-xl text-center md:text-left'
                    initial={{ x: -10, scale: 0.5 }} whileInView={{ x: 0, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}

                >Subscribe to our newsletter and recieve notifications of favourable offers and news.No spam,just useful information</motion.p>
            </div>
            <div className='flex  justify-center items-center flex-row gap-0 '>
                <input type="text" placeholder='Enter E-mail' className='border 2 border-blue-300 py-4 px-8 rounded-3xl shadow-md rounded-r-none' />
                <p className='bg-[#069BCA] p-3 rounded-3xl shadow-md py-4 rounded-l-none cursor-pointer text-white' >Subcribe</p>
            </div>
        </div>
    )
}

export default Subscription