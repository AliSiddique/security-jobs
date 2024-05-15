import React from 'react'

type Props = {}

export default function CTA({}: Props) {
  return (
    <div>
        <section>
  <div
    className="items-center w-full px-8 md:px-12 py-12 lg:pt-32 mx-auto 2xl:max-w-7xl">
    <div className="border-t border-zinc-800 pt-2">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0">
        <p className="text-white tracking-wide font-display">
          Find the job that suits your lifestyle
        </p>
        <div className="lg:col-span-2">
          <p
            className="text-base uppercase md:text-3xl lg:text-6xl font-display tracking-tight text-white">
            posts your jobs today and find your next freelancer
          </p>
          <p className="mt-32">
            <a
              href="/forms/contact"
              className="text-white text-xs tracking-wide hover:text-zinc-500 uppercase font-display"
              >Signup today</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}