import React from 'react'

export const WhoWeServeSection = () => {
  return (
    <div class="bg-gray-50 py-24 sm:py-32">
  <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-center text-base/7 font-semibold text-indigo-600">Who we serve</h2>
    <p class="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">Designed for Every Type of Property</p>
    <p class="mx-auto mt-3 max-w-2xl text-center text-gray-600">From independent hotels to large hospitality groups, our automation solutions adapt to your property size and operational model.</p>
    <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
      <div class="relative lg:row-span-2">
        <div class="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
          <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
            
            <p class="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center">Boutique Hotels</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Deliver seamless, contactless stays while maintaining a personalized guest experience. Ideal for properties focused on service quality and operational efficiency.</p>
          </div>
          <div class="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
            <div class="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-2xl shadow-2xl">
              <img src="https://www.travelandleisure.com/thmb/fRvEyHLh-a92ZNKiIjZ9xf8r1tM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-the-william-vale-BOUTIQUENYC0624-2f7c7e43191544e79d78b1e813e1d2c9.jpg" alt="" class="size-full object-cover object-top" />
            </div>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl"></div>
      </div>
      <div class="relative max-lg:row-start-1">
        <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
          <div class="px-8 pt-8 sm:px-10 sm:pt-10">
            <p class="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center">Vacation Rentals</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Automate guest access completely with 24/7 self-service check-ins. Manage multiple units from one dashboard with instant digital key generation.</p>
          </div>
          <div class="px-5 pt-10">
            <img className='rounded-t-xl w-full h-auto object-cover' src="https://www.vrbo.com/vacation-ideas/wp-content/uploads/2023/06/vacation-rentals.jpg" alt="" class="w-full max-lg:max-w-xs" />
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl"></div>
      </div>
      <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
        <div class="absolute inset-px rounded-lg bg-white"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
          <div class="px-8 pt-8 sm:px-10 sm:pt-10">
            <p class="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center">Serviced Apartments</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Perfect for short and long stays. Enable digital check-in, mobile key access, and automated guest management for a seamless resident experience.</p>
          </div>
          <div class=" px-5 pt-10">
            <img className='rounded-t-xl w-full  h-auto object-cover' src="https://images.squarespace-cdn.com/content/v1/6313226a88427102e3185a6d/1667057085115-WF2K79ONABIUVXY5BJUP/Two+MacDonnell+Road+Apartment+1.jpg" alt="" class="h-[min(152px,40cqw)] object-cover" />
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5"></div>
      </div>
      <div class="relative lg:row-span-2">
        <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
          <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
            <p class="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center">Hotel Chains & Resorts</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Enterprise-grade hospitality automation that scales across all your properties. Centralized management, consistent guest experience, and powerful operational analytics.</p>
          </div>
          <div className="relative min-h-0 w-full grow">
            <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl  shadow-2xl outline outline-white/10">
              <img
                className="h-full w-full object-cover"
                src="https://static.tildacdn.com/tild3961-6430-4334-b438-376231626333/StRegis_Muscat.jpg"
                alt="Hotel exterior pool and bar"
              />
            </div>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
      </div>
    </div>
  </div>
</div>
  )
}
