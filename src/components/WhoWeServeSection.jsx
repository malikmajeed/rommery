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
    <div className="relative bg-secondary/80 py-24 sm:py-32 gradient-dots-subtle">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
            Designed for Every Type of Property
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
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
            className="relative lg:row-span-2"
          >
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-xl font-medium tracking-tight text-foreground max-lg:text-center">Boutique Hotels</p>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">Deliver seamless, contactless stays while maintaining a personalized guest experience. Ideal for properties focused on service quality and operational efficiency.</p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-2xl shadow-2xl">
                  <img src="https://www.travelandleisure.com/thmb/fRvEyHLh-a92ZNKiIjZ9xf8r1tM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-the-william-vale-BOUTIQUENYC0624-2f7c7e43191544e79d78b1e813e1d2c9.jpg" alt="" className="size-full object-cover object-top" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </motion.div>

          {/* Card 2 - Vacation Rentals */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative max-lg:row-start-1"
          >
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-xl font-medium tracking-tight text-foreground max-lg:text-center">Vacation Rentals</p>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">Automate guest access completely with 24/7 self-service check-ins. Manage multiple units from one dashboard with instant digital key generation.</p>
              </div>
              <div className="px-5 pt-10">
                <img className="rounded-t-xl w-full h-auto object-cover max-lg:max-w-xs" src="https://www.vrbo.com/vacation-ideas/wp-content/uploads/2023/06/vacation-rentals.jpg" alt="Vacation rentals" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
          </motion.div>

          {/* Card 3 - Serviced Apartments */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
          >
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-xl font-medium tracking-tight text-foreground max-lg:text-center">Serviced Apartments</p>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">Perfect for short and long stays. Enable digital check-in, mobile key access, and automated guest management for a seamless resident experience.</p>
              </div>
              <div className="px-5 pt-10">
                <img className="rounded-t-xl w-full  object-cover" src="https://images.squarespace-cdn.com/content/v1/6313226a88427102e3185a6d/1667057085115-WF2K79ONABIUVXY5BJUP/Two+MacDonnell+Road+Apartment+1.jpg" alt="Serviced apartments" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
          </motion.div>

          {/* Card 4 - Hotel Chains & Resorts */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative lg:row-span-2"
          >
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-xl font-medium tracking-tight text-foreground max-lg:text-center">Hotel Chains & Resorts</p>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">Enterprise-grade hospitality automation that scales across all your properties. Centralized management, consistent guest experience, and powerful operational analytics.</p>
              </div>
              <div className="relative min-h-[220px] sm:min-h-[280px] w-full grow">
                <div className=" absolute inset-0 sm:top-10 sm:right-0 sm:bottom-0 sm:left-10 overflow-hidden rounded-tl-xl shadow-2xl outline outline-white/10">
                  <img
                    className="h-full w-full object-cover"
                    src="https://static.tildacdn.com/tild3961-6430-4334-b438-376231626333/StRegis_Muscat.jpg"
                    alt="Hotel exterior pool and bar"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
