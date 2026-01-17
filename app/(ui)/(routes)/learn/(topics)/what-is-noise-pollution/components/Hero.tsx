'use client'

import { motion } from "motion/react"



const Hero = () => {
    return (
        <section className='bg-[#8789ab]'>
            <main className='mx-auto max-w-7xl'>
                <div
                    className='flex items-center justify-center flex-col px-10 py-20'
                >
                    <img
                        src={"https://static.vecteezy.com/system/resources/thumbnails/049/389/360/small/impact-of-noise-pollution-disrupting-health-wildlife-and-ecosystems-free-vector.jpg"}
                        width={600}
                        height={400}
                        alt="Picture of the author"
                    />

                    <div className='py-10 text-center'>
                        <motion.h2
                            id="hero-heading"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="heading-xl text-3xl font-semibold md:text-6xl text-white py-5 "
                        >
                            {`What is Noise pollution?`}
                        </motion.h2>

                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className=" text-base lg:text-2xl  text-white"
                        >
                            Noise is a term used to describe any excessive or unwanted sound that can negatively impact humans and animals. As it causing physical and psychological stress to those who are exposed to it for longer durations. It is usually caused by human activities. Such as transportation, construction, industrial activities, and recreational activities. And it causes noise pollution.
                        </motion.span>
                    </div>

                </div>
            </main>
        </section>
    )
}

export default Hero
