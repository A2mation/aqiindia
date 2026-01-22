'use client';

import { motion } from 'framer-motion';
import { EnvironmentalCard } from './environmental-card';

const environmentalEffects = [
  {
    id: 1,
    title: 'Hazy air (smog)',
    icon: '☁️',
  },
  {
    id: 2,
    title: 'Polluting water',
    icon: '💧',
  },
  {
    id: 3,
    title: 'Generates ground level O₃',
    icon: '⚗️',
  },
  {
    id: 4,
    title: 'Increases PM levels',
    icon: '📈',
  },
  {
    id: 5,
    title: 'Acid rain-forming an acidic compound with moisture present in the air',
    icon: '🌧️',
  },
  {
    id: 6,
    title: 'Affects the vegetation, growth of plants',
    icon: '🌱',
  },
  {
    id: 7,
    title: 'NOx + other chemicals leads to formation of PM',
    icon: '🔬',
  },
  {
    id: 8,
    title: 'Acts as a stressor to plants and results in ozone reduction',
    icon: '🌿',
  },
];

export function EnvironmentalEffects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="w-full px-4 py-8 md:py-12 lg:py-16">
      <motion.h2
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-2 md:mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Environmental effects are severe due to
      </motion.h2>
      <motion.p
        className="text-center text-lg md:text-xl font-semibold text-gray-700 mb-8 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        excessive concentration of this gas:
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {environmentalEffects.map((effect) => (
          <EnvironmentalCard key={effect.id} effect={effect} />
        ))}
      </motion.div>
    </section>
  );
}
