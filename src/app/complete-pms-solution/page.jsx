'use client';

import Link from 'next/link';
import {
  Database,
  DoorOpen,
  RefreshCw,
  Check,
  ArrowRight,
} from 'lucide-react';
import { PageHeroSection } from '@/components/ui/PageHeroSection';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useLanguage } from '@/context/LanguageContext';

const HERO_IMAGE =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHIpwS-RqARuMkdZUmLiLT01ucwPXr20Ohuw&s';

const platformNames = [
  'Opera PMS',
  'Mews',
  'Apaleo',
  'Protel',
  'RoomMaster',
  null, // last one uses customPmsViaApi
];

const dataCategoryKeys = [
  { icon: Database, key: 'guestInformation', pointsKey: 'guestPointsShort' },
  { icon: DoorOpen, key: 'roomManagement', pointsKey: 'roomPointsShort' },
  { icon: RefreshCw, key: 'financialData', pointsKey: 'financialPointsShort' },
];

const integrationBenefitKeys = [
  { key: 'realTimeSync', descKey: 'realTimeCardDesc' },
  { key: 'biDirectional', descKey: 'biDirectionalCardDesc' },
  { key: 'zeroManualEntry', descKey: 'zeroManualCardDesc' },
  { key: 'fastImplementation', descKey: 'fastImplCardDesc' },
];

const setupStepKeys = [
  { key: 'apiCredentials' },
  { key: 'configuration' },
  { key: 'testing' },
  { key: 'goLive' },
];

function DataIcon({ icon: Icon, className, strokeWidth }) {
  return <Icon className={className} strokeWidth={strokeWidth} />;
}

export default function CompletePMSSolutionPage() {
  const { t } = useLanguage();
  const platforms = platformNames.map((name, i) =>
    name === null ? t('completePms.customPmsViaApi') : name
  );
  const dataCategories = dataCategoryKeys.map((item) => ({
    ...item,
    title: t(`completePms.${item.key}`),
    points: Array.isArray(t(`completePms.${item.pointsKey}`))
      ? t(`completePms.${item.pointsKey}`)
      : [],
  }));
  const benefits = integrationBenefitKeys.map((item) => ({
    ...item,
    title: t(`completePms.${item.key}`),
    desc: t(`completePms.${item.descKey}`),
  }));
  const steps = setupStepKeys.map((item, i) => ({
    ...item,
    number: i + 1,
    title: t(`completePms.${item.key}`),
    desc: t(`completePms.${item.key}Desc`),
  }));

  return (
    <div className="bg-white">
      <PageHeroSection
        breadcrumbs={[{ label: t('common.home'), href: '/' }, { label: t('completePms.breadcrumb') }]}
        title={t('completePms.title')}
        image={HERO_IMAGE}
        description={t('completePms.description')}
        imageAlt="Complete PMS Solution"
      >
        <PrimaryButton
          href="/contact-us"
          label={t('hero.getStarted')}
          icon={<ArrowRight className="w-4 h-4" />}
          className="text-white bg-primary"
        />
      </PageHeroSection>

      {/* ── Supported Platforms: centered title + horizontal tags ── */}
      <section className="py-16 sm:py-24 bg-neutral-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-10">
            {t('completePms.supportedPlatforms')}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-lg bg-neutral-200/80 border border-neutral-200 text-neutral-800 text-sm font-medium"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Data categories: 3 cards, icon + title + bullets (primary circle + white check) ── */}
      <section className="py-16 sm:py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataCategories.map((cat) => (
              <div
                key={cat.key}
                className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <DataIcon
                    icon={cat.icon}
                    className="w-5 h-5 text-primary"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-4">
                  {cat.title}
                </h3>
                <ul className="space-y-2">
                  {cat.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <div className="w-5 h-5 shrink-0 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary-foreground" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm text-neutral-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integration Benefits (2x2) + Setup Steps (right panel) ── */}
      <section className="py-16 sm:py-24 bg-neutral-50/80 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
            {/* Left: Integration Benefits — title + 2x2 cards */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6 text-left">
                {t('completePms.integrationBenefits')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b) => (
                  <div
                    key={b.key}
                    className="bg-neutral-100/90 rounded-xl border border-neutral-200 p-5"
                  >
                    <h3 className="text-base font-bold text-neutral-900 mb-2">
                      {b.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Setup Steps — grey panel, numbered steps, CTA ── */}
            <div className="bg-neutral-200/80 rounded-xl border border-neutral-200 p-8 flex flex-col">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-6 text-left">
                {t('completePms.setupSteps')}
              </h2>
              <div className="space-y-5 flex-1">
                {steps.map((step) => (
                  <div key={step.key} className="flex gap-4">
                    <div className="w-8 h-8 shrink-0 rounded-lg bg-primary flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-neutral-900 mb-0.5">
                        {step.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-300">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  {t('completePms.getIntegrationGuide')}
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
