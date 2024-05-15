import FeaturedJobs from '@/components/FeaturedJobs';
import Jobs from '@/components/Jobs';
import JobsList from '@/components/JobsList';
import CTA from '@/components/ui/CTA';
import Hero from '@/components/ui/Hero';
import React from 'react';

type Props = {};
let jobs = [
  {
    company: 'Google',
    companyLogo: 'https://via.placeholder.com/150',
    position: 'Software Engineer',
    url: 'https://google.com',
    type: 'Full-time',
    salary: '$120,000',
    location: 'Remote',
    color: 'bg-blue-500',
    tags: ['Remote', 'Full-time'],
    apply_link: 'https://google.com',
    id: '1',
    title: 'Software Engineer',
  },
  {
    company: 'Facebook',
    companyLogo: 'https://via.placeholder.com/150',
    position: 'Software Engineer',
    url: 'https://facebook.com',
    type: 'Full-time',
    salary: '$120,000',
    location: 'Remote',
    color: 'bg-blue-500',
    tags: ['Remote', 'Full-time'],
    apply_link: 'https://facebook.com',
    id: '2',
    title: 'Software Engineer',
  },
  {
    company: 'Amazon',
    companyLogo: 'https://via.placeholder.com/150',
    position: 'Software Engineer',
    url: 'https://amazon.com',
    type: 'Full-time',
    salary: '$120,000',
    location: 'Remote',
    color: 'bg-blue-500',
    tags: ['Remote', 'Full-time'],
    apply_link: 'https://amazon.com',
    id: '3',
    title: 'Software Engineer',
  },
  {
    company: 'Microsoft',
    companyLogo: 'https://via.placeholder.com/150',
    position: 'Software Engineer',
    url: 'https://microsoft.com',
    type: 'Full-time',
    salary: '$120,000',
    location: 'Remote',
    color: 'bg-blue-500',
    tags: ['Remote', 'Full-time'],
    apply_link: 'https://microsoft.com',
    id: '4',
    title: 'Software Engineer',
  },
  {
    company: 'Apple',
    companyLogo: 'https://via.placeholder.com/150',
    position: 'Software Engineer',
    url: 'https://apple.com',
    type: 'Full-time',
    salary: '$120,000',
    location: 'Remote',
    color: 'bg-blue-500',
    tags: ['Remote', 'Full-time'],
    apply_link: 'https://apple.com',
    id: '5',
    title: 'Software Engineer',
  },
];
export default function page({}: Props) {
  return (
    <div className='0'>
      <Hero />
      <CTA />
      <FeaturedJobs />
      {/* <JobsList /> */}
    </div>
  );
}
