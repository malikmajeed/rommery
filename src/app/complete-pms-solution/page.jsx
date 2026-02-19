'use client';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
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
import { useLanguage } from '@/context/LanguageContext';

const HERO_IMAGE =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHIpwS-RqARuMkdZUmLiLT01ucwPXr20Ohuw&s';

const platformsList = [
  { name: 'Opera PMS', statusKey: 'fullIntegration', icon: Server },
  { name: 'Mews', statusKey: 'fullIntegration', icon: Server },
  { name: 'Apaleo', statusKey: 'fullIntegration', icon: Server },
  { name: 'Protel', statusKey: 'fullIntegration', icon: Server },
  { name: 'RoomMaster', statusKey: 'fullIntegration', icon: Server },
  { name: 'Custom PMS', statusKey: 'apiAvailable', icon: KeyRound },
];

const dataSyncKeys = [
  { icon: Users, key: 'guestInformation', pointsKey: 'guestPoints', hoverGrad: 'from-[#007aec]/8 to-[#007aec]/3', iconBg: 'bg-[#007aec]/10', iconColor: 'text-[#007aec]' },
  { icon: DoorOpen, key: 'roomManagement', pointsKey: 'roomPoints', hoverGrad: 'from-[#8FE5C1]/20 to-[#8FE5C1]/5', iconBg: 'bg-[#8FE5C1]/25', iconColor: 'text-emerald-600' },
  { icon: CreditCard, key: 'financialData', pointsKey: 'financialPoints', hoverGrad: 'from-[#007aec]/8 to-[#8FE5C1]/10', iconBg: 'bg-gradient-to-br from-[#007aec]/10 to-[#8FE5C1]/15', iconColor: 'text-[#007aec]' },
];

const integrationBenefitKeys = [
  { icon: RefreshCw, key: 'realTimeSync', subKey: 'realTime', color: 'from-[#007aec]/10 to-[#007aec]/3' },
  { icon: ArrowLeftRight, key: 'biDirectional', subKey: 'biDirectional', color: 'from-[#8FE5C1]/18 to-[#8FE5C1]/5' },
  { icon: FileCheck, key: 'zeroManualEntry', subKey: 'zeroManual', color: 'from-[#007aec]/8 to-[#8FE5C1]/8' },
  { icon: Rocket, key: 'fastImplementation', subKey: 'fastImpl', color: 'from-[#8FE5C1]/15 to-[#007aec]/6' },
];

const implementationStepKeys = [
  { number: '01', key: 'apiCredentials', icon: KeyRound },
  { number: '02', key: 'configuration', icon: Settings },
  { number: '03', key: 'testing', icon: TestTube },
  { number: '04', key: 'goLive', icon: Zap },
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
  const { t } = useLanguage();
  const platforms = platformsList.map((p) => ({ ...p, status: t(`completePms.${p.statusKey}`), isFullIntegration: p.statusKey === 'fullIntegration' }));
  const dataSync = dataSyncKeys.map((item) => ({
    ...item,
    title: t(`completePms.${item.key}`),
    points: Array.isArray(t(`completePms.${item.pointsKey}`)) ? t(`completePms.${item.pointsKey}`) : [],
  }));
  const integrationBenefits = integrationBenefitKeys.map((item) => ({
    ...item,
    title: t(`completePms.${item.key}`),
    subtitle: t(`completePms.${item.subKey}Subtitle`),
    desc: t(`completePms.${item.subKey}Desc`),
  }));
  const implementationSteps = implementationStepKeys.map((item) => ({
    ...item,
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
              {t('completePms.supportedPlatforms')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
              Wide range of{' '}
              <span className="bg-gradient-to-r from-[#007aec] to-[#8FE5C1] bg-clip-text text-transparent">
                {t('completePms.pmsSystems')}
              </span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-slate-500 leading-relaxed">
              {t('completePms.platformsSubtext')}
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
                        p.isFullIntegration ? 'bg-emerald-400' : 'bg-[#007aec]'
                      }`}
                    />
                    <p
                      className={`text-[12px] font-semibold ${
                        p.isFullIntegration ? 'text-emerald-600' : 'text-[#007aec]'
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
              {t('completePms.dataSync')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
              Synchronized{' '}
              <span className="bg-gradient-to-r from-[#007aec] to-[#8FE5C1] bg-clip-text text-transparent">
                {t('completePms.data')}
              </span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-slate-500 leading-relaxed">
              {t('completePms.dataSyncSubtext')}
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
              {t('completePms.integrationBenefits')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
              Why{' '}
              <span className="bg-gradient-to-r from-[#007aec] to-[#8FE5C1] bg-clip-text text-transparent">
                {t('completePms.integrationMatters')}
              </span>{' '}
              matters
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-slate-500 leading-relaxed">
              {t('completePms.integrationSubtext')}
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
              {t('completePms.implementation')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
              Quick &{' '}
              <span className="bg-gradient-to-r from-[#007aec] to-[#8FE5C1] bg-clip-text text-transparent">
                {t('completePms.easySetup')}
              </span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-slate-500 leading-relaxed">
              {t('completePms.implementationSubtext')}
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
                  {t('completePms.ctaText')}
                </p>
                <SecondaryButton href="/contact-us" label={t('completePms.ctaButton')} icon={<ArrowRight />} className="text-primary items-center justify-center" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}