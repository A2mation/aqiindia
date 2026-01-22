'use client'

import { motion } from 'motion/react'

const Hero = () => {
    return (
        <section className='bg-[#61b7c8]'>
            <main className='max-w-7xl mx-auto'>
                <div
                    className='flex items-center justify-center flex-col px-10 py-20'
                >

                    <img
                        src={"/assets/Co2-large-icon.png"}
                        width={600}
                        height={300}
                        alt="Picture of the VOC icon"
                    />
                    <div className='py-10 max-w-3xl mx-auto text-center'>
                        <motion.h2
                            id="hero-heading"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="heading-xl text-3xl text-white font-semibold md:text-6xl  py-5 "
                        >
                            {`What is Carbon Dioxide (CO₂)?`}
                        </motion.h2>

                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className=" text-base lg:text-xl text-white"
                        >
                            Carbon Dioxide (CO₂) is a transparent gas and natural component of air, that acts as a greenhouse gas in the atmosphere. It is generally harmless in small quantities but can affect severely as the quantities rise, especially indoors where ventilation is low and indoor air cannot recirculate. Hence, it can impact sleep patterns, productivity, concentration levels, etc.
                        </motion.span>


                        <motion.h2
                            id="hero-heading"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="heading-xl text-2xl text-white font-semibold md:text-5xl  py-5 "
                        >
                            {`How is it important in the environment?`}
                        </motion.h2>

                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className=" text-sm lg:text-lg text-white"
                        >
                            CO₂ helps plants in the process of photosynthesis, a process through which plants make their food. Many animals and humans both depend on plants for their survival. Therefore photosynthesis is important for the survival of plants, animals, and humans.
                            <br />
                            CO₂ helps in trapping the heat and energy from the sun within the earths atmosphere. Because this helps in preventing the temperature from getting inhospitably cold and oceans from freezing into solid.
                        </motion.span>


                    </div>

                </div>
            </main>
        </section>
    )
}

export default Hero
