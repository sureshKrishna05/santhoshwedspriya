import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-[#B88A43]/15 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#B88A43] via-[#D9B875] to-[#B88A43] origin-left shadow-[0_0_8px_rgba(217,184,117,0.7)]"
        style={{ scaleX }}
      />
    </div>
  );
};
