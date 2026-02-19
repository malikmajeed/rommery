'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, HeadphonesIcon, Clock, Send, CheckCircle2 } from 'lucide-react';
import { PageHeroSection } from '@/components/ui/PageHeroSection';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useLanguage } from '@/context/LanguageContext';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80';

const contactInfoKeys = [
  { icon: Phone, labelKey: 'phone', value: '+49 176 41629153', subKey: 'callAnytime', href: 'tel:+4917641629153', iconBg: 'bg-[#007aec]/10', iconColor: 'text-[#007aec]', hoverGrad: 'from-[#007aec]/8 to-[#007aec]/3' },
  { icon: Mail, labelKey: 'email', value: 'info@crito.io', subKey: 'sendEmail', href: 'mailto:info@crito.io', iconBg: 'bg-[#8FE5C1]/25', iconColor: 'text-emerald-600', hoverGrad: 'from-[#8FE5C1]/20 to-[#8FE5C1]/5' },
  { icon: HeadphonesIcon, labelKey: 'support', valueKey: 'available24_7', subKey: 'weAreHere', href: null, iconBg: 'bg-gradient-to-br from-[#007aec]/10 to-[#8FE5C1]/15', iconColor: 'text-[#007aec]', hoverGrad: 'from-[#007aec]/8 to-[#8FE5C1]/10' },
  { icon: Clock, labelKey: 'responseTime', valueKey: 'within24Hours', subKey: 'quickResponse', href: null, iconBg: 'bg-[#007aec]/10', iconColor: 'text-[#007aec]', hoverGrad: 'from-[#8FE5C1]/15 to-[#007aec]/6' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const glassCard =
  'rounded-2xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_4px_24px_rgba(0,122,236,0.07),0_1px_2px_rgba(0,0,0,0.04)]';

export default function ContactPage() {
  const { t } = useLanguage();
  const contactInfo = contactInfoKeys.map((item) => ({
    ...item,
    label: t(`contact.${item.labelKey}`),
    sub: t(`contact.${item.subKey}`),
    value: item.valueKey ? t(`contact.${item.valueKey}`) : item.value,
  }));
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <PageHeroSection
        breadcrumbs={[{ label: t('common.home'), href: '/' }, { label: t('contact.breadcrumbContact') }]}
        title={t('contact.title')}
        description={t('contact.description')}
        image={HERO_IMAGE}
        imageAlt="Contact Rommery"
      />

      {/* ───────────── CONTACT INFO CARDS ───────────── */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-white to-slate-50/70">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-48 -right-48 w-[680px] h-[680px] rounded-full bg-[#007aec]/7 blur-[110px]" />
          <div className="absolute -bottom-48 -left-24 w-[520px] h-[520px] rounded-full bg-[#8FE5C1]/15 blur-[90px]" />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'radial-gradient(circle, #007aec1a 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14 sm:mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase text-[#007aec] bg-[#007aec]/8 border border-[#007aec]/15 mb-5">
              {t('contact.contactInformation')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
              <span className="bg-gradient-to-r from-[#007aec] to-[#8FE5C1] bg-clip-text text-transparent">
                {t('contact.waysToReachUs')}
              </span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-slate-500 leading-relaxed">
              {t('contact.waysSubtext')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((item, i) => {
              const Wrapper = item.href ? 'a' : 'div';
              return (
                <motion.div
                  key={item.label}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Wrapper
                    href={item.href ?? undefined}
                    className={`group relative ${glassCard} p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_44px_rgba(0,122,236,0.13)] overflow-hidden block`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.hoverGrad} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl`} />

                    <div className="relative">
                      <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center mb-4`}>
                        <item.icon className={`w-5 h-5 ${item.iconColor}`} strokeWidth={1.75} />
                      </div>

                      <p className="text-[10px] font-bold text-[#007aec] uppercase tracking-[0.12em] mb-1">
                        {item.label}
                      </p>
                      <p className="text-[15px] font-semibold text-slate-800 leading-snug mb-1">
                        {item.value}
                      </p>
                      <p className="text-[13px] text-slate-500">{item.sub}</p>
                    </div>

                    <div className="absolute bottom-0 left-5 right-5 h-[2px] rounded-full bg-gradient-to-r from-[#007aec] to-[#8FE5C1] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── CONTACT FORM ───────────── */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-white border-t border-slate-100/80">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-gradient-to-b from-[#007aec]/5 to-transparent blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, #8FE5C120 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Left: label column */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase text-[#007aec] bg-[#007aec]/8 border border-[#007aec]/15 mb-5">
                {t('contact.sendMessage')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-4">
                {t('contact.letsStart')}{' '}
                <span className="bg-gradient-to-r from-[#007aec] to-[#8FE5C1] bg-clip-text text-transparent">
                  {t('contact.conversation')}
                </span>
              </h2>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-10">
                {t('contact.formIntro')}
              </p>

              {/* Quick contact chips */}
              <div className="space-y-3">
                {[
                  { icon: Phone, label: '+49 176 41629153', href: 'tel:+4917641629153' },
                  { icon: Mail, label: 'info@crito.io', href: 'mailto:info@crito.io' },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-[#007aec]/20 hover:bg-[#007aec]/4 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#007aec]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#007aec]" strokeWidth={1.75} />
                    </div>
                    <span className="text-[14px] text-slate-700 font-medium group-hover:text-[#007aec] transition-colors duration-200">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right: form glass card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="lg:col-span-3 relative"
            >
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#007aec]/12 to-[#8FE5C1]/12 blur-2xl scale-105 -z-10" />

              <div className="rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/95 shadow-[0_8px_48px_rgba(0,122,236,0.10),0_2px_4px_rgba(0,0,0,0.04)] p-8 sm:p-10">
                {/* Top gradient stripe */}
                <div className="h-1 w-full rounded-full bg-gradient-to-r from-[#007aec] to-[#8FE5C1] mb-8" />

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#8FE5C1]/25 flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-8 h-8 text-emerald-500" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{t('contact.messageSent')}</h3>
                    <p className="text-slate-500 text-[15px] max-w-xs">
                      {t('contact.thankYou')}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1 */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-[0.09em] mb-2">
                          {t('contact.fullName')} <span className="text-[#007aec]">*</span>
                        </label>
                        <div className="input-snake-border-wrapper">
                          <input
                            name="fullName"
                            required
                            value={form.fullName}
                            onChange={handleChange}
                            placeholder={t('contact.placeholderName')}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border-0 text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-0 transition-colors duration-200"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-[0.09em] mb-2">
                          {t('contact.emailAddress')} <span className="text-[#007aec]">*</span>
                        </label>
                        <div className="input-snake-border-wrapper">
                          <input
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder={t('contact.placeholderEmail')}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border-0 text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-0 transition-colors duration-200"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-[0.09em] mb-2">
                          {t('contact.phoneNumber')}
                        </label>
                        <div className="input-snake-border-wrapper">
                          <input
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder={t('contact.placeholderPhone')}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border-0 text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-0 transition-colors duration-200"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-[0.09em] mb-2">
                          {t('contact.subject')} <span className="text-[#007aec]">*</span>
                        </label>
                        <div className="input-snake-border-wrapper">
                          <input
                            name="subject"
                            required
                            value={form.subject}
                            onChange={handleChange}
                            placeholder={t('contact.placeholderSubject')}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border-0 text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-0 transition-colors duration-200"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-[0.09em] mb-2">
                        {t('contact.message')} <span className="text-[#007aec]">*</span>
                      </label>
                      <div className="input-snake-border-wrapper">
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder={t('contact.placeholderMessage')}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border-0 text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-0 transition-colors duration-200 resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <PrimaryButton
                      type="submit"
                      label={t('contact.sendMessageButton')}
                      icon={<Send className="w-5 h-5" strokeWidth={2} />}
                      className="w-full font-bold  bg-gradient-to-r from-primary to-secondary hover:from-muted-foreground hover:to-primary" noIconRotate
                    />
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}