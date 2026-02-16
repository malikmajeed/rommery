'use client';
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
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Process
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            How It Works
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Four simple steps to a fully automated guest experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl sm:max-w-4xl mx-auto flex gap-6 px-2">
          {/* Icon column: fixed width so line stays centered on icons */}
          <div className="relative flex flex-col items-center shrink-0 w-14">
            {/* Single 1px vertical line, centered in this column */}
            <div className="absolute top-9 bottom-8 left-1/2 -translate-x-px w-px min-h-[200px] bg-primary/40 z-0" aria-hidden />
            {steps.map((step, i) => (
              <div key={step.title} className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                  <step.icon className="w-6 h-6" />
                </div>
                {i < steps.length - 1 && <div className="h-16 shrink-0" />}
              </div>
            ))}
          </div>

          {/* Content column */}
          <div className="flex-1 min-w-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              {/* Content */}
              <div className="pt-2 pb-8">
              <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/20 uppercase tracking-wider">
                  Step {i + 1}
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground mt-1 mb-1">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorkSection;
