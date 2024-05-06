import React from 'react';

import { JobPost } from '@prisma/client';
import { db } from '../../../../prisma/db';
import Markdown from '@/components/ui/Markdown';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
  params: {
    id: string;
  };
};
const getJob = async (id: string) => {
  const res: any = await db.jobPost.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  return res;
};

export default async function page({ params }: Props) {
  const job: JobPost = await getJob(params.id);
  return (
    <div>
      <section>
      <div>
      <div>
        <img className="h-32 w-full object-cover lg:h-48" src={"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src={job.company_logo} alt="" />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gray-900">{job.title} at <Link className='underline' target='_blank' href={job.company_website}>{job.company_name}</Link></h1>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              {/* <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <EnvelopeIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span>Message</span>
              </button> */}
              {/* <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <PhoneIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span>Call</span> 
              </button>*/}
            </div>
          </div>
        </div>
        
        <div className="mt-6  min-w-0 flex-1 sm:block ">
        <dl className='mt-12 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 lg:grid-cols-5'>
              <div className='flex flex-col gap-y-3 border-l pl-6'>
                <dt className='inline-flex items-center gap-2 text-base leading-7 text-slate-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-map-pin'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0'></path>
                    <path d='M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z'></path>
                  </svg>
                  Location
                </dt>
                <dd className='text-base font-semibold tracking-tight text-slate-900'>
                  {job.location}
                </dd>
              </div>
              <div className='flex flex-col gap-y-3 border-l pl-6'>
                <dt className='inline-flex items-center gap-2 text-base leading-7 text-slate-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-activity'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M3 12h4l3 8l4 -16l3 8h4'></path>
                  </svg>
                  Department
                </dt>
                <dd className='text-base font-semibold tracking-tight text-slate-900'>
                 {job.department}
                </dd>
              </div>
              <div className='flex flex-col gap-y-3 border-l pl-6'>
                <dt className='inline-flex items-center gap-2 text-base leading-7 text-slate-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-stack-pop'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M7 9.5l-3 1.5l8 4l8 -4l-3 -1.5'></path>
                    <path d='M4 15l8 4l8 -4'></path>
                    <path d='M12 11v-7'></path>
                    <path d='M9 7l3 -3l3 3'></path>
                  </svg>
                  Level
                </dt>
                <dd className='text-base font-semibold tracking-tight text-slate-900'>
                  Senior
                </dd>
              </div>
              <div className='flex flex-col gap-y-3 border-l pl-6'>
                <dt className='inline-flex items-center gap-2 text-base leading-7 text-slate-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-clock-bolt'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M20.984 12.53a9 9 0 1 0 -7.552 8.355'></path>
                    <path d='M12 7v5l3 3'></path>
                    <path d='M19 16l-2 3h4l-2 3'></path>
                  </svg>
                  Type
                </dt>
                <dd className='text-base font-semibold tracking-tight text-slate-900'>
                  {job.type}
                </dd>
              </div>
              <div className='flex flex-col gap-y-3 border-l pl-6'>
                <dt className='inline-flex items-center gap-2 text-base leading-7 text-slate-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-coin'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
                    <path d='M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1'></path>
                    <path d='M12 7v10'></path>
                  </svg>
                  Salary
                </dt>
                <dd className='text-base font-semibold tracking-tight text-slate-900'>
                  £{job.salary}
                </dd>
              </div>
            </dl>
        </div>
      </div>
    </div>
        <div className='mx-auto max-w-7xl px-16 py-12 md:px-40'>
          <div className=''>
            <main>
              <section>
                <h2 className='text-2xl font-semibold tracking-tight text-slate-900'>
                  Job Description
                </h2>
                <Markdown>{job.description}</Markdown>
              </section>

              <section className='mt-2'>
                <h2 className='text-2xl font-semibold tracking-tight text-slate-900'>
                  Company Description
                </h2>

                <Markdown>
                    
                    {job.company_description}</Markdown>
                <p>
                  If you are a motivated and results-driven professional looking
                  to contribute to a dynamic team, we would love to hear from
                  you! Apply now and embark on an exciting career journey with
                  us.
                </p>
              </section>
            </main>
          </div>
          <div className='py-6'>

            <Button asChild
            >
                <Link
              href={job.apply_link ?? ''}
              target='_blank'
              className='inline-flex w-full items-center rounded-full  px-5 py-3 text-sm leading-4 text-white duration-200 hover:bg-purple-50 hover:text-purple-500 focus:outline-none focus:ring-0 focus:ring-purple-500 focus:ring-offset-2 md:w-auto md:focus:ring-2'
            >
              Apply now
            </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
