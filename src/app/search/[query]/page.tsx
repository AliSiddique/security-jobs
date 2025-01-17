import { Suspense } from 'react';

import { GetJobs } from '../actions';
import { Skeleton } from '@/components/ui/skeleton';
import InfiniteCardList from '@/components/ui/infinite-card-list';
import Hero from '@/components/ui/Hero';

export default async function Page({
  params,
}: {
  params?: {
    query?: string;
  };
}) {
  const search = decodeURIComponent(params?.query as string) || '';
  const limit = 20;

  const { data: initialData } = await GetJobs({ search, limit });

  return (
    <>
      <Hero
        title={`Search Jobs for ${decodeURIComponent(params?.query as string)}`}
        description={`Search for your next for ${decodeURIComponent(params?.query as string)} job from our database of over 1000+ jobs`}
      />
      <div className='mb-3 flex items-center justify-between'></div>
      <Suspense key={search} fallback={<Skeleton />}>
        <InfiniteCardList
          search={search}
          initialData={initialData}
          limit={limit}
        />
      </Suspense>
    </>
  );
}
