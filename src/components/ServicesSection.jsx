"use client";

import Link from "next/link";
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

const serviceImages = [
  "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
];

const serviceHrefs = ["/digital-checkin", "/mobile-key-system", "/smart-pricing-engine", "/complete-pms-solution"];

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Smartphone,
      iconBg: "bg-primary",
      iconColor: "text-white",
      title: t("services.digitalCheckInTitle"),
      description: t("services.digitalCheckInDesc"),
      features: (t("services.digitalCheckInFeatures") || []).slice(0, 3),
    },
    {
      icon: Lock,
      iconBg: "bg-primary",
      iconColor: "text-white",
      title: t("services.smartLockTitle"),
      description: t("services.smartLockDesc"),
      features: (t("services.smartLockFeatures") || []).slice(0, 3),
    },
    {
      icon: Monitor,
      iconBg: "bg-primary",
      iconColor: "text-white",
      title: t("services.kioskTitle"),
      description: t("services.kioskDesc"),
      features: (t("services.kioskFeatures") || []).slice(0, 3),
    },
    {
      icon: SmartphoneIcon,
      iconBg: "bg-primary",
      iconColor: "text-white",
      title: t("services.mobileKeyTitle"),
      description: t("services.mobileKeyDesc"),
      features: (t("services.mobileKeyFeatures") || []).slice(0, 3),
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-20 bg-neutral-100/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl font-heading sm:text-3xl md:text-4xl font-bold text-neutral-900">
            {t("services.heading")}
          </h2>
          <p className="text-lg text-neutral-600 mt-3 max-w-xl mx-auto">
            {t("services.subheading")}
          </p>
        </div>

        {/* Service rows: alternating image left/right */}
        <div className="space-y-16 sm:space-y-24">
          {services.map((service, i) => {
            const imageLeft = i % 2 === 0;
            const href = serviceHrefs[i] || "/contact-us";
            const Icon = service.icon;

            return (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                {/* Image column */}
                <div className={`relative overflow-hidden rounded-xl ${!imageLeft ? "md:order-2" : ""}`}>
                  <img
                    src={serviceImages[i]}
                    alt=""
                    className="w-full aspect-[4/3] object-cover object-center rounded-xl"
                  />
                </div>

                {/* Content column */}
                <div className={!imageLeft ? "md:order-1" : ""}>
                  <div className={`w-10 h-10 rounded-lg ${service.iconBg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${service.iconColor}`} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-2xl font-heading sm:text-3xl font-bold text-neutral-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 text-base leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="flex shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                        </span>
                        <span className="text-neutral-700 text-sm sm:text-base">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 text-neutral-900 font-medium hover:text-primary transition-colors"
                  >
                    {t("common.learnMore")}
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* PMS CTA block — solid primary, no rounded corners, two columns: content + image */}
        <div className="mt-16 sm:mt-24 bg-primary overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[320px] lg:min-h-[380px]">
            {/* Left: text + feature list + button */}
            <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:py-16">
              <h3 className="text-xl font-heading  sm:text-2xl font-bold text-white mb-2">
                {t("services.allInOne")}
              </h3>
              <p className="text-white/90 text-sm sm:text-base max-w-lg mb-6">
                {t("services.completePmsDesc")}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                {[
                  t("services.smartLockIntegration"),
                  t("services.kioskIntegration"),
                  t("services.support24_7"),
                  t("services.pmsIntegration"),
                  t("services.cloudBased"),
                  t("services.regularUpdated"),
                ].map((label) => (
                  <li key={label} className="flex items-center gap-2">
                    <span className="flex shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                    </span>
                    <span className="text-white text-sm sm:text-base">{label}</span>
                  </li>
                ))}
              </ul>
              <PrimaryButton
                href="/contact-us"
                label={t("services.contactNow")}
                icon={<ArrowRight />}
                className="!bg-white !text-neutral-900 !border-white shrink-0 w-fit"
              />
            </div>
            {/* Right: image */}
            <div className="relative h-64 lg:h-auto lg:min-h-[380px]">
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80"
                alt=""
                className="absolute p-15 inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Badges row */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-10 sm:mt-14">
          {[
            { icon: Cloud, label: t("services.cloudBased") },
            { icon: Headphones, label: t("services.support24_7") },
            { icon: RefreshCw, label: t("services.regularUpdated") },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm text-primary font-medium"
            >
              <Icon className="w-4 h-4" strokeWidth={2} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
