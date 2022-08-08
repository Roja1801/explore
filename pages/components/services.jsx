import React from 'react'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { MdAirplaneTicket } from 'react-icons/md'
import { BsFillQuestionDiamondFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Services = () => {
    return (
        <div id="services" className='flex flex-col justify-center items-center text-center bg-[#F9F9F9] p-10 gap-20 md:items-start lg:p-32 lg:py-16'>
            <div>

                <motion.h1 className='text-3xl font-bold text-[#20284F] p-4 md:text-left'
                    initial={{ x: -10, scale: 0.5 }} whileInView={{ x: 0, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}

                >Our Services</motion.h1>
                <motion.p className='text-2xl text-[#20284F] md:pl-4'
                    initial={{ x: -10, scale: 0.5 }} whileInView={{ x: 0, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}

                >We help our clients through our trip</motion.p>
            </div>
            <div className='flex flex-col justify-center items-center gap-14 md:flex-row'

            >
                <motion.div className='flex flex-col justify-center items-center gap-4 '
                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    viewport={{ once: true }}
                >
                    <FaMapMarkedAlt className='w-36 h-36 bg-[#069BCA] rounded-full p-8 text-white' />
                    <p className='text-2xl text-[#20284F] '>Destination</p>
                    <p className='text-xl text-[#787878]'>Choose any destination you like,we have several country ratings</p>
                </motion.div>
                <motion.div className='flex flex-col justify-center items-center gap-4'
                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    viewport={{ once: true }}>
                    <MdAirplaneTicket className='w-36 h-36 bg-[#069BCA] rounded-full p-8 text-white' />
                    <p className='text-2xl text-[#20284F]'>Tour</p>
                    <p className='text-xl text-[#787878]'>A large number of tours to different countries for one or more family</p>
                </motion.div>
                <motion.div className='flex flex-col justify-center items-center gap-4'
                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    viewport={{ once: true }}>
                    <BsFillQuestionDiamondFill className='w-36 h-36 bg-[#069BCA] rounded-full p-8 text-white' />
                    <p className='text-2xl text-[#20284F]'>Assistance</p>
                    <p className='text-xl text-[#787878]'>We are ready to solve all your questions and help to deal with your problems</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Services