'use client';
import React from 'react';
import JobEntries from './Jobs';
import { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import { Skeleton } from './ui/skeleton';
import JobLoading from './JobLoading';

type Props = {};

let allPosts = [
  {
    slug: 'frontend-developer',
    data: {
      type: 'Full-time',
      salary: '£60,000',
      location: 'London, UK',
      company: 'Vercel',
      position: 'Frontend Developer',
      companyLogo: {
        url: 'https://hirewise.lexingtonthemes.com/logos/spotify.svg',
      },
    },
  },
  {
    slug: 'backend-developer',
    data: {
      type: 'Full-time',
      salary: '£60,000',
      location: 'London, UK',
      company: 'Vercel',
      position: 'Backend Developer',
      companyLogo: {
        url: 'https://hirewise.lexingtonthemes.com/logos/github.svg',
      },
    },
  },
  {
    slug: 'fullstack-developer',
    data: {
      type: 'Full-time',
      salary: '£60,000',
      location: 'London, UK',
      company: 'Vercel',
      position: 'Fullstack Developer',
      companyLogo: {
        url: 'https://hirewise.lexingtonthemes.com/logos/behance.svg',
      },
    },
  },
  {
    slug: 'frontend-developer',
    data: {
      type: 'Full-time',
      salary: '£60,000',
      location: 'London, UK',
      company: 'Vercel',
      position: 'Frontend Developer',
      companyLogo: {
        url: 'https://hirewise.lexingtonthemes.com/logos/spotify.svg',
      },
    },
  },
  {
    slug: 'backend-developer',
    data: {
      type: 'Full-time',
      salary: '£60,000',
      location: 'London, UK',
      company: 'Vercel',
      position: 'Backend Developer',
      companyLogo: {
        url: 'https://hirewise.lexingtonthemes.com/logos/github.svg',
      },
    },
  },
  {
    slug: 'fullstack-developer',
    data: {
      type: 'Full-time',
      salary: '£60,000',
      location: 'London, UK',
      company: 'Vercel',
      position: 'Fullstack Developer',
      companyLogo: {
        url: 'https://hirewise.lexingtonthemes.com/logos/behance.svg',
      },
    },
  },
];

export default function JobsList({}: Props) {
  const { ref, inView } = useInView();

  const {
    isLoading,
    isError,
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: async ({ pageParam = '' }) => {
      const res = await axios.get('/api/get-jobs?cursor=' + pageParam);
      console.log(res.data);
      return res.data;
    },

    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading) return <JobLoading />;
  if (isError) return <div>Error! {JSON.stringify(error)}</div>;

  return (
    <section>
      <div className='mx-auto max-w-6xl px-8 py-12 md:px-32'>
        <div className='gird-cols-1 grid gap-2 border-b border-gray-200 pb-5 lg:grid-cols-2'>
          <h3 className='text-lg font-semibold leading-6 text-slate-900 lg:text-xl'>
            Featured Jobs
          </h3>
          <p className='text-sm text-gray-500'>
            Browse through our curated list of featured jobs.
          </p>
        </div>

        <ul className='divide-y divide-slate-100'>
          {data &&
            data.pages.map((page) => {
              return (
                <React.Fragment key={page.nextId ?? 'lastPage'}>
                  {page.posts.map((post: any) => (
                    <JobEntries
                      url={'/companies/' + post.slug}
                      type={post.type}
                      salary={post.salary}
                      location={post.location}
                      company={post.company_name}
                      position={post.position}
                      companyLogo={post.company_logo}
                      color={post.color}
                      tags={post.tags}
                      apply_link={post.apply_link}
                      id={post.id}
                      title={post.title}
                    />
                  ))}
                </React.Fragment>
              );
            })}
        </ul>
      </div>
      {isFetchingNextPage ? <JobLoading /> : null}
      <span style={{ visibility: 'hidden' }} ref={ref}>
        intersection observer marker
      </span>
    </section>
  );
}
