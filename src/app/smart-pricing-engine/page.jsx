'use client';

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
} from 'lucide-react';

const HERO_IMAGE ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdDgYciWcwWH05NgsVE8a3wOBP4tq7HRXzAw&s';
import { PageHeroSection } from '@/components/ui/PageHeroSection';

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
  },
];

const strategies = [
  {
    scenario: 'High Demand Period',
    action: 'Increase rates by 20-40%',
    result: 'Maximize revenue during peak times',
    example: 'Local festival or conference',
  },
  {
    scenario: 'Low Occupancy',
    action: 'Implement dynamic discounts',
    result: 'Fill rooms that would otherwise stay empty',
    example: 'Mid-week in off-season',
  },
  {
    scenario: 'Last-Minute Bookings',
    action: 'Strategic rate adjustments',
    result: 'Convert price-sensitive travelers',
    example: '24-48 hours before check-in',
  },
  {
    scenario: 'Extended Stays',
    action: 'Automatic length-of-stay discounts',
    result: 'Encourage longer bookings',
    example: '5+ nights = 15% discount',
  },
];

const revenueImpact = [
  {
    icon: DollarSign,
    stat: '+25-40%',
    title: 'Revenue Increase',
    sub: 'Average RevPAR improvement',
  },
  {
    icon: Percent,
    stat: '95%+',
    title: 'Optimal Occupancy',
    sub: 'Balance between rate and occupancy',
  },
  {
    icon: Cog,
    stat: '100%',
    title: 'Automation',
    sub: 'No manual rate management needed',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45 },
  }),
};

function StepIcon({ icon: Icon, className, strokeWidth }) {
  return <Icon className={className} strokeWidth={strokeWidth} />;
}

export default function SmartPricingEnginePage() {
  return (
    <div>
      <PageHeroSection
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Smart Pricing Engine' }]}
        title="Smart Pricing Engine"
        image={HERO_IMAGE}
        description="AI-powered dynamic pricing to maximize revenue and occupancy. Automatically adjust room rates based on demand, competition, and market conditions in real-time."
      />

      {/* Pricing Intelligence */}
      <section className="relative py-16 sm:py-24 bg-background gradient-dots-subtle">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Advanced algorithms analyze multiple factors to optimize pricing
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg/6 text-neutral-600">
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
                className="rounded-2xl   shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl  flex items-center justify-center mb-4">
                  <StepIcon icon={item.icon} className="w-6 h-6 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-sm/6 text-neutral-600 mb-3">{item.subtitle}</p>
                <ul className="space-y-1.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-neutral-500">
                      <Check className="w-4 h-4 text-primary shrink-0" strokeWidth={2.5} />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="relative py-16 sm:py-24 bg-background border-t border-neutral-200 gradient-dots-subtle">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Dynamic Strategies
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg/6 text-neutral-600">
              Intelligent pricing strategies that adapt to market conditions
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategies.map((s, i) => (
              <motion.article
                key={s.scenario}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl   shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-primary shrink-0" strokeWidth={1.75} />
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    Scenario
                  </span>
                </div>
                <h3 className="font-heading text-base font-semibold text-primary mb-3">
                  {s.scenario}
                </h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium text-neutral-900">Action:</span>{' '}
                    <span className="text-neutral-600">{s.action}</span>
                  </p>
                  <p>
                    <span className="font-medium text-neutral-900">Result:</span>{' '}
                    <span className="text-neutral-600">{s.result}</span>
                  </p>
                  <p>
                    <span className="font-medium text-neutral-900">Example:</span>{' '}
                    <span className="text-neutral-600">{s.example}</span>
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Impact */}
      <section className="relative py-16 sm:py-24 bg-background border-t border-neutral-200 gradient-dots-subtle">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Measurable results that drive profitability and growth
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg/6 text-neutral-600">
              Data-driven outcomes from dynamic pricing
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
                className="rounded-2xl   shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <StepIcon icon={item.icon} className="w-6 h-6 text-primary" strokeWidth={1.75} />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-primary">{item.stat}</p>
                <h3 className="font-heading text-lg font-semibold text-primary mt-1 mb-0.5">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
