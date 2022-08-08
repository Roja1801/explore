import React from 'react'
import { FiMapPin } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div id="contact" className='flex flex-col justify-center items-center p-10 gap-5 md:flex-row md:items-start lg:p-36 lg:gap-20 bg-[#F9F9F9]'>
            <div>
                <div className='flex flex-col justify-center items-center md:items-start'>
                    <motion.h1 className='text-3xl font-bold text-[#20284F] pb-5 md:text-left'
                        initial={{ x: -10, scale: 0.5 }} whileInView={{ x: 0, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}

                    >Contact Us</motion.h1>
                    <motion.p className='text-xl text-[#787878] text-center pb-5 md:text-left'
                        initial={{ x: -10, scale: 0.5 }} whileInView={{ x: 0, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}

                    >Feel free to contact us.Request a call by entering your phone in the column below.</motion.p>
                </div>
                <div className='flex flex-row gap-0 items-center justify-center md:items-start md:justify-start'>

                    <input type="text" placeholder='Enter your phone' className='bg-white shadow-md py-4 px-6 rounded-3xl rounded-r-none' />
                    <p className='shadow-md py-4 rounded-3xl rounded-l-none px-2 bg-[#069BCA] text-white cursor-pointer'>Request</p>
                </div>
            </div>

            <motion.div className='flex flex-col justify-center items-start p-5 gap-5'
                initial={{ x: 250 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}

            >

                <div className='flex flex-row gap-3'>
                    <FiMapPin className='text-[#787878] h-8 w-8' />
                    <p className='text-[#787878] text-xl'>45 Whiston Rd,London E2 8FZ</p>
                </div>
                <div className='flex flex-row gap-3'>
                    <AiOutlineMail className='text-[#787878] h-8 w-8' />
                    <p className='text-[#787878] text-xl'>support@exploreWorld.com</p>
                </div>
                <div className='flex flex-row gap-3'>
                    <FiPhoneCall className='text-[#787878] h-8 w-8' />
                    <p className='text-[#787878] text-xl' >+456434522</p>
                </div>
            </motion.div>

        </div>
    )
}

export default Contact