"use client";
import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck, Cpu, KeyRound, LogOut } from "lucide-react";
const steps = [
  {
    icon: CalendarCheck,
    title: "Guest Makes a Reservation",
    desc: "Through any booking channel — OTAs, direct website, phone, or directly at the self-service kiosk on-site.",
  },
  {
    icon: Cpu,
    title: "PMS Processes Reservation",
    desc: "Your Property Management System automatically syncs the booking and prepares everything.",
  },
  {
    icon: KeyRound,
    title: "Digital Key or Kiosk Check-In",
    desc: "Guest receives a digital key on their phone or checks in at the self-service kiosk.",
  },
  {
    icon: LogOut,
    title: "Automatic Check-Out",
    desc: "Guest checks out seamlessly — no front desk interaction needed.",
  },
];
const HowItWorkSection = () => {
  return (
    <section id="how-it-works" className="relative py-24  gradient-dots-subtle">
      <div className="relative container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Four Steps to Full Automation
          </h2>
          <p className="text-lg/6 text-black/80 mt-4 max-w-lg mx-auto">
            A fully automated guest experience from booking to check-out.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <img
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                src="https://lemacon.com/wp-content/uploads/2022/06/AC-Hotel-Daytime-Exterior-Pool-Bar.jpg"
                alt="Hotel exterior"
              />
              <img
                className="absolute -bottom-8 -right-4 lg:-right-8 w-3/5 rounded-2xl shadow-2xl border-4 border-background object-cover aspect-[4/3]"
                src="https://img.freepik.com/free-photo/hotel-manager-handing-arriving-visitors-booking-reservation-file-receptionists-check-business-travelling-guests-being-assisted-by-helpful-concierge-staff-coworkers-inside-reception-lobby_482257-72475.jpg?semt=ais_user_personalization&w=740&q=80"
                alt="Hotel reception"
              />
            </div>
            {/* Decorative blob */}
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
          </motion.div>
          {/* Timeline */}
          <div className="relative pl-2">
            {/* Vertical line */}
            <div
              className="absolute top-7 bottom-7 left-[calc(1.75rem+0.5px)] w-px bg-border"
              aria-hidden
            />
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.45 }}
                className="group relative flex items-start gap-5 z-10 pb-10 last:pb-0 cursor-default"
              >
                {/* Icon - reacts to hover anywhere on this step row */}
                <div className="shrink-0 w-14 flex justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-primary flex items-center justify-center shadow-md ring-4 ring-background transition-colors duration-200 group-hover:bg-primary group-hover:border-primary">
                    <StepIcon className="w-6 h-6 text-primary transition-colors duration-200 group-hover:text-white" />
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0 pt-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary border border-primary/15 uppercase tracking-wider">
                    Step {i + 1}
                  </span>
                  <h3 className="text-xl font-medium tracking-tight text-primary mt-1.5 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm/6 text-black/80">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowItWorkSection;
