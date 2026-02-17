'use client';

import { motion } from 'framer-motion';
import {
  Mail, FileCheck, CreditCard, Smartphone, DoorOpen,
  Clock, Users, Shield, Sparkles, Check,
} from 'lucide-react';
import { PageHeroSection } from '@/components/ui/PageHeroSection';

const HERO_IMAGE =
  'https://amcdn.blob.core.windows.net/media/1/root/volkswagen-digital-check-in-kiosks-min-1.jpg';

const processSteps = [
  {
    icon: Mail, number: '01', title: 'Pre-Arrival Preparation',
    desc: 'Guest receives a check-in link by email 24 hours before arrival.',
    features: ['Automated email from your PMS', 'Mobile-friendly check-in portal', 'Secure auth with booking reference'],
  },
  {
    icon: FileCheck, number: '02', title: 'Guest Information Verification',
    desc: 'Guest uploads ID and confirms booking details.',
    features: ['ID verification and scanning', 'Automatic data validation', 'Secure, GDPR-compliant storage'],
  },
  {
    icon: CreditCard, number: '03', title: 'Payment & Preferences',
    desc: 'Secure payment and room preference selection.',
    features: ['Card authorization or pre-payment', 'Upgrades and special requests', 'Early check-in / late checkout options'],
  },
  {
    icon: Smartphone, number: '04', title: 'Digital Key Issuance',
    desc: 'Mobile key is generated and sent to the guest automatically.',
    features: ['Bluetooth mobile key', 'Access only from check-in to check-out', 'Works offline, no internet needed'],
  },
  {
    icon: DoorOpen, number: '05', title: 'Arrival & Access',
    desc: 'Guest goes straight to the room, no front desk needed.',
    features: ['Walk directly to the room', 'Unlock with smartphone', 'Skip reception completely'],
  },
];

const benefits = [
  { icon: Clock,     title: 'Reduce Check-in Time', stat: 'Under 20 seconds', sub: 'From 7 minutes to seconds' },
  { icon: Users,     title: 'Reduce Staff Workload', stat: '80% automated',    sub: 'Reception tasks automated' },
  { icon: Shield,    title: 'Enhanced Security',     stat: 'Verified access',  sub: 'Verified IDs and contactless entry' },
  { icon: Sparkles,  title: 'Guest Satisfaction',    stat: 'Modern experience',sub: 'Convenient and contactless' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
};

// Fix #1: Replace React.createElement with a proper JSX icon wrapper
function StepIcon({ icon: Icon, className, strokeWidth }) {
  return <Icon className={className} strokeWidth={strokeWidth} />;
}

// Fix #3: Extract reusable card component to eliminate duplicated JSX
function StepCard({ step, index }) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="rounded-2xl glass-card p-6 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
          <StepIcon icon={step.icon} className="w-6 h-6" strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">{step.number}</span>
          <h3 className="font-heading text-lg font-medium tracking-tight text-foreground mt-1 mb-2">{step.title}</h3>
          <p className="text-sm/6 text-muted-foreground mb-3">{step.desc}</p>
          <ul className="space-y-1.5">
            {step.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary shrink-0" strokeWidth={2.5} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

// Fix #2: Return JSX directly — removed unnecessary `const content = (...)` wrapper
export default function DigitalCheckInPage() {
  return (
    <div>
      <PageHeroSection
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Digital Check-In' }]}
        title="Digital Check-In"
        description="Seamless mobile check-in with instant room access. Contactless, automated check-in in seconds so guests skip the front desk and go straight to their room."
        image={HERO_IMAGE}
        imageAlt="Digital check-in kiosks"
      />

      {/* Process Section */}
      <section className="relative py-16 sm:py-24 bg-background gradient-dots-subtle">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-14">
           
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">Complete Check-In Process</h2>
            <p className="text-sm/6 text-muted-foreground mt-3 max-w-xl mx-auto">Step-by-step guide to a seamless digital check-in experience.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.slice(0, 3).map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
            {processSteps.slice(3).map((step, i) => (
              <StepCard key={step.number} step={step} index={i + 3} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 sm:py-24 bg-secondary/40 border-t border-border gradient-dots-subtle">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-14">
          
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">Key Benefits</h2>
            <p className="text-sm/6 text-muted-foreground mt-3 max-w-xl mx-auto">How digital check-in transforms your hotel operations.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div key={benefit.title} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="rounded-2xl glass-card p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <StepIcon icon={benefit.icon} className="w-6 h-6 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-xl font-bold text-foreground">{benefit.stat}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{benefit.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}