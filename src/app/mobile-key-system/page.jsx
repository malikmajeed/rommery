'use client';

import Link from 'next/link';
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
import { PrimaryButton } from '@/components/ui/PrimaryButton';
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
  { icon: Radio, key: 'ble' },
  { icon: Shield, key: 'security' },
  { icon: CalendarClock, key: 'timeBased' },
];

const benefitKeys = ['benefit1', 'benefit2', 'benefit3', 'benefit5'];

function StepIcon({ icon: Icon, className, strokeWidth }) {
  return <Icon className={className} strokeWidth={strokeWidth} />;
}

export default function MobileKeySystemPage() {
  const { t } = useLanguage();
  const steps = stepKeys.map((s) => ({
    ...s,
    title: t(`mobileKey.${s.key}`),
    desc: t(`mobileKey.${s.key}Desc`),
  }));
  const features = featureKeys.map((f) => ({
    ...f,
    title: t(`mobileKey.${f.key}Title`),
    desc: t(`mobileKey.${f.key}Subtitle`),
  }));
  const benefits = benefitKeys.map((k) => t(`mobileKey.${k}`)).filter(Boolean);

  return (
    <div className="bg-white">
      <PageHeroSection
        breadcrumbs={[{ label: t('common.home'), href: '/' }, { label: t('mobileKey.breadcrumb') }]}
        image={HERO_IMAGE}
        title={t('mobileKey.title')}
        description={t('mobileKey.description')}
        imageAlt="Mobile key system"
      >
        <PrimaryButton href="/contact-us" label={t('hero.getStarted')} icon={<ArrowRight className="w-4 h-4" />} className="text-white bg-primary" />
      </PageHeroSection>

      {/* ── How It Works: 5 cards in a single row, circular icon + title + description ── */}
      <section className="py-16 sm:py-24 bg-neutral-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900">
              {t('mobileKey.howItWorks')}
            </h2>
            <p className="mt-3 text-lg text-neutral-600 max-w-xl mx-auto">
              {t('mobileKey.howItWorksSubtext')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step) => (
              <div
                key={step.key}
                className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 sm:p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <StepIcon icon={step.icon} className="w-6 h-6 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Features (left) + Why Mobile Keys? (right) ── */}
      <section className="py-16 sm:py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
            {/* Left: Core Features — 3 stacked cards, icon left + title + description */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-8 text-left">
                {t('mobileKey.coreFeatures')}
              </h2>
              <div className="space-y-4">
                {features.map((feature) => (
                  <div
                    key={feature.key}
                    className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                      <StepIcon icon={feature.icon} className="w-5 h-5 text-primary" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-neutral-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Why Mobile Keys? — solid primary background, white text, checkmark list */}
            <div className="bg-primary rounded-xl p-8 sm:p-10 flex flex-col">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-left">
                {t('mobileKey.whyMobileKeys')}
              </h2>
              <ul className="space-y-4 flex-1">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 shrink-0 rounded-full bg-primary-foreground/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary-foreground" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm sm:text-base text-white/95 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/20">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 text-white font-medium hover:underline"
                >
                  {t('hero.getStarted')}
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
