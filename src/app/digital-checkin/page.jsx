'use client';

import { motion } from 'framer-motion';
import {
  Clock, Users, Shield, StarIcon, Check, ArrowRight,
} from 'lucide-react';
import { PageHeroSection } from '@/components/ui/PageHeroSection';
import { CTAStrip } from '@/components/ui/CTAStrip';
import { useLanguage } from '@/context/LanguageContext';

const HERO_IMAGE =
  'https://amcdn.blob.core.windows.net/media/1/root/volkswagen-digital-check-in-kiosks-min-1.jpg';

const PROCESS_STEP_IMAGES = [
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=280&fit=crop',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=280&fit=crop',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=280&fit=crop',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=280&fit=crop',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=280&fit=crop',
];

const stepKeys = ['step01', 'step02', 'step03', 'step04', 'step05'];
const benefitKeys = [
  { icon: Clock, stat: '20s', titleKey: 'reduceCheckinTime', subKey: 'downFrom7Min' },
  { icon: Users, stat: '80%', titleKey: 'staffWorkload', subKey: 'receptionAutomated' },
  { icon: Shield, stat: '100%', titleKey: 'enhancedSecurity', subKey: 'verifiedIds' },
  { icon: StarIcon, stat: '4.9', titleKey: 'guestSatisfaction', subKey: 'averageRating' },
];

function StepIcon({ icon: Icon, className, strokeWidth }) {
  return <Icon className={className} strokeWidth={strokeWidth} />;
}

export default function DigitalCheckInPage() {
  const { t } = useLanguage();
  const processSteps = stepKeys.map((key, i) => ({
    number: String(i + 1).padStart(2, '0'),
    title: t(`digitalCheckin.${key}Title`),
    desc: t(`digitalCheckin.${key}Desc`),
    features: Array.isArray(t(`digitalCheckin.${key}Features`)) ? t(`digitalCheckin.${key}Features`) : [],
  }));
  const benefits = benefitKeys.map((b) => ({
    ...b,
    title: t(`digitalCheckin.${b.titleKey}`),
    sub: t(`digitalCheckin.${b.subKey}`),
  }));

  return (
    <div>
      <PageHeroSection
        breadcrumbs={[{ label: t('common.home'), href: '/' }, { label: t('digitalCheckin.breadcrumb') }]}
        title={t('digitalCheckin.title')}
        description={t('digitalCheckin.description')}
        image={HERO_IMAGE}
        imageAlt="Digital check-in kiosks"
      />

      {/* ── Process Section ─────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24 bg-background gradient-dots-subtle overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-20"
          >
            
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent max-w-md leading-tight">
                {t('digitalCheckin.processHeading')}
              </h2>
              <p className="text-md/6 text-black/80 max-w-xs sm:text-right">
                {t('digitalCheckin.processSubtext')}
              </p>
            </div>
          </motion.div>

          {/* Steps: alternating left/right timeline on desktop, stacked on mobile */}
          <div className="relative">
            {/* Centre spine — visible on lg+ */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent" />

            <div className="space-y-10 lg:space-y-0">
              {processSteps.map((step, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className={`relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ${i > 0 ? 'lg:-mt-2' : ''}`}
                  >
                    {/* Dot on spine */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-primary items-center justify-center z-10 shadow-md">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    </div>

                    {/* Card — image upper half, content lower half */}
                    <div className={`${isLeft ? 'lg:col-start-1' : 'lg:col-start-2'} lg:row-start-1`}>
                      <div className="group rounded-2xl shadow-md border border-neutral-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/20">
                        {/* Upper half: image */}
                        <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-neutral-100">
                          <img
                            src={PROCESS_STEP_IMAGES[i]}
                            alt=""
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <span className="absolute top-3 left-3 rounded-lg bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground shadow-sm">
                            {step.number}
                          </span>
                        </div>
                        {/* Lower half: content */}
                        <div className="p-5 sm:p-6">
                          <h3 className="font-heading text-xl font-semibold tracking-tight text-primary mb-1">{step.title}</h3>
                          <p className="text-sm/6 text-black/80 mb-3">{step.desc}</p>
                          <ul className="space-y-1">
                            {step.features.map((f) => (
                              <li key={f} className="flex items-center gap-2 text-sm text-black/80">
                                <Check className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={2.5} />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for the opposite column (keeps grid symmetric) */}
                    <div className={`hidden lg:block ${isLeft ? 'lg:col-start-2' : 'lg:col-start-1'} lg:row-start-1`}></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits Section ─────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24 bg-background border-t border-neutral-100 gradient-dots-subtle overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">{t('digitalCheckin.whyItMatters')}</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent max-w-sm leading-tight">
                {t('digitalCheckin.keyBenefits')}
              </h2>
              <p className="text-md/6 text-black/80 max-w-xs sm:text-right">
                {t('digitalCheckin.keyBenefitsSubtext')}
              </p>
            </div>
          </motion.div>

          {/* Benefits: big stat cards — icon with gradient fill & elevate on hover */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="group relative rounded-2xl border border-neutral-100 shadow-md p-6 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/20 overflow-hidden"
              >
                {/* Faint bg accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative">
                  {/* Icon: gradient fill on hover, elevate on hover */}
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary">
                    <StepIcon icon={benefit.icon} className="w-5 h-5 text-primary transition-all duration-300 group-hover:text-white" strokeWidth={1.75} />
                  </div>

                  {/* Big stat */}
                  <p className="text-3xl sm:text-4xl font-black text-primary leading-none mb-1 tracking-tight">
                    {benefit.stat}
                  </p>
                  <p className="text-md/6 font-normal text-black/80 uppercase tracking-wider mb-3">
                    {benefit.title}
                  </p>
                  <p className="text-sm/5 text-black/80">{benefit.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <CTAStrip
            title={t('digitalCheckin.ctaTitle')}
            description={t('digitalCheckin.ctaDescription')}
            buttonLabel={t('common.getStarted')}
            buttonHref="/contact-us"
            buttonIcon={<ArrowRight className="w-4 h-4" />}
          />
        </div>
      </section>
    </div>
  );
}