'use client';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { motion } from 'framer-motion';
import {
  KeyRound,
  Send,
  Bluetooth,
  DoorOpen,
  Clock,
  Radio,
  Shield,
  CalendarClock,
  Check,
  ArrowRight,
} from 'lucide-react';
import { PageHeroSection } from '@/components/ui/PageHeroSection';
import { useLanguage } from '@/context/LanguageContext';

const HERO_IMAGE = 'https://tapkey.com/wp-content/uploads/2023/07/Blog-New-_1_-1.webp';

const stepKeys = [
  { icon: KeyRound, key: 'keyGeneration' },
  { icon: Send, key: 'keyDelivery' },
  { icon: Bluetooth, key: 'bluetoothPairing' },
  { icon: DoorOpen, key: 'unlockAccess' },
  { icon: Clock, key: 'autoExpiration' },
];

const featureKeys = [
  { icon: Radio, key: 'ble', hoverGrad: 'from-[#007aec]/8 to-[#007aec]/3', iconBg: 'bg-[#007aec]/10', iconColor: 'text-[#007aec]' },
  { icon: Shield, key: 'security', hoverGrad: 'from-[#8FE5C1]/20 to-[#8FE5C1]/5', iconBg: 'bg-[#8FE5C1]/25', iconColor: 'text-emerald-600' },
  { icon: CalendarClock, key: 'timeBased', hoverGrad: 'from-[#007aec]/8 to-[#8FE5C1]/10', iconBg: 'bg-gradient-to-br from-[#007aec]/10 to-[#8FE5C1]/15', iconColor: 'text-[#007aec]' },
];

const benefitKeys = ['benefit1', 'benefit2', 'benefit3', 'benefit4', 'benefit5', 'benefit6'];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

function StepIcon({ icon: Icon, className, strokeWidth }) {
  return <Icon className={className} strokeWidth={strokeWidth} />;
}

/* ─── Shared glass card base classes ─── */
const glassCard =
  'rounded-2xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_4px_24px_rgba(0,122,236,0.07),0_1px_2px_rgba(0,0,0,0.04)]';

