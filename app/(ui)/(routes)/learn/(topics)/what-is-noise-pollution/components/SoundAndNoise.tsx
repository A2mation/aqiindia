'use client'

import { motion } from "motion/react"

const SoundAndNoise = () => {
  return (
     <main className='mx-auto max-w-7xl'>
                <div
                    className='flex items-center justify-center flex-col px-10 py-20'
                >
                
                    <div className='py-10 text-center'>
                        <motion.h2
                            id="hero-heading"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="heading-xl text-3xl font-semibold md:text-6xl text-black py-5 "
                        >
                            {`What is Noise pollution?`}
                        </motion.h2>

                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className=" text-base lg:text-2xl  text-black p-4"
                        >
                            Noise and sound are two related but distinct concepts in acoustics and communication. Sound refers to any audible vibration of air particles that propagate through a medium, such as air, water, or solids. Hence, it is a physical phenomenon that can perceive by the human ear and has characteristics such as frequency, amplitude, and waveform.
                        </motion.h3>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className=" text-base lg:text-2xl  text-black p-4"
                        >
                           On the other hand, noise refers to any unwanted or disturbing sound that causes physical discomfort. Because, it is a type of sound that is considered undesirable or irrelevant in a particular context or situation. Noise can characterize by its randomness, irregularity, or unpredictability. And it can arise from various sources, such as machinery, traffic, crowds, or environmental factors.
                        </motion.h3>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.0, delay: 0.2 }}
                            className=" text-base lg:text-2xl  text-black p-4"
                        >
                            Thus, the main difference between noise and sound is that sound is a physical phenomenon. And it can be intentional or desired. While noise is a subjective perception of sound that is unwanted or distracting. Additionally, while sound can have positive effects on human emotions and behavior. Noise can cause stress, annoyance, or even health problems in certain cases.
                        </motion.h3>
                    </div>

                     <img
                        src={"https://i.ytimg.com/vi/519DA554L7E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDFPdFch8WldZnEPfZRi5ocgY2EfA"} 
                        width={600}
                        height={400}
                        alt="Picture of the author"
                    />

                </div>
            </main>
  )
}

export default SoundAndNoise
