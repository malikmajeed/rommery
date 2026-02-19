'use client';
import {SecondaryButton} from '@/components/ui/SecondaryButton';
import { motion } from 'framer-motion';
import {
  Server,
  Users,
  DoorOpen,
  CreditCard,
  RefreshCw,
  ArrowLeftRight,
  FileCheck,
  Rocket,
  Check,
  KeyRound,
  Settings,
  TestTube,
  Zap,
  ArrowRight,
} from 'lucide-react';

import { PageHeroSection } from '@/components/ui/PageHeroSection';

const HERO_IMAGE =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHIpwS-RqARuMkdZUmLiLT01ucwPXr20Ohuw&s';

const platforms = [
  { name: 'Opera PMS', status: 'Full Integration', icon: Server },
  { name: 'Mews', status: 'Full Integration', icon: Server },
  { name: 'Apaleo', status: 'Full Integration', icon: Server },
  { name: 'Protel', status: 'Full Integration', icon: Server },
  { name: 'RoomMaster', status: 'Full Integration', icon: Server },
  { name: 'Custom PMS', status: 'API Available', icon: KeyRound },
];

const dataSync = [
  {
    icon: Users,
    title: 'Guest Information',
    points: [
      'Guest profiles and contact details',
      'Booking and reservation data',
      'Check-in / Check-out times',
      'Room assignments and preferences',
      'Special requests and notes',
    ],
    hoverGrad: 'from-[#007aec]/8 to-[#007aec]/3',
    iconBg: 'bg-[#007aec]/10',
    iconColor: 'text-[#007aec]',
  },
  {
    icon: DoorOpen,
    title: 'Room Management',
    points: [
      'Room availability and status',
      'Housekeeping updates',
      'Maintenance requests',
      'Room type and inventory',
      'Rate plans and packages',
    ],
    hoverGrad: 'from-[#8FE5C1]/20 to-[#8FE5C1]/5',
    iconBg: 'bg-[#8FE5C1]/25',
    iconColor: 'text-emerald-600',
  },
  {
    icon: CreditCard,
    title: 'Financial Data',
    points: [
      'Payment transactions',
      'Invoice generation',
      'Billing information',
      'Deposit tracking',
      'Revenue reports',
    ],
    hoverGrad: 'from-[#007aec]/8 to-[#8FE5C1]/10',
    iconBg: 'bg-gradient-to-br from-[#007aec]/10 to-[#8FE5C1]/15',
    iconColor: 'text-[#007aec]',
  },
];

const integrationBenefits = [
  {
    icon: RefreshCw,
    title: 'Real-Time Sync',
    subtitle: 'Instant data synchronization between all systems',
    desc: 'Updates happen in real-time across PMS, mobile keys, kiosks, and all connected devices',
    color: 'from-[#007aec]/10 to-[#007aec]/3',
  },
  {
    icon: ArrowLeftRight,
    title: 'Bi-Directional Flow',
    subtitle: 'Two-way data exchange for complete synchronization',
    desc: 'Changes made in either system automatically update the other',
    color: 'from-[#8FE5C1]/18 to-[#8FE5C1]/5',
  },
  {
    icon: FileCheck,
    title: 'Zero Manual Entry',
    subtitle: 'Eliminate duplicate data entry and human errors',
    desc: 'Guest information entered once flows to all systems automatically',
    color: 'from-[#007aec]/8 to-[#8FE5C1]/8',
  },
  {
    icon: Rocket,
    title: 'Fast Implementation',
    subtitle: 'Get up and running in four simple steps',
    desc: 'From API credentials to go-live in hours, not weeks',
    color: 'from-[#8FE5C1]/15 to-[#007aec]/6',
  },
];

