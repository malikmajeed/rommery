"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const HowItWorkSection = () => {
  const { t } = useLanguage();
  const steps = [
    { titleKey: "step1Title", descKey: "step1Desc" },
    { titleKey: "step2Title", descKey: "step2Desc" },
    { titleKey: "step3Title", descKey: "step3Desc" },
    { titleKey: "step4Title", descKey: "step4Desc" },
  ].map((s, i) => ({
    ...s,
    number: i + 1,
    title: t(`howItWorks.${s.titleKey}`),
    desc: t(`howItWorks.${s.descKey}`),
  }));

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900">
            {t("howItWorks.heading")}
          </h2>
          <p className="text-lg text-neutral-600 mt-3 max-w-lg mx-auto">
            {t("howItWorks.subheading")}
          </p>
        </div>

        {/* Four cards in a single row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.titleKey}
              className="bg-white border border-neutral-200 rounded-lg shadow-sm p-6 text-left flex flex-col"
            >
              {/* Number badge: gradient square with white number */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4 shrink-0">
                <span className="text-white font-bold text-lg">{step.number}</span>
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
  );
};

export default HowItWorkSection;
