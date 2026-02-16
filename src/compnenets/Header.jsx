'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, Check } from 'lucide-react';

const servicesLinks = [
  { label: 'Digital Check-In & Check-Out', href: '#services' },
  { label: 'Smart Lock Integration', href: '#services' },
  { label: 'Self-Service Kiosk', href: '#services' },
  { label: 'Mobile Key System', href: '#services' },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - left */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="text-xl font-bold tracking-tight">Rommery</span>
        </Link>

        {/* Desktop: center nav */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1 xl:gap-2">
          <Link
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white"
          >
            Home
          </Link>
          <div className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
              className="flex items-center gap-0.5 rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full pt-1">
                <div className="min-w-[220px] rounded-lg border border-white/10 bg-black py-1 shadow-xl">
                  {servicesLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white"
                      onClick={() => setServicesOpen(false)}
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 text-white/70" strokeWidth={2.5} />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            href="#about"
            className="rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white"
          >
            About Us
          </Link>
        </nav>

        {/* Desktop: Contact Now button - right */}
        <div className="hidden lg:block shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-gray-200"
          >
            Contact Now
          </a>
        </div>

        {/* Mobile: menu button (right) */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Contact"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black lg:hidden">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
           
            
          </div>
          <nav className="mx-auto max-w-7xl px-4 pb-6 sm:px-6">
            <ul className="space-y-0">
              <li>
                <Link
                  href="#"
                  className="block rounded-md px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setServicesOpenMobile((v) => !v)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium text-white/90 hover:bg-white/10"
                >
                  Services
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${servicesOpenMobile ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpenMobile && (
                  <ul className="border-l border-white/10 pl-4 py-1">
                    {servicesLinks.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 py-2 text-sm text-white/80 hover:text-white"
                          onClick={() => setMobileOpen(false)}
                        >
                          <Check className="h-3.5 w-3.5 shrink-0 text-white/60" strokeWidth={2.5} />
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
                  className="block rounded-md px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
