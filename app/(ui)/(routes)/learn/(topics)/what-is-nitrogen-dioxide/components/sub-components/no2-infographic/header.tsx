'use client';

import { motion } from 'framer-motion';

export function Header() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.header
      className="w-full px-4 py-8 md:py-12 lg:py-16 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
          },
        }}
      >
        Health & Environmental Impacts of NO₂ Gas
      </motion.h1>

      <motion.p
        className="text-sm md:text-base lg:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
          },
        }}
      >
        NO₂ is part of the NOx group of highly reactive gases. Whereas NO is a brownish acidic gas with pungent odor, it reacts with O₂ to
        form nitric acid responsible for corrosion. And it also plays role in the formation of other pollutants like smog, PM, and acid rain.
        It is a flame accelerator but itself non-combustible.
      </motion.p>
    </motion.header>
  );
}
