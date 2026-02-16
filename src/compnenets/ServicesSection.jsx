"use client";
import { motion } from "framer-motion";
import { Smartphone, Lock, Monitor, Check } from "lucide-react";

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
  <section id="services" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mt-3">
          Everything You Need to Go Digital
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Streamline operations, delight guests, and reduce costs with our comprehensive hospitality solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl border border-gray-200/80 p-8 shadow-sm hover:shadow-xl hover:shadow-black/5 hover:border-black transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Subtle top accent line on hover */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-black to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300 ring-2 ring-gray-200 group-hover:ring-gray-300">
              <service.icon className="w-7 h-7 text-gray-900" strokeWidth={1.75} />
            </div>

            <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
            <p className="font-body text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>

            <ul className="space-y-2.5 mb-6">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gray-900 mt-0.5 shrink-0" strokeWidth={2.5} />
                  <span className="text-sm text-gray-700">{f}</span>
                </li>
              ))}
            </ul>

            <div className="pt-5 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Benefits</p>
              <div className="flex flex-wrap gap-2">
                {service.benefits.map((b) => (
                  <span
                    key={b}
                    className="text-xs bg-gray-100 text-gray-800 rounded-full px-3 py-1.5 font-medium border border-gray-200"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
