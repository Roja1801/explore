import React from 'react'
import Image from 'next/image'
import usa from '../../public/assets/usa.jpg'
import thailand from '../../public/assets/thailand.jpg'
import japan from '../../public/assets/japan.jpg'
import france from '../../public/assets/france.jpg'
import { motion } from 'framer-motion'

const Destinations = () => {
    return (
        <div id="destinations" className='flex flex-col justify-center items-center text-center bg-[#F9F9F9] p-10 gap-20 md:items-start lg:p-36'>
            <div>

                <motion.h1 className='text-3xl font-bold text-[#20284F] pb-4 md:text-left'
                    initial={{ x: -10, scale: 0.5 }} whileInView={{ x: 0, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}

                >Destinations</motion.h1>
                <motion.p className='text-2xl text-[#20284F]'
                    initial={{ x: -10, scale: 0.5 }} whileInView={{ x: 0, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}

                >You can choose any country with good tourism</motion.p>
            </div>
            <div className='hidden md:flex md:flex-row md:gap-10 md:justify-center md:items-center '
                initial={{ x: -10, scale: 0.5 }} whileInView={{ x: 0, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}

            >
                <p className='text-2xl text-[#20284F] hover:underline cursor-pointer'>Rating</p>
                <p className='text-2xl text-[#20284F] hover:underline cursor-pointer'>Type of rest</p>
                <p className='text-2xl text-[#20284F] hover:underline cursor-pointer'>Price</p>
                <p className='text-2xl text-[#20284F] hover:underline cursor-pointer'>Incidence of covid</p>
            </div>
            <div className='flex flex-col gap-14 sm:flex-row sm:flex-wrap sm:h-1/2 sm:w-1/2 md:flex-row md:items-center md:justify-center md:flex-nowrap md:w-full'>
                <motion.div className='border-2 border-white  bg-white rounded-lg shadow-2xl sm:w-full sm:h-full md:h-1/2 md:w-1/2'
                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    viewport={{ once: true }}

                    whileHover={{ scale: 1.2 }}
                >
                    <div className='w-full h-full'>

                        <Image src={usa} />
                    </div>
                    <p className='text-2xl lg:text-left lg:m-5'>USA</p>
                    <p className='text-xl text-[#787878] lg:m-5 lg:text-left' >The land of Rising Sun combines tradition and modernity</p>
                </motion.div>
                <motion.div className='border-2 border-white  bg-white rounded-lg shadow-2xl sm:w-full sm:h-full md:h-1/2 md:w-1/2'
                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    viewport={{ once: true }}

                    whileHover={{ scale: 1.2 }}
                >
                    <div className='w-full h-full'>

                        <Image src={thailand} />
                    </div>
                    <p className='text-2xl lg:text-left lg:m-5'>Tailand</p>
                    <p className='text-xl text-[#787878] lg:m-5 lg:text-left'>The land of Rising Sun combines tradition and modernity</p>
                </motion.div>
                <motion.div className='border-2 border-white  bg-white rounded-lg shadow-2xl sm:w-full sm:h-full md:h-1/2 md:w-1/2'
                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    viewport={{ once: true }}

                    whileHover={{ scale: 1.2 }}
                >
                    <div className='w-full h-full'>

                        <Image src={japan} />
                    </div>
                    <p className='text-2xl lg:text-left lg:m-5'>Japan</p>
                    <p className='text-xl text-[#787878] lg:m-5 lg:text-left'>The land of Rising Sun combines tradition and modernity</p>
                </motion.div>
                <motion.div className='border-2 border-white  bg-white rounded-lg shadow-2xl sm:w-full sm:h-full md:h-1/2 md:w-1/2'
                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    viewport={{ once: true }}

                    whileHover={{ scale: 1.2 }}
                >
                    <div className='w-full h-full'>

                        <Image src={france} />
                    </div>
                    <p className='text-2xl lg:text-left lg:m-5'>France</p>
                    <p className='text-xl text-[#787878] lg:m-5 lg:text-left'>The land of Rising Sun combines tradition and modernity</p>
                </motion.div>
            </div>

        </div >
    )
}

export default Destinations