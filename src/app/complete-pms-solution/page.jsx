'use client';

import { motion } from 'framer-motion';
import {
  Server,
  Database,
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
} from 'lucide-react';

const HERO_IMAGE ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHIpwS-RqARuMkdZUmLiLT01ucwPXr20Ohuw&s';
import { PageHeroSection } from '@/components/ui/PageHeroSection';

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
  },
];

const integrationBenefits = [
  {
    icon: RefreshCw,
    title: 'Real-Time Sync',
    subtitle: 'Instant data synchronization between all systems',
    desc: 'Updates happen in real-time across PMS, mobile keys, kiosks, and all connected devices',
  },
  {
    icon: ArrowLeftRight,
    title: 'Bi-Directional Flow',
    subtitle: 'Two-way data exchange for complete synchronization',
    desc: 'Changes made in either system automatically update the other',
  },
  {
    icon: FileCheck,
    title: 'Zero Manual Entry',
    subtitle: 'Eliminate duplicate data entry and human errors',
    desc: 'Guest information entered once flows to all systems automatically',
  },
  {
    icon: Rocket,
    title: 'Quick & Easy Implementation',
    subtitle: 'Get up and running in four simple steps',
    steps: ['API Credentials – Provide PMS access', 'Configuration – Map data fields', 'Testing – Verify sync accuracy', 'Go Live – Start real-time sync'],
  },
];

const implementationSteps = [
  { number: '1', title: 'API Credentials', desc: 'Provide PMS access', icon: KeyRound },
  { number: '2', title: 'Configuration', desc: 'Map data fields', icon: Settings },
  { number: '3', title: 'Testing', desc: 'Verify sync accuracy', icon: TestTube },
  { number: '4', title: 'Go Live', desc: 'Start real-time sync', icon: Zap },
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

export default function CompletePMSSolutionPage() {
  return (
    <div>
      <PageHeroSection
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Complete PMS Solution' }]}
        title="Complete PMS Solution"
        image={HERO_IMAGE}
        description="Connect seamlessly with your existing property management system. Integrates with all major PMS platforms to create a unified digital ecosystem."
      />

      {/* Supported Platforms */}
      <section className="relative py-16 sm:py-24 bg-background gradient-dots-subtle">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-14"
          >
            
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Wide Range of PMS Systems
            </h2>
            <p className="text-sm/6 text-muted-foreground mt-3 max-w-xl mx-auto">
              Seamless integration with all major property management systems
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl glass-card p-6 transition-all duration-300 flex items-center gap-4"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <StepIcon icon={p.icon} className="w-6 h-6 text-primary" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{p.name}</h3>
                  <p className="text-sm text-primary font-medium">{p.status}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sync */}
      <section className="relative py-16 sm:py-24 bg-secondary/40 border-t border-border gradient-dots-subtle">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-14"
          >
           
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Synchronized Data
            </h2>
            <p className="text-sm/6 text-muted-foreground mt-3 max-w-xl mx-auto">
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
                className="rounded-2xl glass-card p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <StepIcon icon={item.icon} className="w-6 h-6 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <ul className="space-y-1.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
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

      {/* Integration Benefits */}
      <section className="relative py-16 sm:py-24 bg-background border-t border-border gradient-dots-subtle">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-14"
          >
            
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Why Integration Matters
            </h2>
            <p className="text-sm/6 text-muted-foreground mt-3 max-w-xl mx-auto">
              Streamlined operations through seamless system connectivity
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrationBenefits.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl glass-card p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <StepIcon icon={item.icon} className="w-6 h-6 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-foreground/90 mb-1">{item.subtitle}</p>
                {item.desc && (
                  <p className="text-sm/6 text-muted-foreground">{item.desc}</p>
                )}
                {item.steps && (
                  <ul className="mt-3 space-y-1.5">
                    {item.steps.map((step) => (
                      <li key={step} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                        {step}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick & Easy Implementation - 4 steps */}
      <section className="relative py-16 sm:py-24 bg-secondary/40 border-t border-border gradient-dots-subtle">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-14"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Quick & Easy Implementation
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl glass-card p-6 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  {step.number}
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <StepIcon icon={step.icon} className="w-5 h-5 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
