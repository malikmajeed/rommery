"use client";

import { motion } from "framer-motion";
import { Smartphone, Lock, Monitor, Check, SmartphoneIcon, Cloud, Headphones, RefreshCw, ArrowRight } from "lucide-react";
import { PrimaryButton } from "./ui/PrimaryButton";

const services = [
  {
    icon: Smartphone,
    title: "Digital Check-In & Check-Out",
    description: "Allow guests to check in and check out without the front desk.",
    features: ["Online self check-in", "Digital key generation", "Automated check-out", "Reduced front desk workload", "Faster guest experience"],
    benefits: ["24/7 guest access", "Lower staffing costs", "Better guest satisfaction"],
  },
  {
    icon: Lock,
    title: "Smart Lock Integration with PMS",
    description: "Connect smart locks directly with your Property Management System.",
    features: ["Automatic key creation after booking", "Remote door access control", "Integration with major smart lock systems", "Real-time access management"],
    benefits: ["No physical keys", "Higher security", "Fully automated guest access"],
  },
  {
    icon: Monitor,
    title: "Self-Service Kiosk Integration",
    description: "Install a self-service kiosk for automated check-in at the property.",
    features: ["Passport/ID scanning", "Payment processing", "Key or access code issuance", "PMS synchronization"],
    benefits: ["No front desk queues", "24/7 automated reception", "Ideal for apartments and budget hotels"],
  },
  {
    icon: SmartphoneIcon,
    title: "Mobile Key System",
    description: "Secure smartphone-based room access using encrypted keys that work seamlessly with your smart lock.",
    features: ["Seamless integration with smart locks", "Encrypted mobile keys", "Real-time access management", "Guest-friendly app for check-in and check-out"],
    benefits: ["No physical key cards", "Convenient access for guests", "Remote key sharing"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const ServicesSection = () => (
  <section id="services" className="py-16 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
          Everything You Need to Go Digital
        </h2>
        <p className="text-sm/6 text-muted-foreground mt-4 max-w-xl mx-auto">
          Streamline operations, delight guests, and reduce costs with our comprehensive hospitality solutions.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.slice(0, 3).map((service, i) => (
          <motion.div
            key={service.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-xl hover:shadow-foreground/5 hover:border-foreground transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300 ring-2 ring-border group-hover:ring-ring">
              <service.icon className="w-6 h-6 text-foreground" strokeWidth={1.75} />
            </div>

            <h3 className="text-xl font-medium tracking-tight text-foreground mb-2">{service.title}</h3>
            <p className="text-sm/6 text-muted-foreground mb-4">{service.description}</p>

            <ul className="space-y-2 mb-5">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" strokeWidth={2.5} />
                  <span className="text-sm/6 text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-border">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Key Benefits</p>
              <div className="flex flex-wrap gap-1.5">
                {service.benefits.map((b) => (
                  <span
                    key={b}
                    className="text-xs bg-secondary text-secondary-foreground rounded-full px-2.5 py-1 font-medium border border-border"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>


      <div className="grid grid-cols-3 mt-10 gap-6">
        <div className="col-span-1">
          {services[3] && (() => {
            const Icon4 = services[3].icon; // Uppercase variable
            return (
              <motion.div
                key={services[3].title}
                custom={3}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-xl hover:shadow-foreground/5 hover:border-foreground transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300 ring-2 ring-border group-hover:ring-ring">
                  <Icon4 className="w-6 h-6 text-foreground" strokeWidth={1.75} />
                </div>

                <h3 className="text-xl font-medium tracking-tight text-foreground mb-2">{services[3].title}</h3>
                <p className="text-sm/6 text-muted-foreground mb-4">{services[3].description}</p>

                <ul className="space-y-2 mb-5">
                  {services[3].features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-sm/6 text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Key Benefits</p>
                  <div className="flex flex-wrap gap-1.5">
                    {services[3].benefits.map((b) => (
                      <span
                        key={b}
                        className="text-xs bg-secondary text-secondary-foreground rounded-full px-2.5 py-1 font-medium border border-border"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </div>

          {/* SMART PMS CARD */}
        <div className="col-span-2 rounded-2xl relative min-h-[320px] overflow-hidden border border-border bg-transparent">
          {/* Image as background */}
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover object-center"
              src="./smart-pms-dashboard.png"
              alt="Smart PMS dashboard"
              style={{ background: 'transparent' }}
            />
          </div>
          {/* Dark overlay */}
          <div className="absolute inset-0 z-[1] bg-black/80" aria-hidden />
          {/* Content above image - absolute inset-0 so it fills card and justify-center works */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-6 sm:p-8">
            <h3 className="text-xl font-medium tracking-tight text-white mb-3 max-w-md">
              Complete PMS Solution
            </h3>
            <p className="text-sm/6 text-gray-300 mb-4 max-w-md">
              Automate your entire hospitality operation with customized smart locks, digital check-ins, card check-ins, and seamless PMS integrations—all from one platform.
            </p>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1 mb-5 text-sm/6 text-gray-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white shrink-0" strokeWidth={2.5} />
                Smart lock integration
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white shrink-0" strokeWidth={2.5} />
                PMS integration
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white shrink-0" strokeWidth={2.5} />
                Kiosk integration
              </li>
            </ul>
            <PrimaryButton
              label="Contact Now!"
              icon={<ArrowRight />}
              className="!bg-white !text-black border-white hover:!bg-gray-100 hover:!text-black"
            />
          </div>
        </div>
      </div>

      {/* Badges row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 mt-12"
      >
        {[
          { icon: Cloud, label: "Cloud based" },
          { icon: Headphones, label: "24/7 support" },
          { icon: RefreshCw, label: "Regular updated" },
        ].map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-4 py-2 text-sm font-medium text-foreground"
          >
            <Icon className="w-4 h-4 text-primary" strokeWidth={2} />
            {label}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
