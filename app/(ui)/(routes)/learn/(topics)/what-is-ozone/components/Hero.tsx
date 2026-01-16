'use client'

import { motion } from 'motion/react'

const Hero = () => {
    return (
        <section className='bg-[#5c87ba]'>
            <main className='mx-auto max-w-6xl'>
                <div
                    className='flex items-center justify-center flex-col px-10 py-20'
                >
                    <img
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysJawLiktnkzWjex6mZyt0xOjUsLPDYLfTQ&s"}
                        width={200}
                        height={200}
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
                            {`What is Ozone (O₃)?`}
                        </motion.h2>

                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className=" text-base lg:text-2xl  text-white"
                        >
                            Ozone (O3) is a molecule composed of three oxygen atoms. It is found in the natural environment. Nitrogen (78%) is the most abundant gas found in the atmosphere, followed by oxygen (21%). The remaining 1% is a pool of several other gases. Such as carbon dioxide, neon, hydrogen, and so on. Ozone is also one of the gases included in this 1% share. As it corresponds to approximately 0.00001% ozone in the ambient air. Because of its active nature of oxidizing things, nature continuously creates it with various electrochemical and electrostatic effects. Thus, its nature regulates the amount of mold, viruses, bacteria, and VOCs in the ambient air in this way.
                        </motion.span>

                        <motion.h2
                            id="hero-heading"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="heading-xl text-xl md:text-4xl font-semibold text-white py-5"
                        >
                            {`Ozone (o3): A friend or a foe?`}
                        </motion.h2>

                        <motion.h2
                            id="hero-heading"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="heading-xl italic text-lg md:text-3xl font-semibold text-white py-2"
                        >
                            {`As the EPA says, Ozone is good up there, but bad nearby.`}
                        </motion.h2>

                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className=" text-base lg:text-2xl text-white "
                        >
                            1. Stratospheric ozone acts as our natural sunscreen. It absorbs the suns harmful UV rays. As preventing them from reaching the surface or the air. This layer is being depleted as a result of humans active use of CFCs. CFCs chlorinated organic chemicals utilized as propellants and refrigerants. They are used to keep things cool. And they are hence used in a variety of products such as air conditioners and refrigerators. They are also found in aerosol cans, spray paints, deodorants, and other products. Moreover, they are to blame for the ozone layers depletion. As a result of their extreme stability, they can persist in the atmosphere for a very long time after being discharged (10 -100 years).

                            2. When ozone is at ground level, especially when trapped indoors, it is a respiratory tract irritant that affects asthmatics and can harm plants. Because electrochemical and electrostatic effects are not naturally present indoors. Unless there is a continual flow of fresh air from outside. So, the quantity of ozone indoors will progressively drop to near zero. Giving spores, viruses, bacteria, and other airborne viruses a competitive advantage. So its safe to say that ozone should maintain indoors in a reasonable amount. As to prevent the growth of mold, bacteria, viruses, and other microbes. As these can cause further disruptions and physical discomfort.
                        </motion.span>


                    </div>

                </div>
            </main>
        </section>
    )
}

export default Hero
