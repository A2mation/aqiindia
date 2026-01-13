"use client";

import { Check, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

export function HeroSection() {
    return (
        <section
            className="section-padding-y"
            aria-labelledby="hero-heading"
        >
            <div className="container mx-auto flex flex-col p-5 items-center gap-12 lg:flex-row lg:gap-16">
                {/* Left Column */}
                <div className="flex flex-1 flex-col gap-6 lg:gap-8">
                    {/* Section Title */}
                    <div className="section-title-gap-xl flex flex-col gap-2">
                        {/* Tagline */}
                        <Badge className="bg-blue-400 text-white">Stay Compliant and Safe with</Badge>
                        {/* Main Heading */}
                        <motion.h2
                            id="hero-heading"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="heading-xl"
                        >
                            Air Quality Monitoring for Construction Sites
                        </motion.h2>
                        {/* Description */}
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-muted-foreground text-base lg:text-lg"
                        >
                            Monitor dust and pollution in real time, protect worker health, and meet Pollution Control Board regulations with Aurassure’s smart air quality solutions.
                        </motion.span>
                    </div>

                    {/* Feature List */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col gap-2 md:gap-3"
                    >
                        <div className="flex items-start gap-3">
                            <div className="pt-0.5">
                                <Check className="text-primary h-5 w-5" />
                            </div>
                            <span className="text-card-foreground text-base leading-6 font-medium">
                                Deal progress tracking
                            </span>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="pt-0.5">
                                <Check className="text-primary h-5 w-5" />
                            </div>
                            <span className="text-card-foreground text-base leading-6 font-medium">
                                Customer sentiment analysis
                            </span>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="pt-0.5">
                                <Check className="text-primary h-5 w-5" />
                            </div>
                            <span className="text-card-foreground text-base leading-6 font-medium">
                                Automatic updates
                            </span>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col gap-3 sm:flex-row"
                    >
                        <Button>contact us</Button>
                        <Button variant="ghost">
                            Explore now
                            <ArrowRight />
                        </Button>
                    </motion.div>
                </div>

                {/* Right Column */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full flex-1 p-5"
                >
                    <AspectRatio ratio={1 / 1}>
                        <img
                            src="https://static.investindia.gov.in/s3fs-public/2024-12/consw.png"
                            alt="Hero visual"
                            className="h-full w-full rounded-xl object-cover"
                        />
                    </AspectRatio>
                </motion.div>
            </div>
        </section>
    );
}
