'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PrimaryButton } from './PrimaryButton';
import { useLanguage } from '@/context/LanguageContext';

/**
 * Reusable CTA strip: title, description, and a primary-styled button (link or custom node).
 * @param {string} title - Heading text
 * @param {string} description - Subtitle/body text
 * @param {string} [buttonLabel] - Button text (used when buttonHref is set)
 * @param {string} [buttonHref] - If set, CTA uses PrimaryButton with href (renders as Link)
 * @param {React.ReactNode} [buttonIcon] - Optional icon for the button (e.g. <ArrowRight />)
 * @param {React.ReactNode} [button] - Custom button element (overrides buttonLabel/buttonHref/buttonIcon if provided)
 * @param {string} [className] - Optional extra class for the strip wrapper
 */
export function CTAStrip({
  title,
  description,
  buttonLabel,
  buttonHref,
  buttonIcon,
  button: buttonElement,
  className = '',
}) {
  const { t } = useLanguage();
  const buttonContent = buttonElement ?? (
    buttonHref != null ? (
      <PrimaryButton
        href={buttonHref}
        label={buttonLabel ?? t('common.getStarted')}
        icon={buttonIcon}
        noIconRotate={!!buttonIcon}
        className="!bg-accent !text-accent-foreground border-accent hover:!bg-accent/90"
      />
    ) : null
  );

  if (buttonContent == null && !buttonLabel) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className={`mt-10 sm:mt-14 rounded-2xl bg-primary p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 ${className}`.trim()}
    >
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-sm/6 text-primary-foreground/70 max-w-md">{description}</p>
      </div>
      {buttonContent}
    </motion.div>
  );
}
