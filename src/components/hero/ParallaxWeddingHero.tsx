import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, type Variants } from 'framer-motion';
import { weddingConfig } from '../../data/weddingConfig';
import { ParallaxLayer } from './ParallaxLayer';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// ─── 13 Production Parallax & Subject Assets ──────────────────────────
import layerSky from '../../assets/hero/layer_01_sky.png';
import layerMoon from '../../assets/hero/layer_02_moon.png';
import layerDistMtn from '../../assets/hero/layer_03_distant_mountains.png';
import layerMidMtn from '../../assets/hero/layer_04_middle_mountains.png';
import layerNearMtn from '../../assets/hero/layer_05_near_mountains.png';
import layerTemple from '../../assets/hero/layer_06_temple_village.png';
import layerBgPalms from '../../assets/hero/layer_07_background_palms.png';
import layerWater from '../../assets/hero/layer_08_midground_water.png';
import layerSubject from '../../assets/hero/layer_subject_houseboat_couple.png';
import layerLotus from '../../assets/hero/layer_12_floating_lotus.png';
import layerForeground from '../../assets/hero/layer_13_foreground_foliage.png';

export const ParallaxWeddingHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Responsive state for mobile screen optimization
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dedicated scroll track mapping across the zoom journey
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Silky spring smoothing for organic, fluid camera movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.0002,
  });

  // ─── 1. EDITORIAL TYPOGRAPHY TRANSFORMS ────────────────────────────
  // Fades and floats upward during Phase 2 entrance so it never obscures the approaching couple
  const opacityHeadline = useTransform(smoothProgress, [0, 0.08, 0.22], [1, 0.85, 0]);
  const yHeadline       = useTransform(smoothProgress, [0, 0.22], [0, -45]);
  const scaleHeadline   = useTransform(smoothProgress, [0, 0.22], [1, 0.95]);

  // Scroll indicator fades out rapidly as soon as scrolling starts
  const opacityScroll   = useTransform(smoothProgress, [0, 0.07], [1, 0]);

  // ─── 2. FOCAL SUBJECT (HOUSEBOAT & COUPLE) ZOOM TRANSFORMS ─────────
  // The central subject scales from distant (1.0) -> approach (3.2) -> full-screen (5.0 / 3.0)
  const scaleSubjectDesktop = useTransform(smoothProgress, [0, 0.10, 0.70, 0.95, 1.0], [1.0, 1.0, 3.2, 5.0, 5.2]);
  const scaleSubjectMobile  = useTransform(smoothProgress, [0, 0.10, 0.70, 0.95, 1.0], [1.0, 1.0, 2.0, 3.0, 3.1]);
  const scaleSubject = isMobile ? scaleSubjectMobile : scaleSubjectDesktop;

  // As the boat scales up, translate slightly upward so the couple doorway (at 65.4% Y in image)
  // moves gracefully into the exact vertical center (50%) of the viewport
  const ySubject = useTransform(
    smoothProgress,
    [0, 0.10, 0.70, 0.95, 1.0],
    ['0%', '0%', '-7%', '-12%', '-13%']
  );

  // ─── 3. BACKGROUND LANDSCAPE SUBTLE PARALLAX ───────────────────────
  // Keeps the scenic sky, mountains, palms & lake visible behind the boat
  const ySky      = useTransform(smoothProgress, [0, 1], [0, -35]);
  const scaleSky  = useTransform(smoothProgress, [0, 1], [1, 1.05]);
  const yMoon     = useTransform(smoothProgress, [0, 1], [0, -45]);
  const xMoon     = useTransform(smoothProgress, [0, 1], [0, 25]);
  const yDistMtn  = useTransform(smoothProgress, [0, 1], [0, -65]);
  const yMidMtn   = useTransform(smoothProgress, [0, 1], [0, -85]);
  const yNearMtn  = useTransform(smoothProgress, [0, 1], [0, -110]);
  const yTemple   = useTransform(smoothProgress, [0, 1], [0, -60]);
  const yBgPalms  = useTransform(smoothProgress, [0, 1], [0, -50]);
  const yWater    = useTransform(smoothProgress, [0, 1], [0, -30]);

  // ─── 4. FOREGROUND TROPICAL OVERLAYS (CURTAIN PARTING) ─────────────
  // Fronds on left move left, fronds on right move right, rushing past camera
  const xFoliageLeft  = useTransform(smoothProgress, [0, 0.10, 0.45], [0, 0, -140]);
  const xFoliageRight = useTransform(smoothProgress, [0, 0.10, 0.45], [0, 0, 140]);
  const scaleFoliage  = useTransform(smoothProgress, [0, 0.10, 0.45], [1, 1, 1.35]);
  const opacityFoliage = useTransform(smoothProgress, [0, 0.12, 0.40], [1, 0.9, 0]);

  // Floating lotus flowers rush downward past the camera
  const yLotus        = useTransform(smoothProgress, [0, 0.10, 0.45], [0, 0, 180]);
  const scaleLotus    = useTransform(smoothProgress, [0, 0.10, 0.45], [1, 1, 1.30]);
  const opacityLotus  = useTransform(smoothProgress, [0, 0.15, 0.42], [1, 0.85, 0]);

  // ─── 5. MANDAPAM GLOW & CINEMATIC ATMOSPHERE ───────────────────────
  // Golden ambient glow intensifies as visitor enters the illuminated doorway
  const opacityGlow = useTransform(smoothProgress, [0.50, 0.80, 1.0], [0, 0.40, 0.25]);

  // ─── ENTRANCE ANIMATION VARIANTS (Initial Page Load) ───────────────
  const entranceContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const entranceLayer: Variants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const entranceText: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className={`relative w-full ${
        prefersReducedMotion ? 'h-screen min-h-[640px]' : 'h-[240vh]'
      }`}
      aria-label="A Living South Indian Wedding Experience - Cinematic Hero"
    >
      {/* ──────────────── STICKY PINNED VISUAL STAGE ──────────────── */}
      <div
        className={`${
          prefersReducedMotion ? 'relative h-full' : 'sticky top-0 h-screen h-[100svh]'
        } w-full overflow-hidden bg-[#0d1f1a] flex flex-col justify-between z-20`}
      >
        {/* Layer Stack Container */}
        <motion.div
          className="absolute inset-0 w-full h-full overflow-hidden select-none"
          variants={prefersReducedMotion ? undefined : entranceContainer}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          animate={prefersReducedMotion ? undefined : 'visible'}
        >
          {/* ──── GROUP A: INDEPENDENT BACKGROUND LANDSCAPE LAYERS ──── */}
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-[1]">
            {/* Layer 01: Panoramic Evening Sky */}
            <motion.div variants={prefersReducedMotion ? undefined : entranceLayer} className="absolute inset-0">
              <ParallaxLayer
                id="sky"
                src={layerSky}
                alt="South Indian golden-hour twilight sky"
                yMotion={ySky}
                scaleMotion={scaleSky}
                depth={0.05}
                priority
                reducedMotion={prefersReducedMotion}
              />
            </motion.div>

            {/* Layer 02: Golden Radiant Setting Sun */}
            <motion.div variants={prefersReducedMotion ? undefined : entranceLayer} className="absolute inset-0">
              <ParallaxLayer
                id="moon"
                src={layerMoon}
                alt="Golden setting sun disk with warm celestial aura"
                yMotion={yMoon}
                xMotion={xMoon}
                depth={0.08}
                priority
                className="hero-moon-glow"
                reducedMotion={prefersReducedMotion}
              />
            </motion.div>

            {/* Layer 03: Distant Mountain Silhouettes */}
            <motion.div variants={prefersReducedMotion ? undefined : entranceLayer} className="absolute inset-0">
              <ParallaxLayer
                id="distant_mountains"
                src={layerDistMtn}
                alt="Distant hazy mountain silhouettes"
                yMotion={yDistMtn}
                depth={0.12}
                priority
                reducedMotion={prefersReducedMotion}
              />
            </motion.div>

            {/* Layer 04: Middle Western Ghats Ridges */}
            <motion.div variants={prefersReducedMotion ? undefined : entranceLayer} className="absolute inset-0">
              <ParallaxLayer
                id="middle_mountains"
                src={layerMidMtn}
                alt="Middle-distance Western Ghats mountain ridges"
                yMotion={yMidMtn}
                depth={0.18}
                priority
                reducedMotion={prefersReducedMotion}
              />
            </motion.div>

            {/* Layer 05: Near Forested Hills & Valley Mist */}
            <motion.div variants={prefersReducedMotion ? undefined : entranceLayer} className="absolute inset-0">
              <ParallaxLayer
                id="near_mountains"
                src={layerNearMtn}
                alt="Near forested hills and valley mist"
                yMotion={yNearMtn}
                depth={0.25}
                priority
                reducedMotion={prefersReducedMotion}
              />
            </motion.div>

            {/* Layer 06: Illuminated Temple Gopuram & Riverside Village Lights */}
            <motion.div variants={prefersReducedMotion ? undefined : entranceLayer} className="absolute inset-0">
              <ParallaxLayer
                id="temple_village"
                src={layerTemple}
                alt="Illuminated Kerala temple gopuram and riverside village lights"
                yMotion={yTemple}
                depth={0.32}
                priority
                reducedMotion={prefersReducedMotion}
              />
            </motion.div>

            {/* Layer 07: Background Shoreline Coconut Palms */}
            <motion.div variants={prefersReducedMotion ? undefined : entranceLayer} className="absolute inset-0">
              <ParallaxLayer
                id="background_palms"
                src={layerBgPalms}
                alt="Shoreline coconut palm silhouettes"
                yMotion={yBgPalms}
                depth={0.38}
                priority
                reducedMotion={prefersReducedMotion}
              />
            </motion.div>

            {/* Layer 08: Midground Backwater Surface (Continuous Clean Water) */}
            <motion.div variants={prefersReducedMotion ? undefined : entranceLayer} className="absolute inset-0">
              <ParallaxLayer
                id="midground_water"
                src={layerWater}
                alt="Serene Kerala backwater lake surface with sunset reflections"
                yMotion={yWater}
                depth={0.45}
                priority
                className="hero-water-surface"
                reducedMotion={prefersReducedMotion}
              />
            </motion.div>
          </div>

          {/* ──── GROUP B: INDEPENDENT TRANSFORMABLE SUBJECT LAYER ──── */}
          {/* Houseboat, Glowing Mandapam, Bride & Groom Silhouettes & Reflections */}
          {/* transformOrigin is strictly anchored to the doorway midpoint (50% 65.4%) */}
          <motion.div
            style={!prefersReducedMotion ? {
              scale: scaleSubject,
              y: ySubject,
              transformOrigin: '50% 65.4%',
            } : undefined}
            className="absolute inset-0 pointer-events-none select-none will-change-transform z-[10]"
          >
            <motion.div
              variants={prefersReducedMotion ? undefined : entranceLayer}
              className="w-full h-full"
            >
              <img
                src={layerSubject}
                alt="Traditional Kerala Kettuvallam wooden houseboat with couple silhouetted inside illuminated mandapam"
                loading="eager"
                decoding="sync"
                className="w-full h-full object-cover object-bottom select-none"
                draggable={false}
              />
            </motion.div>
          </motion.div>

          {/* ──── GROUP C: INDEPENDENT FOREGROUND TROPICAL OVERLAYS ──── */}
          {/* Layer 12: Floating Lotus Blossoms & Lilypads (Rushes past viewer) */}
          <motion.div
            style={!prefersReducedMotion ? {
              y: yLotus,
              scale: scaleLotus,
              opacity: opacityLotus,
            } : undefined}
            className="absolute inset-0 pointer-events-none select-none will-change-transform z-[12]"
          >
            <motion.div variants={prefersReducedMotion ? undefined : entranceLayer} className="w-full h-full">
              <img
                src={layerLotus}
                alt="Pink water lotus blossoms and lilypads floating on the lake"
                loading="eager"
                className="w-full h-full object-cover object-bottom select-none"
                draggable={false}
              />
            </motion.div>
          </motion.div>

          {/* Layer 13: Tropical Framing Palms (Parting Left & Right Like a Natural Curtain) */}
          {/* Left Foliage Fronds */}
          <motion.div
            style={!prefersReducedMotion ? {
              x: xFoliageLeft,
              scale: scaleFoliage,
              opacity: opacityFoliage,
              clipPath: 'inset(0 50% 0 0)',
            } : undefined}
            className="absolute inset-0 pointer-events-none select-none will-change-transform z-[13]"
          >
            <img
              src={layerForeground}
              alt="Left tropical palm fronds framing the Kerala landscape"
              loading="eager"
              className="w-full h-full object-cover object-bottom select-none"
              draggable={false}
            />
          </motion.div>

          {/* Right Foliage Fronds */}
          <motion.div
            style={!prefersReducedMotion ? {
              x: xFoliageRight,
              scale: scaleFoliage,
              opacity: opacityFoliage,
              clipPath: 'inset(0 0 0 50%)',
            } : undefined}
            className="absolute inset-0 pointer-events-none select-none will-change-transform z-[13]"
          >
            <img
              src={layerForeground}
              alt="Right tropical palm fronds framing the Kerala landscape"
              loading="eager"
              className="w-full h-full object-cover object-bottom select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* ──── GROUP D: ATMOSPHERIC LIGHTING & VIGNETTES ──── */}
        {/* Top Vignette */}
        <div
          className="absolute inset-0 pointer-events-none z-[14]"
          style={{
            background: 'linear-gradient(to bottom, rgba(13,31,26,0.35) 0%, transparent 35%, transparent 75%, rgba(13,31,26,0.25) 100%)',
          }}
        />
        {/* Peripheral Vignette */}
        <div
          className="absolute inset-0 pointer-events-none z-[14]"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 48%, rgba(13,31,26,0.25) 100%)',
          }}
        />
        {/* Mandapam Golden Aura Bloom on Approach */}
        <motion.div
          style={!prefersReducedMotion ? { opacity: opacityGlow } : undefined}
          className="absolute inset-0 pointer-events-none z-[15] bg-[radial-gradient(ellipse_at_50%_65%,rgba(217,184,117,0.45)_0%,rgba(184,138,67,0.2)_45%,transparent_75%)]"
        />

        {/* ──── GROUP E: EDITORIAL TYPOGRAPHY & HEADLINE ──── */}
        <motion.div
          style={!prefersReducedMotion ? {
            y: yHeadline,
            opacity: opacityHeadline,
            scale: scaleHeadline,
          } : undefined}
          className="relative z-20 pt-20 sm:pt-24 md:pt-28 px-4 text-center max-w-4xl mx-auto pointer-events-none select-none will-change-transform"
        >
          <motion.div
            variants={prefersReducedMotion ? undefined : entranceText}
            initial={prefersReducedMotion ? undefined : 'hidden'}
            animate={prefersReducedMotion ? undefined : 'visible'}
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <motion.span
                className="h-[1px] bg-[#D9B875]/70"
                initial={prefersReducedMotion ? undefined : { width: 0 }}
                animate={prefersReducedMotion ? undefined : { width: 48 }}
                transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
              />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-medium text-[#D9B875]/95 drop-shadow-sm">
                {weddingConfig.couple.eyebrow}
              </span>
              <motion.span
                className="h-[1px] bg-[#D9B875]/70"
                initial={prefersReducedMotion ? undefined : { width: 0 }}
                animate={prefersReducedMotion ? undefined : { width: 48 }}
                transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
              />
            </div>

            {/* Couple Names */}
            <h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#FFF9EF] my-1 sm:my-2"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.35), 0 0 60px rgba(184,138,67,0.2)' }}
            >
              <motion.span
                className="inline-block"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              >
                {weddingConfig.couple.groom}
              </motion.span>
              <motion.span
                className="font-script text-3xl sm:text-4xl md:text-5xl text-[#D9B875] mx-2 sm:mx-4 align-middle font-normal inline-block"
                initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.5 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.7, ease: 'easeOut' }}
              >
                &amp;
              </motion.span>
              <motion.span
                className="inline-block"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              >
                {weddingConfig.couple.bride}
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p
              className="text-[9px] sm:text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#FFF9EF]/75 font-medium mt-1"
              initial={prefersReducedMotion ? undefined : { opacity: 0 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1 }}
              transition={{ delay: 1.8, duration: 1.0 }}
            >
              {weddingConfig.couple.subtitle}
            </motion.p>

            {/* Date & Location Banner */}
            <motion.div
              className="inline-flex items-center gap-2 mt-3 px-4 sm:px-5 py-1.5 rounded-full bg-[#123F35]/60 backdrop-blur-md border border-[#D9B875]/35 text-[10px] sm:text-xs tracking-[0.2em] font-medium text-[#FFF9EF] shadow-lg"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 15 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.8, ease: 'easeOut' }}
            >
              <span>{weddingConfig.event.displayDate}</span>
              <span className="text-[#D9B875] font-bold">|</span>
              <span>{weddingConfig.event.fullLocation.toUpperCase()}</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ──── GROUP F: BOTTOM SCROLL EXPLORATION INDICATOR ──── */}
        <motion.div
          style={!prefersReducedMotion ? { opacity: opacityScroll } : undefined}
          className="relative z-20 pb-6 sm:pb-8 flex flex-col items-center justify-center pointer-events-none select-none"
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? undefined : { opacity: 0.85, y: 0 }}
            transition={{ delay: 2.4, duration: 1.0, ease: 'easeOut' }}
          >
            {/* Mouse / Pill scroll icon */}
            <div className="w-5 h-9 rounded-full border-[1.5px] border-[#FFF9EF]/60 flex justify-center pt-2 bg-[#123F35]/40 backdrop-blur-sm shadow-md">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2.0, ease: 'easeInOut' }}
                className="w-1 h-2 rounded-full bg-[#D9B875]"
              />
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#FFF9EF]/80 font-medium drop-shadow-sm">
              Scroll to Explore
            </span>
          </motion.div>
        </motion.div>

        {/* ──── GROUP G: BOTTOM FEATHERING GRADIENT (SEAMLESS HANDOFF) ──── */}
        {/* Softly blends the backwaters into the warm ivory top of WeddingInvitation */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#FFF9EF] via-[#FFF9EF]/50 to-transparent z-[16] pointer-events-none" />
      </div>
    </section>
  );
};
