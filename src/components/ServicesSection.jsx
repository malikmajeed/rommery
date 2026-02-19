"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Lock,
  Monitor,
  Check,
  SmartphoneIcon,
  Cloud,
  Headphones,
  RefreshCw,
  ArrowRight,
  Zap,
} from "lucide-react";
import { PrimaryButton } from "./ui/PrimaryButton";
import { useLanguage } from "@/context/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: Smartphone,
      title: t("services.digitalCheckInTitle"),
      description: t("services.digitalCheckInDesc"),
      features: t("services.digitalCheckInFeatures") || [],
      benefits: t("services.digitalCheckInBenefits") || [],
      accent: "from-blue-500/10 to-primary/5",
      stat: t("services.digitalCheckInStat"),
      statLabel: t("services.digitalCheckInStatLabel"),
    },
    {
      icon: Lock,
      title: t("services.smartLockTitle"),
      description: t("services.smartLockDesc"),
      features: t("services.smartLockFeatures") || [],
      benefits: t("services.smartLockBenefits") || [],
      accent: "from-emerald-500/10 to-primary/5",
      stat: t("services.smartLockStat"),
      statLabel: t("services.smartLockStatLabel"),
    },
    {
      icon: Monitor,
      title: t("services.kioskTitle"),
      description: t("services.kioskDesc"),
      features: t("services.kioskFeatures") || [],
      benefits: t("services.kioskBenefits") || [],
      accent: "from-violet-500/10 to-primary/5",
      stat: t("services.kioskStat"),
      statLabel: t("services.kioskStatLabel"),
    },
    {
      icon: SmartphoneIcon,
      title: t("services.mobileKeyTitle"),
      description: t("services.mobileKeyDesc"),
      features: t("services.mobileKeyFeatures") || [],
      benefits: t("services.mobileKeyBenefits") || [],
      accent: "from-orange-500/10 to-primary/5",
      stat: t("services.mobileKeyStat"),
      statLabel: t("services.mobileKeyStatLabel"),
    },
  ];

  const Service3Icon = services[3].icon;

  return (
    <section id="services" className="relative py-10 sm:py-16 bg-background gradient-dots-subtle">
      <div className="relative container mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-3">
            {t("services.heading")}
          </h2>
          <p className="text-lg/6 text-neutral-600 mt-4 max-w-xl mx-auto px-1">
            {t("services.subheading")}
          </p>
        </motion.div>

        {/* Grid: 3 cols, first row = 3 cards, second row = 4th card full-width, third row = PMS CTA */}
        <div className="max-w-5xl mx-auto">

          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-5 sm:mb-6">
            {services.slice(0, 3).map((service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={i}
                isHovered={hoveredIndex === i}
                onEnter={() => setHoveredIndex(i)}
                onLeave={() => setHoveredIndex(null)}
              />
            ))}
          </div>

          {/* Row 2: 4th card — full width horizontal */}
          <motion.div
            custom={3}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.5 }}
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`group relative rounded-2xl overflow-hidden  shadow-lg transition-all duration-300 hover:-translate-y-1 mb-5 sm:mb-6 ${hoveredIndex === 3 ? "card-snake-border card-snake-active" : ""}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${services[3].accent} opacity-60 pointer-events-none`} />
            <div className="relative flex flex-col sm:flex-row items-stretch gap-0">

              {/* Left: icon + stat */}
              <div className="flex sm:flex-col items-center justify-center gap-4 sm:gap-3 px-6 py-5 sm:py-6 sm:w-44 border-b sm:border-b-0 sm:border-r border-neutral-100 shrink-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center shrink-0">
                  <Service3Icon className="w-6 h-6 text-primary" strokeWidth={1.75} />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary leading-tight">{services[3].stat}</div>
                  <div className="text-xs text-neutral-500 mt-0.5">{services[3].statLabel}</div>
                </div>
              </div>

              {/* Middle: title + description + features */}
              <div className="flex-1 px-6 py-5 sm:py-6">
                <h3 className="text-2xl font-semibold tracking-tight text-primary mb-1.5">{services[3].title}</h3>
                <p className="text-md/6 text-neutral-600 mb-3">{services[3].description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                  {services[3].features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-black/80 mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-sm/5 text-black/80">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: benefits */}
              <div className="flex sm:flex-col justify-start gap-2 px-6 py-5 sm:py-6 sm:w-52 border-t sm:border-t-0 sm:border-l border-neutral-100 shrink-0">
                <div className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 mb-0 sm:mb-1 hidden sm:block">{t("services.benefits")}</div>
                {services[3].benefits.map((b) => (
                  <span
                    key={b}
                    className="text-[14px] bg-primary/10 text-primary rounded-full px-2.5 py-1 font-medium border border-primary/20"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Row 3: PMS CTA card — full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="rounded-2xl relative min-h-[240px] sm:min-h-[280px] overflow-hidden"
          >
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover object-center"
                src="./smart-pms-dashboard.png"
                alt="Smart PMS dashboard"
              />
            </div>
            <div className="absolute inset-0 z-[1] bg-primary/90" aria-hidden />

            {/* Content layout: left text + right feature pillars — extra padding on mobile so badge/button don’t touch card edges */}
            <div className="absolute inset-0 z-10 flex flex-col sm:flex-row items-center justify-between gap-6 px-5 py-8 sm:p-10">

              {/* Left */}
              <div className="flex-1 text-left max-w-md pt-0.5 pb-8 sm:pt-0 sm:pb-0">
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-xs font-semibold text-white/80 mb-3 border border-white/20">
                  <Zap className="w-3.5 h-3.5" />
                  {t("services.allInOne")}
                </div>
                <h3 className="text-2xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                  {t("services.completePmsTitle")}
                </h3>
                <p className="text-md/6 text-primary-foreground/80 mb-5">
                  {t("services.completePmsDesc")}
                </p>
                <PrimaryButton
                  href="/contact-us"
                  label={t("services.contactNow")}
                  icon={<ArrowRight />}
                  className="!text-white !border-white"
                />
              </div>

              {/* Right: 3 feature pillars */}
              <div className="flex flex-row sm:flex-col gap-3 shrink-0">
                {[
                  { icon: Lock, label: t("services.smartLockIntegration") },
                  { icon: Monitor, label: t("services.pmsIntegration") },
                  { icon: Smartphone, label: t("services.kioskIntegration") },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 backdrop-blur-sm"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-sm font-medium text-white whitespace-nowrap">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Badges row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-12"
        >
          {[
            { icon: Cloud, label: t("services.cloudBased") },
            { icon: Headphones, label: t("services.support24_7") },
            { icon: RefreshCw, label: t("services.regularUpdated") },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full  border border-primary px-4 py-2 text-md text-primary font-medium "
            >
              <Icon className="w-4 h-4 text-primary" strokeWidth={2} />
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Extracted card component for the first 3
function ServiceCard({ service, index, isHovered, onEnter, onLeave }) {
  return (
    <motion.div
      custom={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`group relative rounded-2xl overflow-hidden  shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col ${isHovered ? "card-snake-border card-snake-active" : ""}`}
    >
      {/* Subtle gradient bg */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-60 pointer-events-none`} />

      <div className="relative flex flex-col flex-1 p-5">
        {/* Top row: icon + stat */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-11 h-11 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center">
            <service.icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-primary leading-tight">{service.stat}</div>
            <div className="text-[14px] text-black/60 mt-0.5 leading-tight">{service.statLabel}</div>
          </div>
        </div>

        {/* Title + description */}
        <h3 className="text-2xl font-semibold tracking-tight text-primary mb-1.5 leading-snug">{service.title}</h3>
        <p className="text-sm/5 text-black/80 mb-4 flex-1">{service.description}</p>

        {/* Features */}
        <ul className="space-y-1.5 mb-4">
          {service.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-black/80 mt-0.5 shrink-0" strokeWidth={2.5} />
              <span className="text-sm/5 text-black/80">{f}</span>
            </li>
          ))}
        </ul>

        {/* Benefits */}
        <div className="pt-3 border-t border-neutral-100">
          <div className="flex flex-wrap gap-1.5">
            {service.benefits.slice(0, 2).map((b) => (
              <span
                key={b}
                className="text-[14px] bg-primary/10 text-primary rounded-full px-2.5 py-0.5 font-medium border border-primary/20"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ServicesSection;