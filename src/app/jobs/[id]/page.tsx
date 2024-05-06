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
              <h1 className="truncate text-2xl font-bold text-gray-900">{job.title} at {job.company_name}</h1>
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
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900">{job.title}</h1>
        </div>
      </div>
    </div>
        <div className='mx-auto max-w-7xl px-8 py-12 md:px-32'>
            <ul className='divide-y divide-slate-100'>
                <li className='flex flex-col gap-2'>
                    <h3 className='text-lg font-semibold leading-6 text-slate-900 lg:text-xl'>
                    {job.company_website}
                    </h3>
                    <p className='text-sm text-gray-500'>
                    {job.location} | {job.type} | {job.salary}
                    </p>
                </li>
            </ul>
          <div className='prose-a:text-accent-500 prose-li:marker:text-accent-500 prose prose-headings:font-semibold prose-headings:text-slate-900 hover:prose-a:text-slate-900 prose-blockquote:border-l-black prose-blockquote:text-slate-500 prose-code:text-slate-900 prose-pre:border text-slate-500'>
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
            {/* <a
              href={job.apply_link ?? ''}
              className='inline-flex w-full items-center rounded-full  px-5 py-3 text-sm leading-4 text-white duration-200 hover:bg-purple-50 hover:text-purple-500 focus:outline-none focus:ring-0 focus:ring-purple-500 focus:ring-offset-2 md:w-auto md:focus:ring-2'
            >
              Apply now
            </a> */}
            <Button asChild
            >
                <Link
              href={job.apply_link ?? ''}
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
