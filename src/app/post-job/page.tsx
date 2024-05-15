import PostJob from '@/components/PostJob';
import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <div>
<section>
  <div
    className="items-center w-full px-8 md:px-12 py-12 lg:pt-32 mx-auto 2xl:max-w-7xl">
    <div className="border-t border-zinc-800 pt-2">
      <div className="flex flex-col gap-8 lg:gap-0">
        <p className="text-white text-base tracking-wide font-display uppercase">
          Application
        </p>
        <p
          className="text-base uppercase md:text-3xl mt-32 lg:text-6xl font-display tracking-tight text-white">
          MOTION GRAPHCIS
        </p>
        <div className="mt-12 w-full col-span-full">
          <div
            className="flex flex-col divide-y divide-zinc-800 w-full border-t border-zinc-800">
            <div>
              <label htmlFor="full-name" className="sr-only">full name</label>
              <div>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="given-name"
                  placeholder="Your full name"
                  className="bg-transparent placeholder-white block w-full h-10 text-xs border-0 pl-0 pr-10 text-white focus:ring-0 focus:border-b focus:border-white focus:ring-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="address" className="sr-only">full name</label>
              <div>
                <input
                  type="text"
                  name="address"
                  id="address"
                  autoComplete="given-name"
                  placeholder="Your address"
                  className="bg-transparent placeholder-white block w-full h-10 text-xs border-0 pl-0 pr-10 text-white focus:ring-0 focus:border-b focus:border-white focus:ring-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="number" className="sr-only">phone number</label>
              <div>
                <input
                  type="text"
                  name="number"
                  id="number"
                  autoComplete="given-name"
                  placeholder="Your phone number"
                  className="bg-transparent placeholder-white block w-full h-10 text-xs border-0 pl-0 pr-10 text-white focus:ring-0 focus:border-b focus:border-white focus:ring-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="currentjob" className="sr-only"> current job</label>
              <div>
                <input
                  type="text"
                  name="currentjob"
                  id="currentjob"
                  autoComplete="given-name"
                  placeholder="Your current job position"
                  className="bg-transparent placeholder-white block w-full h-10 text-xs border-0 pl-0 pr-10 text-white focus:ring-0 focus:border-b focus:border-white focus:ring-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="linkedin" className="sr-only"> linkedin</label>
              <div>
                <input
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  autoComplete="given-name"
                  placeholder="Your linkedin url"
                  className="bg-transparent placeholder-white block w-full h-10 text-xs border-0 pl-0 pr-10 text-white focus:ring-0 focus:border-b focus:border-white focus:ring-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="portfolio" className="sr-only"> portfolio url</label>
              <div>
                <input
                  type="text"
                  name="portfolio"
                  id="portfolio"
                  autoComplete="given-name"
                  placeholder="Your portfolio url"
                  className="bg-transparent placeholder-white block w-full h-10 text-xs border-0 pl-0 pr-10 text-white focus:ring-0 focus:border-b focus:border-white focus:ring-white"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="about" className="sr-only">additional information</label>
              <div>
                <textarea
                  id="about"
                  name="about"
                  rows={5}
                  placeholder="Additional information"
                  className="bg-transparent placeholder-white block w-full text-xs border-0 pl-0 pr-10 text-white focus:ring-0 focus:border-b focus:border-white focus:ring-white"
                ></textarea>
              </div>
            </div>

            <div className="pt-4">
              <button
                className="flex items-center border border-white text-xs rounded-full w-full h-10 px-4 py-2 uppercase font-display text-white transition-all bg-black hover:bg-white hover:text-black duration-200 focus:ring-2 focus:ring-white focus:ring-offset-black focus:ring-offset-4 justify-between"
                role="search"
                >Search
                <span>&rarr;</span></button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
