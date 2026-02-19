'use client';
import {PrimaryButton} from '@/components/ui/PrimaryButton';
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

const HERO_IMAGE = 'https://tapkey.com/wp-content/uploads/2023/07/Blog-New-_1_-1.webp';

const steps = [
  {
    icon: KeyRound,
    number: '01',
    title: 'Key Generation',
    desc: 'After digital check-in, system generates unique encrypted mobile key',
  },
  {
    icon: Send,
    number: '02',
    title: 'Key Delivery',
    desc: "Key sent via app push notification or SMS link to guest's phone",
  },
  {
    icon: Bluetooth,
    number: '03',
    title: 'Bluetooth Pairing',
    desc: "Guest's phone automatically pairs with door lock via Bluetooth",
  },
  {
    icon: DoorOpen,
    number: '04',
    title: 'Unlock Access',
    desc: 'Guest approaches door, opens app, and taps to unlock',
  },
  {
    icon: Clock,
    number: '05',
    title: 'Auto-Expiration',
    desc: 'Key automatically expires at checkout time for security',
  },
];

const features = [
  {
    icon: Radio,
    title: 'Bluetooth Low Energy',
    subtitle: 'Works without internet connection using BLE technology',
    points: [
      'Automatic door unlock when approaching',
      'Low battery consumption',
      'Range: up to 10 meters',
    ],
    hoverGrad: 'from-[#007aec]/8 to-[#007aec]/3',
    iconBg: 'bg-[#007aec]/10',
    iconColor: 'text-[#007aec]',
  },
  {
    icon: Shield,
    title: 'Bank-Level Security',
    subtitle: 'Military-grade encryption and secure key transmission',
    points: [
      'AES-256 encryption standard',
      'Time-limited access credentials',
      'Tamper-proof key generation',
    ],
    hoverGrad: 'from-[#8FE5C1]/20 to-[#8FE5C1]/5',
    iconBg: 'bg-[#8FE5C1]/25',
    iconColor: 'text-emerald-600',
  },
  {
    icon: CalendarClock,
    title: 'Time-Based Access',
    subtitle: 'Automatic activation and expiration based on booking',
    points: [
      'Keys activate at check-in time',
      'Automatically expire at checkout',
      'Easy extensions for late checkout',
    ],
    hoverGrad: 'from-[#007aec]/8 to-[#8FE5C1]/10',
    iconBg: 'bg-gradient-to-br from-[#007aec]/10 to-[#8FE5C1]/15',
    iconColor: 'text-[#007aec]',
  },
];

const benefits = [
  'No physical key cards to produce or replace',
  'Zero key card waste - eco-friendly',
  'Remote key sharing for families/groups',
  'Real-time access logs and monitoring',
  'Instant key revocation if phone lost',
  'Works with all major smartphone platforms',
];

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
  return (
    <div className="bg-white">
      <PageHeroSection
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Mobile Key System' }]}
        image={HERO_IMAGE}
        title="Mobile Key System"
        description="Secure smartphone-based room access for ultimate convenience. Replace physical key cards with encrypted mobile keys that work seamlessly with your existing smart lock infrastructure."
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
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
              Seamless access in{' '}
              <span className="bg-gradient-to-r from-[#007aec] to-[#8FE5C1] bg-clip-text text-transparent">
                5 steps
              </span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-slate-500 leading-relaxed">
              Simple, secure, and seamless mobile key access — right from your guest's pocket
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
                      Step {step.number}
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
                      Step {step.number}
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
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
              Built for{' '}
              <span className="bg-gradient-to-r from-[#007aec] to-[#8FE5C1] bg-clip-text text-transparent">
                modern hotels
              </span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-slate-500 leading-relaxed">
              Advanced security and convenience features that delight guests and simplify operations
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
                Why Mobile Keys
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1] mb-5">
                Go beyond{' '}
                <span className="bg-gradient-to-r from-[#007aec] to-[#8FE5C1] bg-clip-text text-transparent">
                  the key card
                </span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-md">
                Discover why leading hotels are replacing plastic key cards with secure, instant mobile access that guests love.
              </p>
              <PrimaryButton href="/contact-us" label="Get started" icon={<ArrowRight />} className="text-white bg-gradient-to-r from-primary to-secondary hover:from-muted-foreground hover:to-primary" />
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
                  {[['100%', 'Paperless'], ['AES-256', 'Encrypted'], ['24 / 7', 'Active']].map(([val, label]) => (
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