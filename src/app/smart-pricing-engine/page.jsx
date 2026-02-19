'use client';
import {SecondaryButton} from '@/components/ui/SecondaryButton';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Target,
  Zap,
  Lightbulb,
  Check,
  DollarSign,
  Percent,
  Cog,
  ArrowRight,
} from 'lucide-react';

import { PageHeroSection } from '@/components/ui/PageHeroSection';

const HERO_IMAGE =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdDgYciWcwWH05NgsVE8a3wOBP4tq7HRXzAw&s';

const pricingIntelligence = [
  {
    icon: TrendingUp,
    title: 'Demand Forecasting',
    subtitle: 'Analyzes booking patterns and historical data',
    points: [
      'Seasonal trends identification',
      'Event-based demand spikes',
      'Day-of-week patterns',
      'Booking lead time analysis',
    ],
    hoverGrad: 'from-[#007aec]/8 to-[#007aec]/3',
    iconBg: 'bg-[#007aec]/10',
    iconColor: 'text-[#007aec]',
  },
  {
    icon: Target,
    title: 'Competitor Analysis',
    subtitle: 'Real-time monitoring of market rates',
    points: [
      'Competitor pricing tracking',
      'Market positioning strategy',
      'Occupancy rate comparisons',
      'Rate parity management',
    ],
    hoverGrad: 'from-[#8FE5C1]/20 to-[#8FE5C1]/5',
    iconBg: 'bg-[#8FE5C1]/25',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Zap,
    title: 'Dynamic Adjustments',
    subtitle: 'Automatic price optimization in real-time',
    points: [
      'Hourly rate updates',
      'Occupancy-based pricing',
      'Last-minute pricing strategies',
      'Length-of-stay discounts',
    ],
    hoverGrad: 'from-[#007aec]/8 to-[#8FE5C1]/10',
    iconBg: 'bg-gradient-to-br from-[#007aec]/10 to-[#8FE5C1]/15',
    iconColor: 'text-[#007aec]',
  },
];

const strategies = [
  {
    scenario: 'High Demand Period',
    action: 'Increase rates by 20–40%',
    result: 'Maximize revenue during peak times',
    example: 'Local festival or conference',
    color: 'from-[#007aec]/12 to-[#007aec]/4',
    dot: 'bg-[#007aec]',
  },
  {
    scenario: 'Low Occupancy',
    action: 'Implement dynamic discounts',
    result: 'Fill rooms that would otherwise stay empty',
    example: 'Mid-week in off-season',
    color: 'from-[#8FE5C1]/20 to-[#8FE5C1]/5',
    dot: 'bg-emerald-400',
  },
  {
    scenario: 'Last-Minute Bookings',
    action: 'Strategic rate adjustments',
    result: 'Convert price-sensitive travelers',
    example: '24–48 hours before check-in',
    color: 'from-[#007aec]/8 to-[#8FE5C1]/10',
    dot: 'bg-[#007aec]',
  },
  {
    scenario: 'Extended Stays',
    action: 'Automatic length-of-stay discounts',
    result: 'Encourage longer bookings',
    example: '5+ nights = 15% discount',
    color: 'from-[#8FE5C1]/15 to-[#007aec]/6',
    dot: 'bg-emerald-400',
  },
];

