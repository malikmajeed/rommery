'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Building2, Home, Clock } from 'lucide-react';

const CARD_IMAGES = [
  'https://www.triparound.com/wp-content/uploads/2021/11/pexels-photo-1488327.jpg',
  'https://www.vrbo.com/vacation-ideas/wp-content/uploads/2023/06/vacation-rentals.jpg',
  'https://images.squarespace-cdn.com/content/v1/6313226a88427102e3185a6d/1667057085115-WF2K79ONABIUVXY5BJUP/Two+MacDonnell+Road+Apartment+1.jpg',
  'https://static.tildacdn.com/tild3961-6430-4334-b438-376231626333/StRegis_Muscat.jpg',
];

const CARD_ICONS = [Building2, Home, Clock, Building2];

export function WhoWeServeSection() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState({});

  const cards = [
    { titleKey: 'boutiqueHotels', descKey: 'boutiqueDesc' },
    { titleKey: 'vacationRentals', descKey: 'vacationDesc' },
    { titleKey: 'servicedApartments', descKey: 'servicedDesc' },
    { titleKey: 'hotelChainsResorts', descKey: 'hotelChainsDesc' },
  ].map((c) => ({
    ...c,
    title: t(`whoWeServe.${c.titleKey}`),
    desc: t(`whoWeServe.${c.descKey}`),
  }));

  const toggleExpand = (i) => {
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <section id="who-we-serve" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900">
            {t('whoWeServe.heading')}
          </h2>
          <p className="mt-3 text-lg text-neutral-600 max-w-2xl mx-auto">
            {t('whoWeServe.subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const Icon = CARD_ICONS[i];
            const isExpanded = expanded[i];
            const desc = card.desc;
            const isLong = desc && desc.length > 120;

            return (
              <div
                key={card.titleKey}
                className="bg-white rounded-xl shadow-md border border-neutral-100 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={CARD_IMAGES[i]}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content: icon (overlaps image via negative margin) + title + description */}
                <div className="relative px-5 pb-5 pt-0 text-center flex flex-col flex-1">
                  {/* Icon overlay: pulled up so it sits on top of image and content */}
                  <div className="flex justify-center -mt-6 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-white border-2 border-primary flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={1.75} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">
                    {card.title}
                  </h3>
                  <div className="flex-1">
                    <p
                      className="text-sm text-neutral-600 leading-relaxed"
                      style={
                        isLong && !isExpanded
                          ? {
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                            }
                          : undefined
                      }
                    >
                      {desc}
                    </p>
                    {isLong && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(i)}
                        className="mt-2 text-sm font-medium text-primary hover:underline"
                      >
                        {isExpanded ? t('common.readLess') : t('common.readMore')}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
