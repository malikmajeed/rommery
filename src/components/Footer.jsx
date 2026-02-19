'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const serviceKeys = [
  { key: 'digitalCheckIn', href: '/digital-checkin' },
  { key: 'mobileKeySystem', href: '/mobile-key-system' },
  { key: 'smartPricingEngine', href: '/smart-pricing-engine' },
  { key: 'completePmsSolution', href: '/complete-pms-solution' },
];

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const servicesLinks = serviceKeys.map(({ key, href }) => ({ label: t(`header.${key}`), href }));

  return (
    <footer
      className="relative w-full text-neutral-800"
      style={{
        background: 'rgba(250, 250, 250, 0.85)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        boxShadow: '0 -1px 0 rgba(255, 255, 255, 0.8) inset, 0 -4px 24px rgba(0, 0, 0, 0.06)',
      }}
    >
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="text-xl font-bold tracking-tight text-neutral-900">
              <img src="./rommery-logo-black.png" alt="Rommery" className="h-20" />
            </Link>
            <p className="mt-3 text-sm text-neutral-600 max-w-xs">
              {t('footer.tagline')}
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-800">
              {t('footer.services')}
            </h3>
            <ul className="mt-4 space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Who We Serve */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-800">
              {t('footer.whoWeServe')}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#who-we-serve" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  {t('footer.boutiqueHotels')}
                </Link>
              </li>
              <li>
                <Link href="#who-we-serve" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  {t('footer.vacationRentals')}
                </Link>
              </li>
              <li>
                <Link href="#who-we-serve" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  {t('footer.servicedApartments')}
                </Link>
              </li>
              <li>
                <Link href="#who-we-serve" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  {t('footer.hotelChainsResorts')}
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-12 border-t border-neutral-200 pt-8 sm:mt-16 sm:pt-10"
        >
          <p className="text-center text-sm text-neutral-500">
            © {currentYear} Rommery. {t('footer.copyright')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