const implementationSteps = [
  { number: '01', title: 'API Credentials', desc: 'Provide PMS access', icon: KeyRound },
  { number: '02', title: 'Configuration', desc: 'Map data fields', icon: Settings },
  { number: '03', title: 'Testing', desc: 'Verify sync accuracy', icon: TestTube },
  { number: '04', title: 'Go Live', desc: 'Start real-time sync', icon: Zap },
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

const glassCard =
  'rounded-2xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_4px_24px_rgba(0,122,236,0.07),0_1px_2px_rgba(0,0,0,0.04)]';

export default function CompletePMSSolutionPage() {
  return (
    <div className="bg-white">
      <PageHeroSection
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Complete PMS Solution' }]}
        title="Complete PMS Solution"
        image={HERO_IMAGE}
        description="Connect seamlessly with your existing property management system. Integrates with all major PMS platforms to create a unified digital ecosystem."
      />

      {/* ───────────── SUPPORTED PLATFORMS ───────────── */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-white to-slate-50/70">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-48 -right-48 w-[680px] h-[680px] rounded-full bg-[#007aec]/7 blur-[110px]" />
          <div className="absolute -bottom-48 -left-24 w-[520px] h-[520px] rounded-full bg-[#8FE5C1]/15 blur-[90px]" />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'radial-gradient(circle, #007aec1a 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14 sm:mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase text-[#007aec] bg-[#007aec]/8 border border-[#007aec]/15 mb-5">
              Supported Platforms
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
              Wide range of{' '}
              <span className="bg-gradient-to-r from-[#007aec] to-[#8FE5C1] bg-clip-text text-transparent">
                PMS systems
              </span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-slate-500 leading-relaxed">
              Seamless integration with all major property management systems
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`group relative ${glassCard} p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_44px_rgba(0,122,236,0.13)] overflow-hidden flex items-center gap-4`}
              >
                {/* Hover tint */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#007aec]/6 to-[#8FE5C1]/6 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" />

                <div className="relative shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#007aec]/10 to-[#8FE5C1]/15 flex items-center justify-center">
                  <StepIcon icon={p.icon} className="w-5 h-5 text-[#007aec]" strokeWidth={1.75} />
                </div>

                <div className="relative min-w-0 flex-1">
                  <h3 className="text-[15px] font-semibold text-slate-800 leading-snug">{p.name}</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        p.status === 'Full Integration' ? 'bg-emerald-400' : 'bg-[#007aec]'
                      }`}
                    />
                    <p
                      className={`text-[12px] font-semibold ${
                        p.status === 'Full Integration' ? 'text-emerald-600' : 'text-[#007aec]'
                      }`}
                    >
                      {p.status}
                    </p>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-5 right-5 h-[2px] rounded-full bg-gradient-to-r from-[#007aec] to-[#8FE5C1] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── DATA SYNC ───────────── */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-white border-t border-slate-100/80">
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
              Data Sync
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
              Synchronized{' '}
              <span className="bg-gradient-to-r from-[#007aec] to-[#8FE5C1] bg-clip-text text-transparent">
                data
              </span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-slate-500 leading-relaxed">
              Complete data flow between your PMS and platform
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataSync.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`group relative ${glassCard} p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_52px_rgba(0,122,236,0.14)] overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.hoverGrad} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative">
                  <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center mb-5`}>
                    <StepIcon icon={item.icon} className={`w-5 h-5 ${item.iconColor}`} strokeWidth={1.75} />
                  </div>

                  <h3 className="text-[16px] font-semibold text-slate-800 mb-5 leading-snug">
                    {item.title}
                  </h3>

                  <ul className="space-y-2.5">
                    {item.points.map((point) => (
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

      {/* ───────────── INTEGRATION BENEFITS ───────────── */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-slate-50/70 to-white border-t border-slate-100/80">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#8FE5C1]/18 blur-[85px]" />
          <div className="absolute bottom-0 -left-20 w-[380px] h-[380px] rounded-full bg-[#007aec]/7 blur-[85px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14 sm:mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase text-[#007aec] bg-[#007aec]/8 border border-[#007aec]/15 mb-5">
              Integration Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
              Why{' '}
              <span className="bg-gradient-to-r from-[#007aec] to-[#8FE5C1] bg-clip-text text-transparent">
                integration
              </span>{' '}
              matters
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-slate-500 leading-relaxed">
              Streamlined operations through seamless system connectivity
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {integrationBenefits.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`group relative ${glassCard} p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_44px_rgba(0,122,236,0.13)] overflow-hidden`}
              >
                {/* Persistent soft tint */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-60 rounded-2xl`} />

                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-white/70 backdrop-blur-sm border border-white/80 flex items-center justify-center mb-5 shadow-sm">
                    <StepIcon icon={item.icon} className="w-5 h-5 text-[#007aec]" strokeWidth={1.75} />
                  </div>

                  <h3 className="text-[15px] font-semibold text-slate-800 mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-[#007aec] uppercase tracking-[0.07em] mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{item.desc}</p>
                </div>

                <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-[#007aec] to-[#8FE5C1] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── IMPLEMENTATION STEPS ───────────── */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-white border-t border-slate-100/80">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] bg-gradient-to-b from-[#007aec]/5 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14 sm:mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase text-[#007aec] bg-[#007aec]/8 border border-[#007aec]/15 mb-5">
              Implementation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
              Quick &{' '}
              <span className="bg-gradient-to-r from-[#007aec] to-[#8FE5C1] bg-clip-text text-transparent">
                easy setup
              </span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-slate-500 leading-relaxed">
              Get up and running in four simple steps
            </p>
          </motion.div>

          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-1/2 w-[calc(100%-16rem)] h-[2px] bg-gradient-to-r from-transparent via-[#007aec]/20 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {implementationSteps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`group relative ${glassCard} p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_54px_rgba(0,122,236,0.14)] overflow-visible`}
              >
                {/* Hover background tint */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#007aec]/10 to-[#8FE5C1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                {/* Step number badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#007aec] to-[#8FE5C1] flex items-center justify-center mb-6 shadow-[0_6px_24px_rgba(0,122,236,0.17)] border-2 border-white/80 relative -top-2">
                  <span className="text-white font-semibold text-xl drop-shadow">{step.number}</span>
                </div>

                {/* Step Title */}
                <h3 className="text-base font-bold text-slate-800 mb-1.5 leading-snug">{step.title}</h3>

                {/* Divider */}
                <div className="h-1 w-10 mx-auto bg-gradient-to-r from-[#007aec]/80 to-[#8FE5C1]/70 rounded-full mb-3" />

                {/* Description */}
                <p className="text-[14px] text-slate-500 leading-relaxed mb-1">{step.desc}</p>
                
                {/* Animated bottom accent bar */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-[#007aec] to-[#8FE5C1] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>

          {/* CTA strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="mt-16 text-center"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#007aec]/15 to-[#8FE5C1]/15 blur-xl scale-105 -z-10" />
              <div className="rounded-2xl flex flex-col items-center justify-center bg-white/80 backdrop-blur-2xl border border-white/95 shadow-[0_8px_48px_rgba(0,122,236,0.10)] px-10 py-8">
                <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#007aec] to-[#8FE5C1] mx-auto mb-6" />
                <p className="text-slate-700 text-lg font-medium mb-6 max-w-md">
                  Ready to connect your PMS and unlock a unified digital ecosystem?
                </p>
                <SecondaryButton label="Start integration" icon={<ArrowRight />} className="text-primary items-center justify-center d" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}