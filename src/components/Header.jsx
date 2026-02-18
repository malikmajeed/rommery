'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, Check, ArrowRight } from 'lucide-react';
import { PrimaryButton } from './ui/PrimaryButton';

const servicesLinks = [
  { label: 'Digital Check-In', href: '/digital-checkin' },
  { label: 'Mobile Key System', href: '/mobile-key-system' },
  { label: 'Smart Pricing Engine', href: '/smart-pricing-engine' },
  { label: 'Complete PMS Solution', href: '/complete-pms-solution' },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full text-neutral-800 shadow-lg"
      style={{
        background: 'rgba(250, 250, 250, 0.32)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        boxShadow: '0 1px 0 rgba(255, 255, 255, 0.8) inset, 0 4px 24px rgba(0, 0, 0, 0.06)',
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - left */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <img src="./rommery-logo-black.png" alt="Rommery" className="h-10" />
        </Link>

        {/* Desktop: center nav */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1 xl:gap-2">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-md font-medium text-neutral-800 hover:bg-black/5 hover:text-neutral-900 transition-colors"
          >
            Home
          </Link>
          <div className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
              className="flex items-center gap-0.5 rounded-md px-3 py-2 text-md font-medium text-neutral-800 hover:bg-black/5 hover:text-neutral-900 transition-colors"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full pt-1">
                <div
                  className="min-w-[220px] rounded-2xl py-1 isolate"
                  style={{
                    background: 'rgba(250, 250, 250)',
                    backdropFilter: 'saturate(180%) blur(20px)',
                    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 1px 0 rgba(255, 255, 255, 0.8) inset, 0 4px 24px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  {servicesLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-800 hover:bg-black/5 hover:text-neutral-900 rounded-lg mx-1 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={2.5} />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            href="#about"
            className="rounded-md px-3 py-2 text-md font-medium text-neutral-800 hover:bg-black/5 hover:text-neutral-900 transition-colors"
          >
            About Us
          </Link>
          <a
            href="https://crito.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-2 text-md font-medium text-neutral-800 hover:bg-black/5 hover:text-neutral-900 transition-colors"
          >
            Hardware
          </a>
        </nav>

        {/* Desktop: Contact Now button - right */}
        <div className="hidden lg:block shrink-0"><PrimaryButton label="Contact Now" icon={<Phone strokeWidth={1} />} className='text-black'  noIconRotate />
        
        </div>

        {/* Mobile: menu button (right) */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-black/10 p-2 text-neutral-800 hover:bg-black/15 transition-colors"
            aria-label="Contact"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-800 hover:bg-black/5 transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel - glass */}
      {mobileOpen && (
        <div
          className="border-t border-black/5 lg:hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'saturate(180%) blur(16px)',
            WebkitBackdropFilter: 'saturate(180%) blur(16px)',
          }}
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-4" />
          <nav className="mx-auto max-w-7xl px-4 pb-6 sm:px-6">
            <ul className="space-y-0">
              <li>
                <Link
                  href="/"
                  className="block rounded-md px-3 py-3 text-base font-medium text-neutral-800 hover:bg-black/5 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setServicesOpenMobile((v) => !v)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium text-neutral-800 hover:bg-black/5 transition-colors"
                >
                  Services
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${servicesOpenMobile ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpenMobile && (
                  <ul className="border-l border-neutral-200 pl-4 py-1">
                    {servicesLinks.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 py-2 text-sm text-neutral-700 hover:text-neutral-900 hover:bg-black/5 rounded-md px-2 -mx-2 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          <Check className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={2.5} />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="#about"
                  className="block rounded-md px-3 py-3 text-base font-medium text-neutral-800 hover:bg-black/5 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://crito.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3 py-3 text-base font-medium text-neutral-800 hover:bg-black/5 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Hardware
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
