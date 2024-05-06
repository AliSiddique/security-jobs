'use client';
import React from 'react';
import { toast } from 'sonner';
import { nanoid } from 'nanoid';
import JobEntries from './Jobs';
import { useEffect } from 'react';
import { UploadButton } from '@/lib/uploadThing';
import { UploadDropzone } from '@uploadthing/react';
import { useState } from 'react';
import { Tag, TagInput } from '@/components/ui/tag-input';
import { zodResolver } from '@hookform/resolvers/zod';
import '@uploadthing/react/styles.css';
import { draftToMarkdown } from "markdown-draft-js";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from './ui/button';
import { loadStripe } from '@stripe/stripe-js';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Switch } from './ui/switch';
import RichTextEditor from './ui/RichTextEditor';
// const formSchema = z.object({
//     companyName: z.string().min(2, {
//       message: "Name must be at least 2 characters.",
//     }),
//     companyEmail: z.string().email(),
//     companyWebsite: z.string().url(),
//     companySize: z.string().optional(),
//     companyType: z.string().optional(),
//     companyIndustry: z.string().optional(),
//     companyLocation: z.string().optional(),
//     companyDescription: z.string().optional(),
//     companyLogo: z.string().optional(),
//     jobTitle: z.string().optional(),
//     jobType: z.string().optional(),
//     jobLocation: z.string().optional(),
//     jobDescription: z.string().optional(),
//     jobResponsibilities: z.string().optional(),
//     jobRequirements: z.string().optional(),
//     jobSalary: z.string().optional(),
//     applyLink: z.string().optional(),

//   })
const formSchema = z.object({
  company_name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  company_email: z.string().email(),
  company_website: z.string().url(),
  company_linkedin: z.string().url(),
  company_industry: z.string(),
  company_description: z.string(),
  jobTitle: z.string(),
  jobType: z.string(),
  jobLocation: z.string(),
  jobDescription: z.string(),
  jobSalary: z.string(),
  color: z.string().optional(),
  remote: z.boolean().default(false),
  company_logo: z.string().optional(),
  applyLink: z.string(),
  tags: z.array(
    z.object({
      id: z.string(),
      text: z.string(),
    })
  ),
});

