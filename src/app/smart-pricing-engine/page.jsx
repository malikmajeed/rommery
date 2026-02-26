'use client';

import Link from 'next/link';
import {
  TrendingUp,
  BarChart3,
  Clock,
  Zap,
  DollarSign,
  CalendarClock,
  ArrowRight,
} from 'lucide-react';
import { PageHeroSection } from '@/components/ui/PageHeroSection';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useLanguage } from '@/context/LanguageContext';

const HERO_IMAGE =
  './images/smart-pricing-bg.png';

const factorKeys = [
  { icon: TrendingUp, key: 'demandForecasting', descKey: 'demandCardDesc', iconColor: 'text-blue-500', iconBg: 'bg-blue-100' },
  { icon: BarChart3, key: 'competitorAnalysis', descKey: 'competitorCardDesc', iconColor: 'text-emerald-600', iconBg: 'bg-emerald-100' },
  { icon: Clock, key: 'dynamicAdjustments', descKey: 'dynamicCardDesc', iconColor: 'text-violet-500', iconBg: 'bg-violet-100' },
];

const strategyKeys = [
  { icon: Zap, key: 'highDemand', descKey: 'highDemandCardDesc', stripeColor: 'bg-primary', iconColor: 'text-primary' },
  { icon: DollarSign, key: 'lowOccupancy', descKey: 'lowOccupancyCardDesc', stripeColor: 'bg-emerald-500', iconColor: 'text-emerald-600' },
  { icon: Clock, key: 'lastMinute', descKey: 'lastMinuteCardDesc', stripeColor: 'bg-violet-500', iconColor: 'text-violet-600' },
  { icon: CalendarClock, key: 'extendedStays', descKey: 'extendedStaysCardDesc', stripeColor: 'bg-emerald-400', iconColor: 'text-emerald-600' },
];

const revenueStats = [
  { stat: '+25-40%', titleKey: 'revparImprovement', descKey: 'revparStatDesc' },
  { stat: '95%+', titleKey: 'optimalOccupancyBalance', descKey: 'optimalOccupancyStatDesc' },
  { stat: '100%', titleKey: 'automation', descKey: 'automationStatDesc' },
];

function FactorIcon({ icon: Icon, className, strokeWidth }) {
  return <Icon className={className} strokeWidth={strokeWidth} />;
}

export default function SmartPricingEnginePage() {
  const { t } = useLanguage();
  const factors = factorKeys.map((f) => ({
    ...f,
    title: t(`smartPricing.${f.key}`),
    desc: t(`smartPricing.${f.descKey}`),
  }));
  const strategies = strategyKeys.map((s) => ({
    ...s,
    title: t(`smartPricing.${s.key}`),
    desc: t(`smartPricing.${s.descKey}`),
  }));
  const stats = revenueStats.map((s) => ({
    ...s,
    title: t(`smartPricing.${s.titleKey}`),
    desc: t(`smartPricing.${s.descKey}`),
  }));

  return (
    <div className="bg-white">
      <PageHeroSection
        breadcrumbs={[{ label: t('common.home'), href: '/' }, { label: t('smartPricing.breadcrumb') }]}
        title={t('smartPricing.title')}
        image={HERO_IMAGE}
        description={t('smartPricing.description')}
        imageAlt="Smart pricing"
      >
        <PrimaryButton href="/contact-us" label={t('hero.getStarted')} icon={<ArrowRight className="w-4 h-4" />} className="text-white bg-primary" />
      </PageHeroSection>

      {/* ── Intelligence Factors: 3 cards in a row, circular icon + title + description ── */}
      <section className="py-16 sm:py-24 bg-neutral-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900">
              {t('smartPricing.intelligenceFactors')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {factors.map((factor) => (
              <div
                key={factor.key}
                className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6 text-center"
              >
                <div className={`w-14 h-14 rounded-full ${factor.iconBg} flex items-center justify-center mx-auto mb-4`}>
                  <FactorIcon icon={factor.icon} className={`w-7 h-7 ${factor.iconColor}`} strokeWidth={1.75} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
                  {factor.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dynamic Strategies: left = 4 strategy cards, right = Revenue Impact card ── */}
      <section className="py-16 sm:py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-8 text-left">
            {t('smartPricing.dynamicStrategies')}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left: 4 strategy cards with left stripe + icon + title + description */}
            <div className="space-y-4">
              {strategies.map((s) => (
                <div
                  key={s.key}
                  className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden flex"
                >
                  <div className={`w-1 sm:w-1.5 shrink-0 bg-primary`} aria-hidden />
                  <div className="p-5 flex items-start gap-4 flex-1">
                    <div className="w-9 h-9 shrink-0 rounded-lg bg-neutral-100 flex items-center justify-center">
                      <FactorIcon icon={s.icon} className={`w-4 h-4 ${s.iconColor}`} strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-neutral-900 mb-1">
                        {s.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Revenue Impact — solid primary blue card with 3 stats */}
            <div className="bg-primary rounded-xl p-8 sm:p-10 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-8">
                {t('smartPricing.revenueImpact')}
              </h3>
              <div className="space-y-8">
                {stats.map((item) => (
                  <div key={item.titleKey}>
                    <p className="text-3xl sm:text-4xl font-bold text-white leading-none mb-1">
                      {item.stat}
                    </p>
                    <p className="text-base font-bold text-white mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 text-white font-medium hover:underline"
                >
                  {t('smartPricing.ctaButton')}
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
