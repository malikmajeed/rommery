import React from 'react';
import { PrimaryButton } from './ui/PrimaryButton';
import { SecondaryButton } from './ui/SecondaryButton';
import { ArrowRight, Play } from 'lucide-react';
export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-28">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              <span className="font-light text-2xl">Digital Solutions for Hotels & Apartments</span>
              <br />
              <span className="font-bold"> Experience Seamless Automation</span>
            </h1>

            <p className="font-body mt-4 sm:mt-6 text-sm/6 text-gray-600 max-w-xl">
              Automate check-in, integrate smart locks, and manage your property with a fully connected PMS ecosystem.
            </p>

                      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                          <PrimaryButton label="Get started" icon={<ArrowRight />} />
                          <SecondaryButton label="Live demo" icon={<Play />} className="border-none hover:bg-white hover:!text-black" />
                      </div>

          </div>

          {/* RIGHT IMAGES - 5 image staggered collage (responsive) */}
          <div className="relative overflow-hidden mt-8 lg:mt-0">
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-full md:max-w-2xl lg:max-w-5xl mx-auto lg:ml-auto">
              {/* LEFT COLUMN - 1 centered image */}
              <div className="flex items-center justify-center">
                <img
                  src="https://img.freepik.com/free-photo/full-shot-man-carrying-baggage_23-2149963942.jpg?semt=ais_user_personalization&w=740&q=80"
                  className="rounded-lg sm:rounded-md shadow-lg sm:shadow-xl w-48 h-72  object-cover"
                  alt="Team collaboration"
                />
              </div>

              {/* MIDDLE COLUMN - 2 centered images */}
              <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                <img
                  src="https://www.gokeyless.com/cdn/shop/articles/iStock-1075299532_630x.jpg?v=1698235474"
                  className="rounded-lg sm:rounded-md shadow-lg sm:shadow-xl w-48 h-72  object-cover"
                  alt="Person with laptop"
                />
                <img
                  src="https://www.evoke-creative.com/hubfs/Feature%20image%20(3)%20(1).jpg"
                  className="rounded-lg sm:rounded-md shadow-lg sm:shadow-xl w-48 h-72  object-cover"
                  alt="Person working"
                />
              </div>

              {/* RIGHT COLUMN - 2 top aligned, partially hidden on larger screens */}
              <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4 lg:gap-6 relative">
              <div className="w-48 lg:overflow-hidden">

                  <img
                    src="https://www.synolock.com/wp-content/uploads/2024/11/hotel-locks-orbita.jpg"
                    className="rounded-lg shadow-xl w-48 h-72 object-cover lg:translate-x-[40px]"

                    alt="Open plan office"
                  />
                </div>
                <div className="w-48 lg:overflow-hidden">
                  <img
                    src="https://cdn.create.vista.com/api/media/small/125640844/stock-photo-guests-getting-key-card-in-hotel"
                    className="rounded-lg shadow-xl w-48 h-72 object-cover lg:translate-x-[40px]"

                    alt="Meeting with whiteboard"
                  />
                </div>
              </div>
            </div>

            {/* Soft Gradient Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-100 via-white to-indigo-100 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-50" />
          </div>


        </div>

        {/* Stats section */}
        <div className="mt-16 sm:mt-20 rounded-2xl bg-black py-12 items-center justify-center flex sm:py-16 px-6 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">500+</p>
              <p className="mt-1 text-sm/6 text-gray-300">Hotels Worldwide</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">98%</p>
              <p className="mt-1 text-sm/6 text-gray-300">Guest Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">60%</p>
              <p className="mt-1 text-sm/6 text-gray-300">Faster Check-In</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">24/7</p>
              <p className="mt-1 text-sm/6 text-gray-300">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
