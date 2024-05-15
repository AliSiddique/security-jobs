'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
  BriefcaseIcon,
  FlowerIcon,
  HeartIcon,
  LightbulbIcon,
  MountainSnow,
  SearchIcon,
  SettingsIcon,
} from 'lucide-react';
import Link from 'next/link';

export default function Hero({
  title = 'Find your next job.',
  description = 'Search for your next job from our database of over 1000+ jobs.',
}) {
  const [search, setSearch] = useState('');
  const router = useRouter();
  return (
    <>
      {/* Hero */}
      <section>
  <div
    className="items-center w-full px-8 md:px-12 py-12 lg:pt-32 mx-auto 2xl:max-w-7xl">
    <div className="border-t border-zinc-800 pt-2">
      <div className="flex flex-col gap-8 lg:gap-0">
        <p className="text-white text-base tracking-wide font-display uppercase">
          Find the job that suits your lifestyle
        </p>
        <p
          className="text-base uppercase md:text-3xl mt-32 lg:text-6xl font-display tracking-tight text-white">
          Discover a wide range of thrilling job opportunities that align with
          your interests and chosen field of study.
        </p>
        <div className="mt-12 w-full col-span-full">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full py-4 border-b border-zinc-800">
            <div>
              <div className="flex justify-start items-center relative">
                <input
                  className="bg-transparent placeholder-white block w-full h-10 text-xs border-0 pl-0 pr-10 text-white focus:ring-0 focus:border-b focus:border-white focus:ring-white"
                  type="text"
                  placeholder="Job, Category, Keyboard,..."
                />
              </div>
            </div>
            <div>
              <div className="flex rounded-md items-center">
                <select
                  id="location"
                  name="location"
                  className="block w-full h-10 text-xs bg-transparent border-0 pl-0 pr-10 text-white focus:ring-0 focus:border-b focus:border-white focus:ring-white">
                  <option selected>Choose a country</option>
                  <option>United States</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            <div>
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

      {/* End Hero */}
    </>
  );
}
