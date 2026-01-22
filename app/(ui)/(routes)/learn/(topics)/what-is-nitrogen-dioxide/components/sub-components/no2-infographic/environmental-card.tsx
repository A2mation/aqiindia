'use client';

import { motion } from 'framer-motion';

interface EnvironmentalEffect {
  id: number;
  title: string;
  icon: string;
}

interface EnvironmentalCardProps {
  effect: EnvironmentalEffect;
}

export function EnvironmentalCard({ effect }: EnvironmentalCardProps) {


  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 md:p-6 rounded-lg bg-green-100/60 hover:bg-green-100/80 transition-colors border border-green-200"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
          },
        },
      }}
      whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(34, 197, 94, 0.2)' }}
    >
      <motion.div
        className="text-4xl md:text-5xl mb-3 md:mb-4"
        variants={{
          hidden: { scale: 0, rotate: 180 },
          visible: {
            scale: 1,
            rotate: 0,
            transition: {
              duration: 0.6,
              ease: 'easeOut',
            },
          },
          hover: {
            scale: 1.15,
            rotate: -5,
            transition: {
              duration: 0.3,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        {effect.icon}
      </motion.div>
      <motion.p
        className="text-center text-sm md:text-2xl font-semibold text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {effect.title}
      </motion.p>
    </motion.div>
  );
}
