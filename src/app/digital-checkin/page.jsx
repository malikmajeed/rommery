'use client';

import Link from 'next/link';
import {
  Clock, Users, Shield, StarIcon, ArrowRight,
} from 'lucide-react';
import { PageHeroSection } from '@/components/ui/PageHeroSection';
import { useLanguage } from '@/context/LanguageContext';
import { PrimaryButton } from '@/components/ui/PrimaryButton';



const stepKeys = ['step01', 'step02', 'step03', 'step04', 'step05'];
const benefitKeys = [
  { icon: Clock, stat: '20s', titleKey: 'reduceCheckinTime', subKey: 'downFrom7Min' },
  { icon: Users, stat: '80%', titleKey: 'staffWorkload', subKey: 'receptionAutomated' },
  { icon: Shield, stat: '100%', titleKey: 'enhancedSecurity', subKey: 'verifiedIds' },
  { icon: StarIcon, stat: '4.9', titleKey: 'guestSatisfaction', subKey: 'averageRating' },
];

const BG_IMG = './images/digital-checkin-bg.png';

function StepIcon({ icon: Icon, className, strokeWidth }) {
  return <Icon className={className} strokeWidth={strokeWidth} />;
}

export default function DigitalCheckInPage() {
  const { t } = useLanguage();
  const processSteps = stepKeys.map((key, i) => ({
    number: i + 1,
    title: t(`digitalCheckin.${key}Title`),
    desc: t(`digitalCheckin.${key}Desc`),
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
        image={BG_IMG}
        imageAlt="Digital check-in kiosks"
      >
        <PrimaryButton href="/contact-us" label={t('hero.getStarted')} icon={<ArrowRight className="w-4 h-4" />} className="text-white bg-primary" />
      </PageHeroSection>

      {/* ── How It Works: 5 cards in a single row, text-only ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900">
              {t('digitalCheckin.processHeading')}
            </h2>
            <p className="mt-3 text-lg text-neutral-600 max-w-xl mx-auto">
              {t('digitalCheckin.processSubtext')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="bg-neutral-100 rounded-xl border border-neutral-200/80 shadow-sm p-5 sm:p-6 text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">{step.number}</span>
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

      {/* ── Key Benefits: left = 2x2 grid of cards, right = image + CTA overlay ── */}
      <section className="py-16 sm:py-24 bg-neutral-50/80 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
            {/* Left: heading + 2x2 benefit cards */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-8 text-left">
                {t('digitalCheckin.keyBenefits')}
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 flex flex-col"
                  >
                    {/* Icon + title in a single row */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                        <StepIcon icon={benefit.icon} className="w-5 h-5 text-primary" strokeWidth={1.75} />
                      </div>
                      <p className="text-sm font-bold text-neutral-900 leading-tight">
                        {benefit.title}
                      </p>
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-primary leading-none mb-2">
                      {benefit.stat}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {benefit.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: large image with CTA overlay at bottom */}
            <div className="relative min-h-[320px] sm:min-h-[400px] rounded-xl overflow-hidden">
              <img
                src='./images/booking.png'
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-neutral-900/40" aria-hidden />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-neutral-900 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-1">
                  {t('digitalCheckin.ctaTitle')}
                </h3>
                <p className="text-sm text-white/90 mb-4">
                  {t('digitalCheckin.ctaDescriptionShort')}
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline text-sm sm:text-base"
                >
                  {t('digitalCheckin.contactSales')}
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