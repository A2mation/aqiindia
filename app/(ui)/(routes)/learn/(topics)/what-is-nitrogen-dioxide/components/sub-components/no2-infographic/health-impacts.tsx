'use client';

import { motion } from 'framer-motion';
import { ImpactCard } from './impact-card';

const healthImpacts = [
  {
    id: 1,
    title: 'Altered lungs function',
    icon: '🫁',
  },
  {
    id: 2,
    title: 'Breathing problem',
    icon: '😮‍💨',
  },
  {
    id: 3,
    title: 'Asthma',
    icon: '💨',
  },
  {
    id: 4,
    title: 'Reduced immunity',
    icon: '🛡️',
  },
  {
    id: 5,
    title: 'Irritation in airways',
    icon: '⚠️',
  },
  {
    id: 6,
    title: 'Coughing, breathing difficulty, wheezing',
    icon: '🤒',
  },
  {
    id: 7,
    title: 'Heart failure',
    icon: '❤️',
  },
  {
    id: 8,
    title: 'Reduced birth weight, high risk of premature death',
    icon: '👶',
  },
];

export function HealthImpacts() {
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
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Health Impacts Due to Nitrogen Dioxide (NO₂)
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {healthImpacts.map((impact) => (
          <ImpactCard key={impact.id} impact={impact} />
        ))}
      </motion.div>
    </section>
  );
}
