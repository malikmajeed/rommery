'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const servicesLinks = [
  { label: 'Digital Check-In & Check-Out', href: '#services' },
  { label: 'Smart Lock Integration', href: '#services' },
  { label: 'Self-Service Kiosk', href: '#services' },
  { label: 'Mobile Key System', href: '#services' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="text-xl font-bold tracking-tight text-white">
              Rommery
            </Link>
            <p className="mt-3 text-sm text-white/70 max-w-xs">
              Smart digital solutions for hotels and apartments. Automate check-in, integrate smart locks, and manage your property with a fully connected PMS ecosystem.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Who We Serve
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#who-we-serve" className="text-sm text-white/70 hover:text-white transition-colors">
                  Boutique Hotels
                </Link>
              </li>
              <li>
                <Link href="#who-we-serve" className="text-sm text-white/70 hover:text-white transition-colors">
                  Vacation Rentals
                </Link>
              </li>
              <li>
                <Link href="#who-we-serve" className="text-sm text-white/70 hover:text-white transition-colors">
                  Serviced Apartments
                </Link>
              </li>
              <li>
                <Link href="#who-we-serve" className="text-sm text-white/70 hover:text-white transition-colors">
                  Hotel Chains & Resorts
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
          className="mt-12 border-t border-white/10 pt-8 sm:mt-16 sm:pt-10"
        >
          <p className="text-center text-sm text-white/60">
            © {currentYear} Rommery. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
