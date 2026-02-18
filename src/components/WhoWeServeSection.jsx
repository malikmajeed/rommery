'use client';

import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
};

export const WhoWeServeSection = () => {
  return (
    <section id="who-we-serve" className="relative py-24 sm:py-32 bg-background gradient-dots-subtle">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Designed for Every Type of Property
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg/6 text-neutral-600">
            From independent hotels to large hospitality groups, our automation solutions adapt to your property size and operational model.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Card 1 - Boutique Hotels */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative lg:row-span-2 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-px rounded-2xl lg:rounded-l-[1.25rem] shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl lg:rounded-l-[1.25rem] border border-transparent">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-xl font-semibold tracking-tight text-primary max-lg:text-center">Boutique Hotels</p>
                <p className="mt-2 max-w-lg text-md/6 text-black/80  max-lg:text-center">Deliver seamless, contactless stays while maintaining a personalized guest experience. Ideal for properties focused on service quality and operational efficiency.</p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-2xl shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                  <img src="https://www.triparound.com/wp-content/uploads/2021/11/pexels-photo-1488327.jpg" alt="" className="size-full object-cover object-top" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl lg:rounded-l-[1.25rem] ring-1 ring-black/5" aria-hidden />
          </motion.div>

          {/* Card 2 - Vacation Rentals */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative max-lg:row-start-1 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-px rounded-2xl max-lg:rounded-t-[1.25rem] shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl max-lg:rounded-t-[1.25rem]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-xl font-semibold tracking-tight text-primary max-lg:text-center">Vacation Rentals</p>
                <p className="mt-2 max-w-lg text-md/6 text-black/80  max-lg:text-center">Automate guest access completely with 24/7 self-service check-ins. Manage multiple units from one dashboard with instant digital key generation.</p>
              </div>
              <div className="px-5 pt-10">
                <img className="rounded-t-xl w-full h-auto object-cover max-lg:max-w-xs transition-transform duration-300 group-hover:scale-[1.02]" src="https://www.vrbo.com/vacation-ideas/wp-content/uploads/2023/06/vacation-rentals.jpg" alt="Vacation rentals" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl max-lg:rounded-t-[1.25rem] ring-1 ring-black/5" aria-hidden />
          </motion.div>

          {/* Card 3 - Serviced Apartments */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-px rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-xl font-semibold tracking-tight text-primary max-lg:text-center">Serviced Apartments</p>
                <p className="mt-2 max-w-lg text-md/6 text-black/80  max-lg:text-center">Perfect for short and long stays. Enable digital check-in, mobile key access, and automated guest management for a seamless resident experience.</p>
              </div>
              <div className="px-5 pt-10">
                <img className="rounded-t-xl w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" src="https://images.squarespace-cdn.com/content/v1/6313226a88427102e3185a6d/1667057085115-WF2K79ONABIUVXY5BJUP/Two+MacDonnell+Road+Apartment+1.jpg" alt="Serviced apartments" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl ring-1 ring-black/5" aria-hidden />
          </motion.div>

          {/* Card 4 - Hotel Chains & Resorts */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative lg:row-span-2 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-px rounded-2xl max-lg:rounded-b-[1.25rem] lg:rounded-r-[1.25rem] shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl max-lg:rounded-b-[1.25rem] lg:rounded-r-[1.25rem]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-xl font-semibold tracking-tight text-primary max-lg:text-center">Hotel Chains & Resorts</p>
                <p className="mt-2 max-w-lg text-md/6 text-black/80 max-lg:text-center">Enterprise-grade hospitality automation that scales across all your properties. Centralized management, consistent guest experience, and powerful operational analytics.</p>
              </div>
              <div className="relative min-h-[220px] sm:min-h-[280px] w-full grow">
                <div className="absolute inset-0 sm:top-10 sm:right-0 sm:bottom-0 sm:left-10 overflow-hidden rounded-tl-xl shadow-xl outline outline-white/10 transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    className="h-full w-full object-cover"
                    src="https://static.tildacdn.com/tild3961-6430-4334-b438-376231626333/StRegis_Muscat.jpg"
                    alt="Hotel exterior pool and bar"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl max-lg:rounded-b-[1.25rem] lg:rounded-r-[1.25rem] ring-1 ring-black/5" aria-hidden />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