export default function PostJob() {
  // const [color, setColor] = React.useState('');

  // const [company_name, setCompany_name] = React.useState('Apple');
  // const [company_email, setCompany_email] = React.useState(
  //   'alisiddique10@hotmail.com'
  // );

  // const [tags, setTags] = React.useState<Tag[]>([]);

  // const [value, setValue] = React.useState({
  //   topics: [] as Tag[],
  // });

  // const [company_website, setCompany_website] =
  //   React.useState('https://apple.com');
  // const [company_industry, setCompany_industry] = React.useState('Software');
  // const [company_description, setCompany_description] = React.useState(
  //   'A great company to work for'
  // );
  // const [company_logo, setCompany_logo] = React.useState<any | null>(null);
  // const [company_linkedin, setCompany_linkedin] = React.useState(
  //   'https://linkedin.com/company/apple'
  // );
  // const [job_title, setJob_title] = React.useState('Backend Developer');
  // const [job_type, setJob_type] = React.useState('Mid-level');
  // const [job_location, setJob_location] = React.useState('California, USA');
  // const [job_salary, setJob_salary] = React.useState('120,000');
  // const [job_description, setJob_description] = React.useState(
  //   'Need a backend developer to work on our new project'
  // );
  // const [job_apply_link, setJob_apply_link] = React.useState(
  //   'https://apple.com/jobs/1'
  // );
  // console.log(company_logo);

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const response = await fetch(`/api/post-job`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       company_name,
  //       company_website,
  //       company_industry,
  //       company_description,
  //       company_linkedin,
  //       job_title,
  //       job_type,
  //       job_location,
  //       job_salary,
  //       job_description,
  //       job_apply_link,
  //       color,
  //       company_email,
  //       remote,
  //       tags,
  //     }),
  //   });
  //   // Handle response

  //   const data = await response.json();
  //   const stripePromise = await loadStripe(
  //     process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
  //   );
  //   if (stripePromise)
  //     await stripePromise.redirectToCheckout({ sessionId: data.id });
  //   if (response.ok) {
  //     toast.success('Job posted successfully');
  //   } else {
  //     toast.error('Failed to post job');
  //   }
  // };

  // const form = useForm<z.infer<typeof formSchema>>({
  //     resolver: zodResolver(formSchema),
  //     defaultValues: {
  //         companyName: "",
  //         companyEmail: "",
  //         companyWebsite: "",
  //         companySize: "",
  //         companyType: "",
  //         companyIndustry: "",
  //         companyLocation: "",
  //         companyDescription: "",
  //         companyLogo: "",
  //         jobTitle: "",
  //         jobType: "",
  //         jobLocation: "",
  //         jobDescription: "",
  //         jobResponsibilities: "",
  //         jobRequirements: "",
  //         jobSalary: "",
  //         applyLink: "",
  //     },
  //   })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const {company_name, company_website, company_industry, company_logo, company_description, company_linkedin, jobTitle, jobType, jobLocation, jobSalary, jobDescription, applyLink, color, company_email, remote, tags} = values;
    const response = await fetch(`/api/post-job`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        company_name,
        company_website,
        company_logo,
        company_industry,
        company_description,
        company_linkedin,
        title:jobTitle,
        type:jobType,
        location:jobLocation,
        salary:jobSalary,
        description:jobDescription,
        apply_link:applyLink,
        color,
        company_email,
        remote,
        tags,
      }),
    });
    // Handle response

    // ✅ This will be type-safe and validated.
    const data = await response.json();
    const stripePromise = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
    );
    if (stripePromise)
      await stripePromise.redirectToCheckout({ sessionId: data.id });
    if (response.ok) {
      toast.success('Job posted successfully');
    } else {
      toast.error('Failed to post job');
    }
  }
  return (
    <div>
      <dl className='mx-auto mt-8 w-full max-w-6xl items-start gap-8 text-left text-sm lg:grid-cols-3'>
        <div className=' grid w-full grid-cols-1 gap-12 lg:grid-cols-2'>
          <div>
            <div className='lg:col-span-full'>
              <p className='text-xl font-normal tracking-tighter text-black lg:text-2xl'>
                Find your next candidate
              </p>

              <p className='mt-4 text-base text-slate-500'>
                Unlock a vast array of exceptional talent and propel your
                company's success to new heights of achievement.
              </p>
            </div>
            <div className='mt-12 grid grid-cols-1 gap-4'>
              <div className=' rounded-3xl border p-8 shadow-2xl shadow-slate-500/10 '>
                <div className='gap-3 lg:inline-flex lg:items-center'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-700 via-purple-500 to-purple-300 text-white'>
                    1
                  </div>
                  <p className='mt-4 text-base font-medium text-black lg:mt-0'>
                    Add job poster details
                  </p>
                </div>

                <p className='mt-2 text-sm text-slate-500'>
                  Capture essential details about the job poster, including
                  their name, contact information, and any specific
                  requirements.
                </p>
              </div>
              <div className=' rounded-3xl border p-8 shadow-2xl shadow-slate-500/10 '>
                <div className='gap-3 lg:inline-flex lg:items-center'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-700 via-purple-500 to-purple-300 text-white'>
                    1
                  </div>

                  <p className='mt-4 text-base font-medium text-black lg:mt-0'>
                    Add all details
                  </p>
                </div>
                <p className='mt-2 text-sm text-slate-500'>
                  Include comprehensive information about the job itself, such
                  as the job title, description, requirements or
                  responsibilities.
                </p>
              </div>
              <div className=' rounded-3xl border p-8 shadow-2xl shadow-slate-500/10 '>
                <div className='gap-3 lg:inline-flex lg:items-center'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-700 via-purple-500 to-purple-300 text-white'>
                    3
                  </div>

                  <p className='mt-4 text-base font-medium text-black lg:mt-0'>
                    Add company details
                  </p>
                </div>
                <p className='mt-2 text-sm text-slate-500'>
                  Provide in-depth information about the company posting the
                  job, including the company name, industry, location, website,
                  size, culture.
                </p>
              </div>
              <JobEntries
                company={form.watch('company_name')}
                companyLogo={form.watch('company_logo') ?? 'https://via.placeholder.com/150'}
                position={form.watch('jobTitle')}
                url={form.watch('company_website')}
                type={form.watch('jobType')}
                salary={form.watch('jobSalary')}
                location={form.watch('jobLocation')}
                color={form.watch('color')}
                apply_link={form.watch('applyLink')}
                id={'2'}
                title={form.watch('jobTitle')}
              />
            </div>
          </div>
          <div>
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className=' rounded-3xl border shadow-2xl shadow-slate-500/10 '
                >
                  <div>
                    <div className='grid max-w-2xl grid-cols-1 divide-y sm:grid-cols-6'>
                      <div className='col-span-full grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 p-8 sm:grid-cols-6'>
                        <div className='sm:col-span-full'>
                          <label
                            htmlFor='email'
                            className='block text-sm font-medium leading-6 text-slate-900'
                          >
                            Company email
                          </label>
                          <div className='mt-2'>
                            <FormField
                              control={form.control}
                              name='company_email'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='shadcn'
                                      {...field}
                                      className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </div>

                      <div className='col-span-full grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 p-8 sm:grid-cols-6'>
                        <div className='sm:col-span-full'>
                          <label
                            htmlFor='title'
                            className='block text-sm font-medium leading-6 text-slate-900'
                          >
                            Job title
                          </label>
                          <div className='mt-2'>
                            <FormField
                              control={form.control}
                              name='jobTitle'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='shadcn'
                                      {...field}
                                      className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        <div className='sm:col-span-3'>
                          <label
                            htmlFor='type'
                            className='block text-sm font-medium leading-6 text-slate-900'
                          >
                            Job type
                          </label>
                          <div className='mt-2'>
                            <FormField
                              control={form.control}
                              name='jobType'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='shadcn'
                                      {...field}
                                      className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        <div className='sm:col-span-3'>
                          <label
                            htmlFor='location'
                            className='block text-sm font-medium leading-6 text-slate-900'
                          >
                            Job location
                          </label>
                          <div className='mt-2'>
                            <FormField
                              control={form.control}
                              name='jobLocation'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='shadcn'
                                      {...field}
                                      className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        <div className='sm:col-span-3'>
                          <label
                            htmlFor='salary'
                            className='block text-sm font-medium leading-6 text-slate-900'
                          >
                            Job salary
                          </label>
                          <div className='mt-2'>
                            <FormField
                              control={form.control}
                              name='jobSalary'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='shadcn'
                                      {...field}
                                      className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        <div className='col-span-full'>
     
                          <div className='mt-2'>
                          <FormField
              control={form.control}
              name="jobDescription"
              render={({ field }) => (
                <FormItem>
                  <Label>
                  Job Description
                  </Label>
                  <FormControl>
                    <RichTextEditor
                      onChange={(draft) =>
                        field.onChange(draftToMarkdown(draft))
                      }
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
                          </div>
                        </div>
                      </div>

                      <div className='col-span-full grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 p-8 sm:grid-cols-6'>
                        <div className='sm:col-span-3'>
                          <label
                            htmlFor='companyName'
                            className='block text-sm font-medium leading-6 text-slate-900'
                          >
                            Company name
                          </label>
                          <div className='mt-2'>
                            <FormField
                              control={form.control}
                              name='company_name'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='shadcn'
                                      {...field}
                                      className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        <div className='sm:col-span-3'>
                          <label
                            htmlFor='companyWebsite'
                            className='block text-sm font-medium leading-6 text-slate-900'
                          >
                            Company website
                          </label>
                          <div className='mt-2'>
                            <FormField
                              control={form.control}
                              name='company_website'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='shadcn'
                                      {...field}
                                      className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        <div className='sm:col-span-3'>
                          <label
                            htmlFor='companyLogo'
                            className='block text-sm font-medium leading-6 text-slate-900'
                          >
                            Company industry
                          </label>
                          <div className='mt-2'>
                            <FormField
                              control={form.control}
                              name='company_industry'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='shadcn'
                                      {...field}
                                      className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        <div className='sm:col-span-3'>
                          <label
                            htmlFor='linkedin'
                            className='block text-sm font-medium leading-6 text-slate-900'
                          >
                            Linkedin Profile
                          </label>
                          <div className='mt-2'>
                            <FormField
                              control={form.control}
                              name='company_linkedin'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='shadcn'
                                      {...field}
                                      className='block w-full rounded-lg border-0 bg-white py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        <div className='col-span-full'>
          
                          <div className='mt-2'>
                          <FormField
              control={form.control}
              name="company_description"
              render={({ field }) => (
                <FormItem>
                  <Label>
                  Company Description
                  </Label>
                  <FormControl>
                    <RichTextEditor
                      onChange={(draft) =>
                        field.onChange(draftToMarkdown(draft))
                      }
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
                          </div>
                        </div>
  
                        <div className='col-span-full'>
                          <label
                            htmlFor='applyLink'
                            className='block text-sm font-medium leading-6 text-slate-900'
                          >
                            Apply Link
                          </label>
                          <div className='mt-2'>
                            <FormField
                              control={form.control}
                              name='applyLink'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder='shadcn'
                                      {...field}
                                      className='block w-full rounded-lg border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        <div className='col-span-full'>
                          <label
                            htmlFor='companyDescription'
                            className='block text-sm font-medium leading-6 text-slate-900'
                          >
                            Tags
                          </label>
                          <div className='mt-2'>
                            <FormField
                              control={form.control}
                              name='tags'
                              render={({ field }) => (
                                <FormItem className='flex flex-col items-start'>
                                  <FormControl>
                                    <TagInput
                                      {...field}
                                      placeholder='Enter a topic'
                                      tags={field.value as Tag[] ?? []}
                                      className='sm:min-w-[450px]'
                                      setTags={(newTags) => {
                                        form.setValue('tags', newTags as [Tag, ...Tag[]]);
                                        //   setValue("topics", newTags as [Tag, ...Tag[]]);
                                      }}
                                    />
                                  </FormControl>
                                  <FormDescription>
                                    These are the topics that you&apos;re
                                    interested in.
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className='flex justify-between'>
                            <FormField
                              control={form.control}
                              name='color'
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Color</FormLabel>
                                  <FormControl>
                                    <Input
                                      type='color'
                                      {...field}
                                      className='block w-full rounded-lg border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
           
                            <FormField
                              control={form.control}
                              name='remote'
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Remote</FormLabel>
                                  <FormControl>
                                    <Switch
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                 
            
                          <div className='col-span-full'>
                            <label
                              htmlFor='companyDescription'
                              className='block text-sm font-medium leading-6 text-slate-900'
                            >
                              Company Logo
                            </label>
                            <FormField
                              control={form.control}
                              name='company_logo'
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <UploadButton
                                      endpoint='imageUploader'
                                      className='text-left'
                                      onClientUploadComplete={(res) => {
                                        // Do something with the response
                                        console.log('Files: ', res);
                                        //   setCompany_logo(res[0].url);
                                        form.setValue(
                                          'company_logo',
                                          res[0].url
                                        );
                                      }}
                                      onUploadError={(error: Error) => {
                                        // Do something with the error.
                                        alert(`ERROR! ${error.message}`);
                                      }}
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
  
                        </div>
                      </div>

                      <div className='col-span-full p-8'>
                        <Button
                          type='submit'

                          className='inline-flex z-50 w-full items-center justify-between rounded-full bg-purple-500 px-5 py-3 text-sm leading-4 text-white duration-200 hover:bg-purple-50 hover:text-purple-500 focus:outline-none focus:ring-0 focus:ring-purple-500 focus:ring-offset-2 md:focus:ring-2'
                        >
                          Submit <span>&rarr;</span>
                        </Button>
                        <p className='mt-4 text-center text-xs text-slate-500'>
                          By clicking the button, you agree to our{' '}
                          <a
                            href='#'
                            className='text-purple-500 hover:underline'
                          >
                            Terms of Service
                          </a>{' '}
                          and{' '}
                          <a
                            href='#'
                            className='text-purple-500 hover:underline'
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </dl>
    </div>
  );
}
