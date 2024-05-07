import React from 'react';

import { JobPost } from '@prisma/client';
import { db } from '../../../../prisma/db';
import Markdown from '@/components/ui/Markdown';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Building, DollarSign, MapIcon, StepForward, Type, TypeIcon } from 'lucide-react';

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
           
          </div>
        </div>
        
        <div className="mt-6  min-w-0 flex-1 sm:block ">
        <dl className='mt-12 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 lg:grid-cols-4'>
              <div className='flex flex-col gap-y-3 pl-6'>
                <dt className='inline-flex items-center gap-2 text-base leading-7 text-slate-500'>
                <MapIcon className='h-6 w-6 text-slate-500' />
                  Location
                </dt>
                <dd className='text-base font-semibold tracking-tight text-slate-900'>
                  {job.location}
                </dd>
              </div>
              <div className='flex flex-col gap-y-3  pl-6'>
                <dt className='inline-flex items-center gap-2 text-base leading-7 text-slate-500'>
                  <Building className='h-6 w-6 text-slate-500' />
                  Department
                </dt>
                <dd className='text-base font-semibold tracking-tight text-slate-900'>
                 {job.department}
                </dd>
              </div>
              <div className='flex flex-col gap-y-3  pl-6'>
                <dt className='inline-flex items-center gap-2 text-base leading-7 text-slate-500'>
                 <TypeIcon className='h-6 w-6 text-slate-500' />
                  Type
                </dt>
                <dd className='text-base font-semibold tracking-tight text-slate-900'>
                  {job.type}
                </dd>
              </div>
              <div className='flex flex-col gap-y-3  pl-6'>
                <dt className='inline-flex items-center gap-2 text-base leading-7 text-slate-500'>
                 <DollarSign className='h-6 w-6 text-slate-500' />
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
                  Apply now to join the team at{' '}
                  <Link className='underline' href={job.company_website} target='_blank'>
                    {job.company_name}
                  </Link>
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
