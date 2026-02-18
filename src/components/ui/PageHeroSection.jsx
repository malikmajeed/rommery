'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

/**
 * @param {Object} props
 * @param {Array<{ label: string, href?: string }>} props.breadcrumbs - Items for breadcrumb trail (last item typically has no href)
 * @param {string} props.title - Page title
 * @param {string} [props.description] - Optional short description below the title
 * @param {string} [props.image] - Optional hero background image URL (full-width with overlay)
 * @param {string} [props.imageAlt] - Alt text for hero image when image is provided
 */
export function PageHeroSection({ breadcrumbs = [], title, description, image, imageAlt = '' }) {
  const hasImage = Boolean(image);

  const content = (
    <>
      {breadcrumbs?.length > 0 && (
        <nav aria-label="Breadcrumb" className={hasImage ? 'mb-3' : 'mb-2 w-full flex justify-center'}>
          <ol
            className={`flex flex-wrap items-center gap-1.5 text-sm ${
              hasImage ? 'text-white/80' : 'text-neutral-500'
            }`}
          >
            {breadcrumbs.map((item, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 ${hasImage ? '' : 'text-neutral-400'}`}
                    aria-hidden
                  />
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className={hasImage ? 'hover:text-white transition-colors' : 'hover:text-primary transition-colors'}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={hasImage ? 'text-white font-medium' : 'text-neutral-900 font-medium'}>
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      <h1
        className={`font-heading font-bold tracking-tight w-full ${
          hasImage
            ? 'text-3xl text-white sm:text-4xl md:text-5xl max-w-2xl'
            : 'text-2xl text-primary sm:text-3xl md:text-4xl'
        }`}
      >
        {title}
      </h1>
      {description && (
        <p
          className={
            hasImage
              ? 'mt-3 max-w-xl text-sm/6 text-white/90 sm:text-base'
              : 'mt-2 max-w-2xl text-sm/6 text-neutral-600 sm:mt-2 w-full mx-auto'
          }
        >
          {description}
        </p>
      )}
    </>
  );

  if (hasImage) {
    return (
      <section className="relative min-h-[300px] sm:min-h-[500px] md:min-h-[560px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80" aria-hidden />
        </div>
        <div className="relative z-10 w-full  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          {content}
        </div>
      </section>
    );
  }

  return (
    <section className="relative border-b border-neutral-200 bg-gradient-to-b from-primary/10 to-secondary/10 gradient-dots-subtle py-12 sm:py-16 flex items-center justify-center overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center w-full">
        {content}
      </div>
    </section>
  );
}
