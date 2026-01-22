'use client'

import { motion } from 'motion/react'

const Hero = () => {
    return (
        <section className='bg-[#6a827b]'>
            <main className='max-w-7xl mx-auto'>
                <div
                    className='flex items-center justify-center flex-col px-10 py-20'
                >

                    <img
                        src={"/assets/no2-emmison-logo.png"}
                        width={400}
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
                            {`What is Nitrogen Dioxide NO₂?`}
                        </motion.h2>

                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className=" text-base lg:text-xl text-white"
                        >
                            Nitrogen Dioxide (NO₂), accounts for more than 70% of the air present in the environment. And it is the most abundant gas present. For instance, Traffic on the road and the burning of fossil fuels result in poisonous NO₂ air pollution. Hence, it is harmful to humans, plants, and animals.
                        </motion.span>


                    </div>

                </div>
            </main>
        </section>
    )
}

export default Hero
