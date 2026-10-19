import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface ParallaxLayerProps {
  id: string;
  src: string;
  alt: string;
  yMotion?: MotionValue<number>;
  xMotion?: MotionValue<number>;
  scaleMotion?: MotionValue<number>;
  opacityMotion?: MotionValue<number>;
  rotateMotion?: MotionValue<number>;
  depth: number;
  className?: string;
  imgClassName?: string;
  isCover?: boolean;
  priority?: boolean;
  reducedMotion?: boolean;
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  id,
  src,
  alt,
  yMotion,
  xMotion,
  scaleMotion,
  opacityMotion,
  rotateMotion,
  className = '',
  imgClassName = '',
  isCover = true,
  priority = false,
  reducedMotion = false,
}) => {
  // Build the motion style object dynamically — only include properties
  // that have MotionValue bindings so we don't override CSS animations
  const motionStyle: Record<string, MotionValue<number> | undefined> = {};
  if (!reducedMotion) {
    if (yMotion) motionStyle.y = yMotion;
    if (xMotion) motionStyle.x = xMotion;
    if (scaleMotion) motionStyle.scale = scaleMotion;
    if (opacityMotion) motionStyle.opacity = opacityMotion;
    if (rotateMotion) motionStyle.rotate = rotateMotion;
  }

  return (
    <motion.div
      style={Object.keys(motionStyle).length > 0 ? motionStyle : undefined}
      className={`absolute inset-0 pointer-events-none select-none will-change-transform ${className}`}
      data-layer-id={id}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        className={`w-full h-full ${isCover ? 'object-cover object-bottom' : 'object-contain'} select-none ${imgClassName}`}
        draggable={false}
      />
    </motion.div>
  );
};