const revenueImpact = [
  {
    icon: DollarSign,
    stat: '+25–40%',
    title: 'Revenue Increase',
    sub: 'Average RevPAR improvement',
    iconBg: 'bg-[#007aec]/10',
    iconColor: 'text-[#007aec]',
    statColor: 'from-[#007aec] to-[#0099ff]',
  },
  {
    icon: Percent,
    stat: '95%+',
    title: 'Optimal Occupancy',
    sub: 'Balance between rate and occupancy',
    iconBg: 'bg-[#8FE5C1]/25',
    iconColor: 'text-emerald-600',
    statColor: 'from-emerald-500 to-[#8FE5C1]',
  },
  {
    icon: Cog,
    stat: '100%',
    title: 'Automation',
    sub: 'No manual rate management needed',
    iconBg: 'bg-gradient-to-br from-[#007aec]/10 to-[#8FE5C1]/15',
    iconColor: 'text-[#007aec]',
    statColor: 'from-[#007aec] to-[#8FE5C1]',
  },
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

export default function SmartPricingEnginePage() {
  return (
    <div className="bg-white">
      <PageHeroSection
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Smart Pricing Engine' }]}
        title="Smart Pricing Engine"
        image={HERO_IMAGE}
        description="AI-powered dynamic pricing to maximize revenue and occupancy. Automatically adjust room rates based on demand, competition, and market conditions in real-time."
      />

      {/* ───────────── PRICING INTELLIGENCE ───────────── */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-white to-slate-50/70">
        {/* Ambient orbs */}
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
              Pricing Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1] max-w-3xl mx-auto">
              Advanced algorithms analyze{' '}
              <span className="bg-gradient-to-r from-[#007aec] to-[#8FE5C1] bg-clip-text text-transparent">
                multiple factors
              </span>{' '}
              to optimize pricing
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-slate-500 leading-relaxed">
              Real-time optimization based on demand, competition, and market conditions
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingIntelligence.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`group relative ${glassCard} p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_52px_rgba(0,122,236,0.14)] overflow-hidden`}
              >
                {/* Hover bg tint */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.hoverGrad} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                />

                <div className="relative">
                  <div
                    className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center mb-5`}
                  >
                    <StepIcon
                      icon={item.icon}
                      className={`w-5 h-5 ${item.iconColor}`}
                      strokeWidth={1.75}
                    />
                  </div>

                  <h3 className="text-[16px] font-semibold text-slate-800 mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{item.subtitle}</p>

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

      {/* ───────────── DYNAMIC STRATEGIES ───────────── */}
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
              Strategy Engine
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
              Dynamic{' '}
              <span className="bg-gradient-to-r from-[#007aec] to-[#8FE5C1] bg-clip-text text-transparent">
                strategies
              </span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-slate-500 leading-relaxed">
              Intelligent pricing that adapts automatically to every market condition
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strategies.map((s, i) => (
              <motion.article
                key={s.scenario}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`group relative ${glassCard} p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_44px_rgba(0,122,236,0.13)] overflow-hidden`}
              >
                {/* Card gradient tint */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-60 rounded-2xl`}
                />

                <div className="relative">
                  {/* Scenario tag */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-2 h-2 rounded-full ${s.dot} shrink-0`} />
                    <span className="text-[10px] font-bold text-[#007aec] uppercase tracking-[0.12em]">
                      Scenario
                    </span>
                  </div>

                  <h3 className="text-[15px] font-semibold text-slate-800 mb-4 leading-snug">
                    {s.scenario}
                  </h3>

                  <div className="space-y-3">
                    {[
                      { label: 'Action', value: s.action },
                      { label: 'Result', value: s.result },
                      { label: 'Example', value: s.example },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.08em]">
                          {label}
                        </span>
                        <p className="text-[13px] text-slate-600 leading-relaxed mt-0.5">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-[#007aec] to-[#8FE5C1] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── REVENUE IMPACT ───────────── */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-slate-50/80 to-white border-t border-slate-100/80">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#8FE5C1]/18 blur-[85px]" />
          <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full bg-[#007aec]/7 blur-[85px]" />
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
              Revenue Impact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1] max-w-3xl mx-auto">
              Measurable results that drive{' '}
              <span className="bg-gradient-to-r from-[#007aec] to-[#8FE5C1] bg-clip-text text-transparent">
                profitability
              </span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-slate-500 leading-relaxed">
              Data-driven outcomes from intelligent dynamic pricing
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {revenueImpact.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`group relative ${glassCard} p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_52px_rgba(0,122,236,0.14)] overflow-hidden`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#007aec]/5 to-[#8FE5C1]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mx-auto mb-5`}
                  >
                    <StepIcon
                      icon={item.icon}
                      className={`w-6 h-6 ${item.iconColor}`}
                      strokeWidth={1.75}
                    />
                  </div>

                  {/* Big stat */}
                  <p
                    className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${item.statColor} bg-clip-text text-transparent mb-1`}
                  >
                    {item.stat}
                  </p>

                  <h3 className="text-[15px] font-semibold text-slate-800 mt-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.sub}</p>
                </div>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-[#007aec] to-[#8FE5C1] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>

          {/* CTA strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#007aec]/15 to-[#8FE5C1]/15 blur-xl scale-105 -z-10" />
              <div className="rounded-2xl flex flex-col items-center justify-center bg-white/80 backdrop-blur-2xl border border-white/95 shadow-[0_8px_48px_rgba(0,122,236,0.10)] px-10 py-8">
                <div className="h-1 w-24  rounded-full bg-gradient-to-r from-[#007aec] to-[#8FE5C1] mx-auto mb-6" />
                <p className="text-slate-700 text-lg font-medium mb-6 max-w-md">
                  Ready to put AI-driven pricing to work for your property?
                </p>
                <SecondaryButton label="Start optimizing revenue"  className="text-primary items-center justify-center d" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}