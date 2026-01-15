'use client'

import { motion } from 'motion/react'
import Image from "next/image"

const Hero = () => {
    return (
        <section className='bg-[#b3e1eb]'>
            <main className='max-w-7xl mx-auto'>
                <div
                    className='flex items-center justify-center flex-col px-10 py-20'
                >
                    <Image
                        src={"/assets/so2-icon.png"}
                        width={200}
                        height={100}
                        alt="Picture of the SO2 icon"
                    />

                    <div className='py-10 max-w-3xl mx-auto text-center'>
                        <motion.h2
                            id="hero-heading"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="heading-xl text-3xl font-semibold md:text-6xl  py-5 "
                        >
                            {`What is Sulfur Dioxide SO₂?`}
                        </motion.h2>

                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className=" text-base lg:text-xl "
                        >
                            Sulfur Dioxide is a gaseous form of air pollution, made from two components- sulfur and oxygen. This forms when sulfur-rich fuels burn such as oil, diesel, or coal. Sulfur dioxide already exists in the air composition but due to its various natural and man-made sources, the SO2 concentration can rise, resulting in severe effects on humans, plants, and the entire ecosystem.
                        </motion.span>


                    </div>

                </div>
            </main>
        </section>
    )
}

export default Hero
