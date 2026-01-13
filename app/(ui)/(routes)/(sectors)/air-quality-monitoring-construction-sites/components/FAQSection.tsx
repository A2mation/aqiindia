"use client"

import { useState } from "react"
import { IconChevronDown } from "@tabler/icons-react"
import { motion } from "framer-motion"

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: "What is the best way to monitor dust levels at construction sites?",
            answer:
                "The most effective way to monitor dust pollution is by using real-time PM sensors (PM1, PM2.5, PM10) installed on-site. These air quality monitors help construction managers track emissions and comply with local pollution control board guidelines.",
        },
        {
            question: "Is air quality monitoring mandatory at construction sites in India?",
            answer:
                "Many state and central pollution control boards require dust monitoring as part of environmental clearance, especially for large-scale urban and infrastructure projects. Using certified air quality monitoring systems helps ensure regulatory compliance.",
        },
        {
            question: "How can I reduce air pollution caused by construction activities?",
            answer:
                "Implementing dust suppression systems, using low-emission machinery, installing windbreaks, and continuously monitoring AQI are proven strategies to control site-specific air pollution levels.",
        },
        {
            question: "Which air quality parameters are critical during construction?",
            answer:
                "Key parameters include PM2.5, PM10, CO, NO2, SO2, noise levels, temperature, humidity, wind speed, and wind direction. These indicators provide a complete view of environmental impact and worker safety.",
        },

        {
            question: "Can I receive real-time alerts and notifications?",
            answer:
                "Yes, Aurassure provides instant alerts through SMS, email, and app notifications when pollutants cross defined thresholds, ensuring timely action and compliance.",
        },
        {
            question: "What is the cost of installing an AQI monitoring system at a site?",
            answer:
                "Pricing depends on the number of parameters, device connectivity, installation scale, and duration. Contact us for a tailored quote based on your project size.",
        },
        {
            question: "How often is calibration or maintenance required?",
            answer:
                "Our sensors are factory-calibrated and require minimal maintenance. However, we offer optional on-site servicing and annual calibration checks as part of our AMC plans.",
        },
        {
            question: "Can I monitor multiple construction sites from a single dashboard?",
            answer:
                "Yes, Aurassure’s web-based dashboard supports central monitoring for multiple devices and locations with role-based access, historical reports, and geo-tagged maps.",
        },

    ]

    return (
        <section className="bg-blue-100">
            <div className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="font-serif text-4xl md:text-5xl font-bold mb-4 text-blue-500"
                        >
                            Frequently Asked Questions About Air Quality Monitoring for Construction Sites
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-muted-foreground"
                        >
                            Everything you need to know about Construction Sites .
                        </motion.p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="border border-border rounded-xl overflow-hidden bg-secondary"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-background/50 transition-colors"
                                >
                                    <span className="font-semibold text-lg pr-8">{faq.question}</span>
                                    <IconChevronDown
                                        className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                                    />
                                </button>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-5 text-muted-foreground leading-relaxed"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
