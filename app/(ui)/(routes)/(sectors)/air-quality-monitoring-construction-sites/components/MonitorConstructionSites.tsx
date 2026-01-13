"use client";

import { motion } from 'motion/react';
import Image from 'next/image'


export function MonitorConstructionSites() {
    return (
        <section
            className="section-padding-y py-20"
            id="how-it-works"
        >
            <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
                <div className="section-title-gap-lg mx-auto flex max-w-7xl flex-col items-center text-center">
                    <div className='flex justify-center flex-col gap-4'>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className='text-xl md:text-4xl font-semibold max-w-5xl mx-auto text-blue-500'
                        >
                            Why Monitor Air Quality on Construction Sites?
                        </motion.h2>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className='text-center text-base md:text-xl text-zinc-400 max-w-5xl mx-auto'
                        >
                            Our sensors track key environmental, gaseous, and weather parameters to help you stay compliant, protect workers, and control pollution effectively.
                        </motion.span>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4"
                >
                    <div className="flex flex-col items-center gap-5 text-center">
                        <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
                            <Image
                                src="/assets/pm2.5-parameter.png"
                                width={50}
                                height={50}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-foreground font-semibold">1. PM2.5</h3>
                            <p className="text-muted-foreground">
                                Fine particles from demolition that impact respiratory health.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5 text-center">
                        <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
                            <Image
                                src="/assets/pm10-perameter.png"
                                width={50}
                                height={50}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-foreground font-semibold">2. PM10</h3>
                            <p className="text-muted-foreground">
                                AI joins and transcribes in real-time as you speak with
                                teammates
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5 text-center">
                        <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
                            <Image
                                src="/assets/co-icon.png"
                                width={50}
                                height={50}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-foreground font-semibold">3. Carbon Monoxide </h3>
                            <p className="text-muted-foreground">
                                Toxic emissions from machinery and diesel generators.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5 text-center">
                        <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
                            <Image
                                src="/assets/no2-icon.png"
                                width={40}
                                height={40}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-foreground font-semibold">4. Nitrogen Dioxide </h3>
                            <p className="text-muted-foreground">
                                From diesel engines and heavy machinery on-site.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
