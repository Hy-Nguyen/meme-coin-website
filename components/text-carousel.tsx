'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const statements = [
  'Infinity Memes',
  'Powered by everyone that likes to win',
  'Government-proof (we think)',
  'Certified by the Solana Blockchain',
  '100% CEO certified',
  'Industry Leading Memetics',
];

export default function TextCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % statements.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          className="text-muted-foreground mb-6 text-sm tracking-[0.2em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          What makes $CEO special?
        </motion.p>

        <div className="flex h-20 items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-gradient font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold md:text-4xl"
            >
              {statements[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicators */}
        <div className="mt-8 flex justify-center gap-1.5">
          {statements.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-accent-purple w-6' : 'bg-border w-1.5'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
