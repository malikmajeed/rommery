'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PrimaryButton } from './ui/PrimaryButton';
import { SecondaryButton } from './ui/SecondaryButton';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Ease-out curve: fast start, slow end
function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

function StatCounter({ end, suffix = '', duration = 1.5, delay = 0, inView }) {
  const [display, setDisplay] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!inView || hasStarted.current) return;
    hasStarted.current = true;

    const startTime = performance.now();
    const delayMs = delay * 1000;
    const durationMs = duration * 1000;
    let rafId;

    const tick = (now) => {
      const elapsed = now - startTime - delayMs;
      if (elapsed < 0) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = easeOutCubic(progress);
      const value = eased * end;
      setDisplay(Math.round(value));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setDisplay(end);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, end, duration, delay]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const { t } = useLanguage();
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-10 md:py-20 lg:py-10 ">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              <span className="font-bold  text-primary">{t('hero.title1')}</span>

            </h1>

            <p className="font-body text-black/80 mt-4 sm:mt-6 text-md/6  max-w-2xl">
              {t('hero.subtitle')}
            </p>

                      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                          <PrimaryButton href="/contact-us" label={t('hero.getStarted')} icon={<ArrowRight />} className="text-white bg-primary " />
                          <SecondaryButton href="/contact-us" label={t('hero.liveDemo')} icon={<Play />} noIconRotate className="text-black border-transparent border-1 hover:border-primary hover:border-1" />
                      </div>

          </motion.div>

          {/* RIGHT: single hero image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="relative overflow-hidden mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-2xl mx-auto lg:ml-auto lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80"
                className="w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] object-cover object-center rounded-xl shadow-xl"
                alt="Modern hotel lobby"
              />
            </div>
            {/* Soft gradient accent */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/10 via-background to-accent/20 rounded-2xl blur-2xl opacity-50 pointer-events-none" />
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 sm:mt-20 rounded-2xl bg-gradient-to-r from-primary to-secondary py-12 items-center justify-center flex sm:py-16 px-6 sm:px-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <p className="text-3xl sm:text-5xl font-bold text-primary-foreground tracking-tight">
                <StatCounter end={500} suffix="+" duration={1.5} delay={0.2} inView={statsInView} />
              </p>
              <p className="mt-1 text-lg/6 text-primary-foreground/80">{t('hero.hotelsWorldwide')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <p className="text-3xl sm:text-5xl font-bold text-primary-foreground tracking-tight">
                <StatCounter end={98} suffix="%" duration={1.2} delay={0.35} inView={statsInView} />
              </p>
              <p className="mt-1 text-lg/6 text-primary-foreground/80">{t('hero.guestSatisfaction')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <p className="text-3xl sm:text-5xl font-bold text-primary-foreground tracking-tight">
                <StatCounter end={60} suffix="%" duration={1.2} delay={0.5} inView={statsInView} />
              </p>
              <p className="mt-1 text-lg/6 text-primary-foreground/80">{t('hero.fasterCheckIn')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <p className="text-3xl sm:text-5xl font-bold text-primary-foreground tracking-tight">24/7</p>
              <p className="mt-1 text-lg/6 text-primary-foreground/80">{t('hero.supportAvailable')}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
