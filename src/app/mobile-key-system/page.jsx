'use client';

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
} from 'lucide-react';


const HERO_IMAGE ='https://tapkey.com/wp-content/uploads/2023/07/Blog-New-_1_-1.webp';
import { PageHeroSection } from '@/components/ui/PageHeroSection';

const steps = [
  {
    icon: KeyRound,
    number: 'Step 1',
    title: 'Key Generation',
    desc: 'After digital check-in, system generates unique encrypted mobile key',
  },
  {
    icon: Send,
    number: 'Step 2',
    title: 'Key Delivery',
    desc: "Key sent via app push notification or SMS link to guest's phone",
  },
  {
    icon: Bluetooth,
    number: 'Step 3',
    title: 'Bluetooth Pairing',
    desc: "Guest's phone automatically pairs with door lock via Bluetooth",
  },
  {
    icon: DoorOpen,
    number: 'Step 4',
    title: 'Unlock Access',
    desc: 'Guest approaches door, opens app, and taps to unlock',
  },
  {
    icon: Clock,
    number: 'Step 5',
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

export default function MobileKeySystemPage() {
  return (
    <div>
      <PageHeroSection
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Mobile Key System' }]}
        image={HERO_IMAGE}
        title="Mobile Key System"
        description="Secure smartphone-based room access for ultimate convenience. Replace physical key cards with encrypted mobile keys that work seamlessly with your existing smart lock infrastructure."
      />

      {/* How It Works */}
      <section className="relative py-16 sm:py-24 bg-background gradient-dots-subtle">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-14"
          >
          
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Seamless Access in 5 Steps
            </h2>
            <p className="text-sm/6 text-muted-foreground mt-3 max-w-xl mx-auto">
              Simple, secure, and seamless mobile key access in five easy steps
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.slice(0, 3).map((step, i) => (
              <motion.article
                key={step.number}
                custom={i}
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
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {step.number}
                    </span>
                    <h3 className="font-heading text-lg font-medium tracking-tight text-foreground mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm/6 text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
            {steps.slice(3).map((step, i) => (
              <motion.article
                key={step.number}
                custom={i + 3}
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
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {step.number}
                    </span>
                    <h3 className="font-heading text-lg font-medium tracking-tight text-foreground mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm/6 text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16 sm:py-24 bg-secondary/40 border-t border-border gradient-dots-subtle">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-14"
          >
        
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Key Features
            </h2>
            <p className="text-sm/6 text-muted-foreground mt-3 max-w-xl mx-auto">
              Advanced security and convenience features for modern hotels
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
                className="rounded-2xl glass-card p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <StepIcon icon={feature.icon} className="w-6 h-6 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm/6 text-muted-foreground mb-3">{feature.subtitle}</p>
                <ul className="space-y-1.5">
                  {feature.points.map((point) => (
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

      {/* Benefits */}
      <section className="relative py-16 sm:py-24 bg-background border-t border-border gradient-dots-subtle">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-14"
          >
           
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
              Why Mobile Keys?
            </h2>
            <p className="text-sm/6 text-muted-foreground mt-3 max-w-xl mx-auto">
              Discover the advantages of going keyless with mobile access
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <ul className="space-y-3">
              {benefits.map((item, i) => (
                <motion.li
                  key={item}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <Check className="w-5 h-5 text-primary shrink-0" strokeWidth={2.5} />
                  <span className="text-sm/6 sm:text-base">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