export default function MobileKeySystemPage() {
  const { t } = useLanguage();
  const steps = stepKeys.map((s, i) => ({
    ...s,
    number: String(i + 1).padStart(2, '0'),
    title: t(`mobileKey.${s.key}`),
    desc: t(`mobileKey.${s.key}Desc`),
  }));
  const features = featureKeys.map((f) => ({
    ...f,
    title: t(`mobileKey.${f.key}Title`),
    subtitle: t(`mobileKey.${f.key}Subtitle`),
    points: Array.isArray(t(`mobileKey.${f.key}Points`)) ? t(`mobileKey.${f.key}Points`) : [],
  }));
  const benefits = benefitKeys.map((k) => t(`mobileKey.${k}`)).filter(Boolean);

  return (
    <div className="bg-white">
      <PageHeroSection
        breadcrumbs={[{ label: t('common.home'), href: '/' }, { label: t('mobileKey.breadcrumb') }]}
        image={HERO_IMAGE}
        title={t('mobileKey.title')}
        description={t('mobileKey.description')}
      />

      {/* ───────────── HOW IT WORKS ───────────── */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-white to-slate-50/70">
        {/* Ambient orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-48 -right-48 w-[680px] h-[680px] rounded-full bg-[#007aec]/7 blur-[110px]" />
          <div className="absolute -bottom-48 -left-24 w-[520px] h-[520px] rounded-full bg-[#8FE5C1]/15 blur-[90px]" />
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'radial-gradient(circle, #007aec1a 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14 sm:mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase text-[#007aec] bg-[#007aec]/8 border border-[#007aec]/15 mb-5">
              {t('mobileKey.howItWorks')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
              {t('mobileKey.seamlessAccessIn')}{' '}
              <span className="bg-gradient-to-r from-[#007aec] to-[#8FE5C1] bg-clip-text text-transparent">
                {t('mobileKey.seamlessIn5Steps')}
              </span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-slate-500 leading-relaxed">
              {t('mobileKey.seamlessSubtext')}
            </p>
          </motion.div>

          {/* Top 3 cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.slice(0, 3).map((step, i) => (
              <motion.article
                key={step.number}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`group relative ${glassCard} p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_44px_rgba(0,122,236,0.13)] overflow-hidden`}
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-5 text-6xl font-black text-slate-100 select-none group-hover:text-[#007aec]/10 transition-colors duration-300 leading-none">
                  {step.number}
                </span>

                <div className="relative flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#007aec]/10 to-[#8FE5C1]/15 flex items-center justify-center">
                    <StepIcon icon={step.icon} className="w-5 h-5 text-[#007aec]" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <span className="text-[10px] font-bold text-[#007aec] uppercase tracking-[0.12em]">
                      {t('mobileKey.step')} {step.number}
                    </span>
                    <h3 className="text-[15px] font-semibold text-slate-800 mt-1 mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-[#007aec] to-[#8FE5C1] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.article>
            ))}
          </div>

          {/* Bottom 2 cards centered */}
          <div className="grid sm:grid-cols-2 gap-5 mt-5 max-w-2xl mx-auto">
            {steps.slice(3).map((step, i) => (
              <motion.article
                key={step.number}
                custom={i + 3}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`group relative ${glassCard} p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_44px_rgba(0,122,236,0.13)] overflow-hidden`}
              >
                <span className="absolute top-4 right-5 text-6xl font-black text-slate-100 select-none group-hover:text-[#007aec]/10 transition-colors duration-300 leading-none">
                  {step.number}
                </span>

                <div className="relative flex items-start gap-4">
                  
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#007aec]/10 to-[#8FE5C1]/15 flex items-center justify-center">
                    <StepIcon icon={step.icon} className="w-5 h-5 text-[#007aec]" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <span className="text-[10px] font-bold text-[#007aec] uppercase tracking-[0.12em]">
                      {t('mobileKey.step')} {step.number}
                    </span>
                    <h3 className="text-[15px] font-semibold text-slate-800 mt-1 mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-[#007aec] to-[#8FE5C1] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── FEATURES ───────────── */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-white border-t border-slate-100/80">
        {/* Top centre glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-gradient-to-b from-[#007aec]/5 to-transparent blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, #8FE5C120 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14 sm:mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase text-[#007aec] bg-[#007aec]/8 border border-[#007aec]/15 mb-5">
              {t('mobileKey.features')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
              {t('mobileKey.builtFor')}{' '}
              <span className="bg-gradient-to-r from-[#007aec] to-[#8FE5C1] bg-clip-text text-transparent">
                {t('mobileKey.builtForModernHotels')}
              </span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-slate-500 leading-relaxed">
              {t('mobileKey.featuresSubtext')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative rounded-2xl bg-white/75 backdrop-blur-2xl border border-white/95 shadow-[0_4px_24px_rgba(0,122,236,0.08),0_1px_2px_rgba(0,0,0,0.04)] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_52px_rgba(0,122,236,0.14)] overflow-hidden"
              >
                {/* Hover bg tint */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.hoverGrad} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative">
                  <div className={`w-11 h-11 rounded-xl ${feature.iconBg} flex items-center justify-center mb-5`}>
                    <StepIcon icon={feature.icon} className={`w-5 h-5 ${feature.iconColor}`} strokeWidth={1.75} />
                  </div>

                  <h3 className="text-[16px] font-semibold text-slate-800 mb-1.5 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{feature.subtitle}</p>

                  <ul className="space-y-2.5">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <div className="shrink-0 w-5 h-5 rounded-full bg-[#8FE5C1]/30 flex items-center justify-center">
                          <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                        </div>
                        <span className="text-[13px] text-slate-600 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── BENEFITS ───────────── */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-slate-50/80 to-white border-t border-slate-100/80">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#8FE5C1]/18 blur-[85px]" />
          <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full bg-[#007aec]/7 blur-[85px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── Left: headline + CTA ── */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase text-[#007aec] bg-[#007aec]/8 border border-[#007aec]/15 mb-5">
                {t('mobileKey.whyMobileKeys')}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1] mb-5">
                {t('mobileKey.beyondHeading')}{' '}
                <span className="bg-gradient-to-r from-[#007aec] to-[#8FE5C1] bg-clip-text text-transparent">
                  {t('mobileKey.beyondKeyCard')}
                </span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-md">
                {t('mobileKey.beyondSubtext')}
              </p>
              <PrimaryButton href="/contact-us" label={t('hero.getStarted')} icon={<ArrowRight />} className="text-white bg-gradient-to-r from-primary to-secondary hover:from-muted-foreground hover:to-primary" />
            </motion.div>

            {/* ── Right: benefits glass card ── */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="relative"
            >
              {/* Outer glow layer */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#007aec]/12 to-[#8FE5C1]/12 blur-2xl scale-105 -z-10" />

              <div className="rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/95 shadow-[0_8px_48px_rgba(0,122,236,0.10),0_2px_4px_rgba(0,0,0,0.04)] p-8">
                {/* Top gradient stripe */}
                <div className="h-1 w-full rounded-full bg-gradient-to-r from-[#007aec] to-[#8FE5C1] mb-8" />

                <ul className="space-y-4">
                  {benefits.map((item, i) => (
                    <motion.li
                      key={item}
                      custom={i}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center gap-4 group/row"
                    >
                      <div className="shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-[#007aec]/8 to-[#8FE5C1]/12 flex items-center justify-center group-hover/row:from-[#007aec]/18 group-hover/row:to-[#8FE5C1]/20 transition-all duration-200">
                        <Check className="w-4 h-4 text-[#007aec]" strokeWidth={2.5} />
                      </div>
                      <span className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Stat chips */}
                <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-3 gap-3 text-center">
                  {[['100%', t('mobileKey.paperless')], ['AES-256', t('mobileKey.encrypted')], ['24 / 7', t('mobileKey.active')]].map(([val, label]) => (
                    <div
                      key={label}
                      className="rounded-xl bg-slate-50/90 border border-slate-100 py-3 px-2 hover:border-[#007aec]/20 hover:bg-[#007aec]/4 transition-colors duration-200"
                    >
                      <div className="text-sm font-bold text-[#007aec]">{val}</div>
                      <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}