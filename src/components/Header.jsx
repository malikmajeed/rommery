'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, Check } from 'lucide-react';

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
    <header className="sticky top-0 z-50 w-full gradient-brand text-primary-foreground shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - left */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="text-xl font-bold tracking-tight">Rommery</span>
        </Link>

        {/* Desktop: center nav */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1 xl:gap-2">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            Home
          </Link>
          <div className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
              className="flex items-center gap-0.5 rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full pt-1">
                <div className="min-w-[220px] rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl py-1 shadow-xl">
                  {servicesLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                      onClick={() => setServicesOpen(false)}
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 text-primary-foreground/70" strokeWidth={2.5} />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            href="#about"
            className="rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            About Us
          </Link>
          <a
            href="https://crito.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            Hardware
          </a>
        </nav>

        {/* Desktop: Contact Now button - right */}
        <div className="hidden lg:block shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Contact Now <Phone className="h-5 w-5 shrink-0 stroke-[1]" />
          </a>
        </div>

        {/* Mobile: menu button (right) */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-primary-foreground/10 p-2 text-primary-foreground hover:bg-primary-foreground/20"
            aria-label="Contact"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-primary-foreground hover:bg-primary-foreground/10"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="border-t border-white/20 bg-white/5 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
           
            
          </div>
          <nav className="mx-auto max-w-7xl px-4 pb-6 sm:px-6">
            <ul className="space-y-0">
              <li>
                <Link
                  href="/"
                  className="block rounded-md px-3 py-3 text-base font-medium text-primary-foreground/90 hover:bg-primary-foreground/10"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setServicesOpenMobile((v) => !v)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium text-primary-foreground/90 hover:bg-primary-foreground/10"
                >
                  Services
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${servicesOpenMobile ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpenMobile && (
                  <ul className="border-l border-primary-foreground/10 pl-4 py-1">
                    {servicesLinks.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 py-2 text-sm text-primary-foreground/80 hover:text-primary-foreground"
                          onClick={() => setMobileOpen(false)}
                        >
                          <Check className="h-3.5 w-3.5 shrink-0 text-primary-foreground/60" strokeWidth={2.5} />
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
                  className="block rounded-md px-3 py-3 text-base font-medium text-primary-foreground/90 hover:bg-primary-foreground/10"
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
                  className="block rounded-md px-3 py-3 text-base font-medium text-primary-foreground/90 hover:bg-primary-foreground/10"
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
