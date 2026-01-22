'use client';

import { motion } from 'framer-motion';

interface Impact {
  id: number;
  title: string;
  icon: string;
}

interface ImpactCardProps {
  impact: Impact;
}

export function ImpactCard({ impact }: ImpactCardProps) {

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 md:p-6 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors"
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
      whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
    >
      <motion.div
        className="text-4xl md:text-5xl mb-3 md:mb-4"
        variants={{
          hidden: { scale: 0, rotate: -180 },
          visible: {
            scale: 1,
            rotate: 0,
            transition: {
              duration: 0.6,
              ease: 'easeOut',
            },
          },
          hover: {
            scale: 1.1,
            rotate: 5,
            transition: {
              duration: 0.3,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        {impact.icon}
      </motion.div>
      <motion.p
        className="text-center text-sm md:text-2xl font-semibold text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {impact.title}
      </motion.p>
    </motion.div>
  );
}
