'use client'

import { motion } from 'motion/react'

const Source = () => {
    return (
        <section>
            <main className='max-w-7xl mx-auto'>
                <div
                    className='flex items-center justify-center flex-col px-10'
                >


                    <div className=' max-w-6xl mx-auto text-center'>
                        <motion.h2
                            id="hero-heading"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="heading-xl text-3xl text-black font-semibold md:text-6xl  py-5 "
                        >
                            {`Where does Carbon Dioxide (CO2) come from indoors?`}
                        </motion.h2>

                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className=" text-base lg:text-xl text-black"
                        >
                            The main source of CO₂ indoors is respiration. Because as we inhale oxygen and release CO₂. In the modern age, homes are becoming more airtight, ventilation does not happen that frequently and fresh air cannot enter indoors. Many ventilation systems that are used nowadays recirculate the air indoors rather than bringing less CO₂ contaminated air from outdoors. As a result, the same air is recirculating and recirculating. Hence, this increases the carbon dioxide contamination indoors.
                        </motion.span>
                    </div>
                    <img
                        src={"https://media.licdn.com/dms/image/v2/D4D12AQFA3INGqToY-w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1736757481080?e=2147483647&v=beta&t=7nQLeTQwXsKFZ46SMFoBCP1waZ2QkDzv6Sb4SQ3Si2s"}
                        width={1000}
                        height={400}
                        alt="Picture of the VOC icon"
                    />


                </div>
            </main>
        </section>
    )
}

export default Source
